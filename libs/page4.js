var previousButtonAdded = false;

function page4(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page4_mc();
	nextPage = new lib.page5_preview();
	previousPage = new lib.page3_preview();
	pageIndex = 4;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "4");

	//* Add the page *//
	stage.addChildAt(page, 1);

	//add the next page preview
	nextPageX = canvas.width;
	page.addChild(nextPage);
	nextPage.x = nextPageX;

	//add the previous page preview
	previousPageX = (0-canvas.width);
	page.addChild(previousPage);
	previousPage.x = previousPageX;

	page.text1.alpha = 0;
	page.text2.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);

	playLine1();

	//* Handle The Audio *//
	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page4Line1").play();

		if(!audioComplete){
			sounds.getInstance("page4Line1").on("complete", playLine2, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text1fade.FadeUp();
			if (text1fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}		
	}

	function playLine2() {
		createjs.Sound.stop();
		sounds.getInstance("page4Line2").play();

		if(!audioComplete){
			sounds.getInstance("page4Line2").on("complete", done, null, true);
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
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let curtain = new Animations(page.curtain, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let bubbles = new Animations(page.bubbles, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let sink = new Animations(page.sink, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cabinet = new Animations(page.cabinet, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let tp = new Animations(page.tp, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		curtain.Loop();
		bubbles.Loop();
		sink.Loop();
		cabinet.Loop();
		tp.Loop();
	}

	page.curtain.addEventListener("click", playCurtain);
	page.bubbles.addEventListener("click", playBubbles);
	page.sink.addEventListener("click", playSink);
	page.cabinet.addEventListener("click", playCabinet);
	page.tp.addEventListener("click", playTP);

	//* Page Interactions *//
	function playCurtain(){curtain.Play();}
	function playBubbles(){bubbles.Play();}
	function playSink(){sink.Play();}
	function playCabinet(){cabinet.Play();}
	function playTP(){tp.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.curtain.removeEventListener("click", playCurtain);
		page.bubbles.removeEventListener("click", playBubbles);
		page.sink.removeEventListener("click", playSink);
		page.cabinet.removeEventListener("click", playCabinet);
		page.tp.removeEventListener("click", playTP);
		stage.removeChild(page);
	}
}