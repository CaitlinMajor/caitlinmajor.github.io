function page0(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	pageIndex = 0;
	
	//* Add the page *//
	stage.addChildAt(page, 1);

	MEDIABOX.setSaveDataEntry("page", "0");
	
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
		
		sounds.getInstance("page0Title").play();
		sounds.getInstance("page0Title").on("complete", done, null, true)

		function done(){
			//* Add the next button *//	
			if(!nextButtonAdded){
				addNextButton();
				nextButtonAdded = true;
			}
			nextButton.addEventListener("click", gotoNextPage);

			//* Add Interaction *//
			page.title.addEventListener("click", playTitle);
			page.ugly.addEventListener("click", playUgly);
			page.turtle.addEventListener("click", playTurtle);
			page.mother.addEventListener("click", playMother);
			page.duckling1.addEventListener("click", playDuckling1);
			page.duckling2.addEventListener("click", playDuckling2);
			page.on("mousedown", mouseDownHandler);
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let title = new Animations(page.title, "endLoop", "startLoop");
	let turtle = new Animations(page.turtle, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling1 = new Animations(page.duckling1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling2 = new Animations(page.duckling2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		title.Loop();
		turtle.Loop();
		ugly.Loop();
		mother.Loop();
		duckling1.Loop();
		duckling2.Loop();
	}

	 function playTitle(){
	 	sounds.getInstance("page0Title").play();
	}

	function playUgly() {
		setTimeout(squonk, 400)
		ugly.Play();
	}

	function playTurtle() {
		turtle.Play();
	}

	function playMother() {
		setTimeout(quack, 400)
		mother.Play();
	}

	function playDuckling1() {
		setTimeout(chirp, 400)
		duckling1.Play();		
	}

	function playDuckling2() {
		setTimeout(chirp, 400)
		duckling2.Play();
	}

	function squonk(){
		sounds.getInstance("squonk").play();
	}

	function quack(){
		sounds.getInstance("mamaDuckQuack").play();
	}

	function chirp(){
		sounds.getInstance("babyDuckQuack").play();
	}


	//Go to the next page//
	function gotoNextPage(){
		next = true;
		firstTime = false;
		nextButton.removeEventListener("click", gotoNextPage);
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	killPage = function(){
		createjs.Sound.stop();
		page.title.removeEventListener("click", playTitle);
		page.ugly.removeEventListener("click", playUgly);
		page.turtle.removeEventListener("click", playTurtle);
		page.mother.removeEventListener("click", playMother);
		page.duckling1.removeEventListener("click", playDuckling1);
		page.duckling2.removeEventListener("click", playDuckling2);
		nextButton.removeEventListener("click", gotoNextPage);
		createjs.Ticker.off("tick", looper);
		stage.removeChild(page); 
	}

	function fadeDown() {
		fader.FadeUp();
		if (fader.faded){
			killPage();
			setTimeout(page1, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}