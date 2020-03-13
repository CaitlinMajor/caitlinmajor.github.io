function page2(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page2_mc();
	pageIndex = 2;

	//define page variables //
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "2");
	
	//* Add the page *//
	stage.addChildAt(page, 1);

	//text//
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

	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page2Line1").play();
		page.lilypads.addEventListener("click", playLilypads);

		if(!audioComplete){
			sounds.getInstance("page2Line1").on("complete", done, null, true);
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
		sounds.getInstance("page2Line2").play();

		if (!audioComplete){
			sounds.getInstance("page2Line2").on("complete", done, null, true);
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
			page.mother.addEventListener("click", playMother);
			page.egg1.addEventListener("click", playEgg1);
			page.egg2.addEventListener("click", playEgg2);
			page.egg3.addEventListener("click", playEgg3);
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
		}
	}

	//* Loop animations *//
	looper = createjs.Ticker.on("tick", loopAnimations);
	let mother = new Animations(page.mother, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let egg1 = new Animations(page.egg1, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let egg2 = new Animations(page.egg2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let egg3 = new Animations(page.egg3, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let lilypads = new Animations(page.lilypads, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		mother.Loop();
		egg1.Loop();
		egg2.Loop();
		egg3.Loop();
		lilypads.Loop();
	}

	//page interactions //
	function playMother(){
		setTimeout(quack, 300);
		mother.Play();
	}

	function playEgg1(){
		sounds.getInstance("babyChirp").play();
		egg1.Play();
	}

	function playEgg2(){
		sounds.getInstance("babyChirp").play();
		egg2.Play();
	}

	function playEgg3(){
		egg3.Play();
	}

	function playLilypads(){
		lilypads.Play();
	}

	function quack(){
		sounds.getInstance("mamaDuckQuack").play();
	}

	//* End Of Page*//
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
		page.egg1.removeEventListener("click", playEgg1);
		page.egg2.removeEventListener("click", playEgg2);
		page.egg3.removeEventListener("click", playEgg3);
		page.lilypads.removeEventListener("click", playLilypads);
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
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
					setTimeout(page3, 200);
				}
				else if (previous){
					setTimeout(page1, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

}