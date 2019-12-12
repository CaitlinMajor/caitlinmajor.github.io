var previousButtonAdded = false;

function page1(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();
	audioComplete = false;
	next = false;
	previous = false;
	A = 1;

	createCookie("page", "1", 1);
	
	//* Add the page *//
	stage.addChildAt(page, 1);
	page.page1_A1_mc.gotoAndStop(0);
	page.page1_A2_mc.gotoAndStop(0);
	page.page1_A1_mc.alpha = 0;
	page.page1_A2_mc.alpha = 0;

	page.page1_text1_mc.alpha = 0;
	page.page1_text2_mc.alpha = 0;
	page.page1_text3_mc.alpha = 0;
	page.page1_text4_mc.alpha = 0;

	let text1fade = new Fade(page.page1_text1_mc);
	let text2fade = new Fade(page.page1_text2_mc);
	let text3fade = new Fade(page.page1_text3_mc);
	let text4fade = new Fade(page.page1_text4_mc);
	let fader = new Fade(page.fade_mc);

	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		fader.FadeDown();
		if (!fader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);

			if (A == 1){
				A1();
			} 
			else if (A == 2){
				A2();
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

	//* Loop animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let anim1 = new Animations(page.page1_A1_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let anim2 = new Animations(page.page1_A2_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		anim1.Loop();
		anim2.Loop();
	}

	function A1(){
		page.page1_A1_mc.alpha = 1;
		playLine1();

		function playLine1(){
			createjs.Sound.stop();

			if (!audioComplete){
				page1Audio1.play();
				page.page1_A1_mc.gotoAndPlay("start");
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page1Audio1.on("complete", done, null, true);
			} 
			else if (audioComplete){
				aAudio.play();
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
			page.page1_A1_mc.addEventListener("click", playAnim1);
			page.page1_text1_mc.addEventListener("click", playLine1);
			page.page1_text2_mc.addEventListener("click", playApple);
		}

		function playAnim1(){
			anim1.Play();
		}

		function playApple(){
			appleAudio.play();
			anim1.Play();
		}
	}

	function A2(){
		page.page1_A2_mc.alpha = 1;

		page.page1_A2_mc.gotoAndPlay("startAnim");

		createjs.Ticker.addEventListener("tick", checkAnim);

		function checkAnim(){
			if (page.page1_A2_mc.currentLabel == "startAnt"){
				playLine2();
				createjs.Ticker.removeEventListener("tick", checkAnim);
			}
		}

		function playLine2(){
			createjs.Sound.stop();
			page1Audio2.play();

			if (!audioComplete){
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page1Audio2.on("complete", done, null, true);
			} 

			function fadeUpText() {
				text3fade.FadeUp();
				text4fade.FadeUp();
				if (text3fade.faded){
					createjs.Ticker.removeEventListener("tick", fadeUpText);
				}
			}
		}

		function done(){
			audioComplete = true;
			page.page1_A2_mc.addEventListener("click", playAnim2);
			page.page1_text4_mc.addEventListener("click", playAnt);
		}

		function playAnim2(){
			anim2.Play();
		}

		function playAnt(){
			antAudio.play();
			anim2.Play();
		}

	}

	function killPage(){
		//removes all the interactions from the page
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		stage.removeChild(page);
	}

	//Go to the next page//
	function gotoNextPage(){
		createjs.Sound.stop();
		audioComplete = false;
		if (A >= 2){
			nextButton.removeEventListener("click", gotoNextPage);
			next = true;
		} else {
			A = 2;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		createjs.Sound.stop();
		audioComplete = false;
		if (A <= 1){
			previousButton.removeEventListener("click", gotoPreviousPage);
			previous = true;
			firstTime = false;
			removePreviousButton();
		} else {
			A = 1;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			page.page1_A1_mc.gotoAndStop(0);
			page.page1_A2_mc.gotoAndStop(0);
			page.page1_A1_mc.alpha = 0;
			page.page1_A2_mc.alpha = 0;

			if (next && A>=2) {
				killPage();
				page2();
			} else if (A>=2) {
				page.page1_A2_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			if (previous && A<=1){
				killPage();
				page0();
			}
			else if (A<=1){
				page.page1_A1_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}