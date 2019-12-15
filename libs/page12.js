function page12(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page12_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "12", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page12_text1_mc.alpha = 0;
	page.page12_text2_mc.alpha = 0;
	page.page12_text3_mc.alpha = 0;
	page.page12_text4_mc.alpha = 0;
	let text1fade = new Fade(page.page12_text1_mc);
	let text2fade = new Fade(page.page12_text2_mc);
	let text3fade = new Fade(page.page12_text3_mc);
	let text4fade = new Fade(page.page12_text4_mc);
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

			playHumbleAudio();
		}

	}

	//* Handle The Audio *//
	function playHumbleAudio() {
		createjs.Sound.stop();
		audio = page12Humble;
		audio.play();

		if (!audioComplete){
			page.page12_humble_mc.gotoAndPlay("startAnim");
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
		audio = page12Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playYetiAudio, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playYetiAudio() {
		createjs.Sound.stop();
		audio = page12YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page12_yeti_mc.gotoAndPlay("startAnim");
			page.page12_yetiOL_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playLine4, null, true);
		}

		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playLine4() {
		createjs.Sound.stop();
		audio = page12Line2;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page12_yeti_mc.addEventListener("click", playYeti);
			page.page12_humble_mc.addEventListener("click", playHumble);
			page.page12_text1_mc.addEventListener("click", playHumbleAudio);
			page.page12_text2_mc.addEventListener("click", playLine2);
			page.page12_text3_mc.addEventListener("click", playYetiAudio);
			page.page12_text4_mc.addEventListener("click", playLine4);
		}

		function fadeUpText() {
			text4fade.FadeUp();
			if (text4fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let humble = new Animations(page.page12_humble_mc, "endLoop", "startLoop");
	let humble2 = new Animations(page.page12_humble_mc, "endLoop2", "startLoop2", "endAnim2", "startAnim2");
	let yeti = new Animations(page.page12_yeti_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let yetiOL = new Animations(page.page12_yetiOL_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		humble.Loop();
		humble2.Loop();
		yeti.Loop();
		yetiOL.Loop();
	}

	//page interactions //

	function playHumble(){
		humble2.Play();
		if(audioComplete){
			humbleScared01.play();
		}
	}

	function playYeti(){
		yeti.Play();
		yetiOL.Play();
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
		page.page12_text1_mc.removeEventListener("click", playHumbleAudio);
		page.page12_text2_mc.removeEventListener("click", playLine2);
		page.page12_text3_mc.removeEventListener("click", playYeti);
		page.page12_text4_mc.removeEventListener("click", playLine4);
		page.page12_humble_mc.removeEventListener("click", playHumble);
		page.page12_yeti_mc.removeEventListener("click", playYeti);
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
					setTimeout(page13, 200);
				}
				else if (previous){
					setTimeout(page11, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}
	}
}