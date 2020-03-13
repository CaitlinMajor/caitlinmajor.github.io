function page3(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page3_mc();
	pageIndex = 3;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "3");

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

	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page3Line1").play();

		if(!audioComplete){
			sounds.getInstance("page3Line1").on("complete", done, null, true);
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
		sounds.getInstance("page3Line2").play();
		page.egg3.addEventListener("click", playEgg3);

		if(!audioComplete){
			sounds.getInstance("page3Line2").on("complete", done, null, true);
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
		sounds.getInstance("page3Line3").play();

		if(!audioComplete){
			sounds.getInstance("page3Line3").on("complete", done, null, true);
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
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.text3.addEventListener("click", playLine3);
		}
	}

	//* Loop animations *//
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling1 = new Animations(page.duckling1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let duckling2 = new Animations(page.duckling2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let egg3 = new Animations(page.egg3, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		mother.Loop();
		duckling1.Loop();
		duckling2.Loop();
		egg3.Loop();
	}

	//page interactions //
	function playMother(){
		mother.Play();
	}

	function playDuckling1(){
		setTimeout(chirp, 400);
		duckling1.Play();
	}

	function playDuckling2(){
		setTimeout(chirp, 400);
		duckling2.Play();
	}

	function playEgg3(){
		egg3.Play();
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
		previous = true;
		previousButton.removeEventListener("click", gotoPreviousPage);
		createjs.Ticker.addEventListener("tick", fadeDown);

	}

	killPage = function(){
		createjs.Sound.stop();
		page.mother.removeEventListener("click", playMother);
		page.duckling1.removeEventListener("click", playDuckling1);
		page.duckling2.removeEventListener("click", playDuckling2);
		page.egg3.removeEventListener("click", playEgg3);
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
					setTimeout(page4, 200);
				}
				else if (previous){
					setTimeout(page2, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}
}