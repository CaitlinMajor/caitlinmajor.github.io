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