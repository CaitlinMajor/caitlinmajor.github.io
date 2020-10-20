var previousButtonAdded = false;

function page11(){
	//define page variables //
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page = new lib.page11_mc();
	//nextPage = new lib.page2_preview();
	//previousPage = new lib.page0_preview();
	pageIndex = 1;
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

	date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	MEDIABOX.setSaveDataEntry("date", date);
	MEDIABOX.setSaveDataEntry("page", "11");

	//* Add the page *//
	stage.addChildAt(page, 1);

	//add the next page preview
	// nextPageX = canvas.width;
	// page.addChild(nextPage);
	// nextPage.x = nextPageX;

	// //add the previous page preview
	// previousPageX = (0-canvas.width);
	// page.addChild(previousPage);
	// previousPage.x = previousPageX;

	let pageFader = new Fade(page.fade_mc);
	
	//handle navigation
	if(navButtonPressed){
		createjs.Ticker.addEventListener("tick", fadeUp);
		navButtonPressed = false;
	} else {
		page.fade_mc.alpha = 0;
		addNavButtons();
	}

	function addNavButtons(){
		if(!previousButtonAdded){
			addPreviousButton();
			previousButtonAdded = true;
		}
		previousButton.addEventListener("click", gotoPreviousPage);
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
	let finnyStart = new Animations(page.finny_mc, "endLoop", "startLoop");
	let finnyStartOL = new Animations(page.finny_ol_mc, "endLoop", "startLoop");
	let finnyFoundAnim = new Animations(page.finny_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let finnyFoundAnimOL = new Animations(page.finny_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let chloeStart = new Animations(page.chloe_mc, "endLoop", "startLoop");
	let chloeFoundAnim = new Animations(page.chloe_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let oscarStart = new Animations(page.oscar_mc, "endLoop", "startLoop");
	let oscarFoundAnim = new Animations(page.oscar_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let fionaStart = new Animations(page.fiona_mc, "endLoop", "startLoop");
	let fionaFoundAnim = new Animations(page.fiona_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let shellyStart = new Animations(page.shelly_mc, "endLoop", "startLoop");
	let shellyStartOL = new Animations(page.shelly_ol_mc, "endLoop", "startLoop");
	let shellyFoundAnim = new Animations(page.shelly_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let shellyFoundAnimOL = new Animations(page.shelly_ol_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let myrtleStart = new Animations(page.myrtle_mc, "endLoop", "startLoop");
	let myrtleFoundAnim = new Animations(page.myrtle_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let leoStart = new Animations(page.leo_mc, "endLoop", "startLoop");
	let leoFoundAnim = new Animations(page.leo_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let sandyStart = new Animations(page.sandy_mc, "endLoop", "startLoop");
	let sandyFoundAnim = new Animations(page.sandy_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let sammyStart = new Animations(page.sammy_mc, "endLoop", "startLoop");
	let sammyFoundAnim = new Animations(page.sammy_mc, "endLoop2", "startLoop2", "endClickAnim2", "startClickAnim2");
	let textStart = new Animations(page.text_mc, "endLoop", "startLoop");
	
	function loopAnimations(){
		finnyStart.Loop();
		finnyStartOL.Loop();
		finnyFoundAnim.Loop();
		finnyFoundAnimOL.Loop();
		chloeStart.Loop();
		chloeFoundAnim.Loop();
		oscarStart.Loop();
		oscarFoundAnim.Loop();
		fionaStart.Loop();
		fionaFoundAnim.Loop();
		shellyStart.Loop();
		shellyStartOL.Loop();
		shellyFoundAnim.Loop();
		shellyFoundAnimOL.Loop();
		myrtleStart.Loop();
		myrtleFoundAnim.Loop();
		leoStart.Loop();
		leoFoundAnim.Loop();
		sandyStart.Loop();
		sandyFoundAnim.Loop();
		sammyStart.Loop();
		sammyFoundAnim.Loop();
		textStart.Loop();
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
	page.oscar_mc.addEventListener("click", youFoundOscar);
	page.fiona_mc.addEventListener("click", youFoundFiona);
	page.shelly_mc.addEventListener("click", youFoundShelly);
	page.shelly_ol_mc.addEventListener("click", youFoundShelly);
	page.myrtle_mc.addEventListener("click", youFoundMyrtle);
	page.leo_mc.addEventListener("click", youFoundLeo);
	page.sandy_mc.addEventListener("click", youFoundSandy);
	page.sammy_mc.addEventListener("click", youFoundSammy);
	page.text_mc.addEventListener("click", clickText);

	//* Page Interactions *//
	function youFoundFinny(){
		if (!finnyFound){
			finnyFound = true;
			page.finny_mc.gotoAndPlay("startClickAnim");
			page.finny_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundFinny").play();
			page.text_mc.gotoAndStop("finny");
		}
		else if (finnyFound){
			finnyFoundAnim.Play();
			finnyFoundAnimOL.Play();
			sounds.getInstance("finnyGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("finny");}
		}
	}

	function youFoundChloe(){
		if (!chloeFound){
			chloeFound = true;
			page.chloe_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundChloe").play();
			page.text_mc.gotoAndStop("chloe");
		}
		else if (chloeFound){
			chloeFoundAnim.Play();
			sounds.getInstance("chloeGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("chloe");}
		}
	}

	function youFoundOscar(){
		if (!oscarFound){
			oscarFound = true;
			page.oscar_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundOscar").play();
			page.text_mc.gotoAndStop("oscar");
		}
		else if (oscarFound){
			oscarFoundAnim.Play();
			sounds.getInstance("oscarWoohoo").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("oscar");}
		}
	}

	function youFoundFiona(){
		if (!fionaFound){
			fionaFound = true;
			page.fiona_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundFiona").play();
			page.text_mc.gotoAndStop("fiona");
		}
		else if (fionaFound){
			fionaFoundAnim.Play();
			sounds.getInstance("fionaGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("fiona");}
		}
	}

	function youFoundShelly(){
		if (!shellyFound){
			shellyFound = true;
			page.shelly_mc.gotoAndPlay("startClickAnim");
			page.shelly_ol_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundShelly").play();
			page.text_mc.gotoAndStop("shelly");
		}
		else if (shellyFound){
			shellyFoundAnim.Play();
			shellyFoundAnimOL.Play();
			sounds.getInstance("shellyGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("shelly");}
		}
	}

	function youFoundMyrtle(){
		if (!myrtleFound){
			myrtleFound = true;
			page.myrtle_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundMyrtle").play();
			page.text_mc.gotoAndStop("myrtle");
		}
		else if (myrtleFound){
			myrtleFoundAnim.Play();
			sounds.getInstance("myrtleGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("myrtle");}
		}
	}

	function youFoundLeo(){
		if (!leoFound){
			leoFound = true;
			page.leo_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundLeo").play();
			page.text_mc.gotoAndStop("leo");
		}
		else if (leoFound){
			leoFoundAnim.Play();
			sounds.getInstance("leoYeah").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("leo");}
		}
	}

	function youFoundSandy(){
		if (!sandyFound){
			sandyFound = true;
			page.sandy_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundSandy").play();
			page.text_mc.gotoAndStop("sandy");
		}
		else if (sandyFound){
			sandyFoundAnim.Play();
			sounds.getInstance("sandyGiggle").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("sandy");}
		}
	}

	function youFoundSammy(){
		if (!sammyFound){
			sammyFound = true;
			page.sammy_mc.gotoAndPlay("startClickAnim");
			sounds.getInstance("foundSammy").play();
			page.text_mc.gotoAndStop("sammy");
		}
		else if (sammyFound){
			sammyFoundAnim.Play();
			sounds.getInstance("sammyWahoo").play();
			if (!everyoneFound){page.text_mc.gotoAndStop("sammy");}
		}
	}

	function youFoundEveryone(){
			page.text_mc.gotoAndStop("everyone");
			sounds.getInstance("foundEveryone").play();
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

		if(page.text_mc.currentLabel == "everyone"){
			sounds.getInstance("foundEveryone").play();
		}
	}
	
	//* Navigation *//
	function gotoPreviousPage(){
		console.log("page 11 going to page 10")
		previousButton.removeEventListener("click", gotoPreviousPage);
		previous = true;
		navButtonPressed = true;
		createjs.Ticker.addEventListener("tick", fadeDown);
	}

	function fadeDown() {
		pageFader.FadeUp();
		if (pageFader.faded){
			killPage();
				setTimeout(page10, 200);
			createjs.Ticker.removeEventListener("tick", fadeDown);
		}

	}

	//* End Of Page*//
	killPage = function(){
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
		createjs.Ticker.removeEventListener("tick", loopAnimations);
		page.finny_mc.removeEventListener("click", youFoundFinny);
		page.chloe_mc.removeEventListener("click", youFoundChloe);
		page.oscar_mc.removeEventListener("click", youFoundOscar);
		page.fiona_mc.removeEventListener("click", youFoundFiona);
		page.shelly_mc.removeEventListener("click", youFoundShelly);
		page.myrtle_mc.removeEventListener("click", youFoundMyrtle);
		page.myrtle_ol_mc.removeEventListener("click", youFoundMyrtle);
		page.leo_mc.removeEventListener("click", youFoundLeo);
		page.sandy_mc.removeEventListener("click", youFoundSandy);
		page.sammy_mc.removeEventListener("click", youFoundSammy);
		nextButton.removeEventListener("click", gotoNextPage);
		previousButton.removeEventListener("click", gotoPreviousPage);
		stage.removeChild(page);
	}

}