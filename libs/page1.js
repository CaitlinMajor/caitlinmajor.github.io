var previousButtonAdded = false;

function page1(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	//*Add the page*//
	stage.addChildAt(page, 1);

	// createCookie("page", "1", 1);
	// console.log(document.cookie);
	page.page1_text1_mc.alpha = 0;
	page.page1_text2_mc.alpha = 0;
	page.page1_text3_mc.alpha = 0;
	page.page1_text4_mc.alpha = 0;
	let text1fade = new Fade(page.page1_text1_mc);
	let text2fade = new Fade(page.page1_text2_mc);
	let text3fade = new Fade(page.page1_text3_mc);
	let text4fade = new Fade(page.page1_text4_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page1_tree1_mc.addEventListener("click", playTree1);
	page.page1_tree2_mc.addEventListener("click", playTree2);
	page.page1_tree3_mc.addEventListener("click", playTree3);
	page.page1_tree4_mc.addEventListener("click", playTree4);


	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			nextButton.addEventListener("click", gotoNextPage);
			playLine1();
			if(!previousButtonAdded){
				addPreviousButton();
				previousButtonAdded = true;
				previousButton.addEventListener("click", gotoPreviousPage);
			}
			previousButton.addEventListener("click", gotoPreviousPage);
		}
	}

	//* Handle The Audio *//
	function playLine1() {
		createjs.Sound.stop();
		audio = page1Line1;
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
		audio = page1Line2;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playStumbleAudio, null, true);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playStumbleAudio() {
		audio = stumbleHappy01;
		page.page1_stumble_mc.gotoAndPlay("startUpAnim");
		audio.play();
		audio.on("complete", playLine3, null, true);
		page.page1_stumble_mc.addEventListener("click", playStumbleAnimation);
	}

	function playLine3() {
		createjs.Sound.stop();
		audio = page1Line3;
		audio.play();
	
		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playHumbleAudio, null, true);
		}

		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playHumbleAudio() {
		audio = humbleHappy02;
		page.page1_humble_mc.gotoAndPlay("startUpAnim");
		audio.play();
		audio.on("complete", playLine4, null, true);
		page.page1_humble_mc.addEventListener("click", playHumbleAnimation);
	}

	function playLine4() {
		createjs.Sound.stop();
		audio = page1Line4;
		audio.play();
		
		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", playGrumbleAudio, null, true);
		}

		function fadeUpText() {
			text4fade.FadeUp();
			if (text4fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playGrumbleAudio() {
		audio = grumbleHappy03;
		page.page1_grumble_mc.gotoAndPlay("startUpAnim");
		audio.play();
		audioComplete = true;
		page.page1_grumble_mc.addEventListener("click", playGrumbleAnimation);
		page.page1_text1_mc.addEventListener("click", playLine1);
		page.page1_text2_mc.addEventListener("click", playLine2);
		page.page1_text3_mc.addEventListener("click", playLine3);
		page.page1_text4_mc.addEventListener("click", playLine4);
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	page.page1_grumble_mc.gotoAndPlay("startOpeningLoop");
	page.page1_stumble_mc.gotoAndPlay("startOpeningLoop");
	page.page1_humble_mc.gotoAndStop(0);

	let grumbleDownState = new Animations(page.page1_grumble_mc, "endDownLoop", "startDownLoop");
	let grumbleUpState = new Animations(page.page1_grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumbleDownState = new Animations(page.page1_stumble_mc, "endDownLoop", "startDownLoop");
	let stumbleUpState = new Animations(page.page1_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humbleUpState = new Animations(page.page1_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let tree1 = new Animations(page.page1_tree1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let tree2 = new Animations(page.page1_tree2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let tree3 = new Animations(page.page1_tree3_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let tree4 = new Animations(page.page1_tree4_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		grumbleDownState.Loop();
		grumbleUpState.Loop();
		stumbleDownState.Loop();
		stumbleUpState.Loop();
		humbleUpState.Loop();
		tree1.Loop();
		tree2.Loop();
		tree3.Loop();
		tree4.Loop();

		if (page.page1_humble_mc.currentLabel == "Start") {

			page.page1_humble_mc.gotoAndStop("Start");
		}
	}

	//page interactions //

	function playStumbleAnimation(){
		stumbleUpState.Play();

	}

	function playGrumbleAnimation(){
		grumbleUpState.Play();
	}

	function playHumbleAnimation(){
		humbleUpState.Play();
	}

	function playTree1(){
		tree1.Play();
	}

	function playTree2(){
		tree2.Play();
	}

	function playTree3(){
		tree3.Play();
	}

	function playTree4(){
		tree4.Play();
	}

	//* End Of Page*//

	function gotoNextPage(){
		console.log("go to next page");
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		console.log("go to previous page");
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removePreviousButton();
	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		page.page1_tree1_mc.removeEventListener("click", playTree1);
		page.page1_tree2_mc.removeEventListener("click", playTree2);
		page.page1_tree3_mc.removeEventListener("click", playTree3);
		page.page1_tree4_mc.removeEventListener("click", playTree4);
		page.page1_humble_mc.removeEventListener("click", playHumbleAnimation);
		page.page1_stumble_mc.removeEventListener("click", playStumbleAnimation);
		page.page1_grumble_mc.removeEventListener("click", playGrumbleAnimation);
		page.page1_text1_mc.removeEventListener("click", playLine1);
		page.page1_text2_mc.removeEventListener("click", playLine2);
		page.page1_text3_mc.removeEventListener("click", playLine3);
		page.page1_text4_mc.removeEventListener("click", playLine4);
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
					page2();
				}
				else if (previous){
					page0();
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}