var previousButtonAdded = false;

function page5(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page5_mc();
	nextPage = new lib.page6_preview();
	previousPage = new lib.page4_preview();
	pageIndex = 5;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "5");

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
		sounds.getInstance("page5Line1").play();

		if(!audioComplete){
			sounds.getInstance("page5Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page5Line2").play();

		if(!audioComplete){
			sounds.getInstance("page5Line2").on("complete", done, null, true);
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
	let bedTail = new Animations(page.bedTail, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let bedSkirt = new Animations(page.bedSkirt, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let drawer = new Animations(page.drawer, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let cushions = new Animations(page.cushions, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let tableOL = new Animations(page.tableOL, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let table = new Animations(page.table, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let closet = new Animations(page.closet, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		bedTail.Loop();
		bedSkirt.Loop();
		drawer.Loop();
		cushions.Loop();
		tableOL.Loop();
		table.Loop();
		closet.Loop();
	}

	page.bedTail.addEventListener("click", playBed);
	page.drawer.addEventListener("click", playDrawer);
	page.cushions.addEventListener("click", playCushions);
	page.tableOL.addEventListener("click", playTable);
	page.closet.addEventListener("click", playCloset);

	//* Page Interactions *//
	function playBed(){bedTail.Play(); bedSkirt.Play();}
	function playDrawer(){drawer.Play();}
	function playCushions(){cushions.Play();}
	function playTable(){tableOL.Play(); table.Play();}
	function playCloset(){closet.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.bedTail.removeEventListener("click", playBed);
		page.drawer.removeEventListener("click", playDrawer);
		page.cushions.removeEventListener("click", playCushions);
		page.tableOL.removeEventListener("click", playTable);
		page.closet.removeEventListener("click", playCloset);
		stage.removeChild(page);
	}

}