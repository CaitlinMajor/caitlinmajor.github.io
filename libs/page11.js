var previousButtonAdded = false;

function page11(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page11_mc();
	nextPage = new lib.page12_preview();
	previousPage = new lib.page10_preview();
	pageIndex = 11;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "11");

	//* Add the page *//
	stage.addChildAt(page, 1);

	//add the next page preview
	nextPageX = canvas.width;
	page.addChild(nextPage);
	nextPage.x = nextPageX;

	//add the previous page preview
	previousPageX = (0-canvas.width);
	page.addChild(previousPage);
	previousPage.x = previousPageX;

	page.text1.alpha = 0;
	page.text2.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);
	
	playLine1();

	//* Handle The Audio *//
	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page11Line1").play();

		if(!audioComplete){
			sounds.getInstance("page11Line1").on("complete", playLine2, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}		
	}

	function playLine2() {
		createjs.Sound.stop();
		sounds.getInstance("page11Line2").play();

		if(!audioComplete){
			sounds.getInstance("page11Line2").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let peekyOL = new Animations(page.peekyOL, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let peekyUL = new Animations(page.peekyUL, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let hose = new Animations(page.hose, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let boots = new Animations(page.boots, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let fertilizer = new Animations(page.fertilizer, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		peekyOL.Loop();
		peekyUL.Loop();
		hose.Loop();
		boots.Loop();
		fertilizer.Loop();
	}

	page.peekyOL.addEventListener("click", playPeeky);
	page.hose.addEventListener("click", playHose);
	page.boots.addEventListener("click", playBoots);
	page.fertilizer.addEventListener("click", playFertilizer);

	//* Page Interactions *//	
	function playPeeky(){peekyOL.Play(); peekyUL.Play();}
	function playHose(){hose.Play();}
	function playBoots(){boots.Play();}
	function playFertilizer(){fertilizer.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.peekyOL.removeEventListener("click", playPeeky);
		page.hose.removeEventListener("click", playHose);
		page.boots.removeEventListener("click", playBoots);
		page.fertilizer.removeEventListener("click", playFertilizer);
		stage.removeChild(page);
	}

}