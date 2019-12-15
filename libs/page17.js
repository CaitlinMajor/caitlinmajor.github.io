function page17(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page17_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "17", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page17_text1_mc.alpha = 0;
	page.page17_text2_mc.alpha = 0;
	page.page17_text3_mc.alpha = 0;
	let text1fade = new Fade(page.page17_text1_mc);
	let text2fade = new Fade(page.page17_text2_mc);
	let text3fade = new Fade(page.page17_text3_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page17_humble_mc.addEventListener("click", playHumble);
	page.page17_stumble_mc.addEventListener("click", playStumble);

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
		audio = page17Line1;
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
		audio = page17YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page17_yetiGrumble_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playLine3, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playLine3() {
		createjs.Sound.stop();
		audio = page17Line2;
		audio.play();
	
		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page17_text1_mc.addEventListener("click", playLine1);
			page.page17_text2_mc.addEventListener("click", playYeti);
			page.page17_text3_mc.addEventListener("click", playLine3);
			page.page17_yetiGrumble_mc.addEventListener("click", playAnimation);
		}

		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let humble = new Animations(page.page17_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page17_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let tickle1 = new Animations(page.page17_yetiGrumble_mc, "endLoop", "startLoop");
	let tickle2 = new Animations(page.page17_yetiGrumble_mc, "endLoop2", "startLoop2", "endAnim2", "startAnim2");

	function loopAnimations(){
		humble.Loop();
		stumble.Loop();
		tickle1.Loop();
		tickle2.Loop();
	}

	//page interactions //

	function playHumble(){
		humble.Play();
		if(audioComplete){
			humbleHappy02.play();
		}
	}

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			stumbleHappy01.play();
		}
	}

	function playAnimation(){
		tickle2.Play();
		if(audioComplete){
			grumbleHappy03.play();
		}

	}

	//Navigation//
	function gotoNextPage(){
		console.log("go to next page");
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removeNextButton();
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
		page.page17_text1_mc.removeEventListener("click", playLine1);
		page.page17_text2_mc.removeEventListener("click", playYeti);
		page.page17_text3_mc.removeEventListener("click", playLine3);
		page.page17_yetiGrumble_mc.removeEventListener("click", playYeti);
		page.page17_humble_mc.removeEventListener("click", playHumble);
		page.page17_stumble_mc.removeEventListener("click", playStumble);
		page.page17_yetiGrumble_mc.removeEventListener("click", playAnimation);
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
					setTimeout(page18, 200);
				}
				else if (previous){
					setTimeout(page16, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}