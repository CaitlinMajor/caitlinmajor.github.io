var fadeAmount = 0.075;
var pageFaded = true;
var pageVisible = false;
var pageLoaded = false;

function FadePageUp {

createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp(e) {
		if (Page.alpha >= 0) {
			Page.alpha -= fadeAmount;
		}


		if (Page.alpha <= 0) {
			if (!pageVisible) {
				pageFaded = false;
				pageVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}

		}

	}
}

class FadePageDown{

	function fadeDown(e) {

		if (Page.alpha <= 1) {
			Page.alpha += fadeAmount;
		}

		if (Page.alpha >= 1) {
			if (pageVisible) {
				pageVisible = false;
				pageLoaded = false;
				pageFaded = true;
			}

		}
	}
}