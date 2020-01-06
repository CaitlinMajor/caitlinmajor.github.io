function page6(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page6_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "6", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page6_text1_mc.alpha = 0;
	page.page6_text2_mc.alpha = 0;
	let text1fade = new Fade(page.page6_text1_mc);
	let text2fade = new Fade(page.page6_text2_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page6_stumble_mc.addEventListener("click", playStumble);

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

			playYetiAudio();
		}

	}

	//* Handle The Audio *//
	function playYetiAudio() {
		createjs.Sound.stop();
		audio = sounds.getInstance("page6YetiLine1");
		audio.play();

		if (!audioComplete){
			page.page6_yeti_mc.gotoAndPlay("startAnim");
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
		audio = sounds.getInstance("page6Line1");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page6_text1_mc.addEventListener("click", playYetiAudio);
			page.page6_text2_mc.addEventListener("click", playLine2);
			page.page6_yeti_mc.addEventListener("click", playYeti);
		}

		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let yetiClick = new Animations(page.page6_yeti_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let stumble = new Animations(page.page6_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		yetiClick.Loop();
		stumble.Loop();
	}

	//page interactions //

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			sounds.getInstance("stumbleScared07").play();
		}
	}

	function playYeti(){
		yetiClick.Play();
		if(audioComplete){
			sounds.getInstance("yetiArgh").play();
		}

	}

	//Navigation//
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
		page.page6_yeti_mc.removeEventListener("click", playYeti);
		page.page6_stumble_mc.removeEventListener("click", playStumble);
		page.page6_text1_mc.removeEventListener("click", playYetiAudio);
		page.page6_text2_mc.removeEventListener("click", playLine2);
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
					setTimeout(page7, 200);
				}
				else if (previous){
					setTimeout(page5, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}