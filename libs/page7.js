function page7(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page7_mc();
	pageIndex = 7;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "7");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.text1.alpha = 0;
	page.text2.alpha = 0;
	page.text3.alpha = 0;
	page.text4.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);
	let text3fade = new Fade(page.text3);
	let text4fade = new Fade(page.text4);
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
		sounds.getInstance("page7Line1").play();

		if(!audioComplete){
			sounds.getInstance("page7Line1").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			playLine2();
		}
	}

	function playLine2() {
		createjs.Sound.stop();
		sounds.getInstance("page7Line2").play();

		if(!audioComplete){
			sounds.getInstance("page7Line2").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			playLine3();
		}
	}

	function playLine3() {
		createjs.Sound.stop();
		sounds.getInstance("page7Line3").play();

		if(!audioComplete){
			sounds.getInstance("page7Line3").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			playLine4();
		}
	}

	function playLine4() {
		createjs.Sound.stop();
		sounds.getInstance("page7Line4").play();

		if(!audioComplete){
			sounds.getInstance("page7Line4").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text4fade.FadeUp();
			if (text4fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.duckling1.addEventListener("click", playDuckling1);
			page.duckling2.addEventListener("click", playDuckling2);
			page.turtle.addEventListener("click", playTurtle);
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.text3.addEventListener("click", playLine3);
			page.text4.addEventListener("click", playLine4);
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let duckling1 = new Animations(page.duckling1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling2 = new Animations(page.duckling2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let turtle = new Animations(page.turtle, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		duckling1.Loop();
		duckling2.Loop();
		turtle.Loop();
	}

	//page interactions //

	function playDuckling1(){
		setTimeout(chirp, 400);
		duckling1.Play();
	}

	function playDuckling2(){
		setTimeout(chirp, 400);
		duckling2.Play();
	}

	function playTurtle(){
		turtle.Play();
	}

	function chirp(){
		sounds.getInstance("babyDuckQuack").play();
	}

	//Navigation//
	function gotoNextPage(){
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	killPage = function(){
		createjs.Sound.stop();
		page.duckling1.removeEventListener("click", playDuckling1);
		page.duckling2.removeEventListener("click", playDuckling2);
		page.turtle.removeEventListener("click", playTurtle);
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
		page.text3.removeEventListener("click", playLine3);
		page.text4.removeEventListener("click", playLine4);
		createjs.Ticker.off("tick", looper);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
	pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					setTimeout(page8, 200);
				}
				else if (previous){
					setTimeout(page6, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}