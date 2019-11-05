function CoverScript (){

exportRoot.gotoAndStop("Cover");

createjs.ticker.addEventListener("tick", checkingVariables)

function checkingVariables(e){
	console.log("page Faded "pageFaded);
	console.log("page Visible "pageVisible);
	console.log("page Loaded "pageLoaded);
}

createjs.Ticker.addEventListener("tick", fadeUpCover);


function fadeUpCover(e) {
	if (exportRoot.cover_mc.fade_mc.alpha >= 0) {
		exportRoot.cover_mc.fade_mc.alpha -= fadeAmount;
	}

	// if (titleButton.alpha <= 1) {
	// 	titleButton.alpha += fadeAmount;
	// }


	if (exportRoot.cover_mc.fade_mc.alpha <= 0) {
		if (!pageVisible) {
			pageFaded = false;
			pageVisible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpCover);
		}

	}

}



function fadeDownCover(e) {

	if (exportRoot.cover_mc.fade_mc.alpha <= 1) {
		exportRoot.cover_mc.fade_mc.alpha += fadeAmount;
	}

	// if (titleButton.alpha >= 0) {
	// 	titleButton.alpha -= fadeAmount;
	// }

	if (exportRoot.cover_mc.fade_mc.alpha >= 1) {
		if (pageVisible) {
			pageVisible = false;
			pageLoaded = false;
			pageFaded = true;
			createjs.Ticker.removeEventListener("tick", loopCoverAnimations);
		}

	}
}

}