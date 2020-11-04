var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;
var previousButtonAdded = false;
var musicButtonAdded = false;
var zoomButtonAdded = false;
var musicOn = true;
var zoom = false;
var locked = false;
var lastInterval = getTime();
var pageLoaded = false;
var scaleValue = 1.50
var pageWidth = 2436;
var pageHeight = 1500;
var scaledWidth = pageWidth*scaleValue;
var scaledHeight = pageHeight*scaleValue;

var sounds = {
	preloadFiles: function(){
		var audioFile;
		var l = [];
		for (var i = sounds.library.length - 1; i >= 0; i--) {
			audioFile = sounds.library[i];
			audioFile.instance = createjs.Sound.createInstance(audioFile.id);
			l.push(audioFile);
		};
		sounds.library = l;
	},
	getInstance: function(id){
		var audioFile;
		for (var i = sounds.library.length - 1; i >= 0; i--) {
			audioFile = sounds.library[i];
			if(id == audioFile.id){
				return audioFile.instance;
			}
		};
		console.log("Couldn't find audio file with id: "+id);
		return false;
	},
	library:[
		{id:"title", src:"sounds/title.mp3"},
		{id:"page1Line1", src:"sounds/page1line1.mp3"},
		{id:"page1Line2", src:"sounds/page1line2.mp3"},
		{id:"page1Line3", src:"sounds/page1line3.mp3"},
		{id:"foundChloe", src:"sounds/found-chloe.mp3"},
		{id:"chloe", src:"sounds/chloe.mp3"},
		{id:"chloeGiggle", src:"sounds/chloe-giggle.mp3"},
		{id:"foundFinny", src:"sounds/found-finny.mp3"},
		{id:"finny", src:"sounds/finny.mp3"},
		{id:"finnyGiggle", src:"sounds/finny-giggle.mp3"},
		{id:"foundFiona", src:"sounds/found-fiona.mp3"},
		{id:"fionaGiggle", src:"sounds/fiona-giggle.mp3"},
		{id:"fiona", src:"sounds/fiona.mp3"},
		{id:"foundLeo", src:"sounds/found-leo.mp3"},
		{id:"leo", src:"sounds/leo.mp3"},
		{id:"leoYeah", src:"sounds/leo-yeah.mp3"},
		{id:"foundMyrtle", src:"sounds/found-myrtle.mp3"},
		{id:"myrtle", src:"sounds/myrtle.mp3"},
		{id:"myrtleGiggle", src:"sounds/myrtle-giggle.mp3"},
		{id:"foundOscar", src:"sounds/found-oscar.mp3"},
		{id:"oscarWoohoo", src:"sounds/oscar-woohoo.mp3"},
		{id:"oscar", src:"sounds/oscar.mp3"},
		{id:"foundSammy", src:"sounds/found-sammy.mp3"},
		{id:"sammy", src:"sounds/sammy.mp3"},
		{id:"sammyWahoo", src:"sounds/sammy-wahoo.mp3"},
		{id:"foundSandy", src:"sounds/found-sandy.mp3"},
		{id:"sandy", src:"sounds/sandy.mp3"},
		{id:"sandyGiggle", src:"sounds/sandy-giggle.mp3"},
		{id:"foundShelly", src:"sounds/found-shelly.mp3"},
		{id:"shelly", src:"sounds/shelly.mp3"},
		{id:"shellyGiggle", src:"sounds/shelly-giggle.mp3"},
		{id:"foundEveryone", src:"sounds/found-everyone.mp3"},
		{id:"music", src:"sounds/music-loop.mp3"},
		{id:"theEnd", src:"sounds/theend.mp3"}
	]
}

function getStarted(){
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	clicker = new lib.click();

	createjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;

	//* Pre load all the audio *//
	var queue = new createjs.LoadQueue();
	queue.installPlugin(createjs.Sound);
	queue.on("complete", handleComplete);

	queue.loadManifest(sounds.library);

	function handleComplete(){
		if (!soundsLoaded) sounds.preloadFiles();
		soundsLoaded = true;

		page0();

		sounds.getInstance("music").play({loop:-1})
		sounds.getInstance("music").volume = 0.15;
	}

	//add clicker dot
	stage.on("stagemousedown", function(event){
		stage.addChild(clicker);
		var p = this.globalToLocal(event.stageX, event.stageY);
		clicker.x = p.x;
		clicker.y = p.y;
		createjs.Ticker.addEventListener("tick", removeClicker);
	});

	function removeClicker(){
		if(clicker.currentFrame == 5){
			stage.removeChild(clicker);
			createjs.Ticker.removeEventListener("tick", removeClicker);
		}
	}
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
	nextButton.x = canvas.width * (1 + MEDIABOX.visibleDocumentSize.width) * 0.5;
	nextButton.y = canvas.height * (1 + MEDIABOX.visibleDocumentSize.height) * 0.5;
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
	previousButton.y = canvas.height * (1 + MEDIABOX.visibleDocumentSize.height) * 0.5;
	previousButton.x = canvas.width * (1 - MEDIABOX.visibleDocumentSize.width) * 0.5;
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

function addMusicButton(){
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	musicButton = new lib.music_mc();

	stage.addChild(musicButton);
	musicButton.gotoAndStop("musicOn");
	musicButton.x = canvas.width * (1 - MEDIABOX.visibleDocumentSize.width) * 0.5;
	musicButton.y = canvas.height * (1 - MEDIABOX.visibleDocumentSize.height) * 0.5;
	musicButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton);
	let musicUp = new Fade(musicButton);

	function fadeUpButton() {
		musicUp.FadeUp();
		if(musicUp.faded){
			createjs.Ticker.removeEventListener("tick", fadeUpButton);
		}
	}
}

function addZoomButton(){
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	zoomButton = new lib.zoom_mc();
	zoomButtonAdded = false;

	stage.addChild(zoomButton);
	zoomButton.x = canvas.width * (1 - MEDIABOX.visibleDocumentSize.width) * 0.5;
	zoomButton.y = canvas.height * (1 - MEDIABOX.visibleDocumentSize.height) * 0.5;
	zoomButton.alpha = 0;
	createjs.Ticker.addEventListener("tick", fadeUpButton);
	let zoomUp = new Fade(zoomButton);

	function fadeUpButton() {
		zoomUp.FadeUp();
		if(zoomUp.faded){
			createjs.Ticker.removeEventListener("tick", fadeUpButton);
		}
	}
}

function removeZoomButton(){

	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	createjs.Ticker.addEventListener("tick", fadeDownButton)
	let zoomDown = new Fade(zoomButton);
	zoomButtonAdded = false;
	
	function fadeDownButton() {
		zoomDown.FadeDown();
		if(!zoomDown.faded){
			createjs.Ticker.removeEventListener("tick", fadeDownButton);
		}
	}
}

function toggleMusic(){
	if (musicOn){
		//createjs.Ticker.addEventListener("tick", fadeMusicDown);
		sounds.getInstance("music").volume = 0;
		if(musicButtonAdded){musicButton.gotoAndStop("musicOff");}
		musicOn = false
	}

	else if (!musicOn){
		sounds.getInstance("music").play({loop:-1})
		sounds.getInstance("music").volume = 0.15;
		if(musicButtonAdded){musicButton.gotoAndStop("musicOn");}
		musicOn = true;
	}	
}

//** Turn music off when device is locked **//
function getTime() {
    return (new Date()).getTime();
}

function intervalHeartbeat() {
    var now = getTime();
    var diff = now - lastInterval;
    var offBy = diff - 1000; // 1000 = the 1 second delay I was expecting
    lastInterval = now;

    if(offBy > 100 && !locked && pageLoaded) { // don't trigger on small stutters less than 100ms
		locked = true;
		sounds.getInstance("music").volume = 0;
		// console.log("unlocked screen going to locked screen turning off music");
		// console.log('interval heartbeat - off by ' + offBy + 'ms');
    }

    else if (offBy < 100 && locked && pageLoaded){
    	locked = false;
    	sounds.getInstance("music").play({loop:-1})
		sounds.getInstance("music").volume = 0.15;
		// console.log("locked screen going to unlocked screen turning on music");
		// console.log('interval heartbeat - off by ' + offBy + 'ms');
    }
}

//** Zoom in on the page **//
function toggleZoom(){
	if(!zoom){
		createjs.Tween.get(page).to({x:-(canvas.width / 4),y:-(canvas.height / 4),scaleX:scaleValue,scaleY:scaleValue}, 1000, createjs.Ease.quintOut)
		zoom = true;
		page.on("mousedown", mouseDownHandler);
	}

	else if(zoom){
		createjs.Tween.get(page).to({x:1,y:1,scaleX:1,scaleY:1}, 1000, createjs.Ease.quintOut)
		zoom = false;
		page.off("mousedown", mouseDownHandler);
	}
}

function mouseDownHandler(e){
	if(zoom){
		e.currentTarget.pressedX = e.currentTarget.x;
		e.currentTarget.pressedY = e.currentTarget.y;
		e.currentTarget.offsetX = e.stageX - e.currentTarget.x;
		e.currentTarget.offsetY = e.stageY - e.currentTarget.y;
		page.on("pressmove", pressMoveHandler);
		stage.on("stagemouseup", turnOff);
	}
};

function pressMoveHandler(e){
	if (zoom){
		var minX = 1;
		var maxX = (pageWidth - scaledWidth) + 1;
		var minY = 1;
		var maxY = (pageHeight - scaledHeight) + 1;

		e.currentTarget.x = e.stageX - e.currentTarget.offsetX;
		if (page.x > minX){
			e.currentTarget.x = minX;
		}
		if (page.x < maxX){
			e.currentTarget.x = maxX;
		}
		e.currentTarget.y = e.stageY - e.currentTarget.offsetY;
		if (page.y > minY){
			e.currentTarget.y = minY;
		}
		if (page.y < maxY){
			e.currentTarget.y = maxY;
		}
	}
};

function turnOff(){
	page.off("pressmove", pressMoveHandler);
	page.off("mousedown", mouseDownHandler);
	stage.off("stagemouseup", turnOff);
}