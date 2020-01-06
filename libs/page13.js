function page13(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page13_mc();

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	createCookie("page", "13", 1);
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.page13_text1_mc.alpha = 0;
	let text1fade = new Fade(page.page13_text1_mc);
	let pageFader = new Fade(page.fade_mc);
	createjs.Ticker.addEventListener("tick", fadeUp);

	page.page13_humble_mc.addEventListener("click", playHumble);
	page.page13_stumble_mc.addEventListener("click", playStumble);
	page.page13_bee1_mc.addEventListener("click", playBee1);
	page.page13_bee2_mc.addEventListener("click", playBee2);
	page.page13_butterfly_mc.addEventListener("click", playButterfly);
	page.page13_ant_mc.addEventListener("click", playAnt);

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

			playLine1();
		}

	}

	//* Handle The Audio *//
	function playLine1() {
		createjs.Sound.stop();
		audio = sounds.getInstance("page13Line1");
		audio.play();

		if (!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
			audio.on("complete", done, null, true);
		}

		function done(){
			audioComplete = true;
			page.page13_yeti_mc.gotoAndPlay("startAnim");
			page.page13_text1_mc.addEventListener("click", playLine1);
		}

		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);

	let yetiUp = new Animations(page.page13_yeti_mc, "endLoop", "startLoop");
	let yetiDown = new Animations(page.page13_yeti_mc, "endDownLoop", "startDownLoop");
	let humble = new Animations(page.page13_humble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let stumble = new Animations(page.page13_stumble_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let bee1 = new Animations(page.page13_bee1_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let bee2 = new Animations(page.page13_bee2_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let butterfly = new Animations(page.page13_butterfly_mc, "endLoop", "startLoop", "endAnim", "startAnim");
	let ant = new Animations(page.page13_ant_mc, "endLoop", "startLoop", "endAnim", "startAnim");

	function loopAnimations(){
		yetiUp.Loop();
		yetiDown.Loop();
		humble.Loop();
		stumble.Loop();
		bee1.Loop();
		bee2.Loop();
		butterfly.Loop();
		ant.Loop();
	}

	//page interactions //

	function playHumble(){
		humble.Play();
		if(audioComplete){
			sounds.getInstance("humbleHappy02").play();
		}
	}

	function playStumble(){
		stumble.Play();
		if(audioComplete){
			sounds.getInstance("stumbleHappyDistant").play();
		}
	}

	function playBee2(){
		bee2.Play();
	}

	function playBee1(){
		bee1.Play();
	}

	function playButterfly(){
		butterfly.Play();
	}

	function playAnt(){
		ant.Play();
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
		page.page13_ant_mc.removeEventListener("click", playAnt);
		page.page13_humble_mc.removeEventListener("click", playHumble);
		page.page13_stumble_mc.removeEventListener("click", playStumble);
		page.page13_bee1_mc.removeEventListener("click", playBee1);
		page.page13_bee2_mc.removeEventListener("click", playBee2);
		page.page13_butterfly_mc.removeEventListener("click", playButterfly);
		page.page13_text1_mc.removeEventListener("click", playLine1);
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
					setTimeout(page14, 200);
				}
				else if (previous){
					setTimeout(page12, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}