var previousButtonVisible = false;

function addPreviousButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	previousButton = new lib.previousbutton_mc();

	stage.addChild(previousButton);
	previousButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton)
	
	function fadeUpButton() {
		if (previousButton.alpha <= 1) {
			previousButton.alpha += fadeAmount;
		}


		if (previousButton.alpha >= 1) {
			if (!previousButtonVisible) {
				previousButtonVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUpButton);
			}

		}

	}

}
