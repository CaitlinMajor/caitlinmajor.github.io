var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;

function getStarted(){

	//* Pre load all the audio *//
	var queue = new createjs.LoadQueue();
	queue.installPlugin(createjs.Sound);
	queue.on("complete", handleComplete);

	queue.loadManifest([
		{id:"page0Audio1", src:"sounds/page0_audio1.mp3"},
		{id:"A", src:"sounds/a.mp3"},
		{id:"Ant", src:"sounds/ant.mp3"},
		{id:"Apple", src:"sounds/apple.mp3"},
		{id:"B", src:"sounds/b.mp3"},
		{id:"Bowl", src:"sounds/bowl.mp3"},
		{id:"Broccoli", src:"sounds/broccoli_1.mp3"},
		{id:"C", src:"sounds/c.mp3"},
		{id:"Cat", src:"sounds/cat.mp3"},
		{id:"catMeow", src:"sounds/catmeow.mp3"},
		{id:"catPurr", src:"sounds/catpurr.mp3"},
		{id:"Cuddles", src:"sounds/cuddles.mp3"},
		{id:"D", src:"sounds/d.mp3"},
		{id:"Dance", src:"sounds/dance.mp3"},
		{id:"Drum", src:"sounds/drum.mp3"},
		{id:"Drums", src:"sounds/drums.mp3"},
		{id:"E", src:"sounds/e.mp3"},
		{id:"Eat", src:"sounds/eat.mp3"},
		{id:"Egg", src:"sounds/egg_1.mp3"},
		{id:"F", src:"sounds/f.mp3"},
		{id:"Fish", src:"sounds/fish.mp3"},
		{id:"Frog", src:"sounds/frog.mp3"},
		{id:"G", src:"sounds/g.mp3"},
		{id:"Goat", src:"sounds/goat.mp3"},
		{id:"Grapes", src:"sounds/grapes_1.mp3"},
		{id:"H", src:"sounds/h.mp3"},
		{id:"Hat", src:"sounds/hat_2.mp3"},
		{id:"HulaHoop", src:"sounds/hulahoop_1.mp3"},
		{id:"I", src:"sounds/i.mp3"},
		{id:"Ice", src:"sounds/ice_1.mp3"},
		{id:"IceCream", src:"sounds/icecream_1.mp3"},
		{id:"J", src:"sounds/j.mp3"},
		{id:"Jelly", src:"sounds/jelly_1.mp3"},
		{id:"Jumping", src:"sounds/jumping.mp3"},
		{id:"page1Audio1", src:"sounds/page1_audio1.mp3"},
		{id:"page1Audio2", src:"sounds/page1_audio2.mp3"},
		{id:"page2Audio1", src:"sounds/page2_audio1.mp3"},
		{id:"page2Audio2", src:"sounds/page2_audio2.mp3"},
		{id:"page3Audio1", src:"sounds/page3_audio1.mp3"},
		{id:"page3Audio2", src:"sounds/page3_audio2.mp3"}
	]);

	function handleComplete(){
		page0Audio1 = createjs.Sound.createInstance("page0Audio1");
		aAudio = createjs.Sound.createInstance("A");
		antAudio = createjs.Sound.createInstance("Ant");
		appleAudio = createjs.Sound.createInstance("Apple");
		bAudio = createjs.Sound.createInstance("B");
		bowlAudio = createjs.Sound.createInstance("Bowl");
		broccoliAudio = createjs.Sound.createInstance("Broccoli");
		cAudio = createjs.Sound.createInstance("C");
		catAudio = createjs.Sound.createInstance("Cat");
		catMeow = createjs.Sound.createInstance("catMeow");
		catPurr = createjs.Sound.createInstance("catPurr");
		cuddlesAudio = createjs.Sound.createInstance("Cuddles");
		D = createjs.Sound.createInstance("D");
		Dance = createjs.Sound.createInstance("Dance");
		Drum = createjs.Sound.createInstance("Drum");
		Drums = createjs.Sound.createInstance("Drums");
		E = createjs.Sound.createInstance("E");
		Eat = createjs.Sound.createInstance("Eat");
		Egg = createjs.Sound.createInstance("Egg");
		F = createjs.Sound.createInstance("F");
		Fish = createjs.Sound.createInstance("Fish");
		Frog = createjs.Sound.createInstance("Frog");
		G = createjs.Sound.createInstance("G");
		Goat = createjs.Sound.createInstance("Goat");
		Grapes = createjs.Sound.createInstance("Grapes");
		H = createjs.Sound.createInstance("H");
		Hat = createjs.Sound.createInstance("Hat");
		HulaHoop = createjs.Sound.createInstance("HulaHoop");
		I = createjs.Sound.createInstance("I");
		Ice = createjs.Sound.createInstance("Ice");
		IceCream = createjs.Sound.createInstance("IceCream");
		J = createjs.Sound.createInstance("J");
		Jelly = createjs.Sound.createInstance("Jelly");
		Jumping = createjs.Sound.createInstance("Jumping");
		page1Audio1 = createjs.Sound.createInstance("page1Audio1");
		page1Audio2 = createjs.Sound.createInstance("page1Audio2");
		page2Audio1 = createjs.Sound.createInstance("page2Audio1");
		page2Audio2 = createjs.Sound.createInstance("page2Audio2");
		page3Audio1 = createjs.Sound.createInstance("page3Audio1");
		page3Audio2 = createjs.Sound.createInstance("page3Audio2");

		soundsLoaded = true;
		console.log("sounds loaded " + soundsLoaded);

		// load page according to cookie number
		var pageIndex = getCookie("page");
		var PageArray = [page0, page1, page2, page3];
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
	pageSize = page.fade_mc.nominalBounds;
	nextButton.x = pageSize.width;
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

