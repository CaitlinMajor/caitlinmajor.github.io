	/* 

		1) parent class method. Make a class that has the standard page functions (PageMaker), and then make a child class for all pages, deriving from the parent class, they will inherit the functionality
		2) Make PageMaker as a separate script, that is attached by a start call from the specific page.
		3) Make a function, that has the fade, but the page's script passes itself in as a variable, so that the function knows what to apply the fade to.
			-  function Fade ( var thisPage){
					thisPage.alpha = 0;
				}


		 PageMaker myMaker =  gameObject.AddComponent<PageMaker>();
		myMaker.Page = Page;
		myMaker.Start(); 

	*/

//global variables
var _this = this;
var nextButton = new lib.nextbutton_mc();
var previousButton = new lib.previousbutton_mc();
var fadeAmount = 0.075;
var pageNumber = 0;
var pageFaded = true;
var nextButtonVisible = false;
var previousButtonVisible = false;

// cover variables
var Cover = new lib.cover_mc();
var titleButton = this.title_mc;
var yetiUp = false;
var beePlaying = false
var dragonflyPlaying = false;
var stumbleHappy01Playing = false;
var grumbleHappy03Playing = false;
var humbleHappy02Playing = false;
var coverVisible = false;
var coverLoaded = false;
var soundsLoaded = false;

//page1 variables
var Page1 = new lib.page1_mc();
var page1Loaded = false;
var page1Visible = false;
var page1HumblePlaying = false;
var page1GrumblePlaying = false;
var page1StumblePlaying = false;
var page1Tree1Playing = false;
var page1Tree2Playing = false;
var page1Tree3Playing = false;
var page1Tree4Playing = false;
var page1Text1Visible = false;
var page1Text2Visible = false;
var page1Text3Visible = false;
var page1Text4Visible = false;

//page2 variables
var Page2 = new lib.page2_mc();
var page2Loaded = false;
var page2Visible = false;
var page2BirdPlaying = false;
var page2MousePlaying = false;
var humbleAffirmative03Playing = false;
var grumbleAffirmative06Playing = false;
var stumbleAffirmative07Playing = false;
var page2AudioComplete = false;

//page3 variables
var Page3 = new lib.page3_mc();
var page3Loaded = false;
var page3Visible = false;

//page4 variables
var Page4 = new lib.page4_mc();
var page4Loaded = false;
var page4Visible = false;

//page5 variables
var Page5 = new lib.page5_mc();
var page5Loaded = false;
var page5Visible = false;

//page6 variables
var Page6 = new lib.page6_mc();
var page6Loaded = false;
var page6Visible = false;

//page7 variables
var Page7 = new lib.page7_mc();
var page7Loaded = false;
var page7Visible = false;

//page8 variables
var Page8 = new lib.page8_mc();
var page8Loaded = false;
var page8Visible = false;

//page9 variables
var Page9 = new lib.page9_mc();
var page9Loaded = false;
var page9Visible = false;

//page10 variables
var Page10 = new lib.page10_mc();
var page10Loaded = false;
var page10Visible = false;

//page11 variables
var Page11 = new lib.page11_mc();
var page11Loaded = false;
var page11Visible = false;

//page12 variables
var Page12 = new lib.page12_mc();
var page12Loaded = false;
var page12Visible = false;

//page13 variables
var Page13 = new lib.page13_mc();
var page13Loaded = false;
var page13Visible = false;

//page14 variables
var Page14 = new lib.page14_mc();
var page14Loaded = false;
var page14Visible = false;

//page15 variables
var Page15 = new lib.page15_mc();
var page15Loaded = false;
var page15Visible = false;

//page16 variables
var Page16 = new lib.page16_mc();
var page16Loaded = false;
var page16Visible = false;

//page17 variables
var Page17 = new lib.page17_mc();
var page17Loaded = false;
var page17Visible = false;

//page18 variables
var Page18 = new lib.page18_mc();
var page18Loaded = false;
var page18Visible = false;

createjs.Ticker.on("tick", track);

function track(e) {
	console.log(pageNumber);
}

createjs.Ticker.addEventListener("tick", handleButton);

//click to allow sounds in browser
function handleButton(e) {

	if (coverLoaded == false) {

		if (titleButton.currentLabel == "buttonEnd") {
			titleButton.gotoAndPlay("buttonStart");
		}
	}

	if (coverLoaded == true) {
		titleButton.gotoAndPlay("fadeStart");

		if (titleButton.currentLabel == "end") {
			titleButton.stop();
			createjs.Ticker.removeEventListener("tick", handleButton);
		}
	}

}

titleButton.addEventListener("click", addCover);

//getting sounds all set up
function loadSounds() {
	//global sounds
	//createjs.Sound.registerSound("sounds/audio_theend", "audio_theend");
	createjs.Sound.registerSound("sounds/grumble_affirmative_06.mp3", "grumble_affirmative_06");
	//createjs.Sound.registerSound("sounds/grumble_chattering_04.mp3", "grumble_chattering_04");
	//createjs.Sound.registerSound("sounds/grumble_eating_02.mp3", "grumble_eating_02");
	createjs.Sound.registerSound("sounds/grumble_happy_03.mp3", "grumble_happy_03");
	//createjs.Sound.registerSound("sounds/grumble_scared_07.mp3", "grumble_scared_07");
	createjs.Sound.registerSound("sounds/humble_affirmative_03.mp3", "humble_affirmative_03");
	//createjs.Sound.registerSound("sounds/humble_eating_01.mp3", "humble_eating_01");
	//createjs.Sound.registerSound("sounds/humble_enthusiastic_12.mp3", "humble_enthusiastic_12");
	createjs.Sound.registerSound("sounds/humble_happy_02.mp3", "humble_happy_02");
	//createjs.Sound.registerSound("sounds/humble_scared_01.mp3", "humble_scared_01");
	//createjs.Sound.registerSound("sounds/humble_scared_02.mp3", "humble_scared_02");
	createjs.Sound.registerSound("sounds/stumble_affirmative_07.mp3", "stumble_affirmative_07");
	//createjs.Sound.registerSound("sounds/stumble_eating_01.mp3", "stumble_eating_01");
	//createjs.Sound.registerSound("sounds/stumble_enthusiastic_01.mp3", "stumble_enthusiastic_01");
	//createjs.Sound.registerSound("sounds/stumble_excited_06.mp3", "stumble_excited_06");
	createjs.Sound.registerSound("sounds/stumble_happy_01.mp3", "stumble_happy_01");
	//createjs.Sound.registerSound("sounds/stumble_phew_05.mp3", "stumble_phew_05");
	//createjs.Sound.registerSound("sounds/stumble_scared_04.mp3", "stumble_scared_04");
	//createjs.Sound.registerSound("sounds/stumble_scared_07.mp3", "stumble_scared_07");
	//createjs.Sound.registerSound("sounds/yeti_hmm.mp3", "yeti_hmm");
	//createjs.Sound.registerSound("sounds/yeti_argh.mp3", "yeti_argh");
	
	
	//cover sounds
	createjs.Sound.registerSound("sounds/cover_audio.mp3", "cover_audio");
	createjs.Sound.registerSound("sounds/cover_audio_yeti.mp3", "cover_audio_yeti");
	
	//page1 sounds
	createjs.Sound.registerSound("sounds/page1_audio_line1.mp3", "page1_audio_line1");
	createjs.Sound.registerSound("sounds/page1_audio_line2.mp3", "page1_audio_line2");
	createjs.Sound.registerSound("sounds/page1_audio_line3.mp3", "page1_audio_line3");
	createjs.Sound.registerSound("sounds/page1_audio_line4.mp3", "page1_audio_line4");
	
	//page2 sounds
	createjs.Sound.registerSound("sounds/page2_audio_line1.mp3", "page2_audio_line1");
	
	//page3 sounds
	//createjs.Sound.registerSound("sounds/page3_audio_line1.mp3", "page3_audio_line1");
	//createjs.Sound.registerSound("sounds/page3_audio_line2.mp3", "page3_audio_line2");
	
	//page4 sounds
	//createjs.Sound.registerSound("sounds/page4_audio_line1.mp3", "page4_audio_line1");
	//createjs.Sound.registerSound("sounds/page4_audio_line2.mp3", "page4_audio_line2");
	
	//page5 sounds
	//createjs.Sound.registerSound("sounds/page5_audio_line1.mp3", "page5_audio_line1");
	//createjs.Sound.registerSound("sounds/page5_audio_line2.mp3", "page5_audio_line2");
	//createjs.Sound.registerSound("sounds/page5_audio_yeti_line1.mp3", "page5_audio_yeti_line1");
	
	//page6 sounds
	//createjs.Sound.registerSound("sounds/page6_audio_line1.mp3", "page6_audio_line1");
	//createjs.Sound.registerSound("sounds/page6_audio_yeti_line1.mp3", "page6_audio_yeti_line1");
	
	//page7 sounds
	//createjs.Sound.registerSound("sounds/page7_audio_line1.mp3", "page7_audio_line1");
	//createjs.Sound.registerSound("sounds/page7_audio_line2.mp3", "page7_audio_line2");
	
	//page8 sounds
	//createjs.Sound.registerSound("sounds/page8_audio_line1.mp3", "page8_audio_line1");
	//createjs.Sound.registerSound("sounds/page8_audio_yeti_line1.mp3", "page8_audio_yeti_line1");
	//createjs.Sound.registerSound("sounds/page8_audio_yeti_line2.mp3", "page8_audio_yeti_line2");
	
	//page9 sounds
	//createjs.Sound.registerSound("sounds/page9_audio_line1.mp3", "page9_audio_line1");
	
	//page10 sounds
	//createjs.Sound.registerSound("sounds/page10_audio_line1.mp3", "page10_audio_line1");
	//createjs.Sound.registerSound("sounds/page10_audio_line2.mp3", "page10_audio_line2");
	//createjs.Sound.registerSound("sounds/page10_audio_yeti_line1.mp3", "page10_audio_yeti_line1");
	
	//page11 sounds
	//createjs.Sound.registerSound("sounds/page11_audio_line1.mp3", "page11_audio_line1");
	//createjs.Sound.registerSound("sounds/page11_audio_yeti_line1.mp3", "page11_audio_yeti_line1");
	
	//page12 sounds
	//createjs.Sound.registerSound("sounds/page12_audio_humble.mp3", "page12_audio_humble");
	//createjs.Sound.registerSound("sounds/page12_audio_line1.mp3", "page12_audio_line1");
	//createjs.Sound.registerSound("sounds/page12_audio_line2.mp3", "page12_audio_line2");
	//createjs.Sound.registerSound("sounds/page12_audio_yeti_line1.mp3", "page12_audio_yeti_line1");
	
	//page13 sounds
	//createjs.Sound.registerSound("sounds/page13_audio_line1.mp3", "page13_audio_line1");
	
	//page14 sounds
    //createjs.Sound.registerSound("sounds/page14_audio_line1.mp3", "page14_audio_line1");
	//createjs.Sound.registerSound("sounds/page14_audio_yeti_line1.mp3", "page14_audio_yeti_line1");
	
	//page15 sounds
	//createjs.Sound.registerSound("sounds/page15_audio_grumble.mp3", "page15_audio_grumble");
	//createjs.Sound.registerSound("sounds/page15_audio_line1.mp3", "page15_audio_line1");
	//createjs.Sound.registerSound("sounds/page15_audio_line2.mp3", "page15_audio_line2");
	//createjs.Sound.registerSound("sounds/page15_audio_yeti_line1.mp3", "page15_audio_yeti_line1");
	
	//page16 sounds
	//createjs.Sound.registerSound("sounds/page16_audio_yeti_line1.mp3", "page16_audio_yeti_line1");
	
	//page17 sounds
	//createjs.Sound.registerSound("sounds/page17_audio_line1.mp3", "page17_audio_line1");
	//createjs.Sound.registerSound("sounds/page17_audio_line2.mp3", "page17_audio_line2");
	//createjs.Sound.registerSound("sounds/page17_audio_yeti_line1.mp3", "page17_audio_yeti_line1");
	
	//page18 sounds
	//createjs.Sound.registerSound("sounds/page18_audio_line1.mp3", "page18_audio_line1");
	//createjs.Sound.registerSound("sounds/page18_audio_yeti_line1.mp3", "page18_audio_yeti_line1");
		
	createjs.Sound.on("fileload", handleLoad);
	soundsLoaded = true;
}

function handleLoad(e) {
	//global
	//theEndAudio = createjs.Sound.createInstance("audio_theend");
	grumbleAffirmative06 = createjs.Sound.createInstance("grumble_affirmative_06");
	//grumbleChattering04 = createjs.Sound.createInstance("grumble_chattering_04");
	//grumbleEating02 = createjs.Sound.createInstance("grumble_eating_02");
	grumbleHappy03 = createjs.Sound.createInstance("grumble_happy_03");
	//grumbleScared07 = createjs.Sound.createInstance("grumble_scared_07");
	humbleAffirmative03 = createjs.Sound.createInstance("humble_affirmative_03");
	//humbleEating01 = createjs.Sound.createInstance("humble_eating_01");
	//humbleEnthusiastic12 = createjs.Sound.createInstance("humble_enthusiastic_12");
	humbleHappy02 = createjs.Sound.createInstance("humble_happy_02");
	//humbleScared01 = createjs.Sound.createInstance("humble_scared_01");
	//humbleScared02 = createjs.Sound.createInstance("humble_scared_02");
	stumbleAffirmative07 = createjs.Sound.createInstance("stumble_affirmative_07");
	//stumbleEating01 = createjs.Sound.createInstance("stumble_eating_01");
	//stumbleEnthusiastic01 = createjs.Sound.createInstance("stumble_enthusiastic_01");
	//stumbleExcited06 = createjs.Sound.createInstance("stumble_excited_06");
	stumbleHappy01 = createjs.Sound.createInstance("stumble_happy_01");
	//stumblePhew05 = createjs.Sound.createInstance("stumble_phew_05");
	//stumbleScared04 = createjs.Sound.createInstance("stumble_scared_04");
	//stumbleScared07 = createjs.Sound.createInstance("stumble_scared_07");
	//yetiHmm = createjs.Sound.createInstance("yeti_hmm");
	//yetiArgh = createjs.Sound.createInstance("yeti_argh");
	
	//cover
	coverNarrator = createjs.Sound.createInstance("cover_audio");
	coverYeti = createjs.Sound.createInstance("cover_audio_yeti");
	
	//page 1
	page1Line1 = createjs.Sound.createInstance("page1_audio_line1");
	page1Line2 = createjs.Sound.createInstance("page1_audio_line2");
	page1Line3 = createjs.Sound.createInstance("page1_audio_line3");
	page1Line4 = createjs.Sound.createInstance("page1_audio_line4");
	
	//page 2
	page2Line1 = createjs.Sound.createInstance("page2_audio_line1");
	
	//page 3
	//page3Line1 = createjs.Sound.createInstance("page3_audio_line1");
	//page3Line2 = createjs.Sound.createInstance("page3_audio_line2");
	
	//page 4
	//page4Line1 = createjs.Sound.createInstance("page4_audio_line1");
	//page4Line2 = createjs.Sound.createInstance("page4_audio_line2");
	
	//page 5
	//page5Line1 = createjs.Sound.createInstance("page5_audio_line1");
	//page5Line2 = createjs.Sound.createInstance("page5_audio_line2");
	//page5YetiLine1 = createjs.Sound.createInstance("page5_audio_yeti_line1");
	
	//page 6
	//page6Line1 = createjs.Sound.createInstance("page6_audio_line1");
	//page6YetiLine1 = createjs.Sound.createInstance("page6_audio_yeti_line1");
	
	//page 7
	//page7Line1 = createjs.Sound.createInstance("page7_audio_line1");
	//page7Line2 = createjs.Sound.createInstance("page7_audio_line2");
	
	//page 8
	//page8Line1 = createjs.Sound.createInstance("page8_audio_line1");
	//page8YetiLine1 = createjs.Sound.createInstance("page8_audio_yeti_line1");
	//page8YetiLine2 = createjs.Sound.createInstance("page8_audio_yeti_line2");
	
	//page 9
	//page9Line1 = createjs.Sound.createInstance("page9_audio_line1");
	
	//page 10
	//page10Line1 = createjs.Sound.createInstance("page10_audio_line1");
	//page10Line2 = createjs.Sound.createInstance("page10_audio_line2");
	//page10YetiLine1 = createjs.Sound.createInstance("page10_audio_yeti_line1");
	
	//page 11
	//page11Line1 = createjs.Sound.createInstance("page11_audio_line1");
	//page11YetiLine1 = createjs.Sound.createInstance("page11_audio_yeti_line1");
	
	//page 12
	//page12Humble = createjs.Sound.createInstance("page12_audio_humble");
	//page12Line1 = createjs.Sound.createInstance("page12_audio_line1");
	//page12Line2 = createjs.Sound.createInstance("page12_audio_line2");
	//page12YetiLine1 = createjs.Sound.createInstance("page12_audio_yeti_line1");
	
	//page 13
	//page13Line1 = createjs.Sound.createInstance("page13_audio_line1");
	
	//page 14
	//page14Line1 = createjs.Sound.createInstance("page14_audio_line1");
	//page14YetiLine1 = createjs.Sound.createInstance("page14_audio_yeti_line1");
	
	//page 15
	//page15Grumble = createjs.Sound.createInstance("page15_audio_grumble");
	//page15Line1 = createjs.Sound.createInstance("page15_audio_line1");
	//page15Line2 = createjs.Sound.createInstance("page15_audio_line2");
	//page15YetiLine1 = createjs.Sound.createInstance("page15_audio_yeti_line1");
	
	//page 16
	//page16YetiLine1 = createjs.Sound.createInstance("page16_audio_yeti_line1");
	
	//page 17
	//page17Line1 = createjs.Sound.createInstance("page17_audio_line1");
	//page17Line2 = createjs.Sound.createInstance("page17_audio_line2");
	//page17YetiLine1 = createjs.Sound.createInstance("page17_audio_yeti_line1");
	
	//page 18
	//page18Line1 = createjs.Sound.createInstance("page18_audio_line1");
	//page18YetiLine1 = createjs.Sound.createInstance("page18_audio_yeti_line1");
}

// ***COVER***

function addCover() {
	_this.addChildAt(Cover, 1);
	Cover.bee_mc.gotoAndPlay("startLoop");
	Cover.dragonfly_mc.gotoAndPlay("startLoop");
	Cover.grumble_mc.gotoAndPlay("startLoop");
	Cover.humble_mc.gotoAndPlay("startLoop");
	Cover.stumble_mc.gotoAndPlay("startLoop");
	coverLoaded = true;
	createjs.Ticker.addEventListener("tick", fadeUpCover);
	createjs.Ticker.addEventListener("tick", loopCoverAnimations);
	Cover.bee_mc.addEventListener("click", playBee);
	Cover.dragonfly_mc.addEventListener("click", playDragonfly);
	createjs.Ticker.addEventListener("tick", playTitleAudio);
	if (soundsLoaded == false) {
		loadSounds();
	}

	killStartButton();

}

function killStartButton() {
	if (coverLoaded == true) {
		titleButton.removeEventListener("click", addCover);
	}
}

//cover audio

function playTitleAudio(evt) {
	if (coverVisible == true) {
		coverNarrator.play();
		coverNarrator.on("complete", soundComplete, null, true);
	}
}

function soundComplete(e) {
	createjs.Ticker.removeEventListener("tick", playTitleAudio);
	Cover.grumble_mc.addEventListener("click", playGrumble);
	Cover.humble_mc.addEventListener("click", playHumble);
	Cover.stumble_mc.addEventListener("click", playStumble);
	if (nextButtonVisible == false) {
		addNextButton();
	}
}

// next and previous button functionality

function addNextButton() {
	_this.addChild(nextButton);
	nextButton.alpha = 0;
	var coverSize = Cover.fade_mc.nominalBounds;
	nextButton.x = coverSize.width;
	createjs.Ticker.addEventListener("tick", fadeUpNextButton);
}

function addPreviousButton() {
	_this.addChild(previousButton);
	previousButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpPreviousButton);
}

function fadeUpNextButton(e) {
	if (nextButton.alpha <= 1) {
		nextButton.alpha += fadeAmount;
	}

	if (nextButton.alpha >= 1) {
		if (!nextButtonVisible) {
			nextButton.addEventListener("click", nextPage);
			nextButtonVisible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpNextButton);
		}

	}

}

function fadeUpPreviousButton(e) {
	if (previousButton.alpha <= 1) {
		previousButton.alpha += fadeAmount;
	}

	if (previousButton.alpha >= 1) {
		if (!previousButtonVisible) {
			previousButton.addEventListener("click", previousPage);
			previousButtonVisible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpPreviousButton);
		}

	}

}

function fadeDownPreviousButton(e) {
	if (previousButton.alpha >= 0) {
		previousButton.alpha -= fadeAmount;
	}

	if (previousButton.alpha <= 0) {
		if (previousButtonVisible == true) {
			previousButton.removeEventListener("click", previousPage);
			_this.removeChild(previousButton);
			previousButtonVisible = false;
			createjs.Ticker.removeEventListener("tick", fadeDownPreviousButton);
		}

	}

}

function nextPage() {
	nextButton.removeEventListener("click", nextPage);
	nextWaitTime();
	if (pageNumber == 0) {
		killCover();
		createjs.Ticker.addEventListener("tick", goToPage1);
	}
	if (pageNumber == 1) {
		killPage1();
		createjs.Ticker.addEventListener("tick", goToPage2);
	}
	
	if (pageNumber == 2) {
		killPage2();
		createjs.Ticker.addEventListener("tick", goToPage3);
	}
	
	if (pageNumber == 3) {
		killPage3();
		createjs.Ticker.addEventListener("tick", goToPage4);
	}
	
	if (pageNumber == 4) {
		killPage4();
		createjs.Ticker.addEventListener("tick", goToPage5);
	}
	
	if (pageNumber == 5) {
		killPage5();
		createjs.Ticker.addEventListener("tick", goToPage6);
	}
	
	if (pageNumber == 6) {
		killPage6();
		createjs.Ticker.addEventListener("tick", goToPage7);
	}
	
	if (pageNumber == 7) {
		killPage7();
		createjs.Ticker.addEventListener("tick", goToPage8);
	}
	
	if (pageNumber == 8) {
		killPage8();
		createjs.Ticker.addEventListener("tick", goToPage9);
	}
	
	if (pageNumber == 9) {
		killPage9();
		createjs.Ticker.addEventListener("tick", goToPage10);
	}
	
	if (pageNumber == 10) {
		killPage10();
		createjs.Ticker.addEventListener("tick", goToPage11);
	}
	
	if (pageNumber == 11) {
		killPage11();
		createjs.Ticker.addEventListener("tick", goToPage12);
	}
	
	if (pageNumber == 12) {
		killPage12();
		createjs.Ticker.addEventListener("tick", goToPage13);
	}
	
	if (pageNumber == 13) {
		killPage13();
		createjs.Ticker.addEventListener("tick", goToPage14);
	}
	
	if (pageNumber == 14) {
		killPage14();
		createjs.Ticker.addEventListener("tick", goToPage15);
	}
	
	if (pageNumber == 15) {
		killPage15();
		createjs.Ticker.addEventListener("tick", goToPage16);
	}
	
	if (pageNumber == 16) {
		killPage16();
		createjs.Ticker.addEventListener("tick", goToPage17);
	}
	
	if (pageNumber == 17) {
		killPage17();
		createjs.Ticker.addEventListener("tick", goToPage18);
	}
	

	if (pageNumber < 18) {
		pageNumber++;
	}
}

function previousPage() {
	previousButton.removeEventListener("click", previousPage);
	previousWaitTime();
	if (pageNumber == 1) {
		killPage1();
		createjs.Ticker.addEventListener("tick", goToCover);
	}

	if (pageNumber == 2) {
		killPage2();
		createjs.Ticker.addEventListener("tick", goToPage1);
	}
	
	if (pageNumber == 3) {
		killPage3();
		createjs.Ticker.addEventListener("tick", goToPage2);
	}
	
	if (pageNumber == 4) {
		killPage4();
		createjs.Ticker.addEventListener("tick", goToPage3);
	}
	
	if (pageNumber == 5) {
		killPage5();
		createjs.Ticker.addEventListener("tick", goToPage4);
	}
	
	if (pageNumber == 6) {
		killPage6();
		createjs.Ticker.addEventListener("tick", goToPage5);
	}
	
	if (pageNumber == 7) {
		killPage7();
		createjs.Ticker.addEventListener("tick", goToPage6);
	}
	
	if (pageNumber == 8) {
		killPage8();
		createjs.Ticker.addEventListener("tick", goToPage7);
	}
	
	if (pageNumber == 9) {
		killPage9();
		createjs.Ticker.addEventListener("tick", goToPage8);
	}
	
	if (pageNumber == 10) {
		killPage10();
		createjs.Ticker.addEventListener("tick", goToPage9);
	}
	
	if (pageNumber == 11) {
		killPage11();
		createjs.Ticker.addEventListener("tick", goToPage10);
	}
	
	if (pageNumber == 12) {
		killPage12();
		createjs.Ticker.addEventListener("tick", goToPage11);
	}
	
	if (pageNumber == 13) {
		killPage13();
		createjs.Ticker.addEventListener("tick", goToPage12);
	}
	
	if (pageNumber == 14) {
		killPage14();
		createjs.Ticker.addEventListener("tick", goToPage13);
	}
	
	if (pageNumber == 15) {
		killPage15();
		createjs.Ticker.addEventListener("tick", goToPage14);
	}
	
	if (pageNumber == 16) {
		killPage16();
		createjs.Ticker.addEventListener("tick", goToPage15);
	}
	
	if (pageNumber == 17) {
		killPage17();
		createjs.Ticker.addEventListener("tick", goToPage16);
	}
	
	if (pageNumber == 18) {
		killPage18();
		createjs.Ticker.addEventListener("tick", goToPage17);
	}

	if (pageNumber > 0) {
		pageNumber--;
	}
}

function goToCover(e) {

	createjs.Ticker.addEventListener("tick", fadeDownPreviousButton);

	if (pageFaded == true) {
		addCover();
		_this.addChild(titleButton);
		createjs.Ticker.removeEventListener("tick", goToCover);
	}
}

function goToPage1(e) {
	if (pageFaded == true) {
		addPage1();
		createjs.Ticker.removeEventListener("tick", goToPage1);
	}
}

function goToPage2(e) {
	if (pageFaded == true) {
		addPage2();
		createjs.Ticker.removeEventListener("tick", goToPage2);
	}

}

function goToPage3(e) {
	if (pageFaded == true) {
		addPage3();
		createjs.Ticker.removeEventListener("tick", goToPage3);
	}

}

function goToPage4(e) {
	if (pageFaded == true) {
		addPage4();
		createjs.Ticker.removeEventListener("tick", goToPage4);
	}

}

function goToPage5(e) {
	if (pageFaded == true) {
		addPage5();
		createjs.Ticker.removeEventListener("tick", goToPage5);
	}

}

function goToPage6(e) {
	if (pageFaded == true) {
		addPage6();
		createjs.Ticker.removeEventListener("tick", goToPage6);
	}

}

function goToPage7(e) {
	if (pageFaded == true) {
		addPage7();
		createjs.Ticker.removeEventListener("tick", goToPage7);
	}

}

function goToPage8(e) {
	if (pageFaded == true) {
		addPage8();
		createjs.Ticker.removeEventListener("tick", goToPage8);
	}

}

function goToPage9(e) {
	if (pageFaded == true) {
		addPage9();
		createjs.Ticker.removeEventListener("tick", goToPage9);
	}

}

function goToPage10(e) {
	if (pageFaded == true) {
		addPage10();
		createjs.Ticker.removeEventListener("tick", goToPage10);
	}

}

function goToPage11(e) {
	if (pageFaded == true) {
		addPage11();
		createjs.Ticker.removeEventListener("tick", goToPage11);
	}

}

function goToPage12(e) {
	if (pageFaded == true) {
		addPage12();
		createjs.Ticker.removeEventListener("tick", goToPage12);
	}

}

function goToPage13(e) {
	if (pageFaded == true) {
		addPage13();
		createjs.Ticker.removeEventListener("tick", goToPage13);
	}

}

function goToPage14(e) {
	if (pageFaded == true) {
		addPage14();
		createjs.Ticker.removeEventListener("tick", goToPage14);
	}

}

function goToPage15(e) {
	if (pageFaded == true) {
		addPage15();
		createjs.Ticker.removeEventListener("tick", goToPage15);
	}

}

function goToPage16(e) {
	if (pageFaded == true) {
		addPage16();
		createjs.Ticker.removeEventListener("tick", goToPage16);
	}

}

function goToPage17(e) {
	if (pageFaded == true) {
		addPage17();
		createjs.Ticker.removeEventListener("tick", goToPage17);
	}

}

function goToPage18(e) {
	if (pageFaded == true) {
		addPage18();
		createjs.Ticker.removeEventListener("tick", goToPage18);
	}

}

function nextWaitTime() {
	setTimeout(function () {
		nextButton.addEventListener("click", nextPage);
	}, 2000);
}

function previousWaitTime() {
	setTimeout(function () {
		previousButton.addEventListener("click", previousPage);
	}, 2000);
}

//cover functionality

// fade cover up and down
function fadeUpCover(e) {
	if (Cover.fade_mc.alpha >= 0) {
		Cover.fade_mc.alpha -= fadeAmount;
	}

	if (titleButton.alpha <= 1) {
		titleButton.alpha += fadeAmount;
	}


	if (Cover.fade_mc.alpha <= 0) {
		if (!coverVisible) {
			pageFaded = false;
			coverVisible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpCover);
		}

	}

}

function fadeDownCover(e) {

	if (Cover.fade_mc.alpha <= 1) {
		Cover.fade_mc.alpha += fadeAmount;
	}

	if (titleButton.alpha >= 0) {
		titleButton.alpha -= fadeAmount;
	}

	if (Cover.fade_mc.alpha >= 1) {
		if (coverVisible == true) {
			coverVisible = false;
			coverLoaded = false;
			pageFaded = true;
			createjs.Ticker.removeEventListener("tick", loopCoverAnimations);
			_this.removeChild(Cover);
		}

	}

	if (titleButton.alpha <= 0) {
		_this.removeChild(titleButton);
		createjs.Ticker.removeEventListener("tick", fadeDownCover);
	}
}

//cover interactivity
function loopCoverAnimations(e) {

	if (Cover.bee_mc.currentLabel == "endLoop") {

		Cover.bee_mc.gotoAndPlay("startLoop");
	}

	if (Cover.bee_mc.currentLabel == "endAnim") {

		beePlaying = false;
	}

	if (Cover.dragonfly_mc.currentLabel == "endLoop") {

		Cover.dragonfly_mc.gotoAndPlay("startLoop");
	}

	if (Cover.dragonfly_mc.currentLabel == "endAnim") {

		dragonflyPlaying = false;
	}

	if (Cover.stumble_mc.currentLabel == "endLoop") {

		Cover.stumble_mc.gotoAndPlay("startLoop");
	}

	if (Cover.stumble_mc.currentLabel == "endAnim") {

		stumbleHappy01Playing = false;
	}

	if (Cover.grumble_mc.currentLabel == "endLoop") {

		Cover.grumble_mc.gotoAndPlay("startLoop");
	}

	if (Cover.grumble_mc.currentLabel == "endAnim") {

		grumbleHappy03Playing = false;
	}

	if (Cover.humble_mc.currentLabel == "endLoop") {

		Cover.humble_mc.gotoAndPlay("startLoop");
	}

	if (Cover.humble_mc.currentLabel == "endAnim") {

		humbleHappy02Playing = false;
	}

}

function playBee() {
	if (beePlaying == false) {
		Cover.bee_mc.gotoAndPlay("startAnim");
		beePlaying = true;
	}

}

function playDragonfly() {
	if (dragonflyPlaying == false) {
		Cover.dragonfly_mc.gotoAndPlay("startAnim");
		dragonflyPlaying = true;
	}

}

Cover.yeti_mc.addEventListener("click", playYeti);

function playYeti() {
	if (yetiUp == false) {
		Cover.yeti_mc.gotoAndPlay("startAnimUp");
		coverYeti.play();
		yetiUp = true;
	} else if (yetiUp == true) {
		Cover.yeti_mc.gotoAndPlay("startAnimDown");
		yetiUp = false;
	}

}

function playGrumble() {
	if (grumbleHappy03Playing == false) {
		Cover.grumble_mc.gotoAndPlay("startAnim");
		grumbleHappy03Playing = true;
	}
	grumbleHappy03.play();
}

function playHumble() {
	if (humbleHappy02Playing == false) {
		Cover.humble_mc.gotoAndPlay("startAnim");
		humbleHappy02Playing = true;
	}
	humbleHappy02.play();
}

function playStumble() {
	if (stumbleHappy01Playing == false) {
		Cover.stumble_mc.gotoAndPlay("startAnim");
		stumbleHappy01Playing = true;
	}
	stumbleHappy01.play();
}

// remove cover
function killCover() {
	createjs.Ticker.addEventListener("tick", fadeDownCover);
	Cover.bee_mc.removeEventListener("click", playBee);
	Cover.dragonfly_mc.removeEventListener("click", playDragonfly);
	Cover.grumble_mc.addEventListener("click", playGrumble);
	Cover.humble_mc.addEventListener("click", playHumble);
	Cover.stumble_mc.addEventListener("click", playStumble);
	coverLoaded = false;
}

// ***PAGE 1***

function addPage1() {
	_this.addChildAt(Page1, 1);
	page1Loaded = true;
	Page1.page1_text1_mc.alpha = 0;
	Page1.page1_text2_mc.alpha = 0;
	Page1.page1_text3_mc.alpha = 0;
	Page1.page1_text4_mc.alpha = 0;
	Page1.grumble_page1_mc.gotoAndPlay("startOpeningLoop");
	Page1.stumble_page1_mc.gotoAndPlay("startOpeningLoop");
	Page1.humble_page1_mc.gotoAndStop(0);
	createjs.Ticker.addEventListener("tick", fadeUpPage1);
	createjs.Ticker.addEventListener("tick", loopPage1Animations);
	createjs.Ticker.addEventListener("tick", playPage1Audio);
	Page1.tree1_page1_mc.addEventListener("click", playPage1Tree1);
	Page1.tree2_page1_mc.addEventListener("click", playPage1Tree2);
	Page1.tree3_page1_mc.addEventListener("click", playPage1Tree3);
	Page1.tree4_page1_mc.addEventListener("click", playPage1Tree4);
}

// fade page 1 up and down
function fadeUpPage1(e) {
	if (Page1.fade_mc.alpha >= 0) {
		Page1.fade_mc.alpha -= fadeAmount;
	}


	if (Page1.fade_mc.alpha <= 0) {
		if (previousButtonVisible == false) {
			addPreviousButton();
		}
		if (!page1Visible) {
			page1Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage1);
		}

	}

}

function fadeDownPage1(e) {
	if (Page1.fade_mc.alpha <= 1) {
		Page1.fade_mc.alpha += fadeAmount;
	}


	if (Page1.fade_mc.alpha >= 1) {
		if (page1Visible == true) {
			page1Visible = false;
			pageFaded = true;
			_this.removeChild(Page1);
			page1Line1.stop();
			page1Line2.stop();
			page1Line3.stop();
			page1Line4.stop();
			createjs.Ticker.removeEventListener("tick", loopPage1Animations);
			createjs.Ticker.removeEventListener("tick", fadeDownPage1);
		}

	}

}

//page 1 functionality

//page 1 audio and text
function playPage1Audio(evt) {
	if (page1Visible == true) {
		createjs.Ticker.addEventListener("tick", fadeUpText1);
		page1Line1.play();
		page1Line1.on("complete", page1Line1Complete, null, true);
	}
}

function fadeUpText1(e) {

	if (Page1.page1_text1_mc.alpha <= 1) {
		Page1.page1_text1_mc.alpha += fadeAmount;
	}


	if (Page1.page1_text1_mc.alpha >= 1) {
		if (!page1Text1Visible) {
			page1Text1Visible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpText1);
		}

	}

}

function page1Line1Complete(e) {
	createjs.Ticker.removeEventListener("tick", playPage1Audio);
	if (page1Text1Visible == true) {
		createjs.Ticker.addEventListener("tick", fadeUpText2);
		page1Line2.play();
		page1Line2.on("complete", page1Line2Complete, null, true);
	}
}

function fadeUpText2(e) {

	if (Page1.page1_text2_mc.alpha <= 1) {
		Page1.page1_text2_mc.alpha += fadeAmount;
	}


	if (Page1.page1_text2_mc.alpha >= 1) {
		if (!page1Text2Visible) {
			page1Text2Visible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpText2);
		}

	}

}

function page1Line2Complete(e) {
	Page1.stumble_page1_mc.gotoAndPlay("startUpAnim");
	stumbleHappy01.play();
	stumbleHappy01.on("complete", playLine3, null, true);
	Page1.stumble_page1_mc.addEventListener("click", playPage1Stumble);

}

function playLine3() {
	createjs.Ticker.addEventListener("tick", fadeUpText3);
	page1Line3.play();
	page1Line3.on("complete", page1Line3Complete, null, true);
}

function fadeUpText3(e) {

	if (Page1.page1_text3_mc.alpha <= 1) {
		Page1.page1_text3_mc.alpha += fadeAmount;
	}


	if (Page1.page1_text3_mc.alpha >= 1) {
		if (!page1Text3Visible) {
			page1Text3Visible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpText3);
		}

	}

}

function page1Line3Complete(e) {
	Page1.humble_page1_mc.gotoAndPlay("startUpAnim");
	humbleHappy02.play();
	humbleHappy02.on("complete", playLine4, null, true);
	Page1.humble_page1_mc.addEventListener("click", playPage1Humble);

}

function playLine4() {
	createjs.Ticker.addEventListener("tick", fadeUpText4);
	page1Line4.play();
	page1Line4.on("complete", page1Line4Complete, null, true);
}

function fadeUpText4(e) {

	if (Page1.page1_text4_mc.alpha <= 1) {
		Page1.page1_text4_mc.alpha += fadeAmount;
	}


	if (Page1.page1_text4_mc.alpha >= 1) {
		if (!page1Text4Visible) {
			page1Text4Visible = true;
			createjs.Ticker.removeEventListener("tick", fadeUpText4);
		}

	}

}

function page1Line4Complete(e) {
	Page1.grumble_page1_mc.gotoAndPlay("startUpAnim");
	grumbleHappy03.play();
	Page1.grumble_page1_mc.addEventListener("click", playPage1Grumble);

}

//page 1 interactivity
function loopPage1Animations(e) {

	if (Page1.tree1_page1_mc.currentLabel == "endLoop") {

		Page1.tree1_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.tree1_page1_mc.currentLabel == "endAnim") {

		page1Tree1Playing = false;
	}

	if (Page1.tree2_page1_mc.currentLabel == "endLoop") {

		Page1.tree2_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.tree2_page1_mc.currentLabel == "endAnim") {

		page1Tree2Playing = false;
	}

	if (Page1.tree3_page1_mc.currentLabel == "endLoop") {

		Page1.tree3_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.tree3_page1_mc.currentLabel == "endAnim") {

		page1Tree3Playing = false;
	}

	if (Page1.tree4_page1_mc.currentLabel == "endLoop") {

		Page1.tree4_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.tree4_page1_mc.currentLabel == "endAnim") {

		page1Tree4Playing = false;
	}

	if (Page1.stumble_page1_mc.currentLabel == "endOpeningLoop") {

		Page1.stumble_page1_mc.gotoAndPlay("startOpeningLoop");
	}

	if (Page1.stumble_page1_mc.currentLabel == "endUpAnim") {

	}

	if (Page1.stumble_page1_mc.currentLabel == "endLoop") {

		Page1.stumble_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.stumble_page1_mc.currentLabel == "endAnim") {

		Page1.stumble_page1_mc.gotoAndPlay("startLoop");
		page1StumblePlaying = false;
	}

	if (Page1.grumble_page1_mc.currentLabel == "endOpeningLoop") {

		Page1.grumble_page1_mc.gotoAndPlay("startOpeningLoop");
	}

	if (Page1.grumble_page1_mc.currentLabel == "endLoop") {

		Page1.grumble_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.grumble_page1_mc.currentLabel == "endAnim") {

		Page1.grumble_page1_mc.gotoAndPlay("startLoop");
		page1GrumblePlaying = false;
	}

	if (Page1.humble_page1_mc.currentLabel == "Start") {

		Page1.humble_page1_mc.gotoAndStop("Start");
	}

	if (Page1.humble_page1_mc.currentLabel == "endLoop") {

		Page1.humble_page1_mc.gotoAndPlay("startLoop");
	}

	if (Page1.humble_page1_mc.currentLabel == "endAnim") {

		Page1.humble_page1_mc.gotoAndPlay("startLoop");
		page1HumblePlaying = false;
	}

}

function playPage1Stumble() {
	if (page1StumblePlaying == false) {
		Page1.stumble_page1_mc.gotoAndPlay("startAnim");
		stumbleHappy01Playing = true;
	}
}

function playPage1Humble() {
	if (page1HumblePlaying == false) {
		Page1.humble_page1_mc.gotoAndPlay("startAnim");
		humbleHappy02Playing = true;
	}
}

function playPage1Grumble() {
	if (page1GrumblePlaying == false) {
		Page1.grumble_page1_mc.gotoAndPlay("startAnim");
		grumbleHappy03Playing = true;
	}
}

function playPage1Tree1() {
	if (page1Tree1Playing == false) {
		Page1.tree1_page1_mc.gotoAndPlay("startAnim");
		page1Tree1Playing = true;
	}
}

function playPage1Tree2() {
	if (page1Tree2Playing == false) {
		Page1.tree2_page1_mc.gotoAndPlay("startAnim");
		page1Tree2Playing = true;
	}
}

function playPage1Tree3() {
	if (page1Tree3Playing == false) {
		Page1.tree3_page1_mc.gotoAndPlay("startAnim");
		page1Tree3Playing = true;
	}
}

function playPage1Tree4() {
	if (page1Tree4Playing == false) {
		Page1.tree4_page1_mc.gotoAndPlay("startAnim");
		page1Tree4Playing = true;
	}
}

// remove page 1
function killPage1() {
	createjs.Ticker.addEventListener("tick", fadeDownPage1);
	Page1.tree1_page1_mc.removeEventListener("click", playPage1Tree1);
	Page1.tree2_page1_mc.removeEventListener("click", playPage1Tree2);
	Page1.tree3_page1_mc.removeEventListener("click", playPage1Tree3);
	Page1.tree4_page1_mc.removeEventListener("click", playPage1Tree4);
	Page1.grumble_page1_mc.removeEventListener("click", playPage1Grumble);
	Page1.humble_page1_mc.removeEventListener("click", playPage1Humble);
	Page1.stumble_page1_mc.removeEventListener("click", playPage1Stumble);
	page1Loaded = false;
}

// ***PAGE 2***

function addPage2() {
	_this.addChildAt(Page2, 1);
	Page2.page2_text_mc.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpPage2);
	createjs.Ticker.addEventListener("tick", loopPage2Animations);
	createjs.Ticker.addEventListener("tick", playPage2Audio);
	Page2.bird_page2_mc.addEventListener("click", playBird);
	Page2.mouse_page2_mc.addEventListener("click", playMouse);
	Page2.grumble_page2_mc.addEventListener("click", playgrumbleAffirmative06);
	Page2.humble_page2_mc.addEventListener("click", playhumbleAffirmative03);
	Page2.stumble_page2_mc.addEventListener("click", playstumbleAffirmative07);
	page2Loaded = true;
}

//fade page 2 up and down
function fadeUpPage2(e) {
	if (Page2.fade_mc.alpha >= 0) {
		Page2.fade_mc.alpha -= fadeAmount;
	}


	if (Page2.fade_mc.alpha <= 0) {
		if (!page2Visible) {
			page2Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage2);
		}

	}

}

function fadeDownPage2(e) {
	if (Page2.fade_mc.alpha <= 1) {
		Page2.fade_mc.alpha += fadeAmount;
	}


	if (Page2.fade_mc.alpha >= 1) {
		if (page2Visible == true) {
			page2Visible = false;
			pageFaded = true;
			_this.removeChild(Page2);
			page2Line1.stop();
			createjs.Ticker.removeEventListener("tick", loopPage2Animations);
			createjs.Ticker.removeEventListener("tick", fadeDownPage2);
		}

	}

}

// page 2 functionality

//page 2 text and sound
function playPage2Audio(evt) {
	if (page2Visible == true) {
		createjs.Ticker.addEventListener("tick", fadePage2Text);
		page2Line1.play();
		page2Line1.on("complete", page2Line1Complete, null, true);
	}
}

function page2Line1Complete(e) {
	page2AudioComplete = true;
	createjs.Ticker.removeEventListener("tick", playPage2Audio);
}

function fadePage2Text(e) {

	if (Page2.page2_text_mc.alpha <= 1) {
		Page2.page2_text_mc.alpha += fadeAmount;
	}


	if (Page2.page2_text_mc.alpha >= 1) {
		createjs.Ticker.removeEventListener("tick", fadePage2Text);
	}

}

//page 2 interactivity
function loopPage2Animations(e) {

	if (Page2.bird_page2_mc.currentLabel == "endLoop") {

		Page2.bird_page2_mc.gotoAndPlay("startLoop");
	}

	if (Page2.bird_page2_mc.currentLabel == "endAnim") {

		page2BirdPlaying = false;
	}

	if (Page2.mouse_page2_mc.currentLabel == "endLoop") {

		Page2.mouse_page2_mc.gotoAndPlay("startLoop");
	}

	if (Page2.mouse_page2_mc.currentLabel == "endAnim") {

		page2MousePlaying = false;
	}

	if (Page2.stumble_page2_mc.currentLabel == "endLoop") {

		Page2.stumble_page2_mc.gotoAndPlay("startLoop");
	}

	if (Page2.stumble_page2_mc.currentLabel == "endAnim") {

		stumbleAffirmative07Playing = false;
	}

	if (Page2.grumble_page2_mc.currentLabel == "endLoop") {

		Page2.grumble_page2_mc.gotoAndPlay("startLoop");
	}

	if (Page2.grumble_page2_mc.currentLabel == "endAnim") {

		grumbleAffirmative06Playing = false;
	}

	if (Page2.humble_page2_mc.currentLabel == "endLoop") {

		Page2.humble_page2_mc.gotoAndPlay("startLoop");
	}

	if (Page2.humble_page2_mc.currentLabel == "endAnim") {

		humbleAffirmative03Playing = false;
	}

}

function playBird() {
	if (page2BirdPlaying == false) {
		Page2.bird_page2_mc.gotoAndPlay("startAnim");
		page2BirdPlaying = true;
	}

}

function playMouse() {
	if (page2MousePlaying == false) {
		Page2.mouse_page2_mc.gotoAndPlay("startAnim");
		page2MousePlaying = true;
	}

}

function playgrumbleAffirmative06() {
	if (grumbleAffirmative06Playing == false) {
		Page2.grumble_page2_mc.gotoAndPlay("startAnim");
		grumbleAffirmative06Playing = true;
	}

	if (page2AudioComplete == true) {
		grumbleAffirmative06.play();
	}

}

function playhumbleAffirmative03() {
	if (humbleAffirmative03Playing == false) {
		Page2.humble_page2_mc.gotoAndPlay("startAnim");
		humbleAffirmative03Playing = true;
	}

	if (page2AudioComplete == true) {
		humbleAffirmative03.play();
	}

}

function playstumbleAffirmative07() {
	if (stumbleAffirmative07Playing == false) {
		Page2.stumble_page2_mc.gotoAndPlay("startAnim");
		stumbleAffirmative07Playing = true;
	}

	if (page2AudioComplete == true) {
		stumbleAffirmative07.play();
	}

}

// remove page 2
function killPage2() {
	createjs.Ticker.addEventListener("tick", fadeDownPage2);
	Page2.bird_page2_mc.removeEventListener("click", playBird);
	Page2.mouse_page2_mc.removeEventListener("click", playMouse);
	Page2.grumble_page2_mc.removeEventListener("click", playgrumbleAffirmative06);
	Page2.humble_page2_mc.removeEventListener("click", playhumbleAffirmative03);
	Page2.stumble_page2_mc.removeEventListener("click", playstumbleAffirmative07);
	page2Loaded = false;
}

// ***PAGE 3***

function addPage3() {
	_this.addChildAt(Page3, 1);
	Page3.gotoAndPlay(0);
	Page3.page3_text1_mc.alpha = 0;
	Page3.page3_text2_mc.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpPage3);
	page3Loaded = true;
}

//fade page 3 up and down
function fadeUpPage3(e) {
	if (Page3.fade_mc.alpha >= 0) {
		Page3.fade_mc.alpha -= fadeAmount;
	}


	if (Page3.fade_mc.alpha <= 0) {
		if (!page3Visible) {
			page3Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage3);
		}

	}

}

function fadeDownPage3(e) {
	if (Page3.fade_mc.alpha <= 1) {
		Page3.fade_mc.alpha += fadeAmount;
	}


	if (Page3.fade_mc.alpha >= 1) {
		if (page3Visible == true) {
			page3Visible = false;
			pageFaded = true;
			_this.removeChild(Page3);
			createjs.Ticker.removeEventListener("tick", fadeDownPage3);
		}

	}

}

// remove page 3
function killPage3() {
	createjs.Ticker.addEventListener("tick", fadeDownPage3);
	page3Loaded = false;
}

// ***PAGE 4***

function addPage4() {
	_this.addChildAt(Page4, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage4);
	page4Loaded = true;
}

//fade page 4 up and down
function fadeUpPage4(e) {
	if (Page4.fade_mc.alpha >= 0) {
		Page4.fade_mc.alpha -= fadeAmount;
	}


	if (Page4.fade_mc.alpha <= 0) {
		if (!page4Visible) {
			page4Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage4);
		}

	}

}

function fadeDownPage4(e) {
	if (Page4.fade_mc.alpha <= 1) {
		Page4.fade_mc.alpha += fadeAmount;
	}


	if (Page4.fade_mc.alpha >= 1) {
		if (page4Visible == true) {
			page4Visible = false;
			pageFaded = true;
			_this.removeChild(Page4);
			createjs.Ticker.removeEventListener("tick", fadeDownPage4);
		}

	}

}

// remove page 4
function killPage4() {
	createjs.Ticker.addEventListener("tick", fadeDownPage4);
	page4Loaded = false;
}

// ***PAGE 5***

function addPage5() {
	_this.addChildAt(Page5, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage5);
	page5Loaded = true;
}

//fade page 5 up and down
function fadeUpPage5(e) {
	if (Page5.fade_mc.alpha >= 0) {
		Page5.fade_mc.alpha -= fadeAmount;
	}


	if (Page5.fade_mc.alpha <= 0) {
		if (!page5Visible) {
			page5Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage5);
		}

	}

}

function fadeDownPage5(e) {
	if (Page5.fade_mc.alpha <= 1) {
		Page5.fade_mc.alpha += fadeAmount;
	}


	if (Page5.fade_mc.alpha >= 1) {
		if (page5Visible == true) {
			page5Visible = false;
			pageFaded = true;
			_this.removeChild(Page5);
			createjs.Ticker.removeEventListener("tick", fadeDownPage5);
		}

	}

}

// remove page 5
function killPage5() {
	createjs.Ticker.addEventListener("tick", fadeDownPage5);
	page5Loaded = false;
}

// ***PAGE 6***

function addPage6() {
	_this.addChildAt(Page6, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage6);
	page6Loaded = true;
}

//fade page 5 up and down
function fadeUpPage6(e) {
	if (Page6.fade_mc.alpha >= 0) {
		Page6.fade_mc.alpha -= fadeAmount;
	}


	if (Page6.fade_mc.alpha <= 0) {
		if (!page6Visible) {
			page6Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage6);
		}

	}

}

function fadeDownPage6(e) {
	if (Page6.fade_mc.alpha <= 1) {
		Page6.fade_mc.alpha += fadeAmount;
	}


	if (Page6.fade_mc.alpha >= 1) {
		if (page6Visible == true) {
			page6Visible = false;
			pageFaded = true;
			_this.removeChild(Page6);
			createjs.Ticker.removeEventListener("tick", fadeDownPage6);
		}

	}

}

// remove page 6
function killPage6() {
	createjs.Ticker.addEventListener("tick", fadeDownPage6);
	page6Loaded = false;
}

// ***PAGE 7***

function addPage7() {
	_this.addChildAt(Page7, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage7);
	page7Loaded = true;
}

//fade page 7 up and down
function fadeUpPage7(e) {
	if (Page7.fade_mc.alpha >= 0) {
		Page7.fade_mc.alpha -= fadeAmount;
	}


	if (Page7.fade_mc.alpha <= 0) {
		if (!page7Visible) {
			page7Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage7);
		}

	}

}

function fadeDownPage7(e) {
	if (Page7.fade_mc.alpha <= 1) {
		Page7.fade_mc.alpha += fadeAmount;
	}


	if (Page7.fade_mc.alpha >= 1) {
		if (page7Visible == true) {
			page7Visible = false;
			pageFaded = true;
			_this.removeChild(Page7);
			createjs.Ticker.removeEventListener("tick", fadeDownPage7);
		}

	}

}

// remove page 7
function killPage7() {
	createjs.Ticker.addEventListener("tick", fadeDownPage7);
	page7Loaded = false;
}

// ***PAGE 8***

function addPage8() {
	_this.addChildAt(Page8, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage8);
	page8Loaded = true;
}

//fade page 8 up and down
function fadeUpPage8(e) {
	if (Page8.fade_mc.alpha >= 0) {
		Page8.fade_mc.alpha -= fadeAmount;
	}


	if (Page8.fade_mc.alpha <= 0) {
		if (!page8Visible) {
			page8Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage8);
		}

	}

}

function fadeDownPage8(e) {
	if (Page8.fade_mc.alpha <= 1) {
		Page8.fade_mc.alpha += fadeAmount;
	}


	if (Page8.fade_mc.alpha >= 1) {
		if (page8Visible == true) {
			page8Visible = false;
			pageFaded = true;
			_this.removeChild(Page8);
			createjs.Ticker.removeEventListener("tick", fadeDownPage8);
		}

	}

}

// remove page 8
function killPage8() {
	createjs.Ticker.addEventListener("tick", fadeDownPage8);
	page8Loaded = false;
}

// ***PAGE 9***

function addPage9() {
	_this.addChildAt(Page9, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage9);
	page9Loaded = true;
}

//fade page 9 up and down
function fadeUpPage9(e) {
	if (Page9.fade_mc.alpha >= 0) {
		Page9.fade_mc.alpha -= fadeAmount;
	}


	if (Page9.fade_mc.alpha <= 0) {
		if (!page9Visible) {
			page9Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage9);
		}

	}

}

function fadeDownPage9(e) {
	if (Page9.fade_mc.alpha <= 1) {
		Page9.fade_mc.alpha += fadeAmount;
	}


	if (Page9.fade_mc.alpha >= 1) {
		if (page9Visible == true) {
			page9Visible = false;
			pageFaded = true;
			_this.removeChild(Page9);
			createjs.Ticker.removeEventListener("tick", fadeDownPage9);
		}

	}

}

// remove page 9
function killPage9() {
	createjs.Ticker.addEventListener("tick", fadeDownPage9);
	page9Loaded = false;
}

// ***PAGE 10***

function addPage10() {
	_this.addChildAt(Page10, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage10);
	page10Loaded = true;
}

//fade page 10 up and down
function fadeUpPage10(e) {
	if (Page10.fade_mc.alpha >= 0) {
		Page10.fade_mc.alpha -= fadeAmount;
	}


	if (Page10.fade_mc.alpha <= 0) {
		if (!page10Visible) {
			page10Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage10);
		}

	}

}

function fadeDownPage10(e) {
	if (Page10.fade_mc.alpha <= 1) {
		Page10.fade_mc.alpha += fadeAmount;
	}


	if (Page10.fade_mc.alpha >= 1) {
		if (page10Visible == true) {
			page10Visible = false;
			pageFaded = true;
			_this.removeChild(Page10);
			createjs.Ticker.removeEventListener("tick", fadeDownPage10);
		}

	}

}

// remove page 10
function killPage10() {
	createjs.Ticker.addEventListener("tick", fadeDownPage10);
	page10Loaded = false;
}

// ***PAGE 11***

function addPage11() {
	_this.addChildAt(Page11, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage11);
	page11Loaded = true;
}

//fade page 11 up and down
function fadeUpPage11(e) {
	if (Page11.fade_mc.alpha >= 0) {
		Page11.fade_mc.alpha -= fadeAmount;
	}


	if (Page11.fade_mc.alpha <= 0) {
		if (!page11Visible) {
			page11Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage11);
		}

	}

}

function fadeDownPage11(e) {
	if (Page11.fade_mc.alpha <= 1) {
		Page11.fade_mc.alpha += fadeAmount;
	}


	if (Page11.fade_mc.alpha >= 1) {
		if (page11Visible == true) {
			page11Visible = false;
			pageFaded = true;
			_this.removeChild(Page11);
			createjs.Ticker.removeEventListener("tick", fadeDownPage11);
		}

	}

}

// remove page 11
function killPage11() {
	createjs.Ticker.addEventListener("tick", fadeDownPage11);
	page11Loaded = false;
}

// ***PAGE 12***

function addPage12() {
	_this.addChildAt(Page12, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage12);
	page12Loaded = true;
}

//fade page 12 up and down
function fadeUpPage12(e) {
	if (Page12.fade_mc.alpha >= 0) {
		Page12.fade_mc.alpha -= fadeAmount;
	}


	if (Page12.fade_mc.alpha <= 0) {
		if (!page12Visible) {
			page12Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage12);
		}

	}

}

function fadeDownPage12(e) {
	if (Page12.fade_mc.alpha <= 1) {
		Page12.fade_mc.alpha += fadeAmount;
	}


	if (Page12.fade_mc.alpha >= 1) {
		if (page12Visible == true) {
			page12Visible = false;
			pageFaded = true;
			_this.removeChild(Page12);
			createjs.Ticker.removeEventListener("tick", fadeDownPage12);
		}

	}

}

// remove page 12
function killPage12() {
	createjs.Ticker.addEventListener("tick", fadeDownPage12);
	page12Loaded = false;
}

// ***PAGE 13***

function addPage13() {
	_this.addChildAt(Page13, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage13);
	page13Loaded = true;
}

//fade page 13 up and down
function fadeUpPage13(e) {
	if (Page13.fade_mc.alpha >= 0) {
		Page13.fade_mc.alpha -= fadeAmount;
	}


	if (Page13.fade_mc.alpha <= 0) {
		if (!page13Visible) {
			page13Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage13);
		}

	}

}

function fadeDownPage13(e) {
	if (Page13.fade_mc.alpha <= 1) {
		Page13.fade_mc.alpha += fadeAmount;
	}


	if (Page13.fade_mc.alpha >= 1) {
		if (page13Visible == true) {
			page13Visible = false;
			pageFaded = true;
			_this.removeChild(Page13);
			createjs.Ticker.removeEventListener("tick", fadeDownPage13);
		}

	}

}

// remove page 13
function killPage13() {
	createjs.Ticker.addEventListener("tick", fadeDownPage13);
	page13Loaded = false;
}

// ***PAGE 14***

function addPage14() {
	_this.addChildAt(Page14, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage14);
	page14Loaded = true;
}

//fade page 14 up and down
function fadeUpPage14(e) {
	if (Page14.fade_mc.alpha >= 0) {
		Page14.fade_mc.alpha -= fadeAmount;
	}


	if (Page14.fade_mc.alpha <= 0) {
		if (!page14Visible) {
			page14Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage14);
		}

	}

}

function fadeDownPage14(e) {
	if (Page14.fade_mc.alpha <= 1) {
		Page14.fade_mc.alpha += fadeAmount;
	}


	if (Page14.fade_mc.alpha >= 1) {
		if (page14Visible == true) {
			page14Visible = false;
			pageFaded = true;
			_this.removeChild(Page14);
			createjs.Ticker.removeEventListener("tick", fadeDownPage14);
		}

	}

}

// remove page 14
function killPage14() {
	createjs.Ticker.addEventListener("tick", fadeDownPage14);
	page14Loaded = false;
}

// ***PAGE 15***

function addPage15() {
	_this.addChildAt(Page15, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage15);
	page15Loaded = true;
}

//fade page 15 up and down
function fadeUpPage15(e) {
	if (Page15.fade_mc.alpha >= 0) {
		Page15.fade_mc.alpha -= fadeAmount;
	}


	if (Page15.fade_mc.alpha <= 0) {
		if (!page15Visible) {
			page15Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage15);
		}

	}

}

function fadeDownPage15(e) {
	if (Page15.fade_mc.alpha <= 1) {
		Page15.fade_mc.alpha += fadeAmount;
	}


	if (Page15.fade_mc.alpha >= 1) {
		if (page15Visible == true) {
			page15Visible = false;
			pageFaded = true;
			_this.removeChild(Page15);
			createjs.Ticker.removeEventListener("tick", fadeDownPage15);
		}

	}

}

// remove page 15
function killPage15() {
	createjs.Ticker.addEventListener("tick", fadeDownPage15);
	page15Loaded = false;
}

// ***PAGE 16***

function addPage16() {
	_this.addChildAt(Page16, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage16);
	page16Loaded = true;
}

//fade page 16 up and down
function fadeUpPage16(e) {
	if (Page16.fade_mc.alpha >= 0) {
		Page16.fade_mc.alpha -= fadeAmount;
	}


	if (Page16.fade_mc.alpha <= 0) {
		if (!page16Visible) {
			page16Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage16);
		}

	}

}

function fadeDownPage16(e) {
	if (Page16.fade_mc.alpha <= 1) {
		Page16.fade_mc.alpha += fadeAmount;
	}


	if (Page16.fade_mc.alpha >= 1) {
		if (page16Visible == true) {
			page16Visible = false;
			pageFaded = true;
			_this.removeChild(Page16);
			createjs.Ticker.removeEventListener("tick", fadeDownPage16);
		}

	}

}

// remove page 16
function killPage16() {
	createjs.Ticker.addEventListener("tick", fadeDownPage16);
	page16Loaded = false;
}

// ***PAGE 17***

function addPage17() {
	_this.addChildAt(Page17, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage17);
	page17Loaded = true;
}

//fade page 17 up and down
function fadeUpPage17(e) {
	if (Page17.fade_mc.alpha >= 0) {
		Page17.fade_mc.alpha -= fadeAmount;
	}


	if (Page17.fade_mc.alpha <= 0) {
		if (!page17Visible) {
			page17Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage17);
		}

	}

}

function fadeDownPage17(e) {
	if (Page17.fade_mc.alpha <= 1) {
		Page17.fade_mc.alpha += fadeAmount;
	}


	if (Page17.fade_mc.alpha >= 1) {
		if (page17Visible == true) {
			page17Visible = false;
			pageFaded = true;
			_this.removeChild(Page17);
			createjs.Ticker.removeEventListener("tick", fadeDownPage17);
		}

	}

}

// remove page 17
function killPage17() {
	createjs.Ticker.addEventListener("tick", fadeDownPage17);
	page17Loaded = false;
}

// ***PAGE 18***

function addPage18() {
	_this.addChildAt(Page18, 1);
	createjs.Ticker.addEventListener("tick", fadeUpPage18);
	page18Loaded = true;
}

//fade page 18 up and down
function fadeUpPage18(e) {
	if (Page18.fade_mc.alpha >= 0) {
		Page18.fade_mc.alpha -= fadeAmount;
	}


	if (Page18.fade_mc.alpha <= 0) {
		if (!page18Visible) {
			page18Visible = true;
			pageFaded = false;
			createjs.Ticker.removeEventListener("tick", fadeUpPage18);
		}

	}

}

function fadeDownPage18(e) {
	if (Page18.fade_mc.alpha <= 1) {
		Page18.fade_mc.alpha += fadeAmount;
	}


	if (Page18.fade_mc.alpha >= 1) {
		if (page18Visible == true) {
			page18Visible = false;
			pageFaded = true;
			_this.removeChild(Page18);
			createjs.Ticker.removeEventListener("tick", fadeDownPage18);
		}

	}

}

// remove page 18
function killPage18() {
	createjs.Ticker.addEventListener("tick", fadeDownPage18);
	page18Loaded = false;
}