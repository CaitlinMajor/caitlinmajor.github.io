var previousButtonAdded = false;

function page1(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();
	nextPage = new lib.page2_preview();
	previousPage = new lib.page0_preview();
	pageIndex = 1;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "1");

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
		sounds.getInstance("page1Line1").play();

		if(!audioComplete){
			sounds.getInstance("page1Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page1Line2").play();

		if(!audioComplete){
			sounds.getInstance("page1Line2").on("complete", done, null, true);
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
	let frame = new Animations(page.frame, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let fishbowl = new Animations(page.fishbowl, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cushions = new Animations(page.cushions, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let couch = new Animations(page.couch, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let plant = new Animations(page.plant, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		frame.Loop();
		fishbowl.Loop();
		cushions.Loop();
		couch.Loop();
		plant.Loop();
	}

	page.frame.addEventListener("click", playFrame);
	page.fishbowl.addEventListener("click", playFishbowl);
	page.cushions.addEventListener("click", playCushions);
	page.couch.addEventListener("click", playCouch);
	page.plant.addEventListener("click", playPlant);

	//* Page Interactions *//

	function playFrame(){frame.Play();}
	function playFishbowl(){fishbowl.Play();}
	function playCushions(){cushions.Play();}
	function playCouch(){couch.Play();}
	function playPlant(){plant.Play();}

	//* End Of Page*//
	
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.frame.removeEventListener("click", playFrame);
		page.fishbowl.removeEventListener("click", playFishbowl);
		page.cushions.removeEventListener("click", playCushions);
		page.couch.removeEventListener("click", playCouch);
		page.plant.removeEventListener("click", playPlant);
		stage.removeChild(page);
	}

}