function page0(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	yetiUp = false;
	audioComplete = false;
	
	//* Add the page *//
	stage.addChildAt(page, 1);

	createCookie("page", "0", 1);

	let fader = new Fade(page.fade_mc);

	if (!firstTime){
		createjs.Ticker.addEventListener("tick", fadeUp);

		function fadeUp() {
			fader.FadeDown();
			if (!fader.faded){
				setTimeout(onLoad, 500)
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}
		}
	}

	else if(firstTime){
		page.fade_mc.alpha = 0;
		setTimeout(onLoad, 500);
	}

	//* Handle the audio *//
	function onLoad(){
		sounds.getInstance("coverNarrator").play();
		sounds.getInstance("coverNarrator").on("complete", done, null, true)

		function done(){
			audioComplete = true;
			page.title_mc.gotoAndPlay("startFade");
		}
	}

	//* Add Interaction *//
	page.title_mc.addEventListener("click", playTitle);
	page.bee_mc.addEventListener("click", playBee);
	page.dragonfly_mc.addEventListener("click", playDragonfly);
	page.grumble_mc.addEventListener("click", playGrumble);
	page.humble_mc.addEventListener("click", playHumble);
	page.stumble_mc.addEventListener("click", playStumble);
	page.yeti_mc.addEventListener("click", playYeti);


	//* Add the next button *//	
	if(!nextButtonAdded){
		addNextButton();
		nextButtonAdded = true;
	}
	nextButton.addEventListener("click", gotoPage1);

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let bee = new Animations(page.bee_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let dragonfly = new Animations(page.dragonfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humble = new Animations(page.humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let grumble = new Animations(page.grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.yeti_mc, "endLoop", "startLoop", "endAnim");
	let yetiUpState = new Animations(page.yeti_mc, "endLoopUp", "startLoopUp");
	let title = new Animations(page.title_mc, "endLoop", "startLoop", "endAnim");
	
	function loopAnimations(){
		bee.Loop();
		dragonfly.Loop();
		humble.Loop();
		stumble.Loop();
		grumble.Loop();
		yeti.Loop();
		yetiUpState.Loop();
		title.Loop();

		if (page.title_mc.currentLabel == "end") {
			page.title_mc.stop();
 		}
	}

	 function playTitle(){
	 	sounds.getInstance("coverNarrator").play();
	}

	function playBee() {
		bee.Play();
	}

	function playDragonfly() {
		dragonfly.Play();

	}

	function playGrumble() {
		grumble.Play();
		if(audioComplete){
			sounds.getInstance("grumbleHappy03").play();
		}
	}

	function playHumble() {
		humble.Play();
		if(audioComplete){
			sounds.getInstance("humbleHappy02").play();
		}
		
	}

	function playStumble() {
		stumble.Play();
		if(audioComplete){
			sounds.getInstance("stumbleHappy01").play();
		}
	}

	function playYeti() {
		if (!yetiUp && audioComplete) {
			page.yeti_mc.gotoAndPlay("startAnimUp");
			sounds.getInstance("yetiGrr").play();
			yetiUp = true;
		} else if (yetiUp && audioComplete) {
			page.yeti_mc.gotoAndPlay("startAnimDown");
			yetiUp = false;
		}

	}

	//Go to the next page//
	function gotoPage1(){
		firstTime = false;
		createjs.Ticker.addEventListener("tick", fadeDown);
		page.title_mc.removeEventListener("click", playTitle);
		nextButton.removeEventListener("click", gotoPage1);
		page.bee_mc.removeEventListener("click", playBee);
		page.dragonfly_mc.removeEventListener("click", playDragonfly);
		page.grumble_mc.addEventListener("click", playGrumble);
		page.humble_mc.addEventListener("click", playHumble);
		page.stumble_mc.addEventListener("click", playStumble);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			createjs.Ticker.removeEventListener("tick", loopAnimations);
			stage.removeChild(page);
			setTimeout(page1, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}