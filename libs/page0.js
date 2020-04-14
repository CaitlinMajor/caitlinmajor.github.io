function page0(){

	//* Define page variables *//
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page0_mc();
	nextPage = new lib.page1_preview();
	pageIndex = 0;
	
	//* Add the page *//
	stage.addChildAt(page, 1);

	//add the next page preview
	nextPageX = canvas.width;
	page.addChild(nextPage);
	nextPage.x = nextPageX;

	MEDIABOX.setSaveDataEntry("page", "0");
	
	let fader = new Fade(page.fade_mc);

	if (!firstTime){
		createjs.Ticker.addEventListener("tick", fadeUp);

		function fadeUp() {
			fader.FadeDown();
			if (!fader.faded){
				setTimeout(onLoad, 500)
				createjs.Ticker.removeEventListener("tick", fadeUp);
				firstTime = true;
			}
		}
	}

	else if(firstTime){
		page.fade_mc.alpha=0;
		onLoad();
	}

	//* Handle the audio *//
	function onLoad(){
		sounds.getInstance("page0Title").play();
		sounds.getInstance("page0Title").on("complete", done, null, true)

		function done(){
			//* Add Interaction *//
			page.on("mousedown", mouseDownHandler);
			page.text1.addEventListener("click", playTitle);
		}
	}

	// Loop animations //
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let peekABoo = new Animations(page.peekABoo, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let plant = new Animations(page.plant, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		peekABoo.Loop();
		plant.Loop();
	}

	 function playTitle(){
	 	sounds.getInstance("page0Title").play();
	}

	function playPeekABoo() {
		peekABoo.Play();
	}

	function playPlant() {
		plant.Play();
	}

	page.peekABoo.addEventListener("click", playPeekABoo);
	page.plant.addEventListener("click", playPlant);

	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.text1.removeEventListener("click", playTitle);
		page.peekABoo.removeEventListener("click", playPeekABoo);
		page.plant.removeEventListener("click", playPlant);
		stage.removeChild(page); 
	}
}