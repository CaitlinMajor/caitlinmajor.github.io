var addButton = function() {

	var addNextButton = function (){
		stage.addChild(nextButton);
		nextButton.alpha = 0;
		createjs.Ticker.addEventListener("tick", fadeUpNext)
	}

	var addPreviousButton = function (){
		stage.addChild(previousButton);
		previousButton.alpha = 0;
	}
		
}

var previousButton = previousButton;

function Navigation(){

	console.log("nav allowed")

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	nextButton = new lib.nextbutton_mc();
	previousButton = new lib.previousbutton_mc();
	nextButtonVisible = false;
	previousButtonVisible = false;

	
	}
	
	function fadeUpNext() {
		console.log("nextButtonFading")
		if (nextButton.alpha >= 0) {
			nextButton.alpha -= fadeAmount;
		}


		if (nextButton.alpha <= 0) {
			if (!nextButtonVisible) {
				nextButtonVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUpNext);
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
