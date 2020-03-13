var previousButtonAdded = false;

function page1(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();
	pageIndex = 1;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "1");

	//* Add the page *//
	stage.addChildAt(page, 1);

	page.text1.alpha = 0;
	let text1fade = new Fade(page.text1);
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

			playLine1();
		}
	}

	//* Handle The Audio *//
	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page1Line1").play();
		page.lillypad.addEventListener("click", playLilypad);
		page.mother.addEventListener("click", playMother);

		if(!audioComplete){
			sounds.getInstance("page1Line1").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.text1.addEventListener("click", playLine1);
		}
		
	}

	//* Loop Animations *//
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let lillypad = new Animations(page.lillypad, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		mother.Loop();
		lillypad.Loop();
	}

	//* Page Interactions *//
	function playMother(){
		mother.Play();

	}

	function playLilypad(){
		if(audioComplete){
			sounds.getInstance("frog").play();
		}
		lillypad.Play();
	}

	//* End Of Page*//
	function gotoNextPage(){
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removePreviousButton();
	}

	killPage = function(){
		createjs.Sound.stop();
		page.mother.removeEventListener("click", playMother);
		page.lillypad.removeEventListener("click", playLilypad);
		page.text1.removeEventListener("click", playLine1);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.off("tick", looper);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					setTimeout(page2, 200);
				}
				else if (previous){
					setTimeout(page0, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}