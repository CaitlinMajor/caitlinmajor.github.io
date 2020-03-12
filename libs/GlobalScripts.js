var soundsLoaded = false;
var firstTime = true;
var nextButtonAdded = false;
var index = 0;
		
var dragRightTolerance = 500;
var dragLeftTolerance = -500;
var transitionDelay = 350;
var transitionEase = createjs.Ease.quintOut;

function getStarted(){
	lib = AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]).getLibrary();
	page0 = new lib.page0();
	page1 = new lib.page1();
	page2 = new lib.page2();
	page3 = new lib.page3();

	PageArray = [page0, page1, page2, page3];
	total = PageArray.length-1;
	page = PageArray[index];
	stage.addChild(page);

	createjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	page.on("mousedown", mouseDownHandler);

	}

	function mouseDownHandler(e)
	{
		e.currentTarget.pressedX = e.currentTarget.x;
		e.currentTarget.pressed = true;
		e.currentTarget.offsetX = (e.stageX / stage.scaleX) - e.currentTarget.x;
		e.currentTarget.on("pressmove", pressMoveHandler);
		stage.addEventListener("stagemouseup", stageMouseUpHandler);
	};

	function pressMoveHandler(e)
	{
		e.currentTarget.dragDistance = e.currentTarget.x - e.currentTarget.pressedX;
		e.currentTarget.x = (e.stageX / stage.scaleX) - e.currentTarget.offsetX;		
	};

	function stageMouseUpHandler (e)
	{
		if (index < total && (page.dragDistance <= dragLeftTolerance))
		{
			createjs.Tween.get(page).to({x:-(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(nextPage);
		}

		if (index > 0 && (page.dragDistance >= dragRightTolerance))
		{
			createjs.Tween.get(page).to({x:(canvas.width / stage.scaleX)}, transitionDelay, transitionEase).call(previousPage);
		} 

		else {
			createjs.Tween.get(page).to({x:0}, transitionDelay, transitionEase);
		}

		e.currentTarget.off("pressmove", pressMoveHandler);
		stage.off("stagemouseup", stageMouseUpHandler);
		e.currentTarget.pressed = false;
	}

	function nextPage(){
		if (index <= total){
			index++
		}
		stage.removeChild(page);
		getStarted();
	}

	function previousPage(){
		if (index >= 0){
			index--
		}
		console.log("index " + index);
		getStarted();
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