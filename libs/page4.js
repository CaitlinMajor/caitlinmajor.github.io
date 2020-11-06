var previousButtonAdded = false;

function page4(){
	//define page variables //
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page4_mc();
	next = false;
	previous = false;

	//* Add the page *//
	stage.addChildAt(page, 1);

	let pageFader = new Fade(page.fade_mc);

	createjs.Ticker.addEventListener("tick", fadeUp);

	function addNavButtons(){
		if(!previousButtonAdded){
			addPreviousButton();
			previousButtonAdded = true;
		}
		previousButton.addEventListener("click", gotoPreviousPage);
		if(!musicButtonAdded){
			addMusicButton();
			musicButtonAdded = true;
		}
		musicButton.addEventListener("click", toggleMusic);
	}

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			addNavButtons();
		}
	}
	
	//* Navigation *//
	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
			setTimeout(page3, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}
	}

	//* End Of Page*//
	killPage = function(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}
}