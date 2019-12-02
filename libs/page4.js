function page4(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page4_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);

	//text//
	page.page4_text1_mc.alpha = 0;
	page.page4_text2_mc.alpha = 0;
	let text1fade = new Fade(page.page4_text1_mc);
	let text2fade = new Fade(page.page4_text2_mc);
	let pageFader = new Fade(page.fade_mc);

	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page4_apple_mc.addEventListener("click", playApple);
	page.page4_butterfly_mc.addEventListener("click", playButterfly);
	page.page4_frog_mc.addEventListener("click", playFrog);
	page.page4_eyes_mc.addEventListener("click", playEyes);
	page.page4_stumble_mc.addEventListener("click", playStumble);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			nextButton.addEventListener("click", gotoNextPage);
			playLine1();
			previousButton.addEventListener("click", gotoPreviousPage);
			}
		}

	//* Handle The Audio *//
	function playLine1() {
		createjs.Sound.stop();
		audio = page4Line1;
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
		audio = page4Line2;
		audio.play();

		if (!audioComplete){
			audioComplete = true;
			audio.on("complete", playStumble, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
			page.page4_text1_mc.addEventListener("click", playLine1);
			page.page4_text2_mc.addEventListener("click", playLine2);
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

	let apple = new Animations(page.page4_apple_mc, "endLoop", "startLoop");
	let butterfly = new Animations(page.page4_butterfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let frog = new Animations(page.page4_frog_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page4_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let eyes = new Animations(page.page4_eyes_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){

		if (page.page4_apple_mc.currentLabel == "endAnim"){
			page.page4_apple_mc.stop();
			page.page4_apple_mc.removeEventListener("click", playApple);
		}
		apple.Loop();
		butterfly.Loop();
		frog.Loop();
		stumble.Loop();
		eyes.Loop();


	}

	//page interactions //
	function playStumble() {
		stumble.Play();
		if(audioComplete){
			stumbleHappy01.play();
		}
	}

	function playApple() {
		page.page4_apple_mc.gotoAndPlay("startAnim");
	}

	function playButterfly() {
		butterfly.Play();
	}

	function playFrog(){
		frog.Play();
	}

	function playEyes(){
		eyes.Play();
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
		page.page4_apple_mc.removeEventListener("click", playApple);
		page.page4_butterfly_mc.removeEventListener("click", playButterfly);
		page.page4_frog_mc.removeEventListener("click", playFrog);
		page.page4_stumble_mc.removeEventListener("click", playStumble);
		page.page4_text1_mc.removeEventListener("click", playLine1);
		page.page4_text2_mc.removeEventListener("click", playLine2);
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
					page5();
				}
				else if (previous){
					page3();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}