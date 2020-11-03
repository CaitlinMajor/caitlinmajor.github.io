function page0(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	//nextPage = new lib.page1_preview();
	pageIndex = 0;
	audioComplete = false;
	
	//* Add the page *//
	stage.addChildAt(page, 0);

	MEDIABOX.setSaveDataEntry("page", "0");
	
	let fader = new Fade(page.fade_mc);

	if(previousButtonAdded){
		removePreviousButton();
		previousButtonAdded = false;
	}

	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		fader.FadeDown();
		if (!fader.faded){
			setTimeout(onLoad, 500)
			createjs.Ticker.removeEventListener("tick", fadeUp);
			firstTime = true;
		}
	}

	//* Handle the audio *//
	function onLoad(){
		setInterval(intervalHeartbeat, 1000);
		navButtonPressed = false;
		sounds.getInstance("title").play();

		if (!audioComplete){sounds.getInstance("title").on("complete", done, null, true);}

		function done(){

			pageLoaded = true;

			audioComplete = true;

			//* Add the next button *//	
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);

			if(!musicButtonAdded){
				addMusicButton();
				musicButtonAdded = true;
			}
			musicButton.addEventListener("click", toggleMusic);

			//* Add Interaction *//
			//page.on("mousedown", mouseDownHandler);
			page.text1.addEventListener("click", playTitle);

		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let finnyAnim = new Animations(page.finny_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		finnyAnim.Loop();
	}

	page.finny_mc.addEventListener("click", playFinny);

	 function playTitle(){
	 	sounds.getInstance("title").play();
	}

	function playFinny(){
		finnyAnim.Play(); 
		if (audioComplete){sounds.getInstance("finnyGiggle").play();}
		setTimeout(gotoNextPage, 2000);
	}

	//Go to the next page//
	function gotoNextPage(){
		console.log("page 0 going to page 1")
		next = true;
		nextButton.removeEventListener("click", gotoNextPage);
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			killPage();
			setTimeout(page1, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

	killPage = function(){
		sounds.getInstance("title").stop();
		sounds.getInstance("finnyGiggle").stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.finny_mc.removeEventListener("click", playFinny);
		page.text1.removeEventListener("click", playTitle);
		nextButton.removeEventListener("click", gotoNextPage);
		stage.removeChild(page); 
	}
}