var previousButtonAdded = false;

function page2(){
	//define page variables //
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page2_mc();
	next = false;
	previous = false;
	finnyFound = false;
	chloeFound = false;
	oscarFound = false;
	fionaFound = false;
	shellyFound = false;
	myrtleFound = false;
	leoFound = false;
	sandyFound = false;
	sammyFound = false;
	everyoneFound = false;

	//* Add the page *//
	stage.addChildAt(page, 1);

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

		if(!zoomButtonAdded){
			addZoomButton();
			zoomButtonAdded = true;
		}
		zoomButton.addEventListener("click", toggleZoom);
	}

	function fadeUp() {
		pageFader.FadeDown();
		if (!pageFader.faded){
			createjs.Ticker.removeEventListener("tick", fadeUp);
			addNavButtons();
		}
	}

	//* Loop Animations *//
	createjs.Ticker.addEventListener("tick", loopAnimations);
	createjs.Ticker.addEventListener("tick", checkEveryone);
	var bubbleInterval = setInterval(activateBubbles, 25000);
	let finnyStart = new Animations(page.finny_mc, "endLoop", "startLoop");
	let finnyStartOL = new Animations(page.finny_ol_mc, "endLoop", "startLoop");
	let finnyFoundAnim = new Animations(page.finny_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let finnyFoundAnimOL = new Animations(page.finny_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let chloeStart = new Animations(page.chloe_mc, "endLoop", "startLoop");
	let chloeStartOL = new Animations(page.chloe_ol_mc, "endLoop", "startLoop");
	let chloeFoundAnim = new Animations(page.chloe_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let chloeFoundAnimOL = new Animations(page.chloe_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let oscarStart = new Animations(page.oscar_mc, "endLoop", "startLoop");
	let oscarStartOL = new Animations(page.oscar_ol_mc, "endLoop", "startLoop");
	let oscarFoundAnim = new Animations(page.oscar_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let oscarFoundAnimOL = new Animations(page.oscar_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let fionaStart = new Animations(page.fiona_mc, "endLoop", "startLoop");
	let fionaStartOL = new Animations(page.fiona_ol_mc, "endLoop", "startLoop");
	let fionaFoundAnim = new Animations(page.fiona_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let fionaFoundAnimOL = new Animations(page.fiona_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let shellyStart = new Animations(page.shelly_mc, "endLoop", "startLoop");
	let shellyFoundAnim = new Animations(page.shelly_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let myrtleStart = new Animations(page.myrtle_mc, "endLoop", "startLoop");
	let myrtleStartOL = new Animations(page.myrtle_ol_mc, "endLoop", "startLoop");
	let myrtleFoundAnim = new Animations(page.myrtle_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let myrtleFoundAnimOL = new Animations(page.myrtle_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let leoStart = new Animations(page.leo_mc, "endLoop", "startLoop");
	let leoFoundAnim = new Animations(page.leo_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let sandyStart = new Animations(page.sandy_mc, "endLoop", "startLoop");
	let sandyFoundAnim = new Animations(page.sandy_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let sammyStart = new Animations(page.sammy_mc, "endLoop", "startLoop");
	let sammyStartOL = new Animations(page.sammy_ol_mc, "endLoop", "startLoop");
	let sammyFoundAnim = new Animations(page.sammy_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let sammyFoundAnimOL = new Animations(page.sammy_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let textStart = new Animations(page.text_mc, "endLoop", "startLoop");
	let everyoneStart = new Animations(page.everyone_banner, "endLoop", "startLoop");
	let everyoneOn = new Animations(page.everyone_banner, "endLoop2", "startLoop2");
	let fionaBubbles = new Animations(page.fiona_bubbles, "endLoop", "startLoop");
	let shellyBubbles = new Animations(page.shelly_bubbles, "endLoop", "startLoop");
	let myrtleBubbles = new Animations(page.myrtle_bubbles, "endLoop", "startLoop");
	let leoBubbles = new Animations(page.leo_bubbles, "endLoop", "startLoop");
	let sandyBubbles = new Animations(page.sandy_bubbles, "endLoop", "startLoop");
	let sammyBubbles = new Animations(page.sammy_bubbles, "endLoop", "startLoop");
	let oscarBubbles = new Animations(page.oscar_bubbles, "endLoop", "startLoop");
	let finnyBubbles = new Animations(page.finny_bubbles, "endLoop", "startLoop");
	let chloeBubbles = new Animations(page.chloe_bubbles, "endLoop", "startLoop");
	
	function loopAnimations(){
		finnyStart.Loop();
		finnyStartOL.Loop();
		finnyFoundAnim.Loop();
		finnyFoundAnimOL.Loop();
		chloeStart.Loop();
		chloeStartOL.Loop();
		chloeFoundAnim.Loop();
		chloeFoundAnimOL.Loop();
		oscarStart.Loop();
		oscarStartOL.Loop();
		oscarFoundAnim.Loop();
		oscarFoundAnimOL.Loop();
		fionaStart.Loop();
		fionaStartOL.Loop();
		fionaFoundAnim.Loop();
		fionaFoundAnimOL.Loop();
		shellyStart.Loop();
		shellyFoundAnim.Loop();
		myrtleStart.Loop();
		myrtleStartOL.Loop();
		myrtleFoundAnim.Loop();
		myrtleFoundAnimOL.Loop();
		leoStart.Loop();
		leoFoundAnim.Loop();
		sandyStart.Loop();
		sandyFoundAnim.Loop();
		sammyStart.Loop();
		sammyStartOL.Loop();
		sammyFoundAnim.Loop();
		sammyFoundAnimOL.Loop();
		textStart.Loop();
		everyoneStart.Loop();
		everyoneOn.Loop();
		fionaBubbles.Loop();
		shellyBubbles.Loop();
		myrtleBubbles.Loop();
		leoBubbles.Loop();
		sandyBubbles.Loop();
		sammyBubbles.Loop();
		oscarBubbles.Loop();
		finnyBubbles.Loop();
		chloeBubbles.Loop();

		if(finnyFound){page.finny_bubbles.gotoAndPlay("startLoop");}
		if(chloeFound){page.chloe_bubbles.gotoAndPlay("startLoop");}
		if(myrtleFound){page.myrtle_bubbles.gotoAndPlay("startLoop");}
		if(oscarFound){page.oscar_bubbles.gotoAndPlay("startLoop");}
		if(shellyFound){page.shelly_bubbles.gotoAndPlay("startLoop");}
		if(leoFound){page.leo_bubbles.gotoAndPlay("startLoop");}
		if(fionaFound){page.fiona_bubbles.gotoAndPlay("startLoop");}
		if(sandyFound){page.sandy_bubbles.gotoAndPlay("startLoop");}
		if(sammyFound){page.sammy_bubbles.gotoAndPlay("startLoop");}
	}

	function checkEveryone(){
		if (finnyFound && chloeFound && oscarFound && fionaFound && shellyFound && myrtleFound && leoFound && sandyFound && sammyFound) {
			setTimeout(youFoundEveryone, 2000);
			createjs.Ticker.removeEventListener("tick", checkEveryone);
			everyoneFound = true;
		}		
	}

	page.finny_mc.addEventListener("click", youFoundFinny);
	page.finny_ol_mc.addEventListener("click", youFoundFinny);
	page.chloe_mc.addEventListener("click", youFoundChloe);
	page.chloe_ol_mc.addEventListener("click", youFoundChloe);
	page.oscar_mc.addEventListener("click", youFoundOscar);
	page.oscar_ol_mc.addEventListener("click", youFoundOscar);
	page.fiona_mc.addEventListener("click", youFoundFiona);
	page.fiona_ol_mc.addEventListener("click", youFoundFiona);
	page.shelly_mc.addEventListener("click", youFoundShelly);
	page.myrtle_mc.addEventListener("click", youFoundMyrtle);
	page.myrtle_ol_mc.addEventListener("click", youFoundMyrtle);
	page.leo_mc.addEventListener("click", youFoundLeo);
	page.sandy_mc.addEventListener("click", youFoundSandy);
	page.sammy_mc.addEventListener("click", youFoundSammy);
	page.sammy_ol_mc.addEventListener("click", youFoundSammy);
	page.text_mc.addEventListener("click", clickText);

	//* Page Interactions *//
	function youFoundFinny(){
		if (!finnyFound){
			finnyFound = true;
			page.finny_mc.gotoAndPlay("startClickAnim");
			page.finny_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundFinny").play();
			page.text_mc.gotoAndStop("finny");
			activateBubbles();
		}
		else if (finnyFound){
			finnyFoundAnim.Play();
			finnyFoundAnimOL.Play();
			sounds.getInstance("finnyGiggle").play();
			page.text_mc.gotoAndStop("finny");
		}
	}

	function youFoundChloe(){
		if (!chloeFound){
			chloeFound = true;
			page.chloe_mc.gotoAndPlay("startClickAnim");
			page.chloe_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundChloe").play();
			page.text_mc.gotoAndStop("chloe");
			activateBubbles();
		}
		else if (chloeFound){
			chloeFoundAnim.Play();
			chloeFoundAnimOL.Play();
			sounds.getInstance("chloeGiggle").play();
			page.text_mc.gotoAndStop("chloe");
		}
	}

	function youFoundOscar(){
		if (!oscarFound){
			oscarFound = true;
			page.oscar_mc.gotoAndPlay("startClickAnim");
			page.oscar_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundOscar").play();
			page.text_mc.gotoAndStop("oscar");
			activateBubbles();
		}
		else if (oscarFound){
			oscarFoundAnim.Play();
			oscarFoundAnimOL.Play();
			sounds.getInstance("oscarWoohoo").play();
			page.text_mc.gotoAndStop("oscar");
		}
	}

	function youFoundFiona(){
		if (!fionaFound){
			fionaFound = true;
			page.fiona_mc.gotoAndPlay("startClickAnim");
			page.fiona_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundFiona").play();
			page.text_mc.gotoAndStop("fiona");
			activateBubbles();
		}
		else if (fionaFound){
			fionaFoundAnim.Play();
			fionaFoundAnimOL.Play();
			sounds.getInstance("fionaGiggle").play();
			page.text_mc.gotoAndStop("fiona");
		}
	}

	function youFoundShelly(){
		if (!shellyFound){
			shellyFound = true;
			page.shelly_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundShelly").play();
			page.text_mc.gotoAndStop("shelly");
			activateBubbles();
		}
		else if (shellyFound){
			shellyFoundAnim.Play();
			sounds.getInstance("shellyGiggle").play();
			page.text_mc.gotoAndStop("shelly");
		}
	}

	function youFoundMyrtle(){
		if (!myrtleFound){
			myrtleFound = true;
			page.myrtle_mc.gotoAndPlay("startClickAnim");
			page.myrtle_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundMyrtle").play();
			page.text_mc.gotoAndStop("myrtle");
			activateBubbles();
		}
		else if (myrtleFound){
			myrtleFoundAnim.Play();
			myrtleFoundAnimOL.Play();
			sounds.getInstance("myrtleGiggle").play();
			page.text_mc.gotoAndStop("myrtle");
		}
	}

	function youFoundLeo(){
		if (!leoFound){
			leoFound = true;
			page.leo_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundLeo").play();
			page.text_mc.gotoAndStop("leo");
			activateBubbles();
		}
		else if (leoFound){
			leoFoundAnim.Play();
			sounds.getInstance("leoYeah").play();
			page.text_mc.gotoAndStop("leo");
		}
	}

	function youFoundSandy(){
		if (!sandyFound){
			sandyFound = true;
			page.sandy_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundSandy").play();
			page.text_mc.gotoAndStop("sandy");
			activateBubbles();
		}
		else if (sandyFound){
			sandyFoundAnim.Play();
			sounds.getInstance("sandyGiggle").play();
			page.text_mc.gotoAndStop("sandy");
		}
	}

	function youFoundSammy(){
		if (!sammyFound){
			sammyFound = true;
			page.sammy_mc.gotoAndPlay("startClickAnim");
			page.sammy_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundSammy").play();
			page.text_mc.gotoAndStop("sammy");
			activateBubbles();
		}
		else if (sammyFound){
			sammyFoundAnim.Play();
			sammyFoundAnimOL.Play();
			sounds.getInstance("sammyWahoo").play();
			page.text_mc.gotoAndStop("sammy");
		}
	}


	function youFoundEveryone(){
		page.everyone_banner.gotoAndPlay("startAnim");
		page.everyone_banner.addEventListener("click", removeEveryone);
		resetBubbles();
		sounds.getInstance("foundEveryone").play();
	}

	function removeEveryone(){
		page.everyone_banner.gotoAndPlay("startLoop");
		page.everyone_banner.removeEventListener("click", removeEveryone);
	}


	function activateBubbles(){
		if (!finnyFound){
			page.finny_bubbles.gotoAndPlay("startAnim");
		}

		if (!chloeFound){
			page.chloe_bubbles.gotoAndPlay("startAnim");
		}

		if (!myrtleFound){
			page.myrtle_bubbles.gotoAndPlay("startAnim");
		}

		if (!oscarFound){
			page.oscar_bubbles.gotoAndPlay("startAnim");
		}

		if (!shellyFound){
			page.shelly_bubbles.gotoAndPlay("startAnim");
		}

		if (!leoFound){
			page.leo_bubbles.gotoAndPlay("startAnim");
		}

		if (!fionaFound){
			page.fiona_bubbles.gotoAndPlay("startAnim");
		}

		if (!sandyFound){
			page.sandy_bubbles.gotoAndPlay("startAnim");
		}

		if (!sammyFound){
			page.sammy_bubbles.gotoAndPlay("startAnim");
		}
	}

	function resetBubbles(){
		page.finny_bubbles.gotoAndPlay("startLoop");
		page.chloe_bubbles.gotoAndPlay("startLoop");
		page.myrtle_bubbles.gotoAndPlay("startLoop");
		page.oscar_bubbles.gotoAndPlay("startLoop");
		page.shelly_bubbles.gotoAndPlay("startLoop");
		page.leo_bubbles.gotoAndPlay("startLoop");
		page.fiona_bubbles.gotoAndPlay("startLoop");
		page.sandy_bubbles.gotoAndPlay("startLoop");
		page.sammy_bubbles.gotoAndPlay("startLoop");
	}

	function clickText() {
		if(page.text_mc.currentLabel == "finny"){
			sounds.getInstance("foundFinny").play();
		}

		if(page.text_mc.currentLabel == "myrtle"){
			sounds.getInstance("foundMyrtle").play();
		}

		if(page.text_mc.currentLabel == "oscar"){
			sounds.getInstance("foundOscar").play();
		}

		if(page.text_mc.currentLabel == "chloe"){
			sounds.getInstance("foundChloe").play();
		}

		if(page.text_mc.currentLabel == "shelly"){
			sounds.getInstance("foundShelly").play();
		}

		if(page.text_mc.currentLabel == "leo"){
			sounds.getInstance("foundLeo").play();
		}

		if(page.text_mc.currentLabel == "fiona"){
			sounds.getInstance("foundFiona").play();
		}

		if(page.text_mc.currentLabel == "sandy"){
			sounds.getInstance("foundSandy").play();
		}

		if(page.text_mc.currentLabel == "sammy"){
			sounds.getInstance("foundSammy").play();
		}
	}
	
	//* Navigation *//
	function gotoNextPage(){
		nextButton.removeEventListener("click", gotoNextPage);
		next = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function gotoPreviousPage(){
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
		removeZoomButton()
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

	//* End Of Page*//
	killPage = function(){
		removeEveryone();
		sounds.getInstance("foundFinny").stop();
		sounds.getInstance("finnyGiggle").stop();
		sounds.getInstance("foundChloe").stop();
		sounds.getInstance("chloeGiggle").stop();
		sounds.getInstance("foundOscar").stop();
		sounds.getInstance("oscarWoohoo").stop();
		sounds.getInstance("foundFiona").stop();
		sounds.getInstance("foundShelly").stop();
		sounds.getInstance("shellyGiggle").stop();
		sounds.getInstance("foundMyrtle").stop();
		sounds.getInstance("myrtleGiggle").stop();
		sounds.getInstance("foundLeo").stop();
		sounds.getInstance("leoYeah").stop();
		sounds.getInstance("foundSandy").stop();
		sounds.getInstance("sandyGiggle").stop();
		sounds.getInstance("foundSammy").stop();
		sounds.getInstance("sammyWahoo").stop();
		sounds.getInstance("foundEveryone").stop();
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		createjs.Ticker.removeEventListener("tick", checkEveryone);
		clearInterval(bubbleInterval);
		page.finny_mc.removeEventListener("click", youFoundFinny);
		page.finny_ol_mc.removeEventListener("click", youFoundFinny);
		page.chloe_mc.removeEventListener("click", youFoundChloe);
		page.chloe_ol_mc.removeEventListener("click", youFoundChloe);
		page.oscar_mc.removeEventListener("click", youFoundOscar);
		page.oscar_ol_mc.removeEventListener("click", youFoundOscar);
		page.fiona_mc.removeEventListener("click", youFoundFiona);
		page.fiona_ol_mc.removeEventListener("click", youFoundFiona);
		page.shelly_mc.removeEventListener("click", youFoundShelly);
		page.myrtle_mc.removeEventListener("click", youFoundMyrtle);
		page.myrtle_ol_mc.removeEventListener("click", youFoundMyrtle);
		page.leo_mc.removeEventListener("click", youFoundLeo);
		page.sandy_mc.removeEventListener("click", youFoundSandy);
		page.sammy_mc.removeEventListener("click", youFoundSammy);
		page.sammy_ol_mc.removeEventListener("click", youFoundSammy);
		page.text_mc.removeEventListener("click", clickText);
		zoomButton.removeEventListener("click", toggleZoom);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

}