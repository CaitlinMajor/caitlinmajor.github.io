var previousButtonAdded = false;

function page7(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page7_mc();
	nextPage = new lib.page8_preview();
	previousPage = new lib.page6_preview();
	pageIndex = 7;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "7");

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
		sounds.getInstance("page7Line1").play();

		if(!audioComplete){
			sounds.getInstance("page7Line1").on("complete", playLine2, null, true);
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
			audioComplete = true;
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let chair = new Animations(page.chair, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let desk = new Animations(page.desk, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let computer = new Animations(page.computer, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let basket = new Animations(page.basket, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let drawer = new Animations(page.drawer, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		chair.Loop();
		desk.Loop();
		computer.Loop();
		basket.Loop();
		drawer.Loop();
	}

	page.chair.addEventListener("click", playChair);
	page.desk.addEventListener("click", playDesk);
	page.computer.addEventListener("click", playComputer);
	page.basket.addEventListener("click", playBasket);
	page.drawer.addEventListener("click", playDrawer);

	//* Page Interactions *//
	function playChair(){chair.Play();}
	function playDesk(){desk.Play();}
	function playComputer(){computer.Play();}
	function playBasket(){basket.Play();}
	function playDrawer(){drawer.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.chair.removeEventListener("click", playChair);
		page.desk.removeEventListener("click", playDesk);
		page.computer.removeEventListener("click", playComputer);
		page.basket.removeEventListener("click", playBasket);
		page.drawer.removeEventListener("click", playDrawer);
		stage.removeChild(page);
	}

}