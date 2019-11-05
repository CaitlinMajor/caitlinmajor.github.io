function page0(){

	//define page variables //
	yetiUp = false;
	beePlaying = false
	dragonflyPlaying = false;
	stumblePlaying = false;
	grumblePlaying = false;
	humblePlaying = false;

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	
	//*Add the page*//
	stage.addChildAt(page, 1);

	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		if (page.fade_mc.alpha >= 0) {
			page.fade_mc.alpha -= fadeAmount;
		}


		if (page.fade_mc.alpha <= 0) {
			if (!pageVisible) {
				pageVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}

		}

	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	page.bee_mc.gotoAndPlay("startLoop");
	page.dragonfly_mc.gotoAndPlay("startLoop");
	page.grumble_mc.gotoAndPlay("startLoop");
	page.humble_mc.gotoAndPlay("startLoop");
	page.stumble_mc.gotoAndPlay("startLoop");

	function loopAnimations() {

		if (page.title_mc.currentLabel == "endLoop") {

			page.title_mc.gotoAndPlay("startLoop");
		}

		if (page.title_mc.currentLabel == "end") {

			page.title_mc.stop();
		}

		if (page.bee_mc.currentLabel == "endLoop") {

			page.bee_mc.gotoAndPlay("startLoop");
		}

		if (page.bee_mc.currentLabel == "endAnim") {

			beePlaying = false;
		}

		if (page.dragonfly_mc.currentLabel == "endLoop") {

			page.dragonfly_mc.gotoAndPlay("startLoop");
		}

		if (page.dragonfly_mc.currentLabel == "endAnim") {

			dragonflyPlaying = false;
		}

		if (page.stumble_mc.currentLabel == "endLoop") {

			page.stumble_mc.gotoAndPlay("startLoop");
		}

		if (page.stumble_mc.currentLabel == "endAnim") {

			stumblePlaying = false;
		}

		if (page.grumble_mc.currentLabel == "endLoop") {

			page.grumble_mc.gotoAndPlay("startLoop");
		}

		if (page.grumble_mc.currentLabel == "endAnim") {

			grumblePlaying = false;
		}

		if (page.humble_mc.currentLabel == "endLoop") {

			page.humble_mc.gotoAndPlay("startLoop");
		}

		if (page.humble_mc.currentLabel == "endAnim") {

			humblePlaying = false;
		}

		if (page.yeti_mc.currentLabel == "endLoop") {

			page.yeti_mc.gotoAndPlay("startLoop");
		}

		if (page.yeti_mc.currentLabel == "endLoopUp") {

			page.humble_mc.gotoAndPlay("startLoopUp");
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
			page.title_mc.gotoAndPlay("startFade")
			page.title_mc.addEventListener("click", playTitle);
			page.bee_mc.addEventListener("click", playBee);
			page.dragonfly_mc.addEventListener("click", playDragonfly);
			page.grumble_mc.addEventListener("click", playGrumble);
			page.humble_mc.addEventListener("click", playHumble);
			page.stumble_mc.addEventListener("click", playStumble);
			page.yeti_mc.addEventListener("click", playYeti);
			if(!nextButtonVisible){
				addNextButton();
			}
			nextButton.addEventListener("click", gotoPage1);
			createjs.Ticker.removeEventListener("tick", allowInteraction);
		}
	}

	function playTitle(){
		coverNarrator.play();
	}
	

	function playBee() {
		if (!beePlaying) {
			page.bee_mc.gotoAndPlay("startAnim");
			beePlaying = true;
		}

	}

	function playDragonfly() {
		if (!dragonflyPlaying) {
			page.dragonfly_mc.gotoAndPlay("startAnim");
			dragonflyPlaying = true;
		}

	}

	function playGrumble() {
			if (!grumblePlaying) {
				page.grumble_mc.gotoAndPlay("startAnim");
				grumblePlaying = true;
			}
		grumbleHappy03.play();
	}

	function playHumble() {
		if (!humblePlaying) {
			page.humble_mc.gotoAndPlay("startAnim");
			humblePlaying = true;
		}
		humbleHappy02.play();
	}

	function playStumble() {
		if (!stumblePlaying) {
			page.stumble_mc.gotoAndPlay("startAnim");
			stumblePlaying = true;
		}
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

		if (page.fade_mc.alpha <= 1) {
			page.fade_mc.alpha += fadeAmount;
		}

		if (page.fade_mc.alpha >= 1) {
			if (pageVisible) {
				pageVisible = false;
				createjs.Ticker.removeEventListener("tick", loopAnimations);
				stage.removeChild(page);
				page1();
				createjs.Ticker.removeEventListener("tick", fadeDown);
			}

		}
	}

}