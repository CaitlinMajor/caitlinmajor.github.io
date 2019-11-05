function page1(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();

	//define page variables //
	next = false;
	previous = false;
	
	//*Add the page*//
	stage.addChildAt(page, 1);

	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp() {
		if (page.fade_mc.alpha >= 0) {
			page.fade_mc.alpha -= fadeAmount;
		}


		if (page.fade_mc.alpha <= 0) {
			if (!pageVisible) {
				pageFaded = false;
				pageVisible = true;
				addPreviousButton();
				previousButton.addEventListener("click", gotoPreviousPage);
				nextButton.addEventListener("click", gotoNextPage);
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}

		}

	}

	// Loop animations //

	//page interactions //

	//Navigation//
	function gotoNextPage(){
		setTimeout(function () {
			console.log("go to next page");
			next = true;
			nextButton.removeEventListener("click", gotoNextPage);
			createjs.Ticker.addEventListener("tick", fadeDown);
		}, 2000);
	}

	function gotoPreviousPage(){
		console.log("go to previous page");
		previous = true;
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.addEventListener("tick", fadeDown);

	}

	function killPage(){
		//removes all the interactions from the page
		stage.removeChild(page);
	}

	function fadeDown() {

		if (page.fade_mc.alpha <= 1) {
			page.fade_mc.alpha += fadeAmount;
		}

		if (page.fade_mc.alpha >= 1) {
			pageVisible = false;
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