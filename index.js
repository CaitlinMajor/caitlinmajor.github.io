(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.Stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1M1kMAqYAAAQFBAADiDjQDkDjAAFAIAAS8QAAFBjkDjQjiDjlBAAMgqYAAAQlAAAjjjjQjjjjAAlBIAAy8QAAlADjjjQDjjjFAAAg");
	this.shape.setTransform(213.1,138.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AG0GjQgTgcAAg3IAAn+QAAg3ATgbQATgcAlAAQAuAAAaAxQAYgaAggMQAegOAnAAQAwAAAqATQAqAUAfAlQAiAkARAvQASAzAAA5QAAA4gTAyQgRAwgiAmQgfAmgqAUQgrAVgvAAQgiAAgegLQgegLgZgWIAACBQgBA3gSAcQgTAbgnAAQglAAgTgbgAJyiKQgSAJgOAQQgOAQgHAYQgIAYABAdQgBAdAIAZQAHAXAOAQQAOARARAJQATAJAWAAQAVAAASgJQASgJAOgRQAOgRAHgXQAIgYAAgdQAAgcgIgYQgHgXgOgRQgOgQgSgJQgTgKgUABQgWAAgSAIgAAiD0IgwgPQgugTgkglQgjglgSgwQgNghgGhLQgBgnAUhFQASgzAjgkQAkgkAugUIAwgPIA2gEQAmAABBATQAuAUAjAkQAjAkATAzQASBFABAnQgIBLgLAhQgSAwgkAlQgjAlguATQhBAUgmAAgAAviMQgRAJgPAQQgNARgHAXQgHAYAAAdQAAAcAHAaQAHAXANARQAOAQASAJQASAJAWAAQAVAAATgJQASgJANgRQAOgQAIgYQAHgZAAgcQAAgcgHgYQgIgXgOgQQgOgSgRgIQgTgJgVAAQgVgBgTAJgAreD3QgpAAgjgJQgigIgZgQQgYgPgNgWQgOgVAAgXQAAgcARgTQARgUAZAAQAaAAAsAWQAsAWAaAAQATAAAMgKQALgJAAgMQAAgRgUgLQgMgIgzgUIg9gbQgbgQgRgRQgTgSgJgVQgKgXAAgeQABgiAOgdQANgeAZgWQAagYAigMQAjgMAqAAQAmAAAiAJQAgAIAYAQQAYAPAOATQANATgBAUQABAbgTATQgSASgaAAQgPgBgtgSQgsgSgSAAQgjAAABAaQAAASAbAOIBNAeIA3AeQAYAPAQARQAPARAIAUQAHAVAAAaQAAAkgOAgQgPAfgbAYQgcAZglAMQgnAOgtAAgAmZDWQgSgcgBg3IAAkLIgFAAQgoAAgXgSQgXgRAAgeQAAggAXgRQAXgRAtgCIAAhBQABg4ASgbQAUgcAmAAQAlAAATAcQASAbABA4IAABBIAMAAQAuAAAZASQAZASAAAgQAAAhgYAQQgYAQgxAAIgLAAIAAELQgBA5gRAaQgSAbgnAAQgmAAgUgbg");
	this.shape_1.setTransform(219.4,144.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("A1LVlQlBgBjjjiQjijjgBlAIAAy8QABlBDijjQDjjiFBgBMAqXAAAQFBABDiDiQDjDjAAFBIAAS8QAAFAjjDjQjiDilBABgAHzi+QgTAcAAA2IAAH+QAAA3ATAcQATAbAlAAQAnAAATgbQASgcABg3IAAiAQAZAWAeAKQAeAMAiAAQAwAAAqgWQAqgUAfglQAigmARgxQATgyAAg5QAAg4gSgyQgRgvgiglQgfgkgqgUQgqgTgwAAQgnAAgeANQggANgYAaQgagyguAAQglABgTAbgABhjbIgxAPQguAUgjAkQgjAkgSAyQgUBEABAnQAGBNANAhQASAwAjAkQAjAlAuATIAxAQIA2AEQAmABBBgVQAugTAjglQAkgkASgwQALghAIhNQgBgngShEQgTgygjgkQgjgkgugUQhBgUgmAAgAtICYQgRATAAAdQAAAXAOAVQANAVAYAPQAZAQAiAIQAjAKApgBIADACQAtAAAngNQAlgNAcgYQAbgZAPgeQAOggAAglQAAgZgHgVQgIgVgPgRQgQgSgYgPIg3gcIhNgfQgbgNAAgSQgBgbAjAAQASABAsARQAtATAPAAQAaAAASgSQATgSgBgcQABgTgNgTQgOgTgYgPQgYgQgggJQgigJgmAAQgqAAgjANQgiAMgaAXQgZAXgNAdQgOAegBAhQAAAfAKAWQAJAVATASQARARAbAPIA9AcQAzAVAMAHQAUAMAAARQAAAMgLAJQgMAJgTAAQgaAAgsgVQgsgXgaAAQgZAAgRAUgAlalfQgSAbgBA4IAABCQgtACgXARQgXAQAAAgQAAAfAXARQAXARAoABIAFAAIAAEKQABA3ASAdQAUAbAmAAQAnAAASgbQARgbABg5IAAkKIALAAQAxAAAYgQQAYgRAAghQAAgggZgRQgZgSguAAIgMAAIAAhCQgBg4gSgbQgTgbglgBQgmABgUAbgAKwCmQgRgJgOgRQgOgQgHgYQgIgYABgfQgBgcAIgYQAHgXAOgRQAOgPASgKQASgIAWAAQAUAAATAJQASAJAOAQQAOARAHAYQAIAWAAAcQAAAegIAYQgHAYgOARQgOARgSAJQgSAIgVABQgWgBgTgIgABuCkQgSgJgOgQQgNgRgIgYQgHgZAAgeQAAgcAHgYQAIgXANgQQAPgRARgJQATgIAVAAQAVAAATAJQARAJAOARQAOARAIAWQAHAXAAAcQAAAegHAYQgIAYgOARQgNARgSAJQgTAIgVABQgWgBgSgIg");
	this.shape_2.setTransform(213.1,138.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,428.1,278.1);


(lib.Pickle_tongue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC5083").s().p("AjcDcQhbhbABiBQgBiABbhcQBchbCAABQCBgBBbBbQBbBcAACAQAACBhbBbQhbBbiBAAQiAAAhchbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-31.1,62.3,62.3);


(lib.Pickle_stomach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8FD7").s().p("AqmI7QkZjsAAlPQAAlOEZjsQEZjtGNABQGNgBEaDtQEZDsAAFOQAAFPkZDsQkaDtmNgBQmNABkZjtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-80.7,192,161.5);


(lib.Pickle_pupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBD7").s().p("AAYBOQgGgGAAgJQAAgJAGgHQAHgGAKAAQAKAAAHAGQAGAHAAAJQAAAJgGAGQgHAHgKAAQgKAAgHgHgAgYAUQgUgFgLgSQgLgTAFgVQAFgVATgMQASgLATAEQAVAGALASQAMATgGAVQgFAVgTALQgMAJgNAAQgGAAgHgCg");
	this.shape.setTransform(-4,-3.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhoBpQgsgrAAg+QAAg9AsgrQAsgsA8AAQA+AAArAsQAsArAAA9QAAA+gsArQgrAsg+AAQg8AAgsgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-14.8,29.8,29.8);


(lib.Pickle_mouthback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#850A5A").s().p("AkgAtQhahZgWh4IMgAAQgVB4hbBZQh3B4ipAAQioAAh4h4g");
	this.shape.setTransform(0,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,0,80.1,32.9);


(lib.Pickle_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A275BF").s().p("Ah2B2QgwgwAAhGQAAhEAwgyQAygxBEABQBFgBAyAxQAwAyAABEQAABGgwAwQgyAyhFAAQhEAAgygyg");
	this.shape.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-5.2,33.5,33.5);


(lib.Pickle_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A275BF").s().p("ABgBJIi/gBQgfAAgVgVQgVgWAAgdQABgeAVgVQAVgVAeAAIDAABQAeAAAVAWQAVAVAAAdQgBAegVAVQgVAVgeAAIAAAAg");
	this.shape.setTransform(-9.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-7.2,33.8,14.6);


(lib.Pickle_eyebrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#744964").s().p("Ah0AnIgBgBIAAABIgBAAIgBAAQgPgBgNgLQgLgMABgPQAAgRALgMQAMgLAQAAIABAAIABAAIACAAIDpABIADABQAOACAKAJQANANAAAPQAAARgOALQgLALgRABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#744964").s().p("ABjAzQhbgzhuAxQgPAHgPgGQgQgGgHgPQgHgPAGgOQAGgQAPgHQCWhEB8BKQAPAIAEAPQAEAQgIAOQgJAPgPAEIgLABQgKAAgKgFg");
	this.shape_1.setTransform(0,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#744964").s().p("AiCAcQgQgFgHgPQgIgNAFgQQAEgQAPgIQAPgHAQAEQBxAkBkggQAQgFAPAIQAOAHAFAQQAFAQgHANQgIAPgPAFQg7ATg/AAQhDAAhJgWg");
	this.shape_2.setTransform(0,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#744964").ss(8,1,1).p("AB3gQQguAhglADQg2AEhkgs");
	this.shape_3.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-4.1,31.7,8.3);


(lib.Pickle_eye_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBD7").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#61397B").s().p("Ai+ABQgKgEgDgJQgDgKAFgJQAFgKALgDQAKgDAKAFQCLBEDFg3QAKgDAKAFQAKAFADAKQADAKgFAIQgGAJgKADQhhAchVAAQhqAAhYgtg");
	this.shape_1.setTransform(-0.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61397B").s().p("ACyBFQgLgBgIgHQiTiTitCGQgIAHgLgBQgLgBgHgIQgHgIABgKQABgLAIgGQDUilC1C2QAHAHAAALQgBAKgIAHQgHAHgKAAIgBAAg");
	this.shape_2.setTransform(-0.1,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#61397B").s().p("AA0BNQgJgFgCgKQgDgKAGgJQAFgJALgCIBHgQQAKgDAKAGQAJAFADAKQACAKgFAJQgGAJgLACIhGAQIgGABQgHAAgIgEgACugFQhVgQhXgGQhzgIg6APQgKACgKgFQgJgFgDgKQgDgKAGgJQAFgJAKgDQBBgRB9AJQBbAGBYARQAKACAHAIQAFAJgCAKQgCAKgJAGQgGAEgIAAIgFAAg");
	this.shape_3.setTransform(-0.1,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.Pickle_cheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B186CD").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,56);


(lib.Pickle_bodyB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A275BF").s().p("AgVUAQhmAAhjgJQhxgHhygOQh0gMhygbQk6hMj2joQjljZhWkRQg0ijAAi5IAAgeIAAghQAAjCA0itQBVkgDmjkQD2j1E7hRQBzgbB0gNQBxgPBxgIQBkgJBmAAQBpAABoADQBxAGByALQB3AOBzAdIAVAHIAKADQE4BRD1D0QEpEoA6GMQANBdAABiIgBAmIAAAKQgBAzgGAxQgDAygHAwQg5F2kpEZQj0Dnk4BNIgKADIgWAGQhyAch3ANQhxAKhyAGQhZADhaAAIgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.7,-127.9,321.4,256);


(lib.Dance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1M1kMAqYAAAQFBAADiDjQDkDjAAFAIAAS8QAAFBjkDjQjiDjlBAAMgqYAAAQlAAAjjjjQjjjjAAlBIAAy8QAAlADjjjQDjjjFAAAg");
	this.shape.setTransform(213.1,138.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AITFiQgvgTgggkQgigkgSgxQgMgggGhNIABAAQAAg6ASgxQATgxAiglQAjgkAvgUIAzgOIA5gFQAmgBAgAIQAfAGAWANQAWANAMARQAMATAAAWQAAAcgRASQgSASgbAAQgQAAgggLQgjgMgZAAQgXABgTAIQgTAJgOAQQgOARgIAYQgIAXABAdQgBAeAIAYQAIAXAOARQAOAQAVAKQAVAHAZABQAcgBAggJQAigNAKAAQAZABARATQARASAAAdQAAATgNATQgOARgYAOQgYAOggAIQghAIgnAAQg5AAgtgTgAPkFgQgwgTgjglQgkglgUgwIgPgzIgFg4QAAgmAUhEQASgxAjglQAkgkAugVIAvgPIA1gEQAlAAA/ATQAsAUAiAjQAhAjATAtQARAtAAAzQAAAlgSANQgQALgpAAIkQAAIgBAAQACAVAJARQAKAQAPAMQAPALAUAHQAUAGAZAAQAmAAA5gZQA0gaAMABQAcAAAQAQQARAQAAAaQAAAXgSAWQgRAWgeATQgfATgpAKQgrAMgvAAQhIgHgggNgAQDgSQgcAXgIArIDIAAQgCgogcgZQgcgYgoAAQgngBgbAYgAprFhQgqgSgfglQghglgRgwQgMgfgHhNQABgmAShEQATgvAhgkQAhgmAqgTQArgTAwgBQAnAAAdAOQAfANAWAbQAbgxAtAAQAnAAASAbQARAaAAA4IAAEwQAAA3gSAcQgTAbglAAQgZAAgSgNQgSgNgMgbQgYAdggAOQggAPgoAAQguAAgpgTgAoggJQgSAJgNAOQgOAQgGAWQgIAYAAAbQAAAcAIAYQAGAXAOAQQANAQARAJQATAIAVAAQAVAAASgIQASgJANgQQAMgRAIgXQAHgWAAgdQAAgbgHgYQgIgWgNgPQgNgPgRgJQgSgIgVAAQgVAAgSAIgAypFdQgpgVghgjQghgmgTgwQgMgggHhLQAAgmAThDQASgwAiglQAggkAqgUQAqgTAvAAQAjgBAdALQAeALAZAWIAAiLIgBgBQABg3ASgbQATgcAmAAQAlAAAUAcQASAbAAA3IAAIGQAAA4gSAbQgRAbgoAAQgsAAgbgwQgZAZgeAOQgeAMgnAAQgtAAgrgUgAxjgRQgRAIgOAQQgOARgHAYQgIAYAAAeQAAAcAIAXQAHAYAOARQAOAQARAJQATAJAVAAQAWAAATgIQARgJANgRQAOgRAHgXQAIgXgBgdQABgegIgYQgHgZgOgQQgNgQgRgJQgTgIgWAAQgVAAgTAJgAC0FUQgUgcABg3IAAirIgEg0QgFgWgJgOQgJgPgQgGQgQgIgXABQgVAAgQAHQgPAHgKAOQgJAOgFAWIgDAyIAACtQAAA3gTAcQgTAbgnAAQglAAgTgbQgTgcAAg3IAAkwIgBAAQAAg3ATgbQATgcAlAAQAtAAAcAxQAXgbAigMQAfgMAtAAQAtAAAjANQAiAMAXAZQAYAZALAlQANAmAAAxIAADZQgBA3gSAcQgTAbgnAAQgmAAgSgbg");
	this.shape_1.setTransform(220.4,132.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF00").s().p("A1LVlQlBgBjjjiQjijjgBlAIAAy8QABlBDijjQDjjiFBgBMAqXAAAQFBABDiDiQDjDjAAFBIAAS8QAAFAjjDjQjiDilBABgAHZCbQASAwAhAkQAhAlAvASQAtAUA5gBQAnAAAhgIQAggIAYgNQAYgOAOgSQANgSgBgUQABgdgRgRQgRgUgZAAQgKAAgiAMQggAKgcAAQgZAAgVgIQgVgJgOgQQgOgRgIgYQgIgYABgeQgBgcAIgXQAIgYAOgQQAOgRATgJQATgJAXAAQAZAAAjALQAgALAQAAQAbAAASgSQARgSAAgcQAAgVgMgTQgMgRgWgOQgWgNgfgGQgggHgmAAIg5AFIgzAPQgvATgjAlQgiAkgTAxQgSAyAAA5IgBAAQAGBOAMAggARYjbIgvAPQguAUgkAlQgjAkgTAxQgTBEAAAmIAFA5IAPAyQAUAxAkAlQAjAkAwAUQAgANBIAGQAvAAArgLQApgLAfgSQAegTARgXQASgWAAgXQAAgZgRgRQgQgQgcAAQgMAAg0AZQg5AZgmAAQgZAAgUgGQgUgGgPgLQgPgMgKgRQgJgQgCgWIABAAIEQAAQApABAQgLQASgNAAgmQAAgxgRguQgTgtghgjQgigkgsgTQg/gUglAAgAoejIQgqATghAlQghAkgTAwQgSBDgBAmQAHBNAMAgQARAwAhAlQAfAkAqASQApATAuAAQAoAAAggOQAggPAYgcQAMAaASANQASAOAZAAQAlAAATgbQASgdAAg3IAAkvQAAg4gRgbQgSgbgnAAQgtAAgbAyQgWgbgfgOQgdgNgnAAQgwAAgrAUgAxgjNQgqATggAlQgiAkgSAwQgTBEAAAmQAHBKAMAhQATAwAhAlQAhAkApAVQArATAtABQAnAAAegNQAegOAZgZQAbAwAsAAQAoAAARgbQASgaAAg5IAAoFQAAg3gSgcQgUgcglAAQgmAAgTAcQgSAcgBA3IABABIAACKQgZgWgegKQgdgLgjAAQgvAAgqAUgAC/hTQAQAHAJAOQAJAPAFAXIAEAyIAACrQgBA3AUAdQASAbAmAAQAnAAATgbQASgdABg3IAAjYQAAgxgNgmQgLglgYgZQgXgZgigNQgjgNgtAAQgtAAgfAMQgiAMgYAcQgcgxgsgBQglABgTAbQgTAbAAA3IABABIAAEvQAAA3ATAdQATAbAlAAQAmAAATgbQATgdAAg3IAAitIAEgwQAFgXAJgOQAKgOAPgIQAQgHAVAAQAXAAAQAHgAwaCfQgRgJgOgQQgOgQgHgYQgIgYAAgcQAAgeAIgXQAHgXAOgRQAOgSARgHQATgKAVABQAWAAATAIQARAJANAQQAOARAHAYQAIAXgBAeQABAdgIAYQgHAXgOAQQgNARgRAJQgTAIgWAAQgVABgTgKgAnYCfQgRgIgNgRQgOgQgGgXQgIgXAAgdQAAgbAIgWQAGgWAOgRQANgPASgIQASgIAVAAQAVAAASAIQARAJANAPQANAQAIAWQAHAWAAAbQAAAdgHAXQgIAXgMAQQgNAQgSAJQgSAIgVABQgVgBgTgIgAQogLQAIgqAcgYQAbgYAnAAQAoAAAcAZQAcAZACAog");
	this.shape_2.setTransform(213.1,138.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,428.1,278.1);


(lib.wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pickle_hand
	this.instance = new lib.Pickle_hand("single",0);
	this.instance.parent = this;
	this.instance.setTransform(111.1,-24.4,1,1,0,-2.5,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-2.3,skewY:177.7,x:109.8,y:14.8},6).to({skewX:-2.5,skewY:177.5,y:68.9},6).to({skewX:-2.3,skewY:177.7,x:109.9,y:14.9},6).to({skewX:-2.5,skewY:177.5,x:111.1,y:-24.4},6).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A275BF").ss(17.5,1,1).p("AIpkNQm7M0qWms");
	this.shape.setTransform(55.3,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooBrQE4ByEhAGQElADDTnI");
	this.shape_1.setTransform(55.3,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooBFQEoAPEwBqQEzBoDGn1");
	this.shape_2.setTransform(55.3,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooAUQEYhSE/DNQFCDMC4og");
	this.shape_3.setTransform(55.3,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A275BF").ss(17.5,1,1).p("AoogiQEIi1FNExQFQExCspM");
	this.shape_4.setTransform(55.3,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A275BF").ss(17.5,1,1).p("AoohUQD4kXFcGUQFeGVCfp4");
	this.shape_5.setTransform(55.3,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A275BF").ss(17.5,1,1).p("AophaQDol6FsH5QFsH5CTqj");
	this.shape_6.setTransform(55.4,41.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A275BF").ss(17.5,1,1).p("Aoog6QECluFcG1QFfG4CUnV");
	this.shape_7.setTransform(55.3,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A275BF").ss(17.5,1,1).p("AongeQEbljFMF0QFSF0CWkH");
	this.shape_8.setTransform(55.2,35.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A275BF").ss(17.5,1,1).p("AongSQE1lXE9EwQFEEyCZg4");
	this.shape_9.setTransform(55.2,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A275BF").ss(17.5,1,1).p("AomgyQFOlNEtDtQE3DwCbCX");
	this.shape_10.setTransform(55.1,37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A275BF").ss(17.5,1,1).p("AolhUQFnlCEdCrQEqCuCdFl");
	this.shape_11.setTransform(55,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A275BF").ss(17.5,1,1).p("AIoFlQk1xhsaKB");
	this.shape_12.setTransform(55.2,44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A275BF").ss(17.5,1,1).p("AonhQQFZjmELgCQFAALCrJm");
	this.shape_13.setTransform(55.2,40.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A275BF").ss(17.5,1,1).p("AongbQFJipEShMQFHhCCtJp");
	this.shape_14.setTransform(55.2,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooAhQE5hrEbiWQFNiQCwJs");
	this.shape_15.setTransform(55.3,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooBjQEpgvEijgQFUjcCyJv");
	this.shape_16.setTransform(55.3,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooCoQEZANEpkpQFbkpC0Jy");
	this.shape_17.setTransform(55.3,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A275BF").ss(17.5,1,1).p("AopDVQEJBKExl0QFhl2C4J1");
	this.shape_18.setTransform(55.4,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A275BF").ss(17.5,1,1).p("AooCrQEQBfEqlBQFYlGC/HF");
	this.shape_19.setTransform(55.3,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A275BF").ss(17.5,1,1).p("AonCCQEYB0EikQQFNkVDIEW");
	this.shape_20.setTransform(55.2,19.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A275BF").ss(17.5,1,1).p("AonBgQEgCJEbjfQFDjkDRBm");
	this.shape_21.setTransform(55.2,22.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A275BF").ss(17.5,1,1).p("AomBhQEnCeEUitQE5izDZhL");
	this.shape_22.setTransform(55.1,22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A275BF").ss(17.5,1,1).p("AomBuQEwC0EMh8QEviDDij6");
	this.shape_23.setTransform(55.1,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-29.7,137.1,85.4);


(lib.Pickle_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3_mouthback (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkgAtQhahZgWh4IMgAAQgVB4hbBZQh3B4ipAAQioAAh4h4g");
	var mask_graphics_3 = new cjs.Graphics().p("AkgAtQhahZgWh4IMgAAQgVB4hbBZQh3B4ipAAQioAAh4h4g");
	var mask_graphics_4 = new cjs.Graphics().p("AkgAZQhagxgWhCIMgAAQgVBChbAxQh3BCipAAQioAAh4hCg");
	var mask_graphics_5 = new cjs.Graphics().p("AkgAtQhahZgWh4IMgAAQgVB4hbBZQh3B4ipAAQioAAh4h4g");
	var mask_graphics_6 = new cjs.Graphics().p("AkggPQhagdgWglIMgAAQgVAlhbAdQh3AkipAAQioAAh4gkg");
	var mask_graphics_8 = new cjs.Graphics().p("AkAggQBghrCQgIQCPgJBsBfQBSBGAZBkIqrAoQANhmBIhPg");
	var mask_graphics_10 = new cjs.Graphics().p("AkgAtQhahZgWh4IMgAAQgVB4hbBZQh3B4ipAAQioAAh4h4g");
	var mask_graphics_11 = new cjs.Graphics().p("AkgAZQhagxgWhCIMgAAQgVBChbAxQh3BCipAAQioAAh4hCg");
	var mask_graphics_12 = new cjs.Graphics().p("AmQClQAWh4BahZQB4h4CoAAQCpAAB3B4QBbBZAVB4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:-7.3}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:-8.2}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:-1.8,y:3.9}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:-7.3}).wait(1).to({graphics:mask_graphics_12,x:0,y:-0.1}).wait(1));

	// 3_tongue
	this.instance = new lib.Pickle_tongue("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-17,19.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#513067").ss(3,1,1).p("AE9ggIA9A2Al5AhIAsg6");
	this.shape.setTransform(-0.2,-17);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-16.9,y:21.1},0).to({_off:true},1).wait(1).to({_off:false,x:-19.7,y:24.9},0).wait(1).to({x:-6.4,y:20},0).wait(1).to({x:-8.9,y:25.9},0).wait(1).to({scaleX:1.02,scaleY:0.93,x:-6.8,y:16.6},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.79,scaleY:0.77,x:-15.4,y:24.1},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,scaleY:1,x:0.2,y:21.2},0).wait(1).to({x:-14.2,y:18.2},0).wait(1).to({x:-8.9,y:31.2},0).wait(1));

	// 3_mouthback
	this.instance_1 = new lib.Pickle_mouthback("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#482D3E").s().p("Amag6QgIgGgCgKQgCgKAGgJQAGgIAKgCQAKgCAJAGQFgDyGiiLQAJgDAKAFQAJAEADAKQADAKgEAJQgFAJgKAEQihA1iXAAQkJAAjtijg");
	this.shape_1.setTransform(-0.4,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#482D3E").ss(5.9,1,1).p("AlFgYQCGBBDOgGQDGgGBxg/");
	this.shape_2.setTransform(-0.4,-13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#482D3E").s().p("AjzBYQgLgBgHgKQgGgJABgLQACgLAJgGQEkjSDZCHQAKAGACALQADALgGAIQgGAKgLADQgLACgKgGQi+hwkCC6QgHAFgJAAIgEgBg");
	this.shape_3.setTransform(3,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:1},0).to({_off:true},1).wait(1).to({_off:false,startPosition:0},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:0.31},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.85,scaleY:0.84,skewX:176.5,skewY:-3.4,x:-1.8,y:16.8},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,scaleY:1,skewX:0,skewY:0,x:0,y:-16.4},0).wait(1).to({scaleY:0.56},0).wait(1).to({scaleY:1,skewX:180,y:16.3},0).wait(1));

	// 3_mouthback
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#482D3E").ss(5.5,1,1).p("AjvA9QETjGDMB9");
	this.shape_4.setTransform(3,-3.4);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-16.4,80.1,33);


(lib.Pickle_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// pupil
	this.instance = new lib.Pickle_pupil("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// eye
	this.instance_1 = new lib.Pickle_eye_white("single",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.Pickle_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3_bodyB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUTXQhjAAhggIQhtgIhvgNQhvgMhvgaQkwhJjvjhQjdjShUkIQgyieAAizIABgdIgBggQAAi8AyinQBUkXDejdQDujtExhOQBvgbBwgMQBugOBtgIQBhgJBjAAQBlAABkADQBuAGBuALQB0ANBvAcIAVAGIAKAEQEuBODsDsQEgEfA3F/QAOBaAABfIgBAkIAAAKQgCAygFAvQgDAwgHAvQg3FqkgEQQjsDfkuBLIgJADIgVAGQhwAbhyAMQhuALhuAFQhWADhXAAIgcAAg");
	mask.setTransform(0,-102.2);

	// 3_stomach
	this.instance = new lib.Pickle_stomach("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-1,27.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// 3_bodyB
	this.instance_1 = new lib.Pickle_bodyB("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-102.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.7,-230.2,321.4,256);


(lib.Pickle_facecomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PURPLE_eyebrow
	this.instance = new lib.Pickle_eyebrow("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-35.4,-47.5,1,1,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// PURPLE_eyebrow
	this.instance_1 = new lib.Pickle_eyebrow("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.4,-47.5,1,1,0,18.5,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// PURPLE_eye
	this.instance_2 = new lib.Pickle_eye("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32.2,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// PURPLE_eye
	this.instance_3 = new lib.Pickle_eye("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.6,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// PURPLE_mouth
	this.instance_4 = new lib.Pickle_mouth("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// PURPLE_cheek
	this.instance_5 = new lib.Pickle_cheek("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(89.2,12.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// PURPLE_cheek
	this.instance_6 = new lib.Pickle_cheek("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-90.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-55.1,235.5,105);


(lib.humbleDance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dance:0});

	// wave
	this.instance = new lib.wave("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.5,-25,1,1,0,0,0,59.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.9,y:-23,startPosition:1},1).to({x:199,y:-60.8,startPosition:6},5).to({x:249.5,y:-24.6,startPosition:12},6).to({x:241.1,y:-18.7,startPosition:13},1).to({x:199,y:-60.8,startPosition:18},5).to({x:156.9,y:-31,startPosition:23},5).wait(1));

	// wave
	this.instance_1 = new lib.wave("synched",12);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-229.5,-25,1,1,0,0,180,59.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-221.1,y:-23,startPosition:13},1).to({x:-179,y:-60.8,startPosition:18},5).to({x:-128.5,y:-24.6,startPosition:24},6).to({x:-136.9,y:-18.7,startPosition:0},1).to({x:-179,y:-60.8,startPosition:5},5).to({x:-221.1,y:-31,startPosition:10},5).wait(1));

	// PURPLE_facecomp
	this.instance_2 = new lib.Pickle_facecomp("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53.6,-70.7,1,1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2,x:-42.9,y:-57.3,startPosition:1},1).to({rotation:0,x:10.3,y:-104.9,startPosition:6},5).to({rotation:4.2,x:69.8,y:-65.3,startPosition:25},6).to({rotation:3.5,x:59.9,y:-60.8,startPosition:26},1).to({rotation:0,x:10.3,y:-104.9,startPosition:6},5).to({rotation:-2,x:-42.9,y:-76.5,startPosition:11},5).wait(1));

	// PURPLE_body
	this.instance_3 = new lib.Pickle_body("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-40.6,45.8,1,1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2,x:-32.1,y:55.3},1).to({rotation:0,x:10.3,y:11.8},5).to({rotation:4.2,x:53.2,y:50.9},6).to({regX:0.1,regY:0.1,rotation:3.5,x:46.1,y:55.7},1).to({regX:0,regY:0,rotation:0,x:10.3,y:11.8},5).to({rotation:-2,x:-32,y:40.1},5).wait(1));

	// PURPLE_upperLeg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A275BF").ss(14.5,1,1).p("Ak+o5IJ9Rz");
	this.shape.setTransform(40.2,112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A275BF").ss(14.5,1,1).p("AlZoPQDpJOHKHR");
	this.shape_1.setTransform(49.6,103.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkunlQBOJkIPFn");
	this.shape_2.setTransform(51.9,95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A275BF").ss(14.5,1,1).p("Aj9m7QhPJ5JUD+");
	this.shape_3.setTransform(53.8,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A275BF").ss(14.5,1,1).p("Ai4mRQjsKOKaCV");
	this.shape_4.setTransform(53.5,77.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A275BF").ss(14.5,1,1).p("AhnlnQmIKkLfAr");
	this.shape_5.setTransform(52.1,69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A275BF").ss(14.5,1,1).p("AgRlAQokK5Mlg9");
	this.shape_6.setTransform(50.1,60.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A275BF").ss(14.5,1,1).p("Ag6mkQnAJ6LeDP");
	this.shape_7.setTransform(64.6,78);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A275BF").ss(14.5,1,1).p("AhhoKQlcI6KXHb");
	this.shape_8.setTransform(78.9,95.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A275BF").ss(14.5,1,1).p("AiIpwQj4H8JSLl");
	this.shape_9.setTransform(93.1,113.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A275BF").ss(14.5,1,1).p("Agjo+QnFIQK9Jt");
	this.shape_10.setTransform(92.8,118.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A275BF").ss(14.5,1,1).p("AAbogQo+IcL+Il");
	this.shape_11.setTransform(92.2,121.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A275BF").ss(14.5,1,1).p("AAxoWQpnIfMTIO");
	this.shape_12.setTransform(92,122.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A275BF").ss(14.5,1,1).p("AAenpQqQHhNtHy");
	this.shape_13.setTransform(85.6,122.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A275BF").ss(14.5,1,1).p("AgooIQnfICLrIP");
	this.shape_14.setTransform(84.5,117.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A275BF").ss(14.5,1,1).p("AhtomQktIiJrIr");
	this.shape_15.setTransform(83.1,111.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A275BF").ss(14.5,1,1).p("AiqpFQh7JDHpJI");
	this.shape_16.setTransform(80.9,106.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjPpkQA3JjFpJm");
	this.shape_17.setTransform(76.4,100.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjoqDIHRUH");
	this.shape_18.setTransform(70.5,95.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A275BF").ss(14.5,1,1).p("Aj2p3IHtTv");
	this.shape_19.setTransform(65.5,98.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkEpqIIJTV");
	this.shape_20.setTransform(60.4,101);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkTpeIInS9");
	this.shape_21.setTransform(55.4,103.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkhpSIJDSk");
	this.shape_22.setTransform(50.3,106.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkvpFIJfSL");
	this.shape_23.setTransform(45.3,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// PURPLE_upperLeg
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A275BF").ss(14.5,1,1).p("AAUoVQHzJLrjHg");
	this.shape_24.setTransform(-98.9,119.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A275BF").ss(14.5,1,1).p("Aj0H6QMsnQoXoj");
	this.shape_25.setTransform(-89.5,120);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjgIWQK4n1l+o2");
	this.shape_26.setTransform(-87.4,115.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjQIxQJEoYjkpJ");
	this.shape_27.setTransform(-85,110.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjHJNQHQo8hLpd");
	this.shape_28.setTransform(-81.8,105.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjVJpQFcphBPpw");
	this.shape_29.setTransform(-76.3,100.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A275BF").ss(14.5,1,1).p("ADpqDInRUH");
	this.shape_30.setTransform(-70.3,95.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A275BF").ss(14.5,1,1).p("Aj/J4IH/zv");
	this.shape_31.setTransform(-64.3,98.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkWJrIItzV");
	this.shape_32.setTransform(-58.3,101);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A275BF").ss(14.5,1,1).p("AktJfIJby9");
	this.shape_33.setTransform(-52.3,103.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A275BF").ss(14.5,1,1).p("AlDJSIKHyj");
	this.shape_34.setTransform(-46.3,106.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A275BF").ss(14.5,1,1).p("AlaJGIK1yL");
	this.shape_35.setTransform(-40.3,109.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A275BF").ss(14.5,1,1).p("AFyo5IrjRz");
	this.shape_36.setTransform(-34.3,112.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A275BF").ss(14.5,1,1).p("AlJIQQG6nRDZpO");
	this.shape_37.setTransform(-38.8,103.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A275BF").ss(14.5,1,1).p("AkhHmQIDlnBApk");
	this.shape_38.setTransform(-43.2,95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A275BF").ss(14.5,1,1).p("Aj+G8QJLj+hZp5");
	this.shape_39.setTransform(-47.1,86.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjxGSQKUiVjyqO");
	this.shape_40.setTransform(-48.9,77.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjtFoQLcgrmLqk");
	this.shape_41.setTransform(-49.7,69);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A275BF").ss(14.5,1,1).p("AASlAQIkK5slg9");
	this.shape_42.setTransform(-49.9,60.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjrGwQLcipmUq1");
	this.shape_43.setTransform(-66,76);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjsIhQKUmQkEqx");
	this.shape_44.setTransform(-81.6,91.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A275BF").ss(14.5,1,1).p("ADjqRQB0KtpMJ2");
	this.shape_45.setTransform(-96.4,107.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjfI/QKwoSlzpr");
	this.shape_46.setTransform(-98.6,115.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A275BF").ss(14.5,1,1).p("AjdIjQLSnwnIpV");
	this.shape_47.setTransform(-98.8,118.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// PURPLE_foot
	this.instance_4 = new lib.Pickle_foot("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-118.5,175.2,1,1,-149.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-139.9,x:-114.3,y:172.8},1).to({scaleX:1,scaleY:1,rotation:-89.9,x:-93.7,y:160.6},5).to({regX:0,scaleX:0.9,scaleY:1.11,rotation:0,skewX:-123.5,skewY:-118.9,x:-71.4,y:169.3},6).to({scaleX:0.92,scaleY:1.09,skewX:-121.6,skewY:-117.8,x:-71.8,y:156.4},1).to({scaleX:1,scaleY:1,rotation:-112.7,skewX:0,skewY:0,x:-73.9,y:92.2},5).to({regY:0,rotation:-149.9,x:-118.5,y:175.2},3).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(1));

	// PURPLE_foot
	this.instance_5 = new lib.Pickle_foot("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(72.2,169.3,0.941,1.064,0,125.1,-57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.91,scaleY:1.1,skewX:121.1,skewY:-63.4,x:84.3,y:156.5},1).to({regY:-0.1,scaleX:1,scaleY:1,skewX:112.7,skewY:-67.3,x:74.2,y:92.2},5).to({regY:0,skewX:149.9,skewY:-30.1,x:113.6,y:175.2},3).to({startPosition:0},3,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:139.9,skewY:-40.1,x:110.4,y:172.8},1).to({scaleX:1,scaleY:1,skewX:89.9,skewY:-90.1,x:94,y:160.6},5).to({regX:0,scaleX:0.95,scaleY:1.05,skewX:119.1,skewY:-62.7,x:75.9,y:167.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.1,-184.7,514.4,376.8);


// stage content:
(lib.HTML5Canvas_Test1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		setTimeout(s,0);
		
		function s(){
		
		  exportRoot.humbleDance_mc.stop();
		
		}
		
		this.dance_btn.addEventListener("click", dance.bind(this));
		
		function dance() {
			this.humbleDance_mc.play();
		
		}
		
		this.stopDance_btn.addEventListener("click", stopDance.bind(this));
		
		function stopDance() {
			this.humbleDance_mc.stop();
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.stopDance_btn = new lib.Stop();
	this.stopDance_btn.parent = this;
	this.stopDance_btn.setTransform(453.2,374.1,1,1,0,0,0,213.1,138.1);
	new cjs.ButtonHelper(this.stopDance_btn, 0, 1, 1);

	this.dance_btn = new lib.Dance();
	this.dance_btn.parent = this;
	this.dance_btn.setTransform(453.2,816.3,1,1,0,0,0,213.1,138.1);
	new cjs.ButtonHelper(this.dance_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dance_btn},{t:this.stopDance_btn}]}).wait(1));

	// Bumble
	this.humbleDance_mc = new lib.humbleDance();
	this.humbleDance_mc.parent = this;
	this.humbleDance_mc.setTransform(1359.2,574.4);

	this.timeline.addTween(cjs.Tween.get(this.humbleDance_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1199.1,775,1338.1,720.3);
// library properties:
lib.properties = {
	id: '46E66F47F6DA44DF980421BB0B229BDB',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['46E66F47F6DA44DF980421BB0B229BDB'] = {
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