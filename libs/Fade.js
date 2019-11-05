class Fade {

	constructor (target, amount, visible){
		this.target = target;
		this.amount = amount;
		this.visible = visible;
	}

	Up() {
		if (this.target.alpha >= 0) {
			this.target.alpha -= this.amount;
		}

		if (this.target.alpha <= 0) {
			if (!this.visible)
				this.visible = true;
				createjs.Ticker.removeEventListener("tick", fadeUp);
			}

		}
	}