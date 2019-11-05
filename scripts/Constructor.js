var fadeAmount = 0.075;
var pageFaded = true;
var pageVisible = false;
var pageLoaded = false;

var nextButtonVisible = false;
var previousButtonVisible = false;
var currentPage = currentPage;

function Constructor() {

	exportRoot.gotoAndStop(0);
	RegisterSounds();
	page0();

	nextButton = exportRoot.nextButton_mc;
	previousButton = exportRoot.previousButton_mc;
	nextButton.alpha = 0;
	previousButton.alpha = 0;
	numPages = 18;
	i = 0;

	function loadPages(){
		if (currentPage == "page0"){
			page0();
		}
		else if (currentPage == "page1"){
			page1();
		}
	}

	createjs.Ticker.addEventListener("tick", addNextButton);

	createjs.Ticker.addEventListener("tick", fadeUp);

	function fadeUp(e) {
		if (page.fade_mc.alpha >= 0) {
			page.fade_mc.alpha -= fadeAmount;
		}


		if (page.fade_mc.alpha <= 0) {
			if (!pageVisible) {
				pageFaded = false;
				pageVisible = true;
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}

		}

	}

	function fadeDown(e) {

		if (page.fade_mc.alpha <= 1) {
			page.fade_mc.alpha += fadeAmount;
		}

		if (page.fade_mc.alpha >= 1) {
			if (pageVisible) {
				pageVisible = false;
				pageFaded = true;
				createjs.Ticker.removeEventListener("tick", fadeDown);
				exportRoot.gotoAndStop(currentPage);
				loadPages();
				//createjs.Ticker.addEventListener("tick", fadeUp);
			}

		}
	}

	function addNextButton(){
		if (soundsLoaded){
			if (nextButton.alpha <= 1) {
				nextButton.alpha += fadeAmount;
			}

			if (nextButton.alpha >= 1) {
				if (!nextButtonVisible) {
					nextButton.addEventListener("click", nextPage);
					nextButtonVisible = true;
					createjs.Ticker.removeEventListener("tick", addNextButton);
				}

			}
		}
	}

	function addPreviousButton(e) {
		if (previousButton.alpha <= 1) {
			previousButton.alpha += fadeAmount;
		}

		if (previousButton.alpha >= 1) {
			if (!previousButtonVisible) {
				previousButton.addEventListener("click", previousPage);
				previousButtonVisible = true;
				createjs.Ticker.removeEventListener("tick", addPreviousButton);
			}

		}

	}

	function nextPage(){
		if(i < numPages){
			createjs.Ticker.addEventListener("tick", fadeDown);
			i++;
			currentPage = "page"+i;
			console.log(currentPage);
		}
		createjs.Ticker.addEventListener("tick", addPreviousButton);

	}

	function previousPage(){
		if(i > 0){
			i--;
			currentPage = "page"+i;

			console.log(currentPage);
		}

	}

}



// 	function fadeUpNextButton(e) {
// 		if (nextButton.alpha <= 1) {
// 			nextButton.alpha += fadeAmount;
// 		}

// 		if (nextButton.alpha >= 1) {
// 			if (!nextButtonVisible) {
// 				nextButton.addEventListener("click", nextpage);
// 				nextButtonVisible = true;
// 				createjs.Ticker.removeEventListener("tick", fadeUpNextButton);
// 			}

// 		}

// 	}

// 	function fadeUpPreviousButton(e) {
// 		if (previousButton.alpha <= 1) {
// 			previousButton.alpha += fadeAmount;
// 		}

// 		if (previousButton.alpha >= 1) {
// 			if (!previousButtonVisible) {
// 				previousButton.addEventListener("click", previouspage);
// 				previousButtonVisible = true;
// 				createjs.Ticker.removeEventListener("tick", fadeUpPreviousButton);
// 			}

// 		}

// 	}

// 	function fadeDownPreviousButton(e) {
// 		if (previousButton.alpha >= 0) {
// 			previousButton.alpha -= fadeAmount;
// 		}

// 		if (previousButton.alpha <= 0) {
// 			if (previousButtonVisible == true) {
// 				previousButton.removeEventListener("click", previouspage);
// 				_this.removeChild(previousButton);
// 				previousButtonVisible = false;
// 				createjs.Ticker.removeEventListener("tick", fadeDownPreviousButton);
// 			}

// 		}

// 	}

// 	function nextpage() {
// 		nextButton.removeEventListener("click", nextpage);
// 		nextWaitTime();
// 		if (pageNumber == 0) {
// 			killCover();
// 			createjs.Ticker.addEventListener("tick", goTopage1);
// 		}
// 		if (pageNumber == 1) {
// 			killpage1();
// 			createjs.Ticker.addEventListener("tick", goTopage2);
// 		}
		
// 		if (pageNumber == 2) {
// 			killpage2();
// 			createjs.Ticker.addEventListener("tick", goTopage3);
// 		}
		
// 		if (pageNumber == 3) {
// 			killpage3();
// 			createjs.Ticker.addEventListener("tick", goTopage4);
// 		}
		
// 		if (pageNumber == 4) {
// 			killpage4();
// 			createjs.Ticker.addEventListener("tick", goTopage5);
// 		}
		
// 		if (pageNumber == 5) {
// 			killpage5();
// 			createjs.Ticker.addEventListener("tick", goTopage6);
// 		}
		
// 		if (pageNumber == 6) {
// 			killpage6();
// 			createjs.Ticker.addEventListener("tick", goTopage7);
// 		}
		
// 		if (pageNumber == 7) {
// 			killpage7();
// 			createjs.Ticker.addEventListener("tick", goTopage8);
// 		}
		
// 		if (pageNumber == 8) {
// 			killpage8();
// 			createjs.Ticker.addEventListener("tick", goTopage9);
// 		}
		
// 		if (pageNumber == 9) {
// 			killpage9();
// 			createjs.Ticker.addEventListener("tick", goTopage10);
// 		}
		
// 		if (pageNumber == 10) {
// 			killpage10();
// 			createjs.Ticker.addEventListener("tick", goTopage11);
// 		}
		
// 		if (pageNumber == 11) {
// 			killpage11();
// 			createjs.Ticker.addEventListener("tick", goTopage12);
// 		}
		
// 		if (pageNumber == 12) {
// 			killpage12();
// 			createjs.Ticker.addEventListener("tick", goTopage13);
// 		}
		
// 		if (pageNumber == 13) {
// 			killpage13();
// 			createjs.Ticker.addEventListener("tick", goTopage14);
// 		}
		
// 		if (pageNumber == 14) {
// 			killpage14();
// 			createjs.Ticker.addEventListener("tick", goTopage15);
// 		}
		
// 		if (pageNumber == 15) {
// 			killpage15();
// 			createjs.Ticker.addEventListener("tick", goTopage16);
// 		}
		
// 		if (pageNumber == 16) {
// 			killpage16();
// 			createjs.Ticker.addEventListener("tick", goTopage17);
// 		}
		
// 		if (pageNumber == 17) {
// 			killpage17();
// 			createjs.Ticker.addEventListener("tick", goTopage18);
// 		}
		

// 		if (pageNumber < 18) {
// 			pageNumber++;
// 		}
// 	}

// 	function previouspage() {
// 		previousButton.removeEventListener("click", previouspage);
// 		previousWaitTime();
// 		if (pageNumber == 1) {
// 			killpage1();
// 			createjs.Ticker.addEventListener("tick", goToCover);
// 		}

// 		if (pageNumber == 2) {
// 			killpage2();
// 			createjs.Ticker.addEventListener("tick", goTopage1);
// 		}
		
// 		if (pageNumber == 3) {
// 			killpage3();
// 			createjs.Ticker.addEventListener("tick", goTopage2);
// 		}
		
// 		if (pageNumber == 4) {
// 			killpage4();
// 			createjs.Ticker.addEventListener("tick", goTopage3);
// 		}
		
// 		if (pageNumber == 5) {
// 			killpage5();
// 			createjs.Ticker.addEventListener("tick", goTopage4);
// 		}
		
// 		if (pageNumber == 6) {
// 			killpage6();
// 			createjs.Ticker.addEventListener("tick", goTopage5);
// 		}
		
// 		if (pageNumber == 7) {
// 			killpage7();
// 			createjs.Ticker.addEventListener("tick", goTopage6);
// 		}
		
// 		if (pageNumber == 8) {
// 			killpage8();
// 			createjs.Ticker.addEventListener("tick", goTopage7);
// 		}
		
// 		if (pageNumber == 9) {
// 			killpage9();
// 			createjs.Ticker.addEventListener("tick", goTopage8);
// 		}
		
// 		if (pageNumber == 10) {
// 			killpage10();
// 			createjs.Ticker.addEventListener("tick", goTopage9);
// 		}
		
// 		if (pageNumber == 11) {
// 			killpage11();
// 			createjs.Ticker.addEventListener("tick", goTopage10);
// 		}
		
// 		if (pageNumber == 12) {
// 			killpage12();
// 			createjs.Ticker.addEventListener("tick", goTopage11);
// 		}
		
// 		if (pageNumber == 13) {
// 			killpage13();
// 			createjs.Ticker.addEventListener("tick", goTopage12);
// 		}
		
// 		if (pageNumber == 14) {
// 			killpage14();
// 			createjs.Ticker.addEventListener("tick", goTopage13);
// 		}
		
// 		if (pageNumber == 15) {
// 			killpage15();
// 			createjs.Ticker.addEventListener("tick", goTopage14);
// 		}
		
// 		if (pageNumber == 16) {
// 			killpage16();
// 			createjs.Ticker.addEventListener("tick", goTopage15);
// 		}
		
// 		if (pageNumber == 17) {
// 			killpage17();
// 			createjs.Ticker.addEventListener("tick", goTopage16);
// 		}
		
// 		if (pageNumber == 18) {
// 			killpage18();
// 			createjs.Ticker.addEventListener("tick", goTopage17);
// 		}

// 		if (pageNumber > 0) {
// 			pageNumber--;
// 		}
// 	}

// 	function goToCover(e) {

// 		createjs.Ticker.addEventListener("tick", fadeDownPreviousButton);

// 		if (pageFaded == true) {
// 			addCover();
// 			_this.addChild(titleButton);
// 			createjs.Ticker.removeEventListener("tick", goToCover);
// 		}
// 	}

// 	function goTopage1(e) {
// 		if (pageFaded == true) {
// 			addpage1();
// 			createjs.Ticker.removeEventListener("tick", goTopage1);
// 		}
// 	}

// 	function goTopage2(e) {
// 		if (pageFaded == true) {
// 			addpage2();
// 			createjs.Ticker.removeEventListener("tick", goTopage2);
// 		}

// 	}

// 	function goTopage3(e) {
// 		if (pageFaded == true) {
// 			addpage3();
// 			createjs.Ticker.removeEventListener("tick", goTopage3);
// 		}

// 	}

// 	function goTopage4(e) {
// 		if (pageFaded == true) {
// 			addpage4();
// 			createjs.Ticker.removeEventListener("tick", goTopage4);
// 		}

// 	}

// 	function goTopage5(e) {
// 		if (pageFaded == true) {
// 			addpage5();
// 			createjs.Ticker.removeEventListener("tick", goTopage5);
// 		}

// 	}

// 	function goTopage6(e) {
// 		if (pageFaded == true) {
// 			addpage6();
// 			createjs.Ticker.removeEventListener("tick", goTopage6);
// 		}

// 	}

// 	function goTopage7(e) {
// 		if (pageFaded == true) {
// 			addpage7();
// 			createjs.Ticker.removeEventListener("tick", goTopage7);
// 		}

// 	}

// 	function goTopage8(e) {
// 		if (pageFaded == true) {
// 			addpage8();
// 			createjs.Ticker.removeEventListener("tick", goTopage8);
// 		}

// 	}

// 	function goTopage9(e) {
// 		if (pageFaded == true) {
// 			addpage9();
// 			createjs.Ticker.removeEventListener("tick", goTopage9);
// 		}

// 	}

// 	function goTopage10(e) {
// 		if (pageFaded == true) {
// 			addpage10();
// 			createjs.Ticker.removeEventListener("tick", goTopage10);
// 		}

// 	}

// 	function goTopage11(e) {
// 		if (pageFaded == true) {
// 			addpage11();
// 			createjs.Ticker.removeEventListener("tick", goTopage11);
// 		}

// 	}

// 	function goTopage12(e) {
// 		if (pageFaded == true) {
// 			addpage12();
// 			createjs.Ticker.removeEventListener("tick", goTopage12);
// 		}

// 	}

// 	function goTopage13(e) {
// 		if (pageFaded == true) {
// 			addpage13();
// 			createjs.Ticker.removeEventListener("tick", goTopage13);
// 		}

// 	}

// 	function goTopage14(e) {
// 		if (pageFaded == true) {
// 			addpage14();
// 			createjs.Ticker.removeEventListener("tick", goTopage14);
// 		}

// 	}

// 	function goTopage15(e) {
// 		if (pageFaded == true) {
// 			addpage15();
// 			createjs.Ticker.removeEventListener("tick", goTopage15);
// 		}

// 	}

// 	function goTopage16(e) {
// 		if (pageFaded == true) {
// 			addpage16();
// 			createjs.Ticker.removeEventListener("tick", goTopage16);
// 		}

// 	}

// 	function goTopage17(e) {
// 		if (pageFaded == true) {
// 			addpage17();
// 			createjs.Ticker.removeEventListener("tick", goTopage17);
// 		}

// 	}

// 	function goTopage18(e) {
// 		if (pageFaded == true) {
// 			addpage18();
// 			createjs.Ticker.removeEventListener("tick", goTopage18);
// 		}

// 	}

// 	function nextWaitTime() {
// 		setTimeout(function () {
// 			nextButton.addEventListener("click", nextpage);
// 		}, 2000);
// 	}

// 	function previousWaitTime() {
// 		setTimeout(function () {
// 			previousButton.addEventListener("click", previouspage);
// 		}, 2000);
// 	} 