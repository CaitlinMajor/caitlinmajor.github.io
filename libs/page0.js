function page0(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	audioComplete = false;

	stage.addChildAt(page, 1);
	page.page0_text_mc.gotoAndStop(0);

	let fader = new Fade(page.fade_mc);

	createCookie("page", "0", 1);	

	if (!firstTime){
		page.fade_mc.alpha = 1;
		createjs.Ticker.addEventListener("tick", fadeUp);

		function fadeUp() {
			fader.FadeDown();
			if (!fader.faded){
				setTimeout(playTitle, 500);
				nextButton.addEventListener("click", gotoNextPage);
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}
		}
	}

	else if(firstTime){
		page.fade_mc.alpha = 0;
		setTimeout(playTitle, 500);
	}

	//* Handle the audio *//
	function playTitle(){
		page.page0_text_mc.gotoAndPlay("startAnim");
		page0Audio1.play();

		if(!audioComplete){
			page0Audio1.on("complete", done, null, true);
		}
	}

	function done(){
			audioComplete = true;
			console.log("audio complete " + audioComplete);
			page.page0_text_mc.addEventListener("click", playTitle);
			page.page0_noodle_mc.addEventListener("click", playNoodle);
			page.page0_broccoli_mc.addEventListener("click", playBroccoli);
			page.page0_cheesy_mc.addEventListener("click", playCheesy);

			//* Add the next button *//	
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);
		}

	//* Loop animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let noodle = new Animations(page.page0_noodle_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let broccoli = new Animations(page.page0_broccoli_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cheesy = new Animations(page.page0_cheesy_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		noodle.Loop();
		broccoli.Loop();
		cheesy.Loop();


		if (page.page0_text_mc.currentLabel == "end") {

			page.page0_text_mc.gotoAndStop("end");
		}

	}

	//* Interactivity *//
	function playNoodle(){
		noodle.Play();
	}

	function playBroccoli(){
		broccoli.Play();
	}

	function playCheesy(){
		cheesy.Play();
	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.page0_text_mc.removeEventListener("click", playTitle);
		page.page0_noodle_mc.removeEventListener("click", playNoodle);
		page.page0_broccoli_mc.removeEventListener("click", playBroccoli);
		page.page0_cheesy_mc.removeEventListener("click", playCheesy);
		nextButton.removeEventListener("click", gotoNextPage);
		stage.removeChild(page);
	}

	//Go to the next page//
	function gotoNextPage(){
		console.log("go to next page");
		firstTime = false;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			killPage();
			page1();
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}