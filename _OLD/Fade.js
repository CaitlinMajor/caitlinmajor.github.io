class Fade {

	constructor (target, amount){
		this.target = target;
		this.amount = amount;
	}

	Up() {
		if (this.target.alpha >= 0) {
			this.target.alpha -= this.amount;
		}
	}