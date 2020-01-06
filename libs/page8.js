function page8(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page8_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "8", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page8_text1_mc.alpha = 0;
	page.page8_text2_mc.alpha = 0;
	page.page8_text3_mc.alpha = 0;
	let text1fade = new Fade(page.page8_text1_mc);
	let text2fade = new Fade(page.page8_text2_mc);
	let text3fade = new Fade(page.page8_text3_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page8_stumble_mc.addEventListener("click", playStumble);
	page.page8_fish1_mc.addEventListener("click", playFish1);
	page.page8_fish2_mc.addEventListener("click", playFish2);
	page.page8_dragonfly_mc.addEventListener("click", playDragonfly);


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

			playYetiAudio1();
		}

	}

	//* Handle The Audio *//
	function playYetiAudio1() {
		createjs.Sound.stop();
		audio = sounds.getInstance("page8YetiLine1");
		audio.play();

		if (!audioComplete){
			page.page8_yeti_mc.gotoAndPlay("startAnim1");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playYetiAudio2, null, true);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	function playYetiAudio2() {
		createjs.Sound.stop();
		audio = sounds.getInstance("page8YetiLine2");
		audio.play();

		if (!audioComplete){
			page.page8_yeti_mc.gotoAndPlay("startAnim2");
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playLine1, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playLine1() {
		createjs.Sound.stop();
		audio = sounds.getInstance("page8Line1");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page8_text1_mc.addEventListener("click", playYetiAudio1);
			page.page8_text2_mc.addEventListener("click", playYetiAudio2);
			page.page8_text3_mc.addEventListener("click", playLine1);
			page.page8_yeti_mc.addEventListener("click", playYeti);
		}

		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let stumble = new Animations(page.page8_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let dragonfly = new Animations(page.page8_dragonfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let fish1 = new Animations(page.page8_fish1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let fish2 = new Animations(page.page8_fish2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.page8_yeti_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		stumble.Loop();
		dragonfly.Loop();
		fish1.Loop();
		fish2.Loop();
		yeti.Loop();
	}

	//page interactions //

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			sounds.getInstance("stumbleScared07").play();
		}
	}

	function playYeti(){
		yeti.Play();
		if(audioComplete){
			sounds.getInstance("yetiHmm").play();
		}
	}

	function playDragonfly(){
		dragonfly.Play();
	}

	function playFish1(){
		fish1.Play();
	}

	function playFish2(){
		fish2.Play();
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
		page.page8_stumble_mc.removeEventListener("click", playStumble);
		page.page8_fish1_mc.removeEventListener("click", playFish1);
		page.page8_fish2_mc.removeEventListener("click", playFish2);
		page.page8_dragonfly_mc.removeEventListener("click", playDragonfly);
		page.page8_text1_mc.removeEventListener("click", playYetiAudio1);
		page.page8_text2_mc.removeEventListener("click", playYetiAudio2);
		page.page8_yeti_mc.removeEventListener("click", playYeti);
		page.page8_text3_mc.removeEventListener("click", playLine1);
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
					setTimeout(page9, 200);
				}
				else if (previous){
					setTimeout(page7, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}