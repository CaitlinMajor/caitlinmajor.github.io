function page14(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page14_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "14", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page14_text1_mc.alpha = 0;
	page.page14_text2_mc.alpha = 0;
	let text1fade = new Fade(page.page14_text1_mc);
	let text2fade = new Fade(page.page14_text2_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
						
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);
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
		createjs.Sound.stop();
		audio = page14Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playYeti, null, true);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	function playYeti() {
		createjs.Sound.stop();
		audio = page14YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page14_yeti_mc.gotoAndPlay("startAnim");
			page.page14_yetiOL_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page14_yeti_mc.addEventListener("click", playYetiUp);
			page.page14_yetiOL_mc.addEventListener("click", playYetiUp);
			page.page14_grumble_mc.addEventListener("click", playGrumble);
			page.page14_text1_mc.addEventListener("click", playLine1);
			page.page14_text2_mc.addEventListener("click", playYeti);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let yetiDown = new Animations(page.page14_yeti_mc, "endLoop", "startLoop");
	let yetiUp = new Animations(page.page14_yeti_mc, "endUpLoop", "startUpLoop", "endUpAnim", "startUpAnim");
	let yetiOLDown = new Animations(page.page14_yetiOL_mc, "endLoop", "startLoop");
	let yetiOLUp = new Animations(page.page14_yetiOL_mc, "endUpLoop", "startUpLoop", "endUpAnim", "startUpAnim");
	let grumble = new Animations(page.page14_grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		yetiDown.Loop();
		yetiUp.Loop();
		yetiOLDown.Loop();
		yetiOLUp.Loop();
		grumble.Loop();
	}

	//page interactions //

	function playGrumble(){
		grumble.Play();
		if(audioComplete){
			grumbleAffirmative06.play();
		}
	}

	function playYetiUp(){
		yetiUp.Play();
		yetiOLUp.Play();
		if(audioComplete){
			yetiGrr.play();
		}
	}

	//Navigation//
	function gotoNextPage(){
		console.log("go to next page");
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		console.log("go to previous page");
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);

	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.page14_yeti_mc.removeEventListener("click", playYetiUp);
		page.page14_yetiOL_mc.removeEventListener("click", playYetiUp);
		page.page14_grumble_mc.removeEventListener("click", playGrumble);
		page.page14_text1_mc.removeEventListener("click", playLine1);
		page.page14_text2_mc.removeEventListener("click", playYeti);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					setTimeout(page15, 200);
				}
				else if (previous){
					setTimeout(page13, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}