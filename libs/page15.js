function page15(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page15_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page15_text1_mc.alpha = 0;
	page.page15_text2_mc.alpha = 0;
	page.page15_text3_mc.alpha = 0;
	page.page15_text4_mc.alpha = 0;
	let text1fade = new Fade(page.page15_text1_mc);
	let text2fade = new Fade(page.page15_text2_mc);
	let text3fade = new Fade(page.page15_text3_mc);
	let text4fade = new Fade(page.page15_text4_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page15_humble_mc.addEventListener("click", playHumble);
	page.page15_stumble_mc.addEventListener("click", playStumble);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			previousButton.addEventListener("click", gotoPreviousPage);
			nextButton.addEventListener("click", gotoNextPage);
			playGrumble();
		}
	}

	//* Handle The Audio *//
	function playGrumble() {
		createjs.Sound.stop();
		audio = page15Grumble;
		page.page15_grumble_mc.gotoAndPlay("startAnim");
		audio.play();

		if (!audioComplete){
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
		audio = page15Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playYeti, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playYeti() {
		createjs.Sound.stop();
		audio = page15YetiLine1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			page.page15_yeti_mc.gotoAndPlay("startAnim");
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
		audio = page15Line2;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page15_text1_mc.addEventListener("click", playGrumble);
			page.page15_text2_mc.addEventListener("click", playLine2);
			page.page15_text3_mc.addEventListener("click", playYeti);
			page.page15_text4_mc.addEventListener("click", playLine4);
			page.page15_grumble_mc.addEventListener("click", playGrumble2);
			page.page15_yeti_mc.addEventListener("click", playYeti2);
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
	let stumble = new Animations(page.page15_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humble = new Animations(page.page15_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let grumble = new Animations(page.page15_grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.page15_yeti_mc, "endLoop1", "startLoop1");
	let yeti2 = new Animations(page.page15_yeti_mc, "endLoop2", "startLoop2", "endAnim2", "startAnim2");

	function loopAnimations(){
		stumble.Loop();
		humble.Loop();
		grumble.Loop();
		yeti.Loop();
		yeti2.Loop();
	}

	//page interactions //

	function playStumble(){
		stumble.Play();
		stumbleScared07.play();
	}

	function playHumble(){
		humble.Play();
		humbleScared01.play();
	}

	function playYeti2(){
		yeti2.Play();
		yetiArgh.play();
	}

	function playGrumble2(){
		page.page15_grumble_mc.gotoAndPlay("startAnim2");
		grumbleAffirmative06.play();
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
		page.page15_text1_mc.removeEventListener("click", playGrumble);
		page.page15_text2_mc.removeEventListener("click", playLine2);
		page.page15_text3_mc.removeEventListener("click", playYeti);
		page.page15_text4_mc.removeEventListener("click", playLine4);
		page.page15_grumble_mc.removeEventListener("click", playGrumble2);
		page.page15_yeti_mc.removeEventListener("click", playYeti2);
		page.page15_humble_mc.removeEventListener("click", playHumble);
		page.page15_stumble_mc.removeEventListener("click", playStumble);
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
					page16();
				}
				else if (previous){
					page14();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}