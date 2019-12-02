function page3(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page3_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;
	start = true;
	walking = false;
	standing = false;

	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.gotoAndStop(0);

	//text//
	page.page3_text1_mc.alpha = 0;
	page.page3_text2_mc.alpha = 0;
	let text1fade = new Fade(page.page3_text1_mc);
	let text2fade = new Fade(page.page3_text2_mc);

	//page fader//
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
				start = false;
				walking = true;
				page.page3_grumble_mc.gotoAndPlay("startWalkingLoop");
				page.page3_humble_mc.gotoAndPlay("startWalkingLoop");
				page.page3_stumble_mc.gotoAndPlay("startWalkingLoop");
				page.gotoAndPlay("startAnim");
				createjs.Ticker.removeEventListener("tick", fadeUp);
				nextButton.addEventListener("click", gotoNextPage);
				previousButton.addEventListener("click", gotoPreviousPage);
				playLine1();
			}
	}

	function playLine1() {
		createjs.Sound.stop();
		audio = page3Line1;
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
		audio = page3Line2;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);

		}

		function done(){
				audioComplete = true;
				page.page3_text1_mc.addEventListener("click", playLine1);
				page.page3_text2_mc.addEventListener("click", playLine2);
			}
		
		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	//* Loop animations *//
	createjs.Ticker.addEventListener("tick", pageAnimation);

	function pageAnimation(){
		if(page.currentLabel == "endAnim"){
			walking = false;
			page.gotoAndStop("endAnim");
			page.page3_grumble_mc.gotoAndPlay("startAnim");
			page.page3_stumble_mc.gotoAndPlay("startAnim");
			page.page3_humble_mc.gotoAndPlay("startAnim");
			standing = true;
			page.page3_grumble_mc.addEventListener("click", playGrumble);
			page.page3_humble_mc.addEventListener("click", playHumble);
			page.page3_stumble_mc.addEventListener("click", playStumble);
			page.page3_eyes_mc.addEventListener("click", playEyes);
			createjs.Ticker.removeEventListener("tick", pageAnimation);
		}

	}

	createjs.Ticker.addEventListener("tick", loopAnimations);

	let eyes = new Animations(page.page3_eyes_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	let grumbleStart = new Animations(page.page3_grumble_mc, "endLoop", "startLoop");
	let humbleStart = new Animations(page.page3_humble_mc, "endLoop", "startLoop");
	let stumbleStart = new Animations(page.page3_stumble_mc, "endLoop", "startLoop");

	let grumbleWalking = new Animations(page.page3_grumble_mc, "endWalkingLoop", "startWalkingLoop");
	let stumbleWalking = new Animations(page.page3_stumble_mc, "endWalkingLoop", "startWalkingLoop");
	let humbleWalking = new Animations(page.page3_humble_mc, "endWalkingLoop", "startWalkingLoop");
	
	let grumbleStanding = new Animations(page.page3_grumble_mc, "endStandingLoop", "startStandingLoop", "endStandingAnim", "startStandingAnim");
	let stumbleStanding = new Animations(page.page3_stumble_mc, "endStandingLoop", "startStandingLoop", "endStandingAnim", "startStandingAnim");
	let humbleStanding = new Animations(page.page3_humble_mc, "endStandingLoop", "startStandingLoop", "endStandingAnim", "startStandingAnim");

	function loopAnimations(){

		eyes.Loop();

		if(start){
			grumbleStart.Loop();
			stumbleStart.Loop();
			humbleStart.Loop();
		}
		if (walking){	
			grumbleWalking.Loop();
			stumbleWalking.Loop();
			humbleWalking.Loop();
		}
		if (standing){
			grumbleStanding.Loop();
			stumbleStanding.Loop();
			humbleStanding.Loop();
		}
		
	}

	//page interactions //

	function playGrumble(){
		grumbleStanding.Play();
		grumbleScared07.play();
	}

	function playHumble(){
		humbleStanding.Play();
		humbleScared01.play();
	}

	function playStumble(){
		stumbleStanding.Play();
		stumbleWow01.play();
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
		console.log("go to previous page");
		previous = true;
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.addEventListener("tick", fadeDown);

	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		page.page3_text1_mc.removeEventListener("click", playLine1);
		page.page3_text2_mc.removeEventListener("click", playLine2);
		page.page3_eyes_mc.removeEventListener("click", playEyes);
		page.page3_grumble_mc.removeEventListener("click", playGrumble);
		page.page3_humble_mc.removeEventListener("click", playHumble);
		page.page3_stumble_mc.removeEventListener("click", playStumble);
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
					page4();
				}
				else if (previous){
					page2();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}