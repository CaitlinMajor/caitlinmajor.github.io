var nextButtonVisible = false;

function addNextButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	nextButton = new lib.nextbutton_mc();

	stage.addChild(nextButton);
	pageSize = page.fade_mc.nominalBounds;
	nextButton.x = pageSize.width;
	nextButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton)
	
	function fadeUpButton() {
		if (nextButton.alpha <= 1) {
			nextButton.alpha += fadeAmount;
		}


		if (nextButton.alpha >= 1) {
			if (!nextButtonVisible) {
				nextButtonVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUpButton);
			}

		}

	}

	// function addPreviousButton() {
	// 	if (page1Loaded){
	// 		stage.addChildAt(previousButton, 2);
	// 		if (previousButton.alpha <= 1) {
	// 			previousButton.alpha += fadeAmount;
	// 		}

	// 		if (previousButton.alpha >= 1) {
	// 			if (!previousButtonVisible) {
	// 				previousButtonVisible = true;
	// 			}

	// 		}

	// 	}
	// }

}
