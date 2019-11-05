class Page extends createjs.Container {
	
	constructor(lib){

		super();
		
		var page0 = new lib.page0_mc();

		this.addChild(page0);
	}
}