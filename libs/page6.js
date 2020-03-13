function page6(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page6_mc();
	pageIndex = 6;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "6");
	
	//*Add the page*//
	stage.addChildAt(page, 1);
	page.text1.alpha = 0;
	let text1fade = new Fade(page.text1);
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

	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page6Line1").play();
		page.fish.addEventListener("click", playFish);

		if(!audioComplete){
			sounds.getInstance("page6Line1").on("complete", done, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}

		function done(){
			audioComplete = true;
			page.mother.addEventListener("click", playMother);
			page.duckling1.addEventListener("click", playDuckling1);
			page.duckling2.addEventListener("click", playDuckling2);
			page.ugly.addEventListener("click", playUgly);
			page.turtle.addEventListener("click", playTurtle);
			page.text1.addEventListener("click", playLine1);
			
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling1 = new Animations(page.duckling1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling2 = new Animations(page.duckling2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let turtle = new Animations(page.turtle, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let fish = new Animations(page.fish, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		mother.Loop();
		duckling1.Loop();
		duckling2.Loop();
		ugly.Loop();
		turtle.Loop();
		fish.Loop();
	}

	//page interactions //

	function playMother(){
		setTimeout(quack, 400);
		mother.Play();
	}

	function playDuckling1(){
		duckling1.Play();
	}

	function playDuckling2(){
		duckling2.Play();
	}

	function playUgly(){
		ugly.Play();
	}

	function playTurtle(){
		turtle.Play();
	}

	function playFish(){
		fish.Play();
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
		page.mother.removeEventListener("click", playMother);
		page.duckling1.removeEventListener("click", playDuckling1);
		page.duckling2.removeEventListener("click", playDuckling2);
		page.ugly.removeEventListener("click", playUgly);
		page.turtle.removeEventListener("click", playTurtle);
		page.text1.removeEventListener("click", playLine1);
		page.fish.removeEventListener("click", playFish);
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
					setTimeout(page7, 200);
				}
				else if (previous){
					setTimeout(page5, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}