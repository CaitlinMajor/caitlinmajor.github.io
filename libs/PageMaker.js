

// class Vehicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.maker =  maker;
//     this.engine = engine;
//   }

//   start() {
//     console.log("Starting...");
//   }
// }

// let bike = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// bike.start();    //Output: Starting...
// /* Adding method brake() later to the created object */
// bike.brake = function() {
//   console.log("Applying Brake...");
// }
// bike.brake();    //Output: Applying Brake...



class Fader {
	
	constructor(page, amount){
		this.page = page;
		this.amount = amount;
	}

	fadePageUp() {
		if (page.alpha >= 0) {
			page.alpha -= amount;
		}

		if (page.alpha <= 0) {
		}
	}
}

let page0 = new Fader('exportRoot.square_mc', 0.075);

createjs.Ticker.addEventListener("tick", fadeUpPage);

// createjs.Ticker.addEventListener("tick", fadeUpPage);

// 	//fade the page up and down //
// 	function fadeUpPage(e) {
// 		if (Page.fade_mc.alpha >= 0) {
// 			Page.fade_mc.alpha -= fadeAmount;
// 		}

// 		if (Page.fade_mc.alpha <= 0) {
// 			if (!PageVisible) {
// 				PageFaded = false;
// 				PageVisible = true;
// 				createjs.Ticker.removeEventListener("tick", fadeUpPage);
// 			}

// 		}

// 	}

// 	function fadeDownPage(e) {

// 		if (Page.fade_mc.alpha <= 1) {
// 			Page.fade_mc.alpha += fadeAmount;
// 		}


// 		if (Page.fade_mc.alpha >= 1) {
// 			if (PageVisible) {
// 				PageVisible = false;
// 				PageLoaded = false;
// 				pageFaded = true;
// 				createjs.Ticker.removeEventListener("tick", loopAnimations);
// 				stage.removeChild(Page);
// 			}

// 		}

// 	}