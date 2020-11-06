var previousButtonAdded = false;

function page1(){
	//define page variables //
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page1_mc();
	//nextPage = new lib.page2_preview();
	//previousPage = new lib.page0_preview();
	pageIndex = 1;
	next = false;
	previous = false;
	audioComplete = false;

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "1");

	//* Add the page *//
	stage.addChildAt(page, 1);

	page.text1.alpha = 0;
	page.text2.alpha = 0;
	page.text3.alpha = 0;
	page.finnyText_mc.alpha = 0;
	page.sammyText_mc.alpha = 0;
	page.shellyText_mc.alpha = 0;
	page.chloeText_mc.alpha = 0;
	page.oscarText_mc.alpha = 0;
	page.myrtleText_mc.alpha = 0;
	page.sandyText_mc.alpha = 0;
	page.fionaText_mc.alpha = 0;
	page.leoText_mc.alpha = 0;
	let text1fade = new Fade(page.text1);
	let text2fade = new Fade(page.text2);
	let text3fade = new Fade(page.text3);
	let finnyTextFade = new Fade(page.finnyText_mc);
	let sammyTextFade = new Fade(page.sammyText_mc);
	let shellyTextFade = new Fade(page.shellyText_mc);
	let chloeTextFade = new Fade(page.chloeText_mc);
	let oscarTextFade = new Fade(page.oscarText_mc);
	let myrtleTextFade = new Fade(page.myrtleText_mc);
	let sandyTextFade = new Fade(page.sandyText_mc);
	let fionaTextFade = new Fade(page.fionaText_mc);
	let leoTextFade = new Fade(page.leoText_mc);
	let pageFader = new Fade(page.fade_mc);
	

	createjs.Ticker.addEventListener("tick", fadeUp);

	function addNavButtons(){
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
			if(!musicButtonAdded){
				addMusicButton();
				musicButtonAdded = true;
			}
			musicButton.addEventListener("click", toggleMusic);

	}

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			addNavButtons();
			playLine1();
		}
	}

	//* Handle The Audio *//
	function playLine1() {
		navButtonPressed = false;
		//page.on("mousedown", mouseDownHandler);
		sounds.getInstance("page1Line1").play();
		page.finny_mc.gotoAndPlay("startLoop");
		page.sammy_mc.gotoAndPlay("startLoop");
		page.sandy_mc.gotoAndPlay("startLoop");
		page.fiona_mc.gotoAndPlay("startLoop");
		page.leo_mc.gotoAndPlay("startLoop");
		page.shelly_mc.gotoAndPlay("startLoop");
		page.chloe_mc.gotoAndPlay("startLoop");
		page.oscar_mc.gotoAndPlay("startLoop");
		page.myrtle_mc.gotoAndPlay("startLoop");

		if(!audioComplete){
			sounds.getInstance("page1Line1").on("complete", playLine2, null, true);
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
		sounds.getInstance("page1Line2").play();
		page.finny_mc.gotoAndPlay("startAudio");
		page.sammy_mc.gotoAndPlay("startAudio");
		page.sandy_mc.gotoAndPlay("startAudio");
		page.fiona_mc.gotoAndPlay("startAudio");
		page.leo_mc.gotoAndPlay("startAudio");
		page.shelly_mc.gotoAndPlay("startAudio");
		page.chloe_mc.gotoAndPlay("startAudio");
		page.oscar_mc.gotoAndPlay("startAudio");
		page.myrtle_mc.gotoAndPlay("startAudio");


		if(!audioComplete){
			sounds.getInstance("page1Line2").on("complete", playLine3, null, true);
			createjs.Ticker.addEventListener("tick", fadeUpText);
		}
		
		function fadeUpText() {
			text2fade.FadeUp();
			finnyTextFade.FadeUp();
			sammyTextFade.FadeUp();
			shellyTextFade.FadeUp();
			chloeTextFade.FadeUp();
			oscarTextFade.FadeUp();
			myrtleTextFade.FadeUp();
			sandyTextFade.FadeUp();
			fionaTextFade.FadeUp();
			leoTextFade.FadeUp();
			if (text2fade.faded){
				createjs.Ticker.removeEventListener("tick", fadeUpText);
			}
		}
		
	}

	function playLine3() {
		sounds.getInstance("page1Line3").play();

		if(!audioComplete){
			sounds.getInstance("page1Line3").on("complete", done, null, true);
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
			page.text1.addEventListener("click", playLine1);
			page.text2.addEventListener("click", playLine2);
			page.text3.addEventListener("click", playLine3);
			page.finnyText_mc.addEventListener("click", playFinny);
			page.sammyText_mc.addEventListener("click", playSammy);
			page.shellyText_mc.addEventListener("click", playShelly);
			page.chloeText_mc.addEventListener("click", playChloe);
			page.oscarText_mc.addEventListener("click", playOscar);
			page.myrtleText_mc.addEventListener("click", playMyrtle);
			page.sandyText_mc.addEventListener("click", playSandy);
			page.fionaText_mc.addEventListener("click", playFiona);
			page.leoText_mc.addEventListener("click", playLeo);
			page.finny_mc.addEventListener("click", playFinny);
			page.sammy_mc.addEventListener("click", playSammy);
			page.sandy_mc.addEventListener("click", playSandy);
			page.fiona_mc.addEventListener("click", playFiona);
			page.leo_mc.addEventListener("click", playLeo);
			page.shelly_mc.addEventListener("click", playShelly);
			page.chloe_mc.addEventListener("click", playChloe);
			page.oscar_mc.addEventListener("click", playOscar);
			page.myrtle_mc.addEventListener("click", playMyrtle);
		}
		
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	let finnyStart = new Animations(page.finny_mc, "end", "start");
	let sammyStart = new Animations(page.sammy_mc, "end", "start");
	let sandyStart = new Animations(page.sandy_mc, "end", "start");
	let fionaStart = new Animations(page.fiona_mc, "end", "start");
	let leoStart = new Animations(page.leo_mc, "end", "start");
	let myrtleStart = new Animations(page.myrtle_mc, "end", "start");
	let finny = new Animations(page.finny_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let sammy = new Animations(page.sammy_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let sandy = new Animations(page.sandy_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let fiona = new Animations(page.fiona_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let leo = new Animations(page.leo_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let shelly = new Animations(page.shelly_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let chloe = new Animations(page.chloe_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let oscar = new Animations(page.oscar_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	let myrtle = new Animations(page.myrtle_mc, "endLoop", "startLoop", "endClickAnim", "startClickAnim");
	
	function loopAnimations(){
		finnyStart.Loop();
		sammyStart.Loop();
		sandyStart.Loop();
		fionaStart.Loop();
		myrtleStart.Loop();
		finny.Loop();
		sammy.Loop();
		sandy.Loop();
		fiona.Loop();
		leo.Loop();
		shelly.Loop();
		chloe.Loop();
		oscar.Loop();
		myrtle.Loop();
	}



	//* Page Interactions *//
	function playFinny(){finny.Play(); if (audioComplete){sounds.getInstance("finny").play();}}
	function playSammy(){sammy.Play(); if (audioComplete){sounds.getInstance("sammy").play();}}
	function playSandy(){sandy.Play(); if (audioComplete){sounds.getInstance("sandy").play();}}
	function playFiona(){fiona.Play(); if (audioComplete){sounds.getInstance("fiona").play();}}
	function playLeo(){leo.Play(); if (audioComplete){sounds.getInstance("leo").play();}}
	function playShelly(){shelly.Play(); if (audioComplete){sounds.getInstance("shelly").play();}}
	function playChloe(){chloe.Play(); if (audioComplete){sounds.getInstance("chloe").play();}}
	function playOscar(){oscar.Play(); if (audioComplete){sounds.getInstance("oscar").play();}}
	function playMyrtle(){myrtle.Play(); if (audioComplete){sounds.getInstance("myrtle").play();}}
	
	//* Navigation *//
	function gotoNextPage(){
		console.log("page 1 going to page 2")
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		console.log("page 1 going to page 0")
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removePreviousButton();
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				if (next) {
					setTimeout(page2, 200);
				}
				else if (previous){
					setTimeout(page0, 200);
				}
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

	//* End Of Page*//
	killPage = function(){
		sounds.getInstance("page1Line1").stop();
		sounds.getInstance("page1Line2").stop();
		sounds.getInstance("page1Line3").stop();
		sounds.getInstance("finnyGiggle").stop();
		sounds.getInstance("sammyWahoo").stop();
		sounds.getInstance("sandyGiggle").stop();
		sounds.getInstance("fionaGiggle").stop();
		sounds.getInstance("leoYeah").stop();
		sounds.getInstance("shellyGiggle").stop();
		sounds.getInstance("chloeGiggle").stop();
		sounds.getInstance("oscarWoohoo").stop();
		sounds.getInstance("myrtleGiggle").stop();
		sounds.getInstance("finny").stop();
		sounds.getInstance("sammy").stop();
		sounds.getInstance("sandy").stop();
		sounds.getInstance("fiona").stop();
		sounds.getInstance("leo").stop();
		sounds.getInstance("shelly").stop();
		sounds.getInstance("chloe").stop();
		sounds.getInstance("oscar").stop();
		sounds.getInstance("myrtle").stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.finny_mc.removeEventListener("click", playFinny);
		page.sammy_mc.removeEventListener("click", playSammy);
		page.sandy_mc.removeEventListener("click", playSandy);
		page.fiona_mc.removeEventListener("click", playFiona);
		page.leo_mc.removeEventListener("click", playLeo);
		page.shelly_mc.removeEventListener("click", playShelly);
		page.chloe_mc.removeEventListener("click", playChloe);
		page.oscar_mc.removeEventListener("click", playOscar);
		page.myrtle_mc.removeEventListener("click", playMyrtle);
		page.text1.removeEventListener("click", playLine1);
		page.text2.removeEventListener("click", playLine2);
		page.text3.removeEventListener("click", playLine3);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

}