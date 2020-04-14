var previousButtonAdded = false;

function page10(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page10_mc();
	nextPage = new lib.page11_preview();
	previousPage = new lib.page9_preview();
	pageIndex = 10;

	//define page variables //
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "10");

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
		sounds.getInstance("page10Line1").play();

		if(!audioComplete){
			sounds.getInstance("page10Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page10Line2").play();

		if(!audioComplete){
			sounds.getInstance("page10Line2").on("complete", done, null, true);
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
	let rock = new Animations(page.rock, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let mailbox = new Animations(page.mailbox, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let gnomesOL = new Animations(page.gnomesOL, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let gnomes = new Animations(page.gnomes, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let trash = new Animations(page.trash, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let house = new Animations(page.house, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let garage = new Animations(page.garage, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		rock.Loop();
		mailbox.Loop();
		gnomesOL.Loop();
		gnomes.Loop();
		trash.Loop();
		house.Loop();
		garage.Loop();
	}

	page.rock.addEventListener("click", playRock);
	page.mailbox.addEventListener("click", playMailbox);
	page.gnomesOL.addEventListener("click", playGnomes);
	page.trash.addEventListener("click", playTrash);
	page.house.addEventListener("click", playHouse);
	page.garage.addEventListener("click", playGarage);

	//* Page Interactions *//
	function playRock(){rock.Play();}
	function playMailbox(){mailbox.Play();}
	function playGnomes(){gnomesOL.Play(); gnomes.Play();}
	function playTrash(){trash.Play();}
	function playHouse(){house.Play();}
	function playGarage(){garage.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.rock.removeEventListener("click", playRock);
		page.mailbox.removeEventListener("click", playMailbox);
		page.gnomesOL.removeEventListener("click", playGnomes);
		page.trash.removeEventListener("click", playTrash);
		page.house.removeEventListener("click", playHouse);
		page.garage.removeEventListener("click", playGarage);
		stage.removeChild(page);
	}

}