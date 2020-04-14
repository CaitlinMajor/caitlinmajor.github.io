var previousButtonAdded = false;

function page9(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page9_mc();
	nextPage = new lib.page10_preview();
	previousPage = new lib.page8_preview();
	pageIndex = 9;

	//define page variables //
	audioComplete = false;
	var sandCat = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "9");

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
	page.roundabout.gotoAndPlay("start");

	//* Handle The Audio *//
	function playLine1() {
		page.on("mousedown", mouseDownHandler);
		createjs.Sound.stop();
		sounds.getInstance("page9Line1").play();
		
		if(!audioComplete){
			sounds.getInstance("page9Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page9Line2").play();

		if(!audioComplete){
			sounds.getInstance("page9Line2").on("complete", done, null, true);
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
	let roundabout = new Animations(page.roundabout, "endLoop", "startLoop");
	let meekRound = new Animations(page.roundabout.meekRound, "endMeekLoop", "meekLoop", "endMeekAnim", "startMeekAnim");
	let swing = new Animations(page.swing, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let sand = new Animations(page.sand, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let sand2 = new Animations(page.sand, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let jungleGym = new Animations(page.jungleGym, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let horse = new Animations(page.horse, "endLoop", "startLoop", "endClickAnim", "startClickAnim");

	function loopAnimations(){
		roundabout.Loop();
		meekRound.Loop();
		swing.Loop();
		sand.Loop();
		sand2.Loop();
		jungleGym.Loop();
		horse.Loop();
	}

	page.roundabout.addEventListener("click", playRoundabout);
	page.roundabout.meekRound.addEventListener("click", playRoundabout);
	page.swing.addEventListener("click", playSwing);
	page.sand.addEventListener("click", playSand);
	page.jungleGym.addEventListener("click", playJungleGym);
	page.horse.addEventListener("click", playHorse);

	//* Page Interactions *//
	function playRoundabout(){
		meekRound.Play();
	}

	function playSwing(){swing.Play();}
	function playSand(){
		if (!sandCat){
			sand.Play();
			sandCat = true;
		}
		else {
			 sand2.Play();
		}
	}
	function playJungleGym(){jungleGym.Play();}
	function playHorse(){horse.Play();}

	//* End Of Page*//
	killPage = function(){
		createjs.Sound.stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.roundabout.removeEventListener("click", playRoundabout);
		page.swing.removeEventListener("click", playSwing);
		page.sand.removeEventListener("click", playSand);
		page.jungleGym.removeEventListener("click", playJungleGym);
		page.horse.removeEventListener("click", playHorse);
		stage.removeChild(page);
	}
}