var previousButtonAdded = false;

function page12(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page12_mc();
	nextPage = new lib.page13_preview();
	previousPage = new lib.page11_preview();
	pageIndex = 12;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "12");

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
		sounds.getInstance("page12Line1").play();

		if(!audioComplete){
			sounds.getInstance("page12Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page12Line2").play();

		if(!audioComplete){
			sounds.getInstance("page12Line2").on("complete", done, null, true);
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
	let curtain = new Animations(page.curtain1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let toy = new Animations(page.toy, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let hideout = new Animations(page.hideout, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let peeky = new Animations(page.peeky, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let hammock = new Animations(page.hammock, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let curtain2 = new Animations(page.curtain2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		curtain.Loop();
		toy.Loop();
		hideout.Loop();
		peeky.Loop();
		hammock.Loop();
		curtain2.Loop();
	}

	page.curtain1.addEventListener("click", playCurtain);
	page.hideout.addEventListener("click", playHideout);
	page.peeky.addEventListener("click", playPeeky);
	page.hammock.addEventListener("click", playHammock);
	page.curtain2.addEventListener("click", playCurtain2);

	//* Page Interactions *//
	function playCurtain(){curtain.Play(); toy.Play();}
	function playHideout(){hideout.Play();}
	function playPeeky(){peeky.Play();}
	function playHammock(){hammock.Play();}
	function playCurtain2(){curtain2.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.curtain1.removeEventListener("click", playCurtain);
		page.hideout.removeEventListener("click", playHideout);
		page.peeky.removeEventListener("click", playPeeky);
		page.hammock.removeEventListener("click", playHammock);
		page.curtain2.removeEventListener("click", playCurtain2);
		stage.removeChild(page);
	}
}