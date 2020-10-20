var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;
var navButtonPressed = false;

var dragRightTolerance = 500;
var dragLeftTolerance = -500;
var transitionDelay = 350;
var transitionEase = createjs.Ease.quintOut;

var today = new Date();
var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

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
		{id:"music", src:"sounds/music-loop.mp3"}
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

		// load page according to cookie number
		setTimeout(MEDIABOX.onLoadingFinished, 800);
		var savedDate = MEDIABOX.getSaveDataEntry("date");

		if (savedDate != currentDate){
			MEDIABOX.setSaveDataEntry("page", "0");
		}
		
		pageIndex = MEDIABOX.getSaveDataEntry("page");
		
		if(pageIndex != null){
			PageArray = [page0, page1, page6, page10, page11];
			PageArray[pageIndex]();
			pageTotal = PageArray.length-1;
		} else {
			page0();
		}

		sounds.getInstance("music").play({loop:-1});
		sounds.getInstance("music").volume = 0.3;
	}

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

function mouseDownHandler(e){
	e.currentTarget.pressedX = e.currentTarget.x;
	e.currentTarget.pressed = true;
	e.currentTarget.offsetX = (e.stageX / stage.scaleX) - e.currentTarget.x;
	e.currentTarget.on("pressmove", pressMoveHandler);
	stage.addEventListener("stagemouseup", swipe);
};

function pressMoveHandler(e){
	e.currentTarget.dragDistance = page.x - e.currentTarget.pressedX;
	e.currentTarget.x = (e.stageX / stage.scaleX) - e.currentTarget.offsetX;		
};

function swipe(){
	if (pageIndex < pageTotal && page.dragDistance <= dragLeftTolerance){
		createjs.Tween.get(page).to({x:-(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(goToNextPage)
	}

	else if (pageIndex > 0 && page.dragDistance >= dragRightTolerance){
		createjs.Tween.get(page).to({x:(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(goToPrevPage)
	} 

	else {
		createjs.Tween.get(page).to({x:0}, transitionDelay, transitionEase);
	}

	page.off("pressmove", pressMoveHandler);
	stage.off("stagemouseup", swipe);
	page.pressed = false;
}

function goToNextPage(){
	killPage();
	page.off("mousedown", mouseDownHandler);
	if (pageIndex <= pageTotal){
			pageIndex++
		}
		console.log("page index " + pageIndex);
	PageArray[pageIndex]();
}

function goToPrevPage(){
	killPage();
	page.off("mousedown", mouseDownHandler);
	if (pageIndex >= 0){
			pageIndex--
		} 
	PageArray[pageIndex]();
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