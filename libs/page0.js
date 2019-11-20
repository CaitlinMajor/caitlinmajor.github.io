var nextButtonAdded = false;

function page0(){

	// Define page variables //
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	yetiUp = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);

	let fader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		fader.FadeDown();
		if (!fader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
		}
	}

	// Loop animations //
	
	page.bee_mc.gotoAndPlay("startLoop");
	page.dragonfly_mc.gotoAndPlay("startLoop");
	page.grumble_mc.gotoAndPlay("startLoop");
	page.humble_mc.gotoAndPlay("startLoop");
	page.stumble_mc.gotoAndPlay("startLoop");
	let bee = new Animations(page.bee_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let dragonfly = new Animations(page.dragonfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humble = new Animations(page.humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let grumble = new Animations(page.grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let yeti = new Animations(page.yeti_mc, "endLoop", "startLoop", "endAnim");
	let yetiUpState = new Animations(page.yeti_mc, "endLoopUp", "startLoopUp");
	let title = new Animations(page.title_mc, "endLoop", "startLoop", "endAnim");
	createjs.Ticker.addEventListener("tick", loopAnimations);

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

	//page interactions //
	/*
	HTML5 requires user interaction to initialize sound, 
	we don't want any interaction to occur until the sounds have been loaded.
	*/
	createjs.Ticker.addEventListener("tick", allowInteraction);
	function allowInteraction() {
		if (soundsLoaded){
			console.log("sound loaded " + soundsLoaded);
			playTitle();
			page.title_mc.gotoAndPlay("startFade")
			page.title_mc.addEventListener("click", playTitle);
			page.bee_mc.addEventListener("click", playBee);
			page.dragonfly_mc.addEventListener("click", playDragonfly);
			page.grumble_mc.addEventListener("click", playGrumble);
			page.humble_mc.addEventListener("click", playHumble);
			page.stumble_mc.addEventListener("click", playStumble);
			page.yeti_mc.addEventListener("click", playYeti);
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoPage1);
			createjs.Ticker.removeEventListener("tick", allowInteraction);
		}
	}

	function playTitle(){
		coverNarrator.play();
	}
	

	function playBee() {
		bee.Play();
	}

	function playDragonfly() {
		dragonfly.Play();

	}

	function playGrumble() {
		grumble.Play();
		grumbleHappy03.play();

	}

	function playHumble() {
		humble.Play();
		humbleHappy02.play();
	}

	function playStumble() {
		stumble.Play();
		stumbleHappy01.play();
	}

	function playYeti() {
		if (!yetiUp) {
			page.yeti_mc.gotoAndPlay("startAnimUp");
			coverYeti.play();
			yetiUp = true;
		} else if (yetiUp) {
			page.yeti_mc.gotoAndPlay("startAnimDown");
			yetiUp = false;
		}

	}

	//Go to the next page//

	function gotoPage1(){
		createjs.Ticker.addEventListener("tick", fadeDown);
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
			page1();
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}