var previousButtonAdded = false;

function page6(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page6_mc();
	nextPage = new lib.page7_preview();
	previousPage = new lib.page5_preview();
	pageIndex = 6;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "6");

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
		sounds.getInstance("page6Line1").play();

		if(!audioComplete){
			sounds.getInstance("page6Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page6Line2").play();

		if(!audioComplete){
			sounds.getInstance("page6Line2").on("complete", done, null, true);
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
	let ball = new Animations(page.ball, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let crayonsUP = new Animations(page.crayons, "endLoop", "startLoop", "startClickAnim");
	let crayonsDown = new Animations(page.crayons, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let toys = new Animations(page.toys, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let toysOL = new Animations(page.toysOL, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let toybox = new Animations(page.toybox, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let books = new Animations(page.books, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let plant = new Animations(page.plant, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let curtain = new Animations(page.curtain, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		ball.Loop();
		crayonsUP.Loop();
		crayonsDown.Loop();
		toys.Loop();
		toysOL.Loop();
		toybox.Loop();
		books.Loop();
		plant.Loop();
		curtain.Loop();
	}

	page.ball.addEventListener("click", playBall);
	page.crayons.addEventListener("click", playCrayons);
	page.toysOL.addEventListener("click", playToys);
	page.toybox.addEventListener("click", playToybox);
	page.books.addEventListener("click", playBooks);
	page.plant.addEventListener("click", playPlant);
	page.curtain.addEventListener("click", playCurtain);

	//* Page Interactions *//
	function playBall(){ball.Play();}
	function playCrayons(){crayonsUP.Play(); crayonsDown.Play();}
	function playToys(){toys.Play(); toysOL.Play();}
	function playToybox(){toybox.Play();}
	function playBooks(){books.Play();}
	function playPlant(){plant.Play();}
	function playCurtain(){curtain.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.ball.removeEventListener("click", playBall);
		page.crayons.removeEventListener("click", playCrayons);
		page.toysOL.removeEventListener("click", playToys);
		page.toybox.removeEventListener("click", playToybox);
		page.books.removeEventListener("click", playBooks);
		page.plant.removeEventListener("click", playPlant);
		page.curtain.removeEventListener("click", playCurtain);
		stage.removeChild(page);
	}

}