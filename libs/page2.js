var previousButtonAdded = false;

function page2(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page2_mc();
	nextPage = new lib.page3_preview();
	previousPage = new lib.page1_preview();
	pageIndex = 2;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "2");

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
		sounds.getInstance("page2Line1").play();

		if(!audioComplete){
			sounds.getInstance("page2Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page2Line2").play();

		if(!audioComplete){
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
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let table = new Animations(page.table, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cookies = new Animations(page.cookies, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cabinet = new Animations(page.cabinet, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let breadbox = new Animations(page.breadbox, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let fruitbowl = new Animations(page.fruitbowl, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		table.Loop();
		cookies.Loop();
		cabinet.Loop();
		breadbox.Loop();
		fruitbowl.Loop();
	}

	page.table.addEventListener("click", playTable);
	page.cookies.addEventListener("click", playCookies);
	page.cabinet.addEventListener("click", playCabinet);
	page.breadbox.addEventListener("click", playBreadbox);
	page.fruitbowl.addEventListener("click", playFruitbowl);

	//* Page Interactions *//
	function playTable(){table.Play();}
	function playCookies(){cookies.Play();}
	function playCabinet(){cabinet.Play();}
	function playBreadbox(){breadbox.Play();}
	function playFruitbowl(){fruitbowl.Play();}

	//* End Of Page*//

	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.table.removeEventListener("click", playTable);
		page.cookies.removeEventListener("click", playCookies);
		page.cabinet.removeEventListener("click", playCabinet);
		page.breadbox.removeEventListener("click", playBreadbox);
		page.fruitbowl.removeEventListener("click", playFruitbowl);
		stage.removeChild(page);
	}
}