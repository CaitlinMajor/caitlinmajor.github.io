var previousButtonAdded = false;

function page8(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page8_mc();
	nextPage = new lib.page9_preview();
	previousPage = new lib.page7_preview();
	pageIndex = 8;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "8");

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
		sounds.getInstance("page8Line1").play();

		if(!audioComplete){
			sounds.getInstance("page8Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page8Line2").play();

		if(!audioComplete){
			sounds.getInstance("page8Line2").on("complete", done, null, true);
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
	let plant = new Animations(page.plant2, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let peek = new Animations(page.peek, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let tree = new Animations(page.tree, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let bgHouse = new Animations(page.bgHouse, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let tulips = new Animations(page.tulips, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		plant.Loop();
		peek.Loop();
		tree.Loop();
		bgHouse.Loop();
		tulips.Loop();
	}

	page.plant2.addEventListener("click", playPlant);
	page.peek.addEventListener("click", playPeek);
	page.tree.addEventListener("click", playTree);
	page.bgHouse.addEventListener("click", playBGHouse);
	page.tulips.addEventListener("click", playTulips);

	//* Page Interactions *//
	function playPlant(){plant.Play();}
	function playPeek(){peek.Play();}
	function playTree(){tree.Play();}
	function playBGHouse(){bgHouse.Play();}
	function playTulips(){tulips.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.plant2.removeEventListener("click", playPlant);
		page.peek.removeEventListener("click", playPeek);
		page.tree.removeEventListener("click", playTree);
		page.bgHouse.removeEventListener("click", playBGHouse);
		page.tulips.removeEventListener("click", playTulips);
		stage.removeChild(page);
	}
}