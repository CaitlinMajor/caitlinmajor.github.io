function page15(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page15_mc();
	pageIndex = 15;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "15");
	
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
		sounds.getInstance("page15Line1").play();

		if(!audioComplete){
			sounds.getInstance("page15Line1").on("complete", done, null, true);
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
		sounds.getInstance("page15Line2").play();

		if(!audioComplete){
			sounds.getInstance("page15Line2").on("complete", done, null, true);
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
		sounds.getInstance("page15Line3").play();

		if(!audioComplete){
			page.ugly.gotoAndPlay("startAnim");
			sounds.getInstance("page15Line3").on("complete", done, null, true);
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
			page.turtle.addEventListener("click", playTurtle);
			page.ugly.addEventListener("click", playUgly);
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let turtle = new Animations(page.turtle, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop2", "startLoop2", "endClickAnim", "startClickAnim");
	let uglyStart = new Animations(page.ugly, "endLoop1", "startLoop1");

	function loopAnimations(){
		turtle.Loop();
		mother.Loop();
		ugly.Loop();
		uglyStart.Loop();
	}

	//page interactions //

	function playMother(){
		mother.Play();
	}

	function playUgly(){
		setTimeout(squonk, 200);
		ugly.Play();
	}

	function playTurtle(){
		turtle.Play();
	}

	function squonk(){
		sounds.getInstance("squonk").play();
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
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
		page.text3.removeEventListener("click", playLine3);
		page.mother.removeEventListener("click", playMother);
		page.turtle.removeEventListener("click", playTurtle);
		page.ugly.removeEventListener("click", playUgly);
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
					setTimeout(page16, 200);
				}
				else if (previous){
					setTimeout(page14, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}