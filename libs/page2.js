function page2(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page2_mc();
	audioComplete = false;
	next = false;
	previous = false;
	B = 1;

	createCookie("page", "2", 1);
	
	//* Add the page *//
	stage.addChildAt(page, 1);
	page.page2_B1_mc.gotoAndStop(0);
	page.page2_B2_mc.gotoAndStop(0);
	page.page2_B1_mc.alpha = 0;
	page.page2_B2_mc.alpha = 0;

	page.page2_text1_mc.alpha = 0;
	page.page2_text2_mc.alpha = 0;
	page.page2_text3_mc.alpha = 0;

	let text1fade = new Fade(page.page2_text1_mc);
	let text2fade = new Fade(page.page2_text2_mc);
	let text3fade = new Fade(page.page2_text3_mc);
	let fader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		fader.FadeDown();
		if (!fader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);

			if (B == 1){
				B1();
			} 
			else if (B == 2){
				B2();
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
	let anim1 = new Animations(page.page2_B1_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let anim2 = new Animations(page.page2_B2_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		anim1.Loop();
		anim2.Loop();
	}

	function B1(){
		page.page2_B1_mc.alpha = 1;
		playLine1();

		function playLine1(){
			createjs.Sound.stop();

			if (!audioComplete){
				page2Audio1.play();
				page.page2_B1_mc.gotoAndPlay("start");
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page2Audio1.on("complete", done, null, true);
			} 
			else if (audioComplete){
				bAudio.play();
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
			page.page2_B1_mc.addEventListener("click", playAnim1);
			page.page2_text1_mc.addEventListener("click", playLine1);
			page.page2_text2_mc.addEventListener("click", playBroccoli);
		}

		function playAnim1(){
			anim1.Play();
		}

		function playBroccoli(){
			broccoliAudio.play();
			anim1.Play();
		}
	}

	function B2(){
		page.page2_B2_mc.alpha = 1;
		playLine2();

		function playLine2(){
			createjs.Sound.stop();
			
			if (!audioComplete){
				page2Audio2.play();
				page.page2_B2_mc.gotoAndPlay("startAnim");
				createjs.Ticker.addEventListener("tick", fadeUpText);
				page2Audio2.on("complete", done, null, true);
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
			page.page2_B2_mc.addEventListener("click", playAnim2);
			page.page2_text3_mc.addEventListener("click", playBowl);
		}

		function playAnim2(){
			anim2.Play();
		}

		function playBowl(){
			bowlAudio.play();
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
		if (B >= 2){
			nextButton.removeEventListener("click", gotoNextPage);
			next = true;
		} else {
			B = 2;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		createjs.Sound.stop();
		audioComplete = false;
		if (B <= 1){
			previousButton.removeEventListener("click", gotoPreviousPage);
			previous = true;
		} else {
			B = 1;
		};
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			page.page2_B1_mc.gotoAndStop(0);
			page.page2_B2_mc.gotoAndStop(0);
			page.page2_B1_mc.alpha = 0;
			page.page2_B2_mc.alpha = 0;

			if (next && B>=2) {
				killPage();
				page3();
			} else if (B>=2) {
				page.page2_B2_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			if (previous && B<=1){
				killPage();
				page1();
			}
			else if (B<=1){
				page.page2_B1_mc.alpha = 1;
				createjs.Ticker.addEventListener("tick", fadeUp);
			}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}