function page10(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page10_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "10", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page10_text1_mc.alpha = 0;
	page.page10_text2_mc.alpha = 0;
	page.page10_text3_mc.alpha = 0;
	let text1fade = new Fade(page.page10_text1_mc);
	let text2fade = new Fade(page.page10_text2_mc);
	let text3fade = new Fade(page.page10_text3_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", stopYeti);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function stopYeti(){
		page.page10_yeti_mc.gotoAndStop(0);
	}

	page.page10_humble_mc.addEventListener("click", playHumble);

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
		audio = page10Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.removeEventListener("tick", stopYeti);
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playYetiAudio, null, true);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playYetiAudio() {
		createjs.Sound.stop();
		audio = page10YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page10_yeti_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playLine2, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playLine2() {
		createjs.Sound.stop();
		audio = page10Line2;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page10_text1_mc.addEventListener("click", playLine1);
			page.page10_text2_mc.addEventListener("click", playYetiAudio);
			page.page10_text3_mc.addEventListener("click", playLine2);
			page.page10_yeti_mc.addEventListener("click", playYeti);
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

	let yeti = new Animations(page.page10_yeti_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let humble = new Animations(page.page10_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		yeti.Loop();
		humble.Loop();
	}

	//page interactions //
	function playHumble(){
		humble.Play();
		if(audioComplete){
			humbleScared02.play();
		}
	}

	function playYeti(){
		yeti.Play();
		if(audioComplete){
			yetiHmm.play();
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
		createjs.Ticker.removeEventListener("tick", stopYeti);
		page.page10_humble_mc.removeEventListener("click", playHumble);
		page.page10_text1_mc.removeEventListener("click", playLine1);
		page.page10_text2_mc.removeEventListener("click", playYetiAudio);
		page.page10_yeti_mc.removeEventListener("click", playYeti);
		page.page10_text3_mc.removeEventListener("click", playLine2);
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
					setTimeout(page11, 200);
				}
				else if (previous){
					setTimeout(page9, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}