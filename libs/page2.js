function page2(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page2_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "2", 1);
	
	//* Add the page *//
	stage.addChildAt(page, 1);

	//text//
	page.page2_text_mc.alpha = 0;
	let textFade = new Fade(page.page2_text_mc);
	
	//interactive elements//
	page.page2_bird_mc.addEventListener("click", playBird);
	page.page2_mouse_mc.addEventListener("click", playMouse);
	page.page2_grumble_mc.addEventListener("click", playGrumbleAnimation);
	page.page2_humble_mc.addEventListener("click", playHumbleAnimation);
	page.page2_stumble_mc.addEventListener("click", playStumbleAnimation);

	//page fader//
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);
			if(!previousButtonAdded){
				addPreviousButton();
				previousButtonAdded = true;
			}
			previousButton.addEventListener("click", gotoPreviousPage);

			playText();
			}

		}

	//* Handle The Audio *//
	function playText() {
		createjs.Sound.stop();
		audio = page2Line1;
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
				audioComplete = true;
				page.page2_text_mc.addEventListener("click", playText);
			}
		
		function fadeUpText() {
			textFade.FadeUp();
			if (textFade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	//* Loop animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let bird = new Animations(page.page2_bird_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let mouse = new Animations(page.page2_mouse_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page2_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let grumble = new Animations(page.page2_grumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let humble = new Animations(page.page2_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		bird.Loop();
		mouse.Loop();
		stumble.Loop();
		grumble.Loop();
		humble.Loop();
	}

	//page interactions //

	function playBird(){
		bird.Play();

	}

	function playMouse(){
		mouse.Play();

	}

	function playStumbleAnimation(){
		if (audioComplete){
			stumbleAffirmative07.play();
		}
		stumble.Play();

	}

	function playGrumbleAnimation(){
		grumble.Play();
		if (audioComplete){
			grumbleAffirmative06.play();
		}
		

	}

	function playHumbleAnimation(){
		humble.Play();
		if (audioComplete){
			humbleAffirmative03.play();
		}
		

	}

	//* End Of Page*//


	function gotoNextPage(){
		console.log("go to next page");
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		console.log("go to previous page");
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function killPage(){
		//removes all the interactions from the page
		createjs.Sound.stop();
		page.page2_bird_mc.removeEventListener("click", playBird);
		page.page2_mouse_mc.removeEventListener("click", playMouse);
		page.page2_grumble_mc.removeEventListener("click", playGrumbleAnimation);
		page.page2_humble_mc.removeEventListener("click", playHumbleAnimation);
		page.page2_stumble_mc.removeEventListener("click", playStumbleAnimation);
		page.page2_text_mc.removeEventListener("click", playText);
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
					setTimeout(page3, 200);
				}
				else if (previous){
					setTimeout(page1, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}