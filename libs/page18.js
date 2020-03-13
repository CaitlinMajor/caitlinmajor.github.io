function page18(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page18_mc();
	pageIndex = 18;

	//define page variables //
	previous = false;
	next = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "18");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.text1.alpha = 0;
	page.text2.alpha = 0;
	page.text3.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);
	let text3fade = new Fade(page.text3);
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
		sounds.getInstance("page18Line1").play();

		if(!audioComplete){
			sounds.getInstance("page18Line1").on("complete", done, null, true);
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
		sounds.getInstance("page18Line2").play();

		if(!audioComplete){
			sounds.getInstance("page18Line2").on("complete", done, null, true);
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
		page.mother.gotoAndPlay("startAnim");
		sounds.getInstance("page18Line3").play();

		if(!audioComplete){
			sounds.getInstance("page18Line3").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text3fade.FadeUp();
			if (text3fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.text3.addEventListener("click", playLine3);
			page.mother.addEventListener("click", playMother);
			page.ugly.addEventListener("click", playUgly);
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		mother.Loop();
		ugly.Loop();

		if (page.mother.currentLabel == "endAnim"){
			page.mother.gotoAndPlay("startLoop");
		}
	}

	//page interactions //

	function playMother(){
		mother.Play();
	}

	function playUgly(){
		ugly.Play();
	}

	//Navigation//
	function gotoNextPage(){
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removeNextButton();
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.off("tick", looper);
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
		page.text3.removeEventListener("click", playLine3);
		page.mother.removeEventListener("click", playMother);
		page.ugly.removeEventListener("click", playUgly);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
			if (next) {
					setTimeout(page19, 200);
				}
				else if (previous){
					setTimeout(page17, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}