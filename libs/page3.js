function page3(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page3_mc();
	audioComplete = false;
	next = false;
	previous = false;
	C = 1;

	createCookie("page", "3", 1);
	
	//* Add the page *//
	stage.addChildAt(page, 1);
	page.page3_C1_mc.gotoAndStop(0);
	page.page3_C2_mc.gotoAndStop(0);
	page.page3_C1_mc.alpha = 0;
	page.page3_C2_mc.alpha = 0;

	page.page3_text1_mc.alpha = 0;
	page.page3_text2_mc.alpha = 0;
	page.page3_text3_mc.alpha = 0;

	let text1fade = new Fade(page.page3_text1_mc);
	let text2fade = new Fade(page.page3_text2_mc);
	let text3fade = new Fade(page.page3_text3_mc);
	let fader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		fader.FadeDown();
		if (!fader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);

			if (C == 1){
				C1();
			} 
			else if (C == 2){
				C2();
			}

			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);
			if(!previousButtonAdded){
				addPreviousButton();
				previousButtonAdded = true;
				previousButton.addEventListener("click", gotoPreviousPage);
			}
			previousButton.addEventListener("click", gotoPreviousPage);
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let anim1 = new Animations(page.page3_C1_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let anim2 = new Animations(page.page3_C2_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		anim1.Loop();
		anim2.Loop();
	}

	function C1(){
		page.page3_C1_mc.alpha = 1;
		playLine1();

		function playLine1(){
			createjs.Sound.stop();

			if (!audioComplete){
				page3Audio1.play();
				page.page3_C1_mc.gotoAndPlay("start");
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page3Audio1.on("complete", done, null, true);
			} 
			else if (audioComplete){
				cAudio.play();
			}

			function fadeUpText() {
				text1fade.FadeUp();
				text2fade.FadeUp();
				if (text1fade.faded){
					createjs.Ticker.removeEventListener("tick", fadeUpText);
				}
			}
		}

		function done(){
			audioComplete = true;
			page.page3_C1_mc.addEventListener("click", playAnim1);
			page.page3_text1_mc.addEventListener("click", playLine1);
			page.page3_text2_mc.addEventListener("click", playCat);
		}

		function playAnim1(){
			catMeow.play();
			anim1.Play();
		}

		function playCat(){
			catAudio.play();
			anim1.Play();
		}
	}

	function C2(){
		page.page3_C2_mc.alpha = 1;
		playLine2();

		function playLine2(){
			createjs.Sound.stop();
			
			if (!audioComplete){
				page3Audio2.play();
				page.page3_C2_mc.gotoAndPlay("startAnim");
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page3Audio2.on("complete", done, null, true);
			} 

			function fadeUpText() {
				text3fade.FadeUp();
				if (text3fade.faded){
					createjs.Ticker.removeEventListener("tick", fadeUpText);
				}
			}
		}

		function done(){
			audioComplete = true;
			page.page3_C2_mc.addEventListener("click", playAnim2);
			page.page3_text3_mc.addEventListener("click", playCuddles);
		}

		function playAnim2(){
			anim2.Play();
			catPurr.play();
		}

		function playCuddles(){
			cuddlesAudio.play();
			anim2.Play();
		}

	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		stage.removeChild(page);
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
	}

	//Go to the next page//
	function gotoNextPage(){
		createjs.Sound.stop();
		audioComplete = false;
		if (C >= 2){
			nextButton.removeEventListener("click", gotoNextPage);
			next = true;
		} else {
			C = 2;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		createjs.Sound.stop();
		audioComplete = false;
		if (C <= 1){
			previousButton.removeEventListener("click", gotoPreviousPage);
			previous = true;
		} else {
			C = 1;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			page.page3_C1_mc.gotoAndStop(0);
			page.page3_C2_mc.gotoAndStop(0);
			page.page3_C1_mc.alpha = 0;
			page.page3_C2_mc.alpha = 0;

			if (next && C>=2) {
				killPage();
				page3();
			} else if (C>=2) {
				page.page3_C2_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			if (previous && C<=1){
				killPage();
				page2();
			}
			else if (C<=1){
				page.page3_C1_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}