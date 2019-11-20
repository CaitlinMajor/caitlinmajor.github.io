function page16(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page16_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page16_text1_mc.alpha = 0;
	let text1fade = new Fade(page.page16_text1_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			nextButton.addEventListener("click", gotoNextPage);
			previousButton.addEventListener("click", gotoPreviousPage);
			playLine1();
		}
	}

	//* Handle The Audio *//
	function playLine1() {
		createjs.Sound.stop();
		audio = page16Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			page.page16_animation_mc.gotoAndPlay("startAnim");
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page16_text1_mc.addEventListener("click", playLine1);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let animation1 = new Animations(page.page16_animation_mc, "endLoop", "startLoop");
	let animation2 = new Animations(page.page16_animation_mc, "endLoop2", "startLoop2");

	function loopAnimations(){
		animation1.Loop();
		animation2.Loop();
	}


	//page interactions //

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
		page.page16_text1_mc.removeEventListener("click", playLine1);
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					page17();
				}
				else if (previous){
					page15();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}