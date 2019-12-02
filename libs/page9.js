function page9(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page9_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page9_eyes_mc.alpha = 0;
	page.page9_text_mc.alpha = 0;
	let textfade = new Fade(page.page9_text_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page9_fish_mc.addEventListener("click", playFish);
	page.page9_bee1_mc.addEventListener("click", playBee1);
	page.page9_bee2_mc.addEventListener("click", playBee2);
	page.page9_stumble_mc.addEventListener("click", playStumble);

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
		audio = page9Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page9_text_mc.addEventListener("click", playLine1);
			page.page9_yeti_mc.gotoAndPlay("startAnim");
			createjs.Ticker.addEventListener("tick", checkYeti);
		}

		function fadeUpText() {
			textfade.FadeUp();
			if (textfade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	function checkYeti(){
		if (page.page9_yeti_mc.currentLabel == "endAnim"){
			console.log ("check yeti running");
			page.page9_yeti_mc.gotoAndStop("endAnim");
			page.page9_eyes_mc.alpha = 1;
			eyes.Play();
			createjs.Ticker.removeEventListener("tick", checkYeti);
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let eyes = new Animations(page.page9_eyes_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let fish = new Animations(page.page9_fish_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let bee1 = new Animations(page.page9_bee1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let bee2 = new Animations(page.page9_bee2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page9_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.page9_yeti_mc, "endLoop", "startLoop");

	function loopAnimations(){

		eyes.Loop();
		fish.Loop();
		bee1.Loop();
		bee2.Loop();
		stumble.Loop();
		yeti.Loop();
	}

	//page interactions //

	function playFish(){
		fish.Play();
	}

	function playBee1(){
		bee1.Play();
	}

	function playBee2(){
		bee2.Play();
	}

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			stumblePhew05.play();
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
		createjs.Ticker.removeEventListener("tick", checkYeti);
		page.page9_fish_mc.removeEventListener("click", playFish);
		page.page9_bee1_mc.removeEventListener("click", playBee1);
		page.page9_bee2_mc.removeEventListener("click", playBee2);
		page.page9_stumble_mc.removeEventListener("click", playStumble);
		page.page9_text_mc.removeEventListener("click", playLine1);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					page10();
				}
				else if (previous){
					page8();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}
	}

}