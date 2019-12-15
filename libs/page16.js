function page16(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page16_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	left = false;
	right = false;
	animPlaying = false;

	createCookie("page", "16", 1);
	
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
			page.page16_animation_mc.addEventListener("click", playAnimation);
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

	function loopAnimations(){



		if (page.page16_animation_mc.currentLabel == "endLoop1"){
			page.page16_animation_mc.gotoAndPlay("startLoop1");
		}

		if(page.page16_animation_mc.currentLabel == "endLoop2"){
			page.page16_animation_mc.gotoAndPlay("startLoop2");
		}

		if (page.page16_animation_mc.currentLabel == "endAnim2"){
			page.page16_animation_mc.gotoAndPlay("startLoop1");
			right = true;
			left = false;
			animPlaying = false;
		}

		if (page.page16_animation_mc.currentLabel == "endAnim1"){
			right = false;
			left = true;
			animPlaying = false;
		}

		if (page.page16_animation_mc.currentLabel == "endAnim"){
			right = true;
			left = false;
			animPlaying = false;
		}

	}

	//page interactions //

	function playAnimation(){

		if(right && !animPlaying){
			page.page16_animation_mc.gotoAndPlay("startAnim1");
			animPlaying = true;
			grumbleAffirmative06.play();
		}

		else if(left && !animPlaying){
			page.page16_animation_mc.gotoAndPlay("startAnim2");
			animPlaying = true;
			grumbleAffirmative06.play();
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
		page.page16_text1_mc.removeEventListener("click", playLine1);
		page.page16_animation_mc.removeEventListener("click", playAnimation);
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
					setTimeout(page17, 200);
				}
				else if (previous){
					setTimeout(page15, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}