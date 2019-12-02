function page5(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page5_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page5_text1_mc.alpha = 0;
	page.page5_text2_mc.alpha = 0;
	page.page5_text3_mc.alpha = 0;
	let text1fade = new Fade(page.page5_text1_mc);
	let text2fade = new Fade(page.page5_text2_mc);
	let text3fade = new Fade(page.page5_text3_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page5_dragonfly1_mc.addEventListener("click", playDragonfly1);
	page.page5_dragonfly2_mc.addEventListener("click", playDragonfly2);
	page.page5_stumble_mc.addEventListener("click", playStumble);

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
		audio = page5Line1;
		audio.play();

		if (!audioComplete){
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
		audio = page5YetiLine1;
		audio.play();

		if (!audioComplete){
			page.page5_yeti_mc.gotoAndPlay("startAnim");
			audio.on("complete", playLine3, null, true);
			page.page5_yeti_mc.addEventListener("click", playYeti);
			createjs.Ticker.addEventListener("tick", fadeUpText);
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
		audio = page5Line2;
		audio.play();

		if(!audioComplete){
			audio.on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}

		function done(){
			audioComplete = true;
			page.page5_text1_mc.addEventListener("click", playLine1);
			page.page5_text2_mc.addEventListener("click", playYetiAudio);
			page.page5_text3_mc.addEventListener("click", playLine3);
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

	let dragonfly1 = new Animations(page.page5_dragonfly1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let dragonfly2 = new Animations(page.page5_dragonfly2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page5_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yetiDown = new Animations(page.page5_yeti_mc, "endLoop", "startLoop");
	let yetiUp = new Animations(page.page5_yeti_mc, "endUpLoop", "startUpLoop", "endUpAnim", "startUpAnim");

	function loopAnimations(){
		dragonfly1.Loop();
		dragonfly2.Loop();
		stumble.Loop();
		yetiDown.Loop();
		yetiUp.Loop();
	}

	//page interactions //

	function playDragonfly1(){
		dragonfly1.Play();
	}

	function playDragonfly2(){
		dragonfly2.Play();
	}

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			stumbleScared04.play();
		}
	}

	function playYeti(){
		yetiUp.Play();
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
		page.page5_dragonfly1_mc.removeEventListener("click", playDragonfly1);
		page.page5_dragonfly2_mc.removeEventListener("click", playDragonfly2);
		page.page5_stumble_mc.removeEventListener("click", playStumble);
		page.page5_text1_mc.removeEventListener("click", playLine1);
		page.page5_text2_mc.removeEventListener("click", playYetiAudio);
		page.page5_text3_mc.removeEventListener("click", playLine3);
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
					page6();
				}
				else if (previous){
					page4();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}
	}

}