function page7(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page7_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "7", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page7_text1_mc.alpha = 0;
	page.page7_text2_mc.alpha = 0;
	page.page7_text3_mc.alpha = 0;
	let text1fade = new Fade(page.page7_text1_mc);
	let text2fade = new Fade(page.page7_text2_mc);
	let text3fade = new Fade(page.page7_text3_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page7_grumble_mc.addEventListener("click", playGrumble);
	page.page7_humble_mc.addEventListener("click", playHumble);
	page.page7_fishy_mc.addEventListener("click", playFishy);
	page.page7_stumble_mc.addEventListener("click", playStumble);
	page.page7_yeti_mc.addEventListener("click", playYeti);

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
		audio = sounds.getInstance("page7Line1");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playStumble, null, true);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playStumble() {
		createjs.Sound.stop();
		audio = sounds.getInstance("stumbleExcited06");
		page.page7_stumble_mc.gotoAndPlay("startAnim");
		audio.play();

		if (!audioComplete){
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
		audio = sounds.getInstance("page7Line2");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page7_text1_mc.addEventListener("click", playLine1);
			page.page7_text2_mc.addEventListener("click", playStumble);
			page.page7_text3_mc.addEventListener("click", playLine2);
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
	let humble = new Animations(page.page7_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let grumble = new Animations(page.page7_grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page7_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.page7_yeti_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yetiOL = new Animations(page.page7_yetiOL_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let fishy = new Animations(page.page7_fishy_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		humble.Loop();
		grumble.Loop();
		stumble.Loop();
		yeti.Loop();
		yetiOL.Loop();
		fishy.Loop();
	}

	//page interactions //

	function playHumble(){
		humble.Play();
		if(audioComplete){
			sounds.getInstance("humbleScared01").play();
		}
	}

	function playGrumble(){
		grumble.Play();
		if(audioComplete){
			sounds.getInstance("grumbleScared07").play();
		}
	}

	function playYeti(){
		yeti.Play();
		yetiOL.Play();
		if(audioComplete){
			sounds.getInstance("yetiHmm").play();
		}
	}

	function playFishy(){
		fishy.Play();
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
		page.page7_grumble_mc.removeEventListener("click", playGrumble);
		page.page7_humble_mc.removeEventListener("click", playHumble);
		page.page7_fishy_mc.removeEventListener("click", playFishy);
		page.page7_stumble_mc.removeEventListener("click", playStumble);
		page.page7_yeti_mc.removeEventListener("click", playYeti);
		page.page7_text1_mc.removeEventListener("click", playLine1);
		page.page7_text2_mc.removeEventListener("click", playStumble);
		page.page7_text3_mc.removeEventListener("click", playLine2);
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
					setTimeout(page8, 200);
				}
				else if (previous){
					setTimeout(page6, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}