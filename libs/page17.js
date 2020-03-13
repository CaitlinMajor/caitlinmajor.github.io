function page17(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page17_mc();
	pageIndex = 17;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "17");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.text1.alpha = 0;
	page.text2.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);
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
		sounds.getInstance("page17Line1").play();

		if(!audioComplete){
			sounds.getInstance("page17Line1").on("complete", done, null, true);
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
		sounds.getInstance("page17Line2").play();

		if(!audioComplete){
			sounds.getInstance("page17Line2").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.mother.addEventListener("click", playMother);
			page.turtle.addEventListener("click", playTurtle);
			page.ugly.addEventListener("click", playUgly);
			page.swan1.addEventListener("click", playSwan1);
			page.swan2.addEventListener("click", playSwan2);
		}
	}


	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let turtle = new Animations(page.turtle, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let swan1 = new Animations(page.swan1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let swan2 = new Animations(page.swan2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		mother.Loop();
		turtle.Loop();
		ugly.Loop();
		swan1.Loop();
		swan2.Loop();
	}

	//page interactions //

	function playMother(){
		setTimeout(quack, 400);
		mother.Play();
	}

	function playTurtle(){
		turtle.Play();
	}

	function playUgly(){
		ugly.Play();
	}

	function playSwan1(){
		swan1.Play();
	}

	function playSwan2(){
		swan2.Play();
	}

	function quack(){
		sounds.getInstance("mamaDuckQuack").play();
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
		page.mother.removeEventListener("click", playMother);
		page.turtle.removeEventListener("click", playTurtle);
		page.ugly.removeEventListener("click", playUgly);
		page.swan1.removeEventListener("click", playSwan1);
		page.swan2.removeEventListener("click", playSwan2);
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
					setTimeout(page18, 200);
				}
				else if (previous){
					setTimeout(page16, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}