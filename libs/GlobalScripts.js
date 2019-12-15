var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;

function getStarted(){
	//* Pre load all the audio *//

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	preload = new lib.preloader();

	stage.addChild(preload);

	var queue = new createjs.LoadQueue();
	queue.installPlugin(createjs.Sound);
	queue.on("complete", handleComplete);

	queue.loadManifest([
		{id:"grumbleAffirmative06", src:"sounds/grumble_affirmative_06.mp3"},
		{id:"grumbleChattering04", src:"sounds/grumble_chattering_04.mp3"},
		{id:"grumbleEating02", src:"sounds/grumble_eating_02.mp3"},
		{id:"grumbleHappy03", src:"sounds/grumble_happy_03.mp3"},
		{id:"grumbleScared07", src:"sounds/grumble_scared_07.mp3"},
		{id:"humbleAffirmative03", src:"sounds/humble_affirmative_03.mp3"},
		{id:"humbleEating01", src:"sounds/humble_eating_01.mp3"},
		{id:"humbleEnthusiastic12", src:"sounds/humble_enthusiastic_12.mp3"},
		{id:"humbleHappy02", src:"sounds/humble_happy_02.mp3"},
		{id:"humbleScared01", src:"sounds/humble_scared_01.mp3"},
		{id:"humbleScared02", src:"sounds/humble_scared_02.mp3"},
		{id:"stumbleAffirmative07", src:"sounds/stumble_affirmative_07.mp3"},
		{id:"stumbleEating01", src:"sounds/stumble_eating_01.mp3"},
		{id:"stumbleEnthusiastic01", src:"sounds/stumble_enthusiastic_01.mp3"},
		{id:"stumbleExcited06", src:"sounds/stumble_excited_06.mp3"},
		{id:"stumbleHappyDistant", src:"sounds/stumble_happy_distant.mp3"},
		{id:"stumbleHappy01", src:"sounds/stumble_happy_01.mp3"},
		{id:"stumblePhew05", src:"sounds/stumble_phew_05.mp3"},
		{id:"stumbleScared04", src:"sounds/stumble_scared_04.mp3"},
		{id:"stumbleScared07", src:"sounds/stumble_scared_07.mp3"},
		{id:"stumbleWow01", src:"sounds/stumble_wow_01.mp3"},
		{id:"yetiHmm", src:"sounds/yeti_hmm.mp3"},
		{id:"yetiArgh", src:"sounds/yeti_argh.mp3"},
		{id:"yetiGrr", src:"sounds/yeti_grr.mp3"},
		{id:"coverNarrator", src:"sounds/cover_audio.mp3"},
		{id:"page1Line1", src:"sounds/page1_audio_line1.mp3"},
		{id:"page1Line2", src:"sounds/page1_audio_line2.mp3"},
		{id:"page1Line3", src:"sounds/page1_audio_line3.mp3"},
		{id:"page1Line4", src:"sounds/page1_audio_line4.mp3"},
		{id:"page2Line1", src:"sounds/page2_audio_line1.mp3"},
		{id:"page3Line1", src:"sounds/page3_audio_line1.mp3"},
		{id:"page3Line2", src:"sounds/page3_audio_line2.mp3"},
		{id:"page4Line1", src:"sounds/page4_audio_line1.mp3"},
		{id:"page4Line2", src:"sounds/page4_audio_line2.mp3"},
		{id:"page5Line1", src:"sounds/page5_audio_line1.mp3"},
		{id:"page5Line2", src:"sounds/page5_audio_line2.mp3"},
		{id:"page5YetiLine1", src:"sounds/page5_audio_yeti_line1.mp3"},
		{id:"page6Line1", src:"sounds/page6_audio_line1.mp3"},
		{id:"page6YetiLine1", src:"sounds/page6_audio_yeti_line1.mp3"},
		{id:"page7Line1", src:"sounds/page7_audio_line1.mp3"},
		{id:"page7Line2", src:"sounds/page7_audio_line2.mp3"},
		{id:"page8Line1", src:"sounds/page8_audio_line1.mp3"},
		{id:"page8YetiLine1", src:"sounds/page8_audio_yeti_line1.mp3"},
		{id:"page8YetiLine2", src:"sounds/page8_audio_yeti_line2.mp3"},
		{id:"page9Line1", src:"sounds/page9_audio_line1.mp3"},
		{id:"page10Line1", src:"sounds/page10_audio_line1.mp3"},
		{id:"page10Line2", src:"sounds/page10_audio_line2.mp3"},
		{id:"page10YetiLine1", src:"sounds/page10_audio_yeti_line1.mp3"},
		{id:"page11Line1", src:"sounds/page11_audio_line1.mp3"},
		{id:"page11YetiLine1", src:"sounds/page11_audio_yeti_line1.mp3"},
		{id:"page12Humble", src:"sounds/page12_audio_humble.mp3"},
		{id:"page12Line1", src:"sounds/page12_audio_line1.mp3"},
		{id:"page12Line2", src:"sounds/page12_audio_line2.mp3"},
		{id:"page12YetiLine1", src:"sounds/page12_audio_yeti_line1.mp3"},
		{id:"page13Line1", src:"sounds/page13_audio_line1.mp3"},
		{id:"page14Line1", src:"sounds/page14_audio_line1.mp3"},
		{id:"page14YetiLine1", src:"sounds/page14_audio_yeti_line1.mp3"},
		{id:"page15Grumble", src:"sounds/page15_audio_grumble.mp3"},
		{id:"page15Line1", src:"sounds/page15_audio_line1.mp3"},
		{id:"page15Line2", src:"sounds/page15_audio_line2.mp3"},
		{id:"page15YetiLine1", src:"sounds/page15_audio_yeti_line1.mp3"},
		{id:"page16Line1", src:"sounds/page16_audio_line1.mp3"},
		{id:"page17Line1", src:"sounds/page17_audio_line1.mp3"},
		{id:"page17Line2", src:"sounds/page17_audio_line2.mp3"},
		{id:"page17YetiLine1", src:"sounds/page17_audio_yeti_line1.mp3"},
		{id:"page18Line1", src:"sounds/page18_audio_line1.mp3"},
		{id:"page18YetiLine1", src:"sounds/page18_audio_yeti_line1.mp3"},
		{id:"theEnd", src:"sounds/page18_audio_theend.mp3"}
	]);

	function handleComplete(){
		grumbleAffirmative06 = createjs.Sound.createInstance("grumbleAffirmative06");
		grumbleChattering04 = createjs.Sound.createInstance("grumbleChattering04");
		grumbleEating02 = createjs.Sound.createInstance("grumbleEating02");
		grumbleHappy03 = createjs.Sound.createInstance("grumbleHappy03");
		grumbleScared07 = createjs.Sound.createInstance("grumbleScared07");
		humbleAffirmative03 = createjs.Sound.createInstance("humbleAffirmative03");
		humbleEating01 = createjs.Sound.createInstance("humbleEating01");
		humbleEnthusiastic12 = createjs.Sound.createInstance("humbleEnthusiastic12");
		humbleHappy02 = createjs.Sound.createInstance("humbleHappy02");
		humbleScared01 = createjs.Sound.createInstance("humbleScared01");
		humbleScared02 = createjs.Sound.createInstance("humbleScared02");
		stumbleAffirmative07 = createjs.Sound.createInstance("stumbleAffirmative07");
		stumbleEating01 = createjs.Sound.createInstance("stumbleEating01");
		stumbleEnthusiastic01 = createjs.Sound.createInstance("stumbleEnthusiastic01");
		stumbleExcited06 = createjs.Sound.createInstance("stumbleExcited06");
		stumbleHappyDistant = createjs.Sound.createInstance("stumbleHappyDistant");
		stumbleHappy01 = createjs.Sound.createInstance("stumbleHappy01");
		stumblePhew05 = createjs.Sound.createInstance("stumblePhew05");
		stumbleScared04 = createjs.Sound.createInstance("stumbleScared04");
		stumbleScared07 = createjs.Sound.createInstance("stumbleScared07");
		stumbleWow01 = createjs.Sound.createInstance("stumbleWow01");
		yetiHmm = createjs.Sound.createInstance("yetiHmm");
		yetiArgh = createjs.Sound.createInstance("yetiArgh");
		yetiGrr = createjs.Sound.createInstance("yetiGrr");
		coverNarrator = createjs.Sound.createInstance("coverNarrator");
		page1Line1 = createjs.Sound.createInstance("page1Line1");
		page1Line2 = createjs.Sound.createInstance("page1Line2");
		page1Line3 = createjs.Sound.createInstance("page1Line3");
		page1Line4 = createjs.Sound.createInstance("page1Line4");
		page2Line1 = createjs.Sound.createInstance("page2Line1");
		page3Line1 = createjs.Sound.createInstance("page3Line1");
		page3Line2 = createjs.Sound.createInstance("page3Line2");
		page4Line1 = createjs.Sound.createInstance("page4Line1");
		page4Line2 = createjs.Sound.createInstance("page4Line2");
		page5Line1 = createjs.Sound.createInstance("page5Line1");
		page5Line2 = createjs.Sound.createInstance("page5Line2");
		page5YetiLine1 = createjs.Sound.createInstance("page5YetiLine1");
		page6Line1 = createjs.Sound.createInstance("page6Line1");
		page6YetiLine1 = createjs.Sound.createInstance("page6YetiLine1");
		page7Line1 = createjs.Sound.createInstance("page7Line1");
		page7Line2 = createjs.Sound.createInstance("page7Line2");
		page8Line1 = createjs.Sound.createInstance("page8Line1");
		page8YetiLine1 = createjs.Sound.createInstance("page8YetiLine1");
		page8YetiLine2 = createjs.Sound.createInstance("page8YetiLine2");
		page9Line1 = createjs.Sound.createInstance("page9Line1");
		page10Line1 = createjs.Sound.createInstance("page10Line1");
		page10Line2 = createjs.Sound.createInstance("page10Line2");
		page10YetiLine1 = createjs.Sound.createInstance("page10YetiLine1");
		page11Line1 = createjs.Sound.createInstance("page11Line1");
		page11YetiLine1 = createjs.Sound.createInstance("page11YetiLine1");
		page12Humble = createjs.Sound.createInstance("page12Humble");
		page12Line1 = createjs.Sound.createInstance("page12Line1");
		page12Line2 = createjs.Sound.createInstance("page12Line2");
		page12YetiLine1 = createjs.Sound.createInstance("page12YetiLine1");
		page13Line1 = createjs.Sound.createInstance("page13Line1");
		page14Line1 = createjs.Sound.createInstance("page14Line1");
		page14YetiLine1 = createjs.Sound.createInstance("page14YetiLine1");
		page15Grumble = createjs.Sound.createInstance("page15Grumble");
		page15Line1 = createjs.Sound.createInstance("page15Line1");
		page15Line2 = createjs.Sound.createInstance("page15Line2");
		page15YetiLine1 = createjs.Sound.createInstance("page15YetiLine1");
		page16Line1 = createjs.Sound.createInstance("page16Line1");
		page17Line1 = createjs.Sound.createInstance("page17Line1");
		page17Line2 = createjs.Sound.createInstance("page17Line2");
		page17YetiLine1 = createjs.Sound.createInstance("page17YetiLine1");
		page18Line1 = createjs.Sound.createInstance("page18Line1");
		page18YetiLine1 = createjs.Sound.createInstance("page18YetiLine1");
		theEnd = createjs.Sound.createInstance("theEnd");

		soundsLoaded = true;
		console.log("sounds loaded " + soundsLoaded);

		// load page according to cookie number
		var pageIndex = getCookie("page");
		var PageArray = [page0, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18];
		stage.removeChild(preload);
		if(pageIndex >=1){
			PageArray[pageIndex]();
		} else {
			page0();
		}
	}
}

//* Cookie Logic *//
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
  var cname = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

class Animations{
	
	constructor(target, endLoop, startLoop, endAnim, startAnim){

		this.playing = false;
		this.target = target;
		this.endLoop = endLoop;
		this.startLoop = startLoop;
		this.endAnim = endAnim;
		this.startAnim = startAnim;
	}

	Loop(){
		if (this.target.currentLabel == this.endLoop) {

			this.target.gotoAndPlay(this.startLoop);
		}

		if (this.target.currentLabel == this.endAnim) {

			this.target.gotoAndPlay(this.startLoop)

			this.playing = false;
		}

	}

	Play(){
		if(!this.playing){
			this.target.gotoAndPlay(this.startAnim);
			this.playing = true;
		}

	}

}

class Fade{

	constructor(target){
		this.target = target;
		this.faded = false;
		this.fadeAmount = 0.075;
	}

	FadeUp(){
		this.faded = false;

		if (this.target.alpha <= 1) {
			this.target.alpha += this.fadeAmount;
		}


		if (this.target.alpha >= 1) {
			if (!this.faded) {
				this.faded = true;
			}

		}
	}

	FadeDown(){
		this.faded = true;

		if (this.target.alpha >= 0) {
			this.target.alpha -= this.fadeAmount;
		}


		if (this.target.alpha <= 0) {
			if (this.faded) {
				this.faded = false;
			}

		}
	}
}

function addNextButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	nextButton = new lib.nextbutton_mc();

	stage.addChild(nextButton);
	width = window.outerWidth;
	height = window.outerHeight;
	nextButton.x = width;
	nextButton.y = height
	nextButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton)
	let nextUp = new Fade(nextButton);
	
	function fadeUpButton() {
		nextUp.FadeUp();
		if(nextUp.faded){
			createjs.Ticker.removeEventListener("tick", fadeUpButton);
		}

	}
}


function removeNextButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	createjs.Ticker.addEventListener("tick", fadeDownButton)
	let nextDown = new Fade(nextButton);
	nextButtonAdded = false;
	
	function fadeDownButton() {
		nextDown.FadeDown();
		if(!nextDown.faded){
			createjs.Ticker.removeEventListener("tick", fadeDownButton);
		}

	}
}


function addPreviousButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	previousButton = new lib.previousbutton_mc();

	stage.addChild(previousButton);
	width = window.outerWidth - window.outerWidth;
	height = window.outerHeight;
	previousButton.x = width;
	previousButton.y = height
	previousButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton);
	let previousUp = new Fade(previousButton);
	
	function fadeUpButton() {
		previousUp.FadeUp();
		if(previousUp.faded){
			createjs.Ticker.removeEventListener("tick", fadeUpButton);
		}

	}

}

function removePreviousButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	createjs.Ticker.addEventListener("tick", fadeDownButton)
	let previousDown = new Fade(previousButton);
	previousButtonAdded = false;
	
	function fadeDownButton() {
		previousDown.FadeDown();
		if(!previousDown.faded){
			createjs.Ticker.removeEventListener("tick", fadeDownButton);
		}

	}

}