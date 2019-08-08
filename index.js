(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[3872,324,100,100],[3702,0,100,100],[0,0,1920,1080],[0,1082,3937,433],[3974,409,83,83],[3974,324,83,83],[2520,1517,271,331],[2793,1517,271,331],[3066,1517,271,331],[3872,0,191,322],[3339,1759,269,189],[2115,1517,403,243],[1922,0,1778,171],[3339,1517,240,240],[3581,1517,240,240],[3823,1517,240,240],[650,1517,291,390],[943,1517,291,390],[1236,1517,291,390],[1529,1517,291,390],[1822,1517,291,390],[1922,173,648,413],[0,1517,648,413],[2572,173,648,413],[3222,173,648,413],[1922,588,648,413],[2572,588,648,413],[3222,588,648,413]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bee1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bee2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.clouds = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dragonfly1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dragonfly2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.plant1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.plant2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.plant3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.plants_OL1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.plants_OL2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.plants_OL3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rocks_OL = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.sun1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sun2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.sun3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.weeds1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.weeds2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.weeds3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.weeds4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.weeds5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.yeti_body = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.yeti_eyes_blink = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.yeti_eyes_open = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.yeti_head = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.yeti_mouth_closed = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.yeti_mouth_open = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.yeti_ol_hands = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yeti_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yeti_mouth_closed();
	this.instance.parent = this;

	this.instance_1 = new lib.yeti_mouth_open();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,648,413);


(lib.yeti_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yeti_head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.008)","rgba(255,255,255,0)"],[0.639,1],0,0,0,0,0,274.3).s().p("A+CeEQsdseAAxmQAAxlMdsdQMdsdRlAAQRmAAMdMdQMdMdAARlQAARmsdMeQsdMcxmAAQxlAAsdscg");
	this.shape.setTransform(327,189.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82.5,648,544);


(lib.yeti_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yeti_eyes_open();
	this.instance.parent = this;

	this.instance_1 = new lib.yeti_eyes_blink();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,648,413);


(lib.yeti_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yeti_body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,648,413);


(lib.weeds5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weeds5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.weeds4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weeds4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.weeds3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weeds3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.weeds2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weeds2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.weeds1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weeds1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.Sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun1();
	this.instance.parent = this;

	this.instance_1 = new lib.sun2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-0.3);

	this.instance_2 = new lib.sun3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.plant3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plant1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,331);


(lib.plant2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plant2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,331);


(lib.plant1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plant3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,331);


(lib.dragonfly_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dragonfly1();
	this.instance.parent = this;

	this.instance_1 = new lib.dragonfly2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.008)","rgba(255,255,255,0)"],[0.639,1],0,0,0,0,0,103.9).s().p("ArXLZQkukvAAmqQAAmpEukuQEukuGpAAQGqAAEvEuQEtEuAAGpQAAGqktEvQkvEtmqAAQmpAAkuktg");
	this.shape.setTransform(46,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-60.5,206,206);


(lib.clouds_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3937,433);


(lib.Bee_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bee1();
	this.instance.parent = this;

	this.instance_1 = new lib.bee2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.008)","rgba(255,255,255,0)"],[0.639,1],0,0,0,0,0,136.2).s().p("Au5O6QmMmLAAovQAAouGMmMQGLmLIuAAQIvAAGMGLQGLGMAAIuQAAIvmLGLQmMGMovAAQouAAmLmMg");
	this.shape.setTransform(52.1,52.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-82.9,270,270);


(lib.yeti_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startLoop:0,endLoop:99,startAnimUp:100,endAnimUp:119,startLoopUp:120,endLoopUp:219,startAnimDown:220,endAnimDown:239});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay("startLoop");
	}
	this.frame_219 = function() {
		this.gotoAndPlay("startLoopUp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(120).call(this.frame_219).wait(21));

	// Mouth
	this.instance = new lib.yeti_mouth("single",0);
	this.instance.parent = this;
	this.instance.setTransform(324,206.5,1,1,0,0,0,324,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({startPosition:1},0).to({y:46.5},19).wait(101).to({startPosition:1},0).to({y:206.5,startPosition:0},19).wait(1));

	// eyes
	this.instance_1 = new lib.yeti_eyes("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,206.5,1,1,0,0,0,324,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(54).to({startPosition:0},0).to({y:46.5},19).wait(56).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(42).to({startPosition:0},0).to({y:206.5},19).wait(1));

	// Head
	this.instance_2 = new lib.yeti_head_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(324,206.5,1,1,0,0,0,324,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({startPosition:0},0).to({y:46.5},19).wait(101).to({startPosition:0},0).to({y:206.5},19).wait(1));

	// Body
	this.instance_3 = new lib.yeti_body_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(324,206.5,1,1,0,0,0,324,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({startPosition:0},0).to({y:46.5},19).wait(101).to({startPosition:0},0).to({y:206.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82.5,648,544);


(lib.Weeds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.weeds5_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,385.1,1,1,0,0,0,80.5,385.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-5.3,x:78.4},30).to({regX:80.4,scaleY:1,skewX:0,x:80.4,y:385.2},32).wait(1));

	// Layer 4
	this.instance_1 = new lib.weeds4_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.5,317,1,1,0,0,0,95.5,317);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:316.9,scaleX:0.99,scaleY:1.01,skewX:-9.7,skewY:-4.5,x:87.1,y:316.9},30).to({scaleX:1,scaleY:1,skewX:-0.3,skewY:0,x:95.3,y:317},32).wait(1));

	// Layer 3
	this.instance_2 = new lib.weeds3_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.5,373.1,1,1,0,0,0,82.5,373.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:1.01,skewX:-12.1,skewY:-7.1,x:79.3},30).to({scaleX:1,scaleY:1,rotation:-0.3,skewX:0,skewY:0,x:82.4,y:373.2},32).wait(1));

	// Layer 2
	this.instance_3 = new lib.weeds2_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(111.5,178,1,1,0,0,0,111.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.99,scaleY:1.02,skewX:-13.8,skewY:-8.8,x:90.4,y:178.1},30).to({regY:178.1,scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.3,x:110.8},32).wait(1));

	// Layer 1
	this.instance_4 = new lib.weeds1_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(129.5,109,1,1,0,0,0,129.5,109);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.98,scaleY:1.02,skewX:-15.2,skewY:-10.4,x:102.1,y:109.1},30).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.3,x:128.6},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,390);


(lib.Plant1_Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.plant1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(135.5,165.5,1,1,0,0,0,135.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:-6.9,x:115.5},28).to({regX:135.6,scaleY:1,skewX:0,x:135.2,y:165.6},28).wait(1));

	// Layer 2
	this.instance_1 = new lib.plant2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.5,165.5,1,1,0,0,0,135.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.03,skewX:-13.3,x:96.4},28).to({scaleY:1,skewX:-0.3,x:134.8,y:165.6},28).wait(1));

	// Layer 1
	this.instance_2 = new lib.plant3_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.5,165.5,1,1,0,0,0,135.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.01,skewX:-6.9,x:115.5},28).to({regX:135.6,scaleY:1,skewX:0,x:135.2,y:165.6},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,331);


(lib.dragonfly_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"startLoop":0,"endLoop":64,startAnim:65,endAnim:182});

	// Layer 1
	this.instance = new lib.dragonfly_anim("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.5,39.9,1,1,0,0,0,41.5,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:36.9,startPosition:3},15).to({y:39.9,startPosition:1},18).to({y:36.9,startPosition:3},17).to({y:39.9,startPosition:0},14).wait(1).to({startPosition:1},0).to({x:40.6,y:0.7,startPosition:3},4).to({x:-12,y:-51.5},5).to({x:-34.1,y:-35.7,startPosition:1},6).to({startPosition:1},10).to({x:-57.7,y:-86.8,startPosition:0},10).to({x:-65.5,y:-67.1,startPosition:2},5).to({startPosition:2},8).to({x:-106.4,y:-109.7,startPosition:1},9).to({x:-125.5,y:-81.1},7).to({startPosition:1},7).to({x:-97.6,y:-117.4,startPosition:2},5).to({x:-58.7,y:-131.6,startPosition:3},5).to({x:-14.4,y:-123.9,startPosition:0},5).to({x:41,y:-94.2,startPosition:2},5).to({x:61.5,y:-57.3,startPosition:0},6).to({x:68.7,y:-20.4,startPosition:2},6).to({x:59,y:12.5,startPosition:1},7).to({x:41.5,y:39.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-60.5,206,206);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds_tween("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,1968.5,216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2068.5},999).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1968.5,-216.5,3937,433);


(lib.bee_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"startLoop":0,"endLoop":47,"startAnim":48,"endAnim":117});

	// Layer 1
	this.instance = new lib.Bee_anim("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.1,50.1,1,1,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.1},24).to({y:49,startPosition:3},23).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:40.6,x:9,y:10.4},4,cjs.Ease.none).to({scaleX:1,scaleY:1,rotation:91.6,x:-10.8,y:-46.9,startPosition:1},5).to({scaleX:1,scaleY:1,rotation:114.8,x:-5.9,y:-114.6},4,cjs.Ease.none).to({rotation:138.1,x:37.1,y:-182.4},4).to({rotation:161.5,x:100.1,y:-221.2},4,cjs.Ease.none).to({regY:50.2,scaleX:1,scaleY:1,rotation:184.7,x:163.1,y:-225.9,startPosition:3},4).to({regY:50.3,scaleX:1,scaleY:1,rotation:205.8,x:216,y:-214.4},4,cjs.Ease.none).to({regY:50.2,rotation:227.1,x:268.6,y:-176.9},4).to({rotation:248.4,x:298.4,y:-122.9},4,cjs.Ease.none).to({regX:50.2,scaleX:1,scaleY:1,rotation:269.5,x:310.2,y:-64.9,startPosition:0},4).to({scaleX:1,scaleY:1,rotation:292.8,x:298.2,y:-8.7},4,cjs.Ease.none).to({scaleX:1,scaleY:1,rotation:316.1,x:260.2,y:47.7,startPosition:3},4).to({regY:50.4,rotation:334.4,x:217.5,y:76.1,startPosition:2},3,cjs.Ease.none).to({regX:50.3,regY:50.2,scaleX:1,scaleY:1,rotation:358.6,x:160.1,y:92.7},4).to({regX:50.4,scaleX:1,scaleY:1,rotation:359.2,x:119.1,y:89.3,startPosition:1},4,cjs.Ease.none).to({rotation:359.7,x:69.8,y:70.9,startPosition:2},5).to({regX:50.1,regY:50.1,scaleX:1,scaleY:1,rotation:360,x:50.1,y:49},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-82.9,270,270);


(lib.cover_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Plants
	this.instance = new lib.Weeds();
	this.instance.parent = this;
	this.instance.setTransform(286.2,908.5,0.876,0.876,0,0,0,145.6,195.1);

	this.instance_1 = new lib.Plant1_Anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1793.6,932.4,0.903,0.903,0,0,0,135.5,165.6);

	this.instance_2 = new lib.plants_OL3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1306.9,834.8);

	this.instance_3 = new lib.plants_OL2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(265.7,889.8);

	this.instance_4 = new lib.plants_OL1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.5,759.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Yeti_OL
	this.instance_5 = new lib.yeti_ol_hands();
	this.instance_5.parent = this;
	this.instance_5.setTransform(628.8,693.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Rocks
	this.instance_6 = new lib.rocks_OL();
	this.instance_6.parent = this;
	this.instance_6.setTransform(133.7,926.7,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Yeti
	this.yeti_mc = new lib.yeti_mc();
	this.yeti_mc.parent = this;
	this.yeti_mc.setTransform(952.3,1036.3,1,1,0,0,0,324,206.5);

	this.timeline.addTween(cjs.Tween.get(this.yeti_mc).wait(1));

	// Dragonfly
	this.dragonfly_mc = new lib.dragonfly_mc();
	this.dragonfly_mc.parent = this;
	this.dragonfly_mc.setTransform(1785.6,598.4,1,1,0,0,0,41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.dragonfly_mc).wait(1));

	// Bee
	this.bee_mc = new lib.bee_mc();
	this.bee_mc.parent = this;
	this.bee_mc.setTransform(120.1,508.2,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.bee_mc).wait(1));

	// BG
	this.instance_7 = new lib.BG();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Clouds
	this.instance_8 = new lib.Clouds();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1970.5,216.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Sun
	this.instance_9 = new lib.Sun();
	this.instance_9.parent = this;
	this.instance_9.setTransform(556.2,152.1,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover_mc, new cjs.Rectangle(-12.9,-0.4,3951.9,1291.7), null);


// stage content:
(lib.HTML5Canvas_Test2_BumbleNumsGruff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var Cover = new lib.cover_mc();
		var yetiUp = false;
		var beePlaying = false
		var dragonflyPlaying = false;
		
		this.addChild(Cover);
		
		createjs.Ticker.on("tick", loopAnim);
		
		function loopAnim(e) {
		
			if (Cover.bee_mc.currentLabel == "endLoop") {
		
				Cover.bee_mc.gotoAndPlay("startLoop");
			}
		
			if (Cover.bee_mc.currentLabel == "startLoop") {
		
				beePlaying = false;
			}
		
			if (Cover.dragonfly_mc.currentLabel == "endLoop") {
		
				Cover.dragonfly_mc.gotoAndPlay("startLoop");
			}
		
			if (Cover.dragonfly_mc.currentLabel == "startLoop") {
		
				dragonflyPlaying = false;
			}
		
		}
		
		Cover.bee_mc.addEventListener("click", playBee.bind(this));
		
		function playBee() {
			if (!beePlaying) {
				beePlaying = true;
				Cover.bee_mc.gotoAndPlay("startAnim");
			}
		
		}
		
		Cover.dragonfly_mc.addEventListener("click", playDragonfly.bind(this));
		
		function playDragonfly() {
			if (!dragonflyPlaying) {
				dragonflyPlaying = true;
				Cover.dragonfly_mc.gotoAndPlay("startAnim");
			}
		
		}
		
		Cover.yeti_mc.addEventListener("click", playYeti.bind(this));
		
		function playYeti() {
			if (!yetiUp) {
				Cover.yeti_mc.gotoAndPlay("startAnimUp");
				yetiUp = true;
			} else if (yetiUp) {
				Cover.yeti_mc.gotoAndPlay("startAnimDown");
				yetiUp = false;
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	id: '0FA02FCA927544E09E10A4C2868BB5E8',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0FA02FCA927544E09E10A4C2868BB5E8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;