var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;

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
		{id:"babyChirp", src:"sounds/baby_chirp.mp3"},
		{id:"babyDuckQuack", src:"sounds/baby_duck_quack.mp3"},
		{id:"mamaDuckQuack", src:"sounds/mama_duck_quack.mp3"},
		{id:"squonk", src:"sounds/squonk.mp3"},
		{id:"frog", src:"sounds/frog.mp3"},
		{id:"turtle", src:"sounds/turtle.mp3"},
		{id:"page0Title", src:"sounds/page0_title.mp3"},
		{id:"page1Line1", src:"sounds/page1_line1.mp3"},
		{id:"page2Line1", src:"sounds/page2_line1.mp3"},
		{id:"page2Line2", src:"sounds/page2_line2.mp3"},
		{id:"page3Line1", src:"sounds/page3_line1.mp3"},
		{id:"page3Line2", src:"sounds/page3_line2.mp3"},
		{id:"page3Line3", src:"sounds/page3_line3.mp3"},
		{id:"page4Line1", src:"sounds/page4_line1.mp3"},
		{id:"page4Line2", src:"sounds/page4_line2.mp3"},
		{id:"page4Line3", src:"sounds/page4_line3.mp3"},
		{id:"page5Line1", src:"sounds/page5_line1.mp3"},
		{id:"page5Line2", src:"sounds/page5_line2.mp3"},
		{id:"page6Line1", src:"sounds/page6_line1.mp3"},
		{id:"page7Line1", src:"sounds/page7_line1.mp3"},
		{id:"page7Line2", src:"sounds/page7_line2.mp3"},
		{id:"page7Line3", src:"sounds/page7_line3.mp3"},
		{id:"page7Line4", src:"sounds/page7_line4.mp3"},
		{id:"page8Line1", src:"sounds/page8_line1.mp3"},
		{id:"page8Line2", src:"sounds/page8_line2.mp3"},
		{id:"page8Line3", src:"sounds/page8_line3.mp3"},
		{id:"page9Line1", src:"sounds/page9_line1.mp3"},
		{id:"page9Line2", src:"sounds/page9_line2.mp3"},
		{id:"page10Line1", src:"sounds/page10_line1.mp3"},
		{id:"page10Line2", src:"sounds/page10_line2.mp3"},
		{id:"page11Line1", src:"sounds/page11_line1.mp3"},
		{id:"page11Line2", src:"sounds/page11_line2.mp3"},
		{id:"page12Line1", src:"sounds/page12_line1.mp3"},
		{id:"page12Line2", src:"sounds/page12_line2.mp3"},
		{id:"page13Line1", src:"sounds/page13_line1.mp3"},
		{id:"page13Line2", src:"sounds/page13_line2.mp3"},
		{id:"page14Line1", src:"sounds/page14_line1.mp3"},
		{id:"page14Line2", src:"sounds/page14_line2.mp3"},
		{id:"page14Line3", src:"sounds/page14_line3.mp3"},
		{id:"page15Line1", src:"sounds/page15_line1.mp3"},
		{id:"page15Line2", src:"sounds/page15_line2.mp3"},
		{id:"page15Line3", src:"sounds/page15_line3.mp3"},
		{id:"page16Line1", src:"sounds/page16_line1.mp3"},
		{id:"page16Line2", src:"sounds/page16_line2.mp3"},
		{id:"page17Line1", src:"sounds/page17_line1.mp3"},
		{id:"page17Line2", src:"sounds/page17_line2.mp3"},
		{id:"page18Line1", src:"sounds/page18_line1.mp3"},
		{id:"page18Line2", src:"sounds/page18_line2.mp3"},
		{id:"page18Line3", src:"sounds/page18_line3.mp3"},
		{id:"page19Line1", src:"sounds/page19_line1.mp3"},
		{id:"theEnd", src:"sounds/theEnd.mp3"}
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
		MEDIABOX.onLoadingFinished();
		var savedDate = MEDIABOX.getSaveDataEntry("date");

		if (savedDate != currentDate){
			MEDIABOX.setSaveDataEntry("page", "0");
		}
		
		pageIndex = MEDIABOX.getSaveDataEntry("page");
		
		if(pageIndex != null){
			PageArray = [page0, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19];
			PageArray[pageIndex]();
			pageTotal = PageArray.length-1;
		} else {
			page0();
		}
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
		createjs.Tween.get(page).to({x:-(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(nextPage)
	}

	if (pageIndex > 0 && page.dragDistance >= dragRightTolerance){
		createjs.Tween.get(page).to({x:(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(prevPage)
	} 

	else {
		createjs.Tween.get(page).to({x:0}, transitionDelay, transitionEase);
	}

	page.off("pressmove", pressMoveHandler);
	stage.off("stagemouseup", swipe);
	page.pressed = false;
}

function nextPage(){
	createjs.Ticker.off("tick", looper);
	killPage();
	page.off("mousedown", mouseDownHandler);
	if (pageIndex <= pageTotal){
			pageIndex++
		}
	if (pageIndex >= pageTotal){
		removeNextButton();
	}
	setTimeout(PageArray[pageIndex], 100);
}

function prevPage(){
	createjs.Ticker.off("tick", looper);
	killPage();
	page.off("mousedown", mouseDownHandler);
	if (pageIndex >= 0){
			pageIndex--
		} 
	if (pageIndex <=1){
		removePreviousButton();
	}
	setTimeout(PageArray[pageIndex], 100);
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