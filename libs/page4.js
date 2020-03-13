function page4(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page4_mc();
	pageIndex = 4;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "4");
	
	//*Add the page*//
	stage.addChildAt(page, 1);

	//text//
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
		sounds.getInstance("page4Line1").play();

		if(!audioComplete){
			sounds.getInstance("page4Line1").on("complete", done, null, true);
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
		sounds.getInstance("page4Line2").play();

		if(!audioComplete){
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text2fade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
	}

	function playLine3() {
		createjs.Sound.stop();
		sounds.getInstance("page4Line3").play();

		if(!audioComplete){
			sounds.getInstance("page4Line3").on("complete", done, null, true);
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
			page.mother.addEventListener("click", playMother);
			page.duckling1.addEventListener("click", playDuckling1);
			page.duckling2.addEventListener("click", playDuckling2);
			page.ugly.addEventListener("click", playUgly);
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.text3.addEventListener("click", playLine3);
		}
	}

	// Loop animations //
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling1 = new Animations(page.duckling1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling2 = new Animations(page.duckling2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let ugly = new Animations(page.ugly, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){

		mother.Loop();
		duckling1.Loop();
		duckling2.Loop();
		ugly.Loop();

		if (page.ugly.currentLabel == "squonk"){
			sounds.getInstance("squonk").play();
		}

		if (page.ugly.currentLabel == "endAnim"){
			playLine3();
		}
	}

	//page interactions //
	function playMother() {
		setTimeout(quack, 400);
		mother.Play();
	}

	function playDuckling1() {
		setTimeout(chirp, 200);
		duckling1.Play();
	}

	function playDuckling2() {
		setTimeout(chirp, 400);
		duckling2.Play();
	}

	function playUgly(){
		sounds.getInstance("squonk").play();
		ugly.Play();
	}

	function quack(){
		sounds.getInstance("mamaDuckQuack").play();
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
		page.mother.removeEventListener("click", playMother);
		page.duckling1.removeEventListener("click", playDuckling1);
		page.duckling2.removeEventListener("click", playDuckling2);
		page.ugly.removeEventListener("click", playUgly);
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
		page.text3.removeEventListener("click", playLine3);
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
					setTimeout(page5, 200);
				}
				else if (previous){
					setTimeout(page3, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}