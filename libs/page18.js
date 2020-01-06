function page18(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page18_mc();

	//define page variables //
	previous = false;
	audioComplete = false;
	basketUp = false;
	stumbleEat = false;
	grumbleEat = false;
	yetiEat = false;

	eraseCookie("page");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page18_text1_mc.alpha = 0;
	page.page18_theend_mc.alpha = 0;
	let text1fade = new Fade(page.page18_text1_mc);
	let theEndFade = new Fade(page.page18_theend_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page18_bee1_mc.addEventListener("click", playBee1);
	page.page18_bee2_mc.addEventListener("click", playBee2);
	page.page18_antBasket_mc.addEventListener("click", playBasket);
	page.page18_dragonfly_mc.addEventListener("click", playDragonfly);
	page.page18_stumble_mc.addEventListener("click", playStumble);
	page.page18_grumble_mc.addEventListener("click", playGrumble);
	page.page18_humble_mc.addEventListener("click", playHumble);
	page.page18_yeti_mc.addEventListener("click", playYeti);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);

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
		audio = sounds.getInstance("page18Line1");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playTheEnd, null, true);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	function playTheEnd(){
		createjs.Sound.stop();
		audio = sounds.getInstance("theEnd");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page18_theend_mc.addEventListener("click", playTheEnd);
			page.page18_text1_mc.addEventListener("click", playLine1);
		}

		function fadeUpText() {
			theEndFade.FadeUp();
			if (theEndFade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let antDown = new Animations(page.page18_antBasket_mc, "endLoop", "startLoop", "endAnimDown");
	let antUp = new Animations(page.page18_antBasket_mc, "endUpLoop", "startUpLoop", "endAnimUp");
	let bee1 = new Animations(page.page18_bee1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let bee2 = new Animations(page.page18_bee2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let dragonfly = new Animations(page.page18_dragonfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humble = new Animations(page.page18_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble1 = new Animations(page.page18_stumble_mc, "endLoop", "startLoop");
	let stumble2 = new Animations(page.page18_stumble_mc, "endLoop2", "startLoop2", "endAnim2");
	let grumble1 = new Animations(page.page18_grumble_mc, "endLoop", "startLoop");
	let grumble2 = new Animations(page.page18_grumble_mc, "endLoop2", "startLoop2", "endAnim2");
	let yeti1 = new Animations(page.page18_yeti_mc, "endLoop", "startLoop");
	let yeti2 = new Animations(page.page18_yeti_mc, "endLoop2", "startLoop2", "endAnim2");

	function loopAnimations(){
		antDown.Loop();
		antUp.Loop();
		bee1.Loop();
		bee2.Loop();
		dragonfly.Loop();
		humble.Loop();
		stumble1.Loop();
		stumble2.Loop();
		grumble1.Loop();
		grumble2.Loop();
		yeti1.Loop();
		yeti2.Loop();
	}

	//page interactions //

	function playBee1(){
		bee1.Play();
	}

	function playBee2(){
		bee2.Play();
	}

	function playDragonfly(){
		dragonfly.Play();
	}

	function playHumble(){
		humble.Play();
		sounds.getInstance("humbleEating01").play();
	}

	function playBasket(){
		if (!basketUp) {
			page.page18_antBasket_mc.gotoAndPlay("startAnimUp");
			basketUp = true;
		} else if (basketUp) {
			page.page18_antBasket_mc.gotoAndPlay("startAnimDown");
			basketUp = false;
		}

	}

	function playStumble(){
		if (!stumbleEat) {
			page.page18_stumble_mc.gotoAndPlay("startAnim");
			sounds.getInstance("stumbleEating01").play();
			stumbleEat = true;
		} else if (stumbleEat) {
			page.page18_stumble_mc.gotoAndPlay("startAnim2");
			sounds.getInstance("stumbleEating01").play();
			stumbleEat = false;
		}

	}

	function playGrumble(){
		if (!grumbleEat) {
			page.page18_grumble_mc.gotoAndPlay("startAnim");
			sounds.getInstance("grumbleEating02").play();
			grumbleEat = true;
		} else if (grumbleEat) {
			page.page18_grumble_mc.gotoAndPlay("startAnim2");
			sounds.getInstance("grumbleEating02").play();
			grumbleEat = false;
		}

	}

	function playYeti(){
		if (!yetiEat) {
			page.page18_yeti_mc.gotoAndPlay("startAnim");
			sounds.getInstance("page18YetiLine1").play();
			yetiEat = true;
		} else if (yetiEat) {
			page.page18_yeti_mc.gotoAndPlay("startAnim2");
			sounds.getInstance("page18YetiLine1").play();
			yetiEat = false;
		}

	}

	//Navigation//
	function gotoPreviousPage(){
		console.log("go to previous page");
		previous = true;
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.addEventListener("tick", fadeDown);

	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.page18_bee1_mc.removeEventListener("click", playBee1);
		page.page18_bee2_mc.removeEventListener("click", playBee2);
		page.page18_antBasket_mc.removeEventListener("click", playBasket);
		page.page18_dragonfly_mc.removeEventListener("click", playDragonfly);
		page.page18_stumble_mc.removeEventListener("click", playStumble);
		page.page18_grumble_mc.removeEventListener("click", playGrumble);
		page.page18_humble_mc.removeEventListener("click", playHumble);
		page.page18_yeti_mc.removeEventListener("click", playYeti);
		page.page18_text1_mc.removeEventListener("click", playLine1);
		page.page18_theend_mc.removeEventListener("click", playTheEnd);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
			setTimeout(page17, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}