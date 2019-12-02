function page11(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page11_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page11_text1_mc.alpha = 0;
	page.page11_text2_mc.alpha = 0;
	let text1fade = new Fade(page.page11_text1_mc);
	let text2fade = new Fade(page.page11_text2_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page11_humble_mc.addEventListener("click", playHumble);
	page.page11_yeti_mc.addEventListener("click", playYeti);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			nextButton.addEventListener("click", gotoNextPage);
			previousButton.addEventListener("click", gotoPreviousPage);
			playYetiAudio();
		}

	}

	//* Handle The Audio *//
	function playYetiAudio() {
		createjs.Sound.stop();
		audio = page11YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page11_yeti_mc.gotoAndPlay("startAnim");
			page.page11_yetiOL_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playLine2, null, true);
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
		audio = page11Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page11_text1_mc.addEventListener("click", playYetiAudio);
			page.page11_text2_mc.addEventListener("click", playLine2);
			page.page11_yeti_mc.addEventListener("click", playYeti);
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
	let humble = new Animations(page.page11_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.page11_yeti_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let yetiOL = new Animations(page.page11_yetiOL_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		humble.Loop();
		yeti.Loop();
		yetiOL.Loop();
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
		yetiOL.Play();
		if(audioComplete){
			yetiArgh.play();
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
		page.page11_humble_mc.removeEventListener("click", playHumble);
		page.page11_yeti_mc.removeEventListener("click", playYeti);
		page.page11_text1_mc.removeEventListener("click", playYetiAudio);
		page.page11_text2_mc.removeEventListener("click", playLine2);
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
					page12();
				}
				else if (previous){
					page10();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}