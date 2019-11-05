
function Page0(){

	// Add page to the stage //
	 var lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	 var Page = new lib.page0_mc();
	 stage.addChildAt(Page, 1);
	 createjs.Ticker.addEventListener("tick", fadeUpPage);

	//fade the page up and down //
	function fadeUpPage(e) {
		if (Page.fade_mc.alpha >= 0) {
			Page.fade_mc.alpha -= fadeAmount;
		}

		if (Page.fade_mc.alpha <= 0) {
			if (!PageVisible) {
				PageFaded = false;
				PageVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUpPage);
			}

		}

	}

	function fadeDownPage(e) {

		if (Page.fade_mc.alpha <= 1) {
			Page.fade_mc.alpha += fadeAmount;
		}


		if (Page.fade_mc.alpha >= 1) {
			if (PageVisible) {
				PageVisible = false;
				PageLoaded = false;
				pageFaded = true;
				createjs.Ticker.removeEventListener("tick", loopAnimations);
				stage.removeChild(Page);
			}

		}

	}
	
	//define page variables //
	yetiUp = false;
	beePlaying = false
	dragonflyPlaying = false;
	stumbleHappy01Playing = false;
	grumbleHappy03Playing = false;
	humbleHappy02Playing = false;

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	Page.bee_mc.gotoAndPlay("startLoop");
	Page.dragonfly_mc.gotoAndPlay("startLoop");
	Page.grumble_mc.gotoAndPlay("startLoop");
	Page.humble_mc.gotoAndPlay("startLoop");
	Page.stumble_mc.gotoAndPlay("startLoop");

	function loopAnimations(e) {

		if (Page.title_mc.currentLabel == "endLoop") {

			Page.title_mc.gotoAndPlay("startLoop");
		}

		if (Page.bee_mc.currentLabel == "endLoop") {

			Page.bee_mc.gotoAndPlay("startLoop");
		}

		if (Page.bee_mc.currentLabel == "endAnim") {

			beePlaying = false;
		}

		if (Page.dragonfly_mc.currentLabel == "endLoop") {

			Page.dragonfly_mc.gotoAndPlay("startLoop");
		}

		if (Page.dragonfly_mc.currentLabel == "endAnim") {

			dragonflyPlaying = false;
		}

		if (Page.stumble_mc.currentLabel == "endLoop") {

			Page.stumble_mc.gotoAndPlay("startLoop");
		}

		if (Page.stumble_mc.currentLabel == "endAnim") {

			stumbleHappy01Playing = false;
		}

		if (Page.grumble_mc.currentLabel == "endLoop") {

			Page.grumble_mc.gotoAndPlay("startLoop");
		}

		if (Page.grumble_mc.currentLabel == "endAnim") {

			grumbleHappy03Playing = false;
		}

		if (Page.humble_mc.currentLabel == "endLoop") {

			Page.humble_mc.gotoAndPlay("startLoop");
		}

		if (Page.humble_mc.currentLabel == "endAnim") {

			humbleHappy02Playing = false;
		}

	}

	//page interactions //

	Page.bee_mc.addEventListener("click", playBee);
	Page.dragonfly_mc.addEventListener("click", playDragonfly);
	Page.grumble_mc.addEventListener("click", playGrumble);

	function playBee() {
		if (beePlaying == false) {
			Page.bee_mc.gotoAndPlay("startAnim");
			beePlaying = true;
		}

	}

	function playDragonfly() {
		if (dragonflyPlaying == false) {
			Page.dragonfly_mc.gotoAndPlay("startAnim");
			dragonflyPlaying = true;
		}

	}

	function playGrumble() {
			if (grumbleHappy03Playing == false) {
				Page.grumble_mc.gotoAndPlay("startAnim");
				grumbleHappy03Playing = true;
			}
		grumbleHappy03.play();
	}

}