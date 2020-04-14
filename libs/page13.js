var previousButtonAdded = false;

function page13(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page13_mc();
	previousPage = new lib.page12_preview();
	end = new lib.end_mc();
	pageIndex = 13;

	//define page variables //
	audioComplete = false;
	peekBoo = false;
	meekBoo = false;

	MEDIABOX.setSaveDataEntry("page", "0");

	//* Add the page *//
	stage.addChildAt(page, 1);
	page.fade_mc.alpha = 0;

	//add the previous page preview
	previousPageX = (0-canvas.width);
	page.addChild(previousPage);
	previousPage.x = previousPageX;

	let pageFader = new Fade(page.fade_mc);
	let theEndFade = new Fade(end);

	playTheEnd();

	//* Handle The Audio *//
	function playTheEnd(){
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("theEnd").play();

		if (!audioComplete){
			stage.addChild(end);
			end.alpha = 0;
			end.x = canvas.width * (1 + MEDIABOX.visibleDocumentSize.width) * 0.5;
			end.y = canvas.height * (1 + MEDIABOX.visibleDocumentSize.height) * 0.5;
			sounds.getInstance("theEnd").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}

		function done(){
			audioComplete = true;
			end.addEventListener("click", gotoFirstPage);
			page.skateboard1.gotoAndPlay("startLoop");
		}

		function fadeUpText() {
			theEndFade.FadeUp();
			if (theEndFade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let skateboard1Loop = new Animations(page.skateboard1, "end", "start");
	let skateboard2Loop = new Animations(page.skateboard2, "end", "start");
	let peek1 = new Animations(page.skateboard1.peek, "endLoop1", "startLoop1");
	let peek2 = new Animations(page.skateboard1.peek, "endLoop2", "startLoop2");
	let meek1 = new Animations(page.skateboard2.meek, "endLoop1", "startLoop1");
	let meek2 = new Animations(page.skateboard2.meek, "endLoop2", "startLoop2");

	function loopAnimations(){
		skateboard1Loop.Loop();
		skateboard2Loop.Loop();
		peek1.Loop();
		peek2.Loop();
		meek1.Loop();
		meek2.Loop();

		if (page.skateboard1.currentLabel == "endLoop"){
			page.skateboard2.gotoAndPlay("startLoop");
			peekBoo = false;
		}

		if (page.skateboard2.currentLabel == "endLoop"){
			page.skateboard1.gotoAndPlay("startLoop");
			meekBoo = false;
		}

	}

	page.skateboard1.peek.addEventListener("click", playPeek);
	page.skateboard2.addEventListener("click", playMeek);

	//* Page Interactions *//
	function playPeek(){
		if(!peekBoo){
			page.skateboard1.peek.gotoAndPlay("startClickAnim1");
			peekBoo = true;
		}
		else if (peekBoo){
			page.skateboard1.peek.gotoAndPlay("startClickAnim2");
			peekBoo = false;
		}
	}

	function playMeek(){
		if(!meekBoo){
			page.skateboard2.meek.gotoAndPlay("startClickAnim1");
			meekBoo = true;
		}
		else if (meekBoo){
			page.skateboard2.meek.gotoAndPlay("startClickAnim2");
			meekBoo = false;
		}

	}

	//* End Of Page*//
	function gotoFirstPage(){
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.skateboard1.removeEventListener("click", playPeek);
		page.skateboard2.removeEventListener("click", playMeek);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		theEndFade.FadeDown();
		if (pageFader.faded){
			firstTime = false;
			killPage();
			setTimeout(page0, 200);
			stage.removeChild(end);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}