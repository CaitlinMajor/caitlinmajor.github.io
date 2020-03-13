function page19(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page19_mc();
	end = new lib.end_mc();
	pageIndex = 19;

	//define page variables //
	previous = false;
	next = false;
	audioComplete = false;

	MEDIABOX.setSaveDataEntry("page", "0");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.text1.alpha = 0;
	let text1fade = new Fade(page.text1);
	let pageFader = new Fade(page.fade_mc);
	let theEndFade = new Fade(end);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);

			if(!previousButtonAdded){
				addPreviousButton();
				previousButtonAdded = true;
			}
			previousButton.addEventListener("click", gotoPreviousPage);

			playLine1();
		}

	}

	//* Handle The Audio *//
	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page19Line1").play();

		if(!audioComplete){
			sounds.getInstance("page19Line1").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			playTheEnd();
		}
	}

	function playTheEnd(){
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
			page.text1.addEventListener("click", playLine1);
			page.ugly.addEventListener("click", playUgly);
		}

		function fadeUpText() {
			theEndFade.FadeUp();
			if (theEndFade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		ugly.Loop();
	}

	//page interactions //

	function playUgly(){
		ugly.Play();
	}

	//Navigation//
	function gotoPreviousPage(){
		previous = true;
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoFirstPage(){
		next = true;
		removePreviousButton();
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	killPage = function(){
		removePreviousButton();
		createjs.Ticker.addEventListener("tick", fadeDownEnd);
		createjs.Sound.stop();
		createjs.Ticker.off("tick", looper);
		end.removeEventListener("click", gotoFirstPage);
		page.text1.removeEventListener("click", playLine1);
		page.ugly.removeEventListener("click", playUgly);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDownEnd() {
		theEndFade.FadeDown();
		if (pageFader.faded){
			stage.removeChild(end);
		}
	}

	function fadeDown() {
		theEndFade.FadeDown();
		pageFader.FadeUp();
		if (pageFader.faded){
			stage.removeChild(end);
			killPage();
			if (next) {
					setTimeout(page0, 200);
				}
				else if (previous){
					setTimeout(page18, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}
	}
}