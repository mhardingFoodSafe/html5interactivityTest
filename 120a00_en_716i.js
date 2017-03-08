(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.DM72_00_bg_kitchen_food_potato_salad_label = function() {
	this.initialize(img.DM72_00_bg_kitchen_food_potato_salad_label);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,793);


(lib.DM72_04_2_FRED_JUAN_happy_man_meal_server = function() {
	this.initialize(img.DM72_04_2_FRED_JUAN_happy_man_meal_server);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,793);


(lib.DM72_124_01_receiving_truck_approved_supplier = function() {
	this.initialize(img.DM72_124_01_receiving_truck_approved_supplier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,809);


(lib.DM72_190_01_food_flow_floor_plan = function() {
	this.initialize(img.DM72_190_01_food_flow_floor_plan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,686);


(lib.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer = function() {
	this.initialize(img.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1004);


(lib.DM72_34_08_cooked_chicken_skillet = function() {
	this.initialize(img.DM72_34_08_cooked_chicken_skillet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,793);


(lib.DM_140_01_soup_on_counter = function() {
	this.initialize(img.DM_140_01_soup_on_counter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,603);


(lib.DMH_08_06_spaghetti_meatball_chafing_dishes = function() {
	this.initialize(img.DMH_08_06_spaghetti_meatball_chafing_dishes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,793,793);


(lib.DMH_110080_21_02_waitress_contaminate_food = function() {
	this.initialize(img.DMH_110080_21_02_waitress_contaminate_food);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5049,2700);


(lib.DMH_122_01_walkin_temperature = function() {
	this.initialize(img.DMH_122_01_walkin_temperature);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3259,2183);


(lib.DMH_44a_04_HARROON_employee_thermocouple = function() {
	this.initialize(img.DMH_44a_04_HARROON_employee_thermocouple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4560,3613);


(lib.DMH_52_03_fridge_cool_pots_of_soup = function() {
	this.initialize(img.DMH_52_03_fridge_cool_pots_of_soup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,793);


(lib.NextButton = function() {
	this.initialize(img.NextButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,174);


(lib.testbuttonover = function() {
	this.initialize(img.testbuttonover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,81);


(lib.testbutton = function() {
	this.initialize(img.testbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,81);// helper functions:

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


(lib.Whitebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhgPAw6MAAAhhzMDAfAAAMAAABhzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615.9,-312.9,1231.9,626);


(lib.TextBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.847)").s().p("Ehj+AN9IAA75MDH9AAAIAAb5g");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextBackground, new cjs.Rectangle(-639.9,-91.8,1279.8,178.5), null);


(lib.storagebullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(76.6,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(63.1,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(48.8,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(37.2,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(23.9,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_5.setTransform(349.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_6.setTransform(337.3,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_7.setTransform(324.8,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(313.9,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(300.6,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIAAAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_10.setTransform(285.7,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_11.setTransform(269.2,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_12.setTransform(255.7,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(235.1,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_14.setTransform(223.3,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_15.setTransform(207.4,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_16.setTransform(197.9,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_17.setTransform(186.8,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(173.4,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_19.setTransform(163,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_20.setTransform(147,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_21.setTransform(127,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_22.setTransform(111.2,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_23.setTransform(96.2,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_24.setTransform(75.5,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(63.9,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(50,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_27.setTransform(36.7,21.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_28.setTransform(24.4,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_29.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet4, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(380.2,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAPgJASgBQAPABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIAAAUIACARIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgJgPABQgMAAgKAGg");
	this.shape_1.setTransform(365.4,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(349.1,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_3.setTransform(332.7,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(320.9,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_5.setTransform(304.3,59.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_6.setTransform(291.8,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_7.setTransform(277.5,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_8.setTransform(265.3,60.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_9.setTransform(252.5,61.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(239.2,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_11.setTransform(229.7,60.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_12.setTransform(218,64.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRAAgVQgBgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIABAUIAAARIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAFALAJAIQAJAHAOAAQANAAALgIQALgJAEgPIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgJgPABQgNAAgKAGg");
	this.shape_13.setTransform(202.1,58.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_14.setTransform(186.5,61.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(172.1,61.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_16.setTransform(160.5,61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_17.setTransform(136,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_18.setTransform(115.2,61.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_19.setTransform(103,61.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_20.setTransform(93.7,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_21.setTransform(75.1,64.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_22.setTransform(60.4,61.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAGAWIAAAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAFAWIACAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_23.setTransform(42.6,61.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_24.setTransform(23.9,61.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(325.1,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(311.1,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAXIAGAYIAAAAIAHgYIAGgWIAYhKIAVAAIAWBIIAIAYIAFAYIACAAIAEgYIAHgYIAUhIIAbAAIgvCQg");
	this.shape_27.setTransform(285.6,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_28.setTransform(266.2,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_29.setTransform(254.4,19.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_30.setTransform(243.4,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXBmQgMgHgIgOIgBAAIgCAYIgWAAIAAgSIABgUIAAiuIAaAAIAABbIAAAAQAIgMAMgHQANgHAQgBQASABAOAJQAOAJAHARQAIAPAAAWQAAAagKASQgJARgOAIQgQAJgQAAIgCAAQgNAAgMgGgAgYgNQgLAIgFAPIgBAFIAAAGIAAAaIAAAEIABAFQAEAOALAIQAKAJAPAAQAUAAALgPQALgPABgaQAAgOgFgNQgFgLgKgHQgJgIgOAAQgNAAgLAJg");
	this.shape_31.setTransform(227.8,20.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_32.setTransform(206.5,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_33.setTransform(191.7,20.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_34.setTransform(175.4,23.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_35.setTransform(159,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_36.setTransform(147.2,19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAiBIIgVhFIgIgWIgFgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAGAXIAEAYIABAAIAHgYIAGgWIAYhKIAVAAIAWBIIAIAYIAGAYIABAAIAEgYIAHgYIAUhIIAaAAIguCQg");
	this.shape_37.setTransform(124.7,23.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_38.setTransform(106,23.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_39.setTransform(95.1,23.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_40.setTransform(75.5,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_41.setTransform(63.9,23.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_42.setTransform(50,23.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_43.setTransform(36.7,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_44.setTransform(24.4,20.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_45.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet3, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRgBgVQAAgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQAMAFAEAKIABAAIAAhXIAaAAIAACvIAAAUIABARIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgPQgKAIgEAMQgGAMAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJAEgPIAAgFIABgGIAAgZIgBgFIAAgGQgEgMgJgJQgKgJgPABQgNAAgKAGg");
	this.shape.setTransform(98.2,58.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(82,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(65.5,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(53.7,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(38.6,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(25.2,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(366.4,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgIgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(353,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(341.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(327.4,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_10.setTransform(314.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(301.6,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(290.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_13.setTransform(277.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(261.9,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(240.4,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_16.setTransform(220.4,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_17.setTransform(207.8,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_18.setTransform(193,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_19.setTransform(181.9,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(166.7,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_21.setTransform(154.3,23.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBMAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_22.setTransform(141.1,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_23.setTransform(128.5,21.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_24.setTransform(115.3,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_25.setTransform(103.5,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_26.setTransform(87.8,19.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_27.setTransform(73,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_28.setTransform(58.6,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_29.setTransform(42.8,19.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_30.setTransform(25.8,20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_31.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet2, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(273.1,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(259.7,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(234.1,61.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(220.8,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(208.3,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(197.4,61.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(184.2,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAidIgBgZIAAgWIAYAAIABAZIABAAQAIgNAMgHQANgIARAAQASAAANAKQAOAIAIARQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNgBgMgFQgLgGgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAGIAAAZIAAAFIABAFQAEANALAIQALAJAOAAQANAAAJgHQALgHAEgNQAGgLAAgRQAAgPgFgMQgFgMgKgHQgKgIgNAAQgNAAgLAJg");
	this.shape_8.setTransform(168.6,64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(147.1,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_10.setTransform(127.1,61.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_11.setTransform(114.5,59.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(99.2,61.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_13.setTransform(86,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BIIAAgOIBBhVIAJgLIAKgMIAAgBIhOAAIAAgVIBtAAIAAARIhABTIgJAMIgJALIAAABIBUAAIAAAUg");
	this.shape_14.setTransform(72.1,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_15.setTransform(58.1,61.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(43.1,61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_17.setTransform(31.5,61.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgNQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAGgDAJQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_18.setTransform(22.2,57.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgQAAQgSAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_19.setTransform(321.5,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(305.2,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_21.setTransform(289.3,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_22.setTransform(272,23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_23.setTransform(258.1,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_24.setTransform(244.8,21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_25.setTransform(232.3,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(221.4,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_27.setTransform(208.2,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_28.setTransform(191.8,26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_29.setTransform(180.4,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_30.setTransform(172.9,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_31.setTransform(163.6,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_32.setTransform(150.9,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_33.setTransform(139.3,23.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_34.setTransform(118.9,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_35.setTransform(107.1,20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_36.setTransform(96,23.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_37.setTransform(84.1,21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_38.setTransform(70.9,23.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_39.setTransform(59.1,20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_40.setTransform(48,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABOBlIgGhZIgBgcIgBgfIAAgbIgBAAIgMAkIgOAoIgkBiIgSAAIghhhIgNgnQgGgUgEgSIgBAAIgBAbIgBAfIgCAeIgFBXIgZAAIAOjJIAhAAIAjBhIALAjQAFARAEAQIAAAAIAJghIAMgjIAkhhIAhAAIANDJg");
	this.shape_41.setTransform(29.1,20.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_42.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebullet1, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.storagebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_122_01_walkin_temperature();
	this.instance.parent = this;
	this.instance.setTransform(496,113,0.209,0.209);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.storagebg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.StorageHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape.setTransform(-208.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape_1.setTransform(-225.3,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_2.setTransform(-242,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_3.setTransform(-254.7,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-269.6,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgGgGgDgLQgEgKAAgRIAAg6IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QAAANAEAHQADAFALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgLAAgIgEg");
	this.shape_5.setTransform(-283.9,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBkQgQgDgJgFIAKgmQAKAFANAEQANADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgagIgPgOQgOgPAAgWQAAgRAJgOQAIgNASgIQARgIAXAAQARAAANADQAMADAKAEIgKAlQgHgDgKgDQgLgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAIAGATAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_6.setTransform(-297.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StorageHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.SSHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-79.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-96.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-109.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_3.setTransform(-117.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_4.setTransform(-125.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-137.7,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBkQgPgDgKgFIAKgmQAKAFAMAEQAOADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgZgIgQgOQgPgPABgWQgBgRAKgOQAIgNASgIQARgIAXAAQARAAANADQAMADAJAEIgJAlQgHgDgLgDQgKgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAJAGASAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_6.setTransform(-153.7,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_7.setTransform(-173.1,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_8.setTransform(-188,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape_9.setTransform(-211.9,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_10.setTransform(-229.3,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_11.setTransform(-242.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBKIg1iTIAyAAIAUBFIAEARIADASIABAAIADgSIAFgRIAThFIAwAAIg3CTg");
	this.shape_12.setTransform(-254.1,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_13.setTransform(-267.2,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_14.setTransform(-281.3,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsBkQgQgDgJgFIAKgmQAKAFANAEQANADAOABQAPgBAJgFQAIgGAAgKQAAgJgIgHQgIgHgRgGQgagIgPgOQgOgPAAgWQAAgRAJgOQAIgNASgIQARgIAXAAQARAAANADQAMADAKAEIgKAlQgHgDgKgDQgLgEgPAAQgOAAgHAGQgHAGAAAIQgBAJAKAGQAIAGATAHQAbAKAMAOQANAOABAVQAAASgJAOQgJAOgSAIQgSAJgbAAQgRAAgQgEg");
	this.shape_15.setTransform(-297.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.SSBullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(211,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_2.setTransform(196.7,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(185.1,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(171.8,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(151.1,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(136.9,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_7.setTransform(126.6,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_8.setTransform(115.9,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_9.setTransform(104.6,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_10.setTransform(91.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(77.8,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_12.setTransform(67.3,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_13.setTransform(59.1,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_14.setTransform(50.4,19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(39.4,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_16.setTransform(24.4,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_17.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSBullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.SSBullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(208.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(192.8,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(181.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_4.setTransform(169.4,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_5.setTransform(154.4,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_6.setTransform(139,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(120.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(109.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(94.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(77.9,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(63.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(53.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_13.setTransform(40.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_14.setTransform(25.5,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_15.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSBullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.SSbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DM72_04_2_FRED_JUAN_happy_man_meal_server();
	this.instance.parent = this;
	this.instance.setTransform(487,25,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SSbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.ReheatHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-177.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-194.7,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-207.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgDgLQgDgKAAgRIAAg6IgTAAIAAgiIATAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANADAHQAFAFAKAAIAIAAIAFgBIAAAjQgEACgIABIgRABQgLAAgIgEg");
	this.shape_3.setTransform(-217.3,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_4.setTransform(-230.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-246.3,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYBrIAAhRQAAgPgFgIQgGgIgMAAQgJAAgGAEQgFAEgDAGIgBAFIAAAGIAABXIgtAAIAAjVIAtAAIAABUIAAAAIAJgIIAJgHIALgEQAGgBAHAAQAOAAAMAHQALAGAHAPQAHAOgBAVIAABWg");
	this.shape_6.setTransform(-263.1,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_7.setTransform(-279.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBmQgDgFgDgMIgIgeQgEgTgIgHQgHgHgNAAIgOAAIAABQIgtAAIAAjHIAagCQAQgCATAAQAVAAAQAEQAQADALAJQAJAHAFAKQAFALAAAOQAAANgGALQgFAJgIAHQgIAGgJADIAAABQAKAFAHAJQAGAKAEAOIAGAXIAGAVIAEANgAgXhDIgHACIAAA4IASAAQAQgBAKgHQAJgJAAgNQAAgOgJgHQgIgHgPAAIgOAAg");
	this.shape_8.setTransform(-295.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReheatHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.reheatbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(352.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_1.setTransform(339.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(327.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(313.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape_4.setTransform(296.4,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_5.setTransform(280.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(266.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(251.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(239.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_9.setTransform(225.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_10.setTransform(201.4,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_11.setTransform(185,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(169.1,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(150.8,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(137.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(121.8,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_16.setTransform(101.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(81.2,26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_18.setTransform(68.7,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_19.setTransform(56.9,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AApBoIAAhSIAAAAQgGALgMAHQgMAIgRAAQgRgBgOgIQgOgJgIgRQgIgQAAgVQAAgcAKgRQAKgSAPgHQAPgJAPAAQAQAAALAIQAMAGAFAMIABAAIAAgXIAZAAIAAATIgBAVIAACkgAgUhLQgKAHgFANQgGANAAAQQAAAPAFALQAFAMAJAHQAKAIANAAQANgBAKgGQAKgIAFgNIACgGIAAgGIAAgcIAAgGIgBgFQgDgNgKgIQgKgJgPAAQgNAAgJAHg");
	this.shape_20.setTransform(39.7,26.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_21.setTransform(25,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_22.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.reheatbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape.setTransform(349.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(333,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(316.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(304.8,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(289.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(276.3,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(255.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(244.7,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(231.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(214.9,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(198.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_11.setTransform(177.7,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(157.6,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_13.setTransform(135.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(119.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(103.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_16.setTransform(84.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(70.7,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_18.setTransform(55.1,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_19.setTransform(39,26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_20.setTransform(24.5,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.reheatbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DMH_44a_04_HARROON_employee_thermocouple();
	this.instance.parent = this;
	this.instance.setTransform(373,-13,0.175,0.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reheatbg, new cjs.Rectangle(0,-13,1209.3,642.4), null);


(lib.receivingbullet5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape.setTransform(111,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(94.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(78.3,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(66.5,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(53.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_5.setTransform(39.4,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBmQgKgBgIgDQgJgDgFgEIAGgWQAJAGANAEQAMAEANAAQATgBALgJQALgJABgQQAAgOgJgJQgJgJgUgIQgYgIgPgNQgOgOAAgVQAAgQAIgMQAIgNAPgHQAPgHASAAQAQAAALADQALADAHAEIgHAVIgPgGQgKgDgNgBQgNABgJAEQgIAFgEAHQgEAHAAAHQAAAOAKAIQAKAJAUAIQAZAJANANQANAOAAAWQAAAQgIANQgHANgQAIQgQAIgXAAQgJAAgKgCg");
	this.shape_6.setTransform(24.4,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_7.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet5, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape.setTransform(234,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(217.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(201.3,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(189.5,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(172.9,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGALAAQAMAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(160.4,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_6.setTransform(146.1,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_7.setTransform(133.9,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_8.setTransform(121.1,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_9.setTransform(107.8,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_10.setTransform(98.3,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_11.setTransform(86.6,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIABATIAAASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_12.setTransform(70.7,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_13.setTransform(55.1,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_14.setTransform(40.7,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnBmQgDgFgDgMIgIggQgEgUgJgJQgKgJgQgBIgZAAIAABYIgaAAIAAjHIAXgDIAbgBQAUAAAOAEQAOAEAKAJQAHAGAEAKQAEAKAAAMQAAANgFALQgFAKgIAHQgJAGgLAEIAAABQAMAEAHAKQAIAKADAQIAJAkQAEAOADAGgAgdhQIgKACIAABJIAbAAQAUAAAMgKQAMgKAAgSQAAgTgMgKQgNgJgUAAIgQABg");
	this.shape_15.setTransform(25.9,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_16.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet4, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(328.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(315,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(303.4,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(289.4,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(276,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(263.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(252.7,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(239.5,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_8.setTransform(223.9,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(202.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_10.setTransform(182.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_11.setTransform(169.7,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_12.setTransform(149.6,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_13.setTransform(133.4,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_14.setTransform(116.9,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_15.setTransform(105.1,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_16.setTransform(87.8,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_17.setTransform(73,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_18.setTransform(58.6,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_19.setTransform(42.8,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_20.setTransform(25.8,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(227.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_1.setTransform(214.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(203.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(195.8,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_4.setTransform(182.6,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_5.setTransform(167.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_6.setTransform(157.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(150,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_8.setTransform(139,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgKgIgPAAQgMgBgKAIg");
	this.shape_9.setTransform(122.6,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_10.setTransform(103.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_11.setTransform(91.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_12.setTransform(77.3,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_13.setTransform(61.7,26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_14.setTransform(46.7,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_15.setTransform(32.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBlIAAjJIAZAAIAADJg");
	this.shape_16.setTransform(20.6,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_17.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(438.3,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_1.setTransform(428.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_2.setTransform(415.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_3.setTransform(404.1,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_4.setTransform(397,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_5.setTransform(385.4,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_6.setTransform(368.4,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_7.setTransform(351.1,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_8.setTransform(336.8,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgQAAQgSAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_9.setTransform(315.7,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAIALQAGALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_10.setTransform(300.2,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNBIIg3iQIAcAAIAdBRIAGATIAFASIAAAAIAGgSIAHgTIAchRIAcAAIg5CQg");
	this.shape_11.setTransform(285.4,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_12.setTransform(269.9,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_13.setTransform(257.7,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(243.9,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIAAAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_15.setTransform(226.9,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_16.setTransform(210.3,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_17.setTransform(184.6,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_18.setTransform(163.8,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_19.setTransform(151.6,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_20.setTransform(142.3,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_21.setTransform(123.3,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_22.setTransform(109.7,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_23.setTransform(96.2,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_24.setTransform(81.1,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_25.setTransform(66.1,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_26.setTransform(55.2,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_27.setTransform(41.2,23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_28.setTransform(25.5,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_29.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.receivingbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_124_01_receiving_truck_approved_supplier();
	this.instance.parent = this;
	this.instance.setTransform(294.7,85.7,0.644,0.644);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.receivingtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBCQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIQgBAIgEAFQgFAGgIAAQgHAAgFgGgAgMgmQgFgGAAgIQAAgIAFgFQAFgGAHAAQAIAAAFAGQAEAFABAIQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-24.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(-35.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(-48.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_3.setTransform(-61.4,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_4.setTransform(-75.5,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(-90.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(-107.3,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_7.setTransform(-122.1,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(-139.3,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(-152.6,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBrIAAjVIAZAAIAADVg");
	this.shape_10.setTransform(-163.1,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_11.setTransform(-174.9,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgRQgJgRAAgVQAAgWAJgSQAKgQARgLQASgJAXgBQALAAAKACQAKADAFADIgGAUQgEgCgIgCQgIgCgKAAQgRgBgLAIQgLAHgGANQgGAMAAAPQAAAQAHANQAHAMALAGQAKAHAPAAQALAAAIgDIANgEIAFATQgGADgKADQgLADgPAAQgVAAgQgKg");
	this.shape_12.setTransform(-189.7,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_13.setTransform(-200.1,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAFAIQAEAHALAAIAJAAIAGgBIABATIgJADIgOABQgJAAgHgDg");
	this.shape_14.setTransform(-208.7,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_15.setTransform(-217.6,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgBgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_16.setTransform(-230.9,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgVIAXAAIABAYIACAAQAHgNANgIQANgHARAAQASABAOAIQANAJAIARQAIAQAAAXQAAAagKAQQgJARgPAJQgPAIgQABQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAJgEAOIgBAGIgBAFIAAAZIABAGIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(-245.8,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgPAEgOQADgNAKgIQAHgIAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAFgDALQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_18.setTransform(-264.7,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgwBbQgUgMgMgXQgLgXAAgfQAAgfAMgYQAMgYAVgNQAVgNAaAAQAcAAAVANQAUANALAXQALAXAAAeQAAAigNAYQgMAXgVAMQgVAMgaAAQgaAAgVgNgAgjhGQgOAMgHATQgIATAAAVQAAAWAIATQAIASAOAMQAOALAUAAQAVAAAOgLQAPgMAHgTQAIgTAAgWQAAgPgEgPQgEgOgIgMQgIgMgMgHQgMgHgRAAQgUAAgPAMg");
	this.shape_19.setTransform(-280.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.receivingtext, new cjs.Rectangle(-292.5,-20,585.1,40.1), null);


(lib.ReceivingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-184.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-201.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-214.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXBKIg1iTIAyAAIATBFIAGARIACASIABAAIAEgSIAEgRIAThFIAwAAIg3CTg");
	this.shape_3.setTransform(-226.4,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_4.setTransform(-238.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_5.setTransform(-250.4,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBDQgRgJgKgRQgKgRAAgWQAAgVAKgSQAJgRAUgLQASgLAbAAIASACIARAEIgIAiIgKgDQgGgBgKgBQgRABgKALQgKALAAASQAAANAEAJQAGAKAIAEQAJAEALAAIAPAAIAMgEIAFAiQgGADgLACQgLABgNAAQgXAAgRgJg");
	this.shape_6.setTransform(-265,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_7.setTransform(-279.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBmQgDgFgDgMIgIgeQgEgTgIgHQgHgHgNAAIgOAAIAABQIgtAAIAAjHIAagCQAQgCATAAQAVAAAQAEQAQADALAJQAJAHAFAKQAFALAAAOQAAANgGALQgFAJgIAHQgIAGgJADIAAABQAKAFAHAJQAGAKAEAOIAGAXIAGAVIAEANgAgXhDIgHACIAAA4IASAAQAQgBAKgHQAJgJAAgNQAAgOgJgHQgIgHgPAAIgOAAg");
	this.shape_8.setTransform(-295.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReceivingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.PressNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.NextButton();
	this.instance.parent = this;
	this.instance.setTransform(-195,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAJIgBAIIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape.setTransform(167.8,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBFQgMgHgGgOQgHgOAAgXIAAhVIAuAAIAABOQAAAQAFAJQAGAJAMAAQAIAAAGgFQAFgFADgGIABgEIAAgGIAAhWIAuAAIAABjIAAAaIABAVIgoAAIgCgVIAAAAQgDAFgGAFQgGAGgJAEQgIAEgNAAQgPAAgMgGg");
	this.shape_1.setTransform(151.1,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_2.setTransform(133.5,-14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBpIAAiRIAtAAIAACRgAgRhBQgGgHAAgJQAAgKAGgHQAHgGAKAAQALAAAGAGQAHAHAAAKQAAAJgHAHQgGAGgLAAQgKAAgHgGg");
	this.shape_3.setTransform(120.7,-17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANAEAGQADAGALAAIAHAAIAHgBIAAAjQgFACgHABIgSABQgLAAgIgEg");
	this.shape_4.setTransform(110.9,-16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_5.setTransform(96.7,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgKgRAAgYQAAgWAKgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAJAQAAAWQABAbgLARQgLARgSAJQgRAHgUABQgWgBgRgIgAgQglQgGAHgDAKQgEAKAAAKQAAANAEAKQADAJAHAGQAHAGAJAAQANAAAHgMQAJgMAAgUQAAgKgDgKQgEgKgGgHQgGgGgKAAQgKAAgHAGg");
	this.shape_6.setTransform(79.3,-14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBDQgRgJgKgQQgJgRAAgYQAAgUAJgSQAKgRATgKQASgLAbAAIASABQAJABAHADIgHAiIgKgDIgPgBQgSAAgKALQgLAMAAARQABANAFAKQAFAIAIAFQAJAFAMAAIAOgBIAMgEIAFAiQgGADgLABQgKADgOAAQgXAAgRgKg");
	this.shape_7.setTransform(64,-14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgKgRAAgYQAAgWAKgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAJAQAAAWQABAbgLARQgLARgSAJQgRAHgUABQgWgBgRgIgAgQglQgGAHgDAKQgEAKAAAKQAAANAEAKQADAJAHAGQAHAGAJAAQANAAAHgMQAJgMAAgUQAAgKgDgKQgEgKgGgHQgGgGgKAAQgKAAgHAGg");
	this.shape_8.setTransform(42.4,-14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANAEAGQADAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgLAAgIgEg");
	this.shape_9.setTransform(28.1,-16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZBLIAAhQQAAgPgGgIQgFgJgMAAQgJABgGAFQgFAEgDAHIgBAGIAAAFIAABUIguAAIAAhjIAAgZIgBgVIAnAAIACAUIABAAQADgFAGgFQAGgGAKgEQAIgDAMgBQAPAAAMAHQALAHAHANQAHAOAAAWIAABWg");
	this.shape_10.setTransform(7.8,-14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBEQgQgJgLgRQgKgRABgYQAAgWAJgSQAKgSARgIQASgKAXAAQAWAAARAKQARAIAJASQAKAQAAAWQgBAbgKARQgMARgRAJQgSAHgTABQgWgBgRgIgAgQglQgGAHgEAKQgDAKAAAKQABANADAKQAEAJAGAGQAHAGAIAAQAOAAAIgMQAHgMABgUQAAgKgEgKQgDgKgGgHQgGgGgLAAQgJAAgHAGg");
	this.shape_11.setTransform(-9.5,-14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QgBANAFAGQADAGALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgMAAgHgEg");
	this.shape_12.setTransform(-23.8,-16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBBcQgJgDgGgGQgFgGgEgLQgDgLAAgPIAAg7IgTAAIAAgiIATAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QAAANADAGQAFAGAKAAIAIAAIAGgBIAAAjQgFACgIABIgRABQgMAAgHgEg");
	this.shape_13.setTransform(-34.8,-16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsBFQgMgHgGgOQgHgOAAgXIAAhVIAuAAIAABOQAAAQAFAJQAGAJAMAAQAIAAAGgFQAFgFADgGIABgEIAAgGIAAhWIAuAAIAABjIAAAaIABAVIgoAAIgCgVIAAAAQgDAFgGAFQgGAGgJAEQgIAEgNAAQgPAAgMgGg");
	this.shape_14.setTransform(-48.9,-14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOBnQgMgGgIgNIgBAAIgBAVIgnAAIABgUIAAgYIAAioIAuAAIAABUIAAAAQAHgKALgFQAKgGAQAAQARAAAOAJQAOAJAHARQAIAPAAAXQAAAagKASQgJARgQAJQgPAJgRAAIgCAAQgLAAgKgFgAgSgDQgHAGgDAJIAAAFIAAAEIAAAVIAAAIQADAKAHAGQAHAGAKAAQAOAAAIgLQAJgKAAgUQAAgMgEgJQgDgJgHgFQgHgFgKAAQgJAAgIAGg");
	this.shape_15.setTransform(-66.3,-17.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPApIgGhRIAoAAIgHBRgAgpApIgHhRIApAAIgHBRg");
	this.shape_16.setTransform(-87.6,-23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QAAANAEAGQADAGALAAIAHAAIAGgBIAAAjQgEACgHABIgSABQgLAAgIgEg");
	this.shape_17.setTransform(-99.2,-16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZBJIgPgaIgFgLIgFgLIgBAAIgFALIgGALIgOAaIgyAAIAyhJIgxhIIAzAAIAPAYIAGALIAFALIAAAAIAGgMIAGgLIANgXIAxAAIgwBFIAxBMg");
	this.shape_18.setTransform(-112.4,-14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAJIgBAIIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_19.setTransform(-128,-14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBlIgrhOIgSgiIgRglIgBABIACAqIAAAtIAAA9IgpAAIAAjJIA1AAIAoBKIASAhQAJASAHARIAAAAIgCgoIgBgrIAAg7IApAAIAADJg");
	this.shape_20.setTransform(-146.3,-17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAQApIgHhRIAoAAIgGBRgAgpApIgHhRIApAAIgIBRg");
	this.shape_21.setTransform(-162.6,-23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAJIgBAIIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_22.setTransform(-182.4,-14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYBqIAAhQQAAgPgGgIQgFgJgNABQgIAAgFAEQgGAEgCAHIgCAEIAAAGIAABWIguAAIAAjTIAuAAIAABTIABAAQADgEAEgEIALgHQAEgDAGgBIAMgBQAPAAALAGQAMAIAGAOQAIAOAAAVIAABVg");
	this.shape_23.setTransform(-199.2,-17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgHgGgCgLQgEgLAAgPIAAg7IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAgAAIAAAiIggAAIAAA0QgBANAFAGQADAGALAAIAHAAIAHgBIAAAjQgFACgHABIgSABQgLAAgIgEg");
	this.shape_24.setTransform(-213.6,-16.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBJQgMgCgJgFIAIggIALAEQAHAEAIABIAOABQAJAAAEgCQAFgEABgFQAAgGgFgDQgFgFgMgDQgWgIgJgKQgKgMAAgOQAAgNAHgLQAIgLANgGQAOgGAQAAQANAAAMACQAKADAHADIgIAfQgFgDgJgCQgJgCgJgBQgIAAgDAEQgFADAAAFQAAAFAFADQAEAFANAEQAVAHAJAKQAKALAAAQQABAOgIAKQgHALgOAGQgPAGgTABQgOAAgNgEg");
	this.shape_25.setTransform(-231.5,-14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBJQgMgCgIgFIAIggIALAEQAGAEAHABIAPABQAJAAAFgCQAEgEAAgFQAAgGgEgDQgFgFgLgDQgXgIgKgKQgKgMABgOQAAgNAIgLQAHgLANgGQANgGASAAQANAAAKACQALADAHADIgIAfQgFgDgIgCQgKgCgJgBQgIAAgEAEQgEADAAAFQAAAFAFADQAEAFAOAEQAUAHAKAKQAJALAAAQQAAAOgHAKQgHALgOAGQgOAGgUABQgPAAgMgEg");
	this.shape_26.setTransform(-244.5,-14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgwA4QgUgUgBgiQAAgNAFgOQAEgOAJgLQAJgLAOgIQAOgGASAAQAYAAAOALQAPAKAGARQAHAQAAATIgBAJIgBAIIhdAAQABAJAFAHQAGAFAJAEQAIADALAAQAMgBAKgBIATgFIAGAgQgMAEgNACQgOADgPAAQgkgBgUgUgAAbgQQAAgFgCgHQgCgHgFgFQgGgEgKgBQgJAAgGAFQgGAEgDAIIgEAMIA1AAIAAAAg");
	this.shape_27.setTransform(-258.9,-14.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgrBLIAAhhIgBgcIgBgUIAoAAIABAbIABAAQADgLAHgHQAGgGAIgEQAIgDAHAAIAFAAIAFAAIAAArIgGAAIgHAAQgNAAgIAGQgIAGgCAKIgBAFIAAAFIAABKg");
	this.shape_28.setTransform(-272,-14.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhHBmIAAjHQAKgCAPgBIAkgBQAUAAAQAEQAPAEAKAIQAKAIAFAMQAHAMAAAPQAAAPgGAMQgEALgJAJQgMALgQAFQgSAFgTAAIgJAAIgGAAIAABIgAgUhCIgGABIAAA8IAGABIAJAAQARAAALgIQAKgJAAgQQAAgOgJgHQgJgIgQAAIgNAAg");
	this.shape_29.setTransform(-286.4,-17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PressNext, new cjs.Rectangle(-297.7,-38.5,475.5,244.6), null);


(lib.prepbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape.setTransform(269.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(252.8,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(241.1,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(232.5,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(220.1,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(204.9,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_6.setTransform(193.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgHgMQgIgLgQgBQgLABgIAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAIgIQAHgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_7.setTransform(177.1,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(157,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_9.setTransform(145,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(131.8,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_11.setTransform(115.3,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_12.setTransform(100.5,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_13.setTransform(89,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_14.setTransform(78.4,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_15.setTransform(66.5,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(52.4,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_17.setTransform(40.1,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_18.setTransform(25.8,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_19.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(224.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(208.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(192.8,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(181.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_4.setTransform(169.4,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_5.setTransform(154.4,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_6.setTransform(139,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_7.setTransform(120.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_8.setTransform(109.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(94.4,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(77.9,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_11.setTransform(63.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(53.7,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_13.setTransform(40.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_14.setTransform(25.5,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_15.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape.setTransform(272.1,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(260.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(237.3,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_4.setTransform(224.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(207.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(192.8,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(172.1,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(160.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(146.5,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(133.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(120.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(109.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_13.setTransform(96.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(81,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(59.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(39.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_17.setTransform(24.5,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.prepbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_110080_21_02_waitress_contaminate_food();
	this.instance.parent = this;
	this.instance.setTransform(225,218,0.151,0.151);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.PrepHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape.setTransform(-154.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_1.setTransform(-171.9,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-184.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBBcQgJgDgFgGQgGgGgDgLQgEgKAAgRIAAg6IgUAAIAAgiIAUAAIAAggIAsgKIAAAqIAhAAIAAAiIghAAIAAA0QAAANAEAHQADAFALAAIAHAAIAHgBIAAAjQgFACgIABIgRABQgLAAgIgEg");
	this.shape_3.setTransform(-194.4,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_4.setTransform(-208,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_5.setTransform(-220.7,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_6.setTransform(-235.3,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKBpIAAicIAAgbIgBgXIAoAAIACAVIAAAAQAIgMANgGQAMgGAPAAQARAAANAJQAOAJAJARQAIAQAAAYQAAAbgKAQQgJARgQAJQgPAIgQAAQgNAAgKgEQgKgFgFgHIAAAAIAABJgAgRg+QgIAHgCAKIgBAEIAAAEIAAAUIAAAFIABAFQACAIAHAGQAHAGAKAAQAOAAAJgLQAIgKAAgTQAAgMgEgJQgDgJgHgGQgHgFgJAAQgKAAgHAGg");
	this.shape_7.setTransform(-251.5,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_8.setTransform(-268.7,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBLIAAhiIgBgbIgBgVIAoAAIABAbIABAAQADgLAHgGQAHgHAHgDQAIgDAHAAIAFAAIAFABIAAAqIgGgBIgHAAQgMABgIAFQgJAGgCAMIgBAEIAAAEIAABLg");
	this.shape_9.setTransform(-281.8,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIBmIAAjHQALgBAPgBQAPgCAVAAQAUAAAPAEQAQAEAKAIQAKAIAGAMQAFAMAAAPQABAPgFANQgFALgJAIQgMALgRAGQgRAEgTAAIgIAAIgIgBIAABJgAgThBIgIABIAAA7IAHABIAJAAQASAAAKgJQAKgIAAgPQAAgOgJgJQgJgHgRgBIgLACg");
	this.shape_10.setTransform(-296.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PrepHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.MainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DM72_190_01_food_flow_floor_plan();
	this.instance.parent = this;
	this.instance.setTransform(-32,14,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MainBG, new cjs.Rectangle(-32,14,1238.7,607), null);


(lib.IntroCapText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(425.3,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_1.setTransform(419.1,49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_2.setTransform(408.1,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBTQgMgIgHgOQgHgOAAgSQAAgUAIgOQAHgOAMgIQAMgIAPAAQANAAAJAFQAKAGAEAIIAAAAIAAhJIAWAAIAACSIAAAQIABAOIgUAAIgBgVIAAAAQgFALgLAHQgLAGgNAAQgPAAgLgHgAgRgMQgIAGgEAKQgFAKAAAOQAAAMAFAKQADALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgNgBQgKAAgIAGg");
	this.shape_3.setTransform(394.4,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_4.setTransform(384.3,49);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA4QgMgIgIgOQgIgOAAgTQAAgTAIgOQAIgPANgIQAOgHAQAAQARAAANAIQANAIAIAOQAHAOAAASQAAAWgJAOQgJAOgNAHQgOAGgOAAQgQAAgOgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKAAgOQAAgKgEgLQgEgKgHgHQgJgIgMAAQgNABgIAGg");
	this.shape_5.setTransform(372.6,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIABgCIgBgCIgBgEIgthuIAYAAIAaBHIAFANIACALIABAAIAEgLIADgNIAZhHIAXAAIghBWIgPAiQgGAPgFAKQgHAJgIAHQgIAHgHADIgLAEg");
	this.shape_6.setTransform(354.6,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_7.setTransform(341.7,49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgJAAgIADQgIACgGAEIgGgOQAIgFALgDQAKgDAKAAQATAAAKAHQAJAIAEAKQAEAMABAMIAAAsIAAAQIABANIgTAAIgDgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgFADgIIAAgEIABgDIAAgVQgMABgMABg");
	this.shape_8.setTransform(328.4,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_9.setTransform(310.4,49);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(300.6,46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_11.setTransform(286.1,49.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgHgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAHACQAIACAFADIgGAQIgJgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAPAFAIAHQAIAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_12.setTransform(274.9,49.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_13.setTransform(263.7,49.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_14.setTransform(250.5,46.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_15.setTransform(239.3,47.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_16.setTransform(223,49);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeA4QgMgIgIgOQgIgOAAgTQABgTAHgOQAIgPANgIQAOgHAQAAQARAAAOAIQAMAIAIAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgOgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKgBgOQAAgKgDgLQgEgKgHgHQgJgIgNAAQgMABgIAGg");
	this.shape_17.setTransform(209.2,49.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYBZIgpg6IgLAMIAAAuIgWAAIAAixIAWAAIAABvIAAAAIAGgHIAFgGIAjgpIAaAAIguAwIA1BIg");
	this.shape_18.setTransform(192.2,46.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_19.setTransform(179.8,49.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_20.setTransform(171.1,46.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_21.setTransform(165.3,46.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXBNQgSgKgLgTQgKgTgBgcQAAgZALgUQALgUAUgLQATgLAaAAQAQAAAJADQALACAEADIgGARQgFgDgJgCQgIgCgLAAQgUAAgOAJQgOAIgJAPQgIAQAAAVQAAAVAHAPQAIAPAPAIQANAIAUAAQALAAAJgBQAJgCAHgEIAFASQgHADgLACQgLADgPAAQgYAAgTgKg");
	this.shape_22.setTransform(155.1,46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_23.setTransform(140.1,53.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgHgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAIACQAHACAFADIgGAQIgJgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAQAFAIAHQAHAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_24.setTransform(132.4,49.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAVIAAAAQAIgMAKgFQALgHAOAAQAOABAMAHQAMAHAGAOQAHAPgBASQABAWgIANQgIAPgNAGQgMAIgOgBQgLAAgKgEQgKgFgGgJIAAAAIAABBgAgUg9QgJAIgEAMIgBAFIAAAEIAAAVIAAAFIABADQADAMAJAGQAJAIAMgBQAKAAAJgFQAIgGAFgKQAEgKgBgPQABgMgEgJQgFgLgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_25.setTransform(120.7,51.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_26.setTransform(106.9,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgHACIgMABQgHAAgHgCg");
	this.shape_27.setTransform(96.4,47.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXA8QgJgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgIgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAJgEAMAAQAKAAAHACQAIACAFADIgFAQIgKgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgJAAgJgDg");
	this.shape_28.setTransform(87.4,49.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_29.setTransform(74.2,46.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgIAAgIQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgIAAgJADQgIACgGAEIgGgOQAIgFAKgDQALgDALAAQARAAALAHQAKAIADAKQAFAMAAAMIAAAsIAAAQIABANIgTAAIgCgPIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgFADgIIAAgEIABgDIAAgVQgNABgLABg");
	this.shape_30.setTransform(64.9,49.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_31.setTransform(52.2,49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdA4QgNgIgIgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQASAAANAIQANAIAHAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgRAAgMgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAEALAJAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKgBgOQABgKgEgLQgEgKgHgHQgJgIgNAAQgMABgIAGg");
	this.shape_32.setTransform(38.4,49.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_33.setTransform(28.6,46.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAHAAIAGgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_34.setTransform(21.5,47.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXASgKQATgLAiAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQATAAAJAHQALAIAEAKQADAMAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgFADgIIAAgEIABgDIAAgVQgMABgMABg");
	this.shape_35.setTransform(11.1,49.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_36.setTransform(1.9,49);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_37.setTransform(-9.1,49.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAVIABAAQAHgMAKgFQALgHAOAAQAOABAMAHQAMAHAGAOQAHAPgBASQABAWgIANQgIAPgNAGQgMAIgOgBQgLAAgKgEQgKgFgGgJIAAAAIAABBgAgUg9QgJAIgEAMIgBAFIAAAEIAAAVIAAAFIABADQADAMAJAGQAJAIAMgBQAKAAAJgFQAIgGAEgKQAFgKAAgPQAAgMgFgJQgDgLgJgGQgHgGgMAAQgLAAgJAHg");
	this.shape_38.setTransform(-22.1,51.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQARAAANAIQAOAIAHAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOAAQgLABgJAGg");
	this.shape_39.setTransform(-36.5,49.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgGgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAIAAIAEgBIACAQIgIACIgMABQgIAAgGgCg");
	this.shape_40.setTransform(-52.9,47.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_41.setTransform(-63.9,49);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_42.setTransform(-77.1,49.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_43.setTransform(-86.8,49);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_44.setTransform(-97.8,49.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgBIgJgBQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_45.setTransform(-107,46.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgBIgJgBQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_46.setTransform(-114.3,46.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_47.setTransform(-121.6,46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeBTQgMgIgHgOQgHgOAAgSQAAgUAIgOQAHgOAMgIQAMgIAPAAQANAAAKAFQAIAGAEAIIABAAIAAhJIAWAAIAACSIABAQIAAAOIgTAAIgCgVIAAAAQgFALgLAHQgLAGgNAAQgPAAgLgHgAgRgMQgIAGgFAKQgEAKAAAOQAAAMAEAKQAEALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgMgBQgLAAgIAGg");
	this.shape_48.setTransform(-131.9,46.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_49.setTransform(-150.1,49.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_50.setTransform(-163.4,49);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_51.setTransform(-173.2,46.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_52.setTransform(-183.1,49);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_53.setTransform(-201.6,49.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_54.setTransform(-211.3,49);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgJAAgIADQgIACgGAEIgGgOQAIgFAKgDQALgDAKAAQATAAAKAHQAJAIAEAKQAEAMABAMIAAAsIAAAQIABANIgTAAIgDgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgFADgIIAAgEIABgDIAAgVQgMABgMABg");
	this.shape_55.setTransform(-222.4,49.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_56.setTransform(-239.6,49.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_57.setTransform(-249.3,49);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_58.setTransform(-260.3,49.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_59.setTransform(-273.5,46.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgHACIgMABQgHAAgHgCg");
	this.shape_60.setTransform(-284.7,47.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_61.setTransform(-296.9,55.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_62.setTransform(-305.5,49.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_63.setTransform(-318.8,49);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_64.setTransform(-331.9,49.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_65.setTransform(-343.7,49.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXA8QgKgCgFgDIAFgRQAFAEAIACQAHACAJABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAKgEAMAAQAJAAAIACQAHACAFADIgFAQIgKgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAKgUAAQgLAAgIgDg");
	this.shape_66.setTransform(-354.3,49.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgXA8QgKgCgGgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAKgEALAAQAKAAAIACQAHACAFADIgFAQIgKgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQgBAQgMAKQgLAKgUAAQgLAAgIgDg");
	this.shape_67.setTransform(-369.5,49.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_68.setTransform(-377.4,46.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_69.setTransform(-387.3,46.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgGgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAIAAIAEgBIACAQIgIACIgMABQgIAAgGgCg");
	this.shape_70.setTransform(-398.5,47.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_71.setTransform(-414.8,49);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKBUIAAinIAVAAIAACng");
	this.shape_72.setTransform(-424.7,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IntroCapText, new cjs.Rectangle(-429.8,29.4,859.6,34.1), null);


(lib.Instructionsclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(219.9,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_1.setTransform(210.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_2.setTransform(201.2,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeA3QgNgHgHgOQgIgOAAgTQABgUAHgOQAIgOANgHQAOgIAQAAQASAAAMAIQANAHAIAOQAHAOAAATQAAAWgJANQgJAPgNAGQgOAHgOAAQgQAAgOgIgAgUgmQgIAGgEALQgEAKAAALQAAANAFALQAEAKAJAHQAIAFAKAAQALAAAIgFQAIgHAFgKQAFgLAAgNQAAgKgEgKQgDgLgJgHQgIgHgMAAQgNgBgIAIg");
	this.shape_3.setTransform(189.6,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_4.setTransform(172.3,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_5.setTransform(149.6,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_6.setTransform(139.2,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgKQAAgVATgLQASgMAjAAIAAgCIgCgLQgCgHgGgFQgFgEgMgBQgJAAgIACQgIADgGAEIgGgPQAIgEAKgDQAKgDAMAAQARAAAKAIQAKAGAFAMQADALABANIAAAsIAAAPIABAOIgUAAIgBgQIgBAAQgGAHgJAFQgJAGgMAAQgMAAgJgFgAABAAQgKADgIAFQgIAHAAALQAAALAGAFQAGAFAIAAQALAAAIgGQAHgGADgIIABgDIAAgFIAAgTQgNAAgLAAg");
	this.shape_7.setTransform(128.1,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_8.setTransform(116.2,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_9.setTransform(107,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA3QgMgHgIgOQgIgOAAgTQAAgUAIgOQAIgOANgHQAOgIAQAAQARAAANAIQANAHAIAOQAHAOAAATQAAAWgJANQgJAPgNAGQgOAHgOAAQgQAAgOgIgAgUgmQgIAGgEALQgEAKAAALQABANAEALQAFAKAIAHQAIAFAKAAQAKAAAJgFQAIgHAFgKQAFgLAAgNQAAgKgEgKQgEgLgHgHQgIgHgNAAQgNgBgIAIg");
	this.shape_10.setTransform(91.8,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAGgBIABAQIgJACIgLABQgIAAgGgCg");
	this.shape_11.setTransform(80.7,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag3BXIAAiDIgBgVIAAgSIATAAIABAVIAAAAQAIgLAKgHQAKgFAPAAQAOgBAMAIQAMAHAGAPQAHAOAAARQAAAXgIANQgIAOgMAIQgNAGgOABQgMgBgJgEQgKgFgGgJIAAAAIAABCgAgUg9QgJAHgDANIgCAFIAAAEIAAAVIAAAEIABAFQADAKAJAIQAJAGAMABQALgBAIgFQAIgGAFgLQADgJAAgPQAAgLgDgLQgFgKgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_12.setTransform(64.6,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_13.setTransform(50.9,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAIAAIAFgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_14.setTransform(40.4,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYA9QgJgDgGgEIAGgQQAFADAHADQAIADAJgBQALAAAFgEQAGgGAAgHQAAgIgFgFQgFgFgLgEQgRgHgHgHQgIgJAAgLQAAgJAFgJQAFgIAJgEQAJgFAMAAQAKAAAHACQAIACAFAEIgGAQIgJgGQgGgBgJAAQgJAAgFAEQgFAFAAAHQAAAHAGAEQAFAFALAEQAQAGAHAIQAJAIgBAOQABAQgMAKQgMAKgVAAQgKAAgJgCg");
	this.shape_15.setTransform(31.4,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_16.setTransform(18.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgKQAAgVATgLQASgMAjAAIAAgCIgCgLQgCgHgGgFQgFgEgMgBQgJAAgIACQgIADgGAEIgGgPQAIgEAKgDQAKgDAMAAQARAAAKAIQAKAGAFAMQAEALAAANIAAAsIAAAPIABAOIgUAAIgBgQIgBAAQgGAHgJAFQgJAGgMAAQgMAAgJgFgAABAAQgKADgIAFQgIAHAAALQAAALAGAFQAGAFAIAAQALAAAIgGQAHgGADgIIABgDIAAgFIAAgTQgNAAgLAAg");
	this.shape_17.setTransform(8.9,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_18.setTransform(-3.8,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA3QgMgHgIgOQgIgOAAgTQABgUAHgOQAIgOANgHQAOgIAQAAQARAAAOAIQAMAHAIAOQAHAOAAATQAAAWgJANQgJAPgOAGQgNAHgOAAQgQAAgOgIgAgUgmQgIAGgEALQgEAKAAALQABANAEALQAFAKAIAHQAIAFAKAAQAKAAAJgFQAIgHAFgKQAFgLgBgNQAAgKgDgKQgEgLgHgHQgJgHgNAAQgMgBgIAIg");
	this.shape_19.setTransform(-17.6,2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_20.setTransform(-27.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAHAAIAGgBIABAQIgJACIgLABQgHAAgHgCg");
	this.shape_21.setTransform(-34.6,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgKQAAgVASgLQAUgMAhAAIAAgCIgBgLQgCgHgGgFQgGgEgLgBQgJAAgIACQgIADgGAEIgGgPQAIgEAKgDQALgDALAAQARAAALAIQAJAGAEAMQAFALAAANIAAAsIAAAPIABAOIgTAAIgDgQIAAAAQgGAHgJAFQgJAGgMAAQgMAAgJgFgAABAAQgLADgIAFQgHAHAAALQAAALAGAFQAGAFAJAAQALAAAHgGQAHgGADgIIAAgDIABgFIAAgTQgMAAgMAAg");
	this.shape_22.setTransform(-45,2.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_23.setTransform(-54.1,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_24.setTransform(-65.1,2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag3BXIAAiDIgBgVIAAgSIATAAIABAVIAAAAQAIgLAKgHQAKgFAPAAQAOgBAMAIQAMAHAGAPQAHAOAAARQAAAXgIANQgIAOgNAIQgMAGgOABQgMgBgJgEQgKgFgGgJIAAAAIAABCgAgUg9QgJAHgEANIgBAFIAAAEIAAAVIAAAEIABAFQADAKAJAIQAJAGAMABQAKgBAJgFQAIgGAFgLQADgJAAgPQAAgLgDgLQgFgKgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_25.setTransform(-78.1,5.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdA3QgNgHgIgOQgIgOAAgTQAAgUAIgOQAIgOAOgHQANgIAQAAQASAAANAIQANAHAHAOQAHAOAAATQAAAWgJANQgJAPgOAGQgNAHgOAAQgRAAgMgIgAgUgmQgIAGgEALQgEAKAAALQABANAEALQAEAKAJAHQAIAFAKAAQAKAAAJgFQAIgHAFgKQAFgLgBgNQABgKgEgKQgEgLgHgHQgJgHgNAAQgMgBgIAIg");
	this.shape_26.setTransform(-92.5,2.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_27.setTransform(-111.6,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSA3QgOgIgHgNQgIgOAAgTQAAgRAIgPQAIgOAPgJQAOgIATAAQAKAAAIACQAIACAFADIgFARQgEgDgHgCQgGgCgJAAQgOABgIAGQgKAGgFAKQgFALAAALQABAOAFALQAFAKAKAFQAIAFAMAAQAKAAAGgBIALgFIAEARQgEADgJACQgJACgNAAQgRAAgNgIg");
	this.shape_28.setTransform(-124.1,2.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgKQAAgVASgLQAUgMAhAAIAAgCIgBgLQgCgHgGgFQgGgEgLgBQgIAAgJACQgIADgGAEIgGgPQAIgEAKgDQALgDALAAQARAAALAIQAKAGADAMQAFALAAANIAAAsIAAAPIABAOIgTAAIgCgQIgBAAQgFAHgKAFQgJAGgMAAQgMAAgJgFgAABAAQgLADgHAFQgIAHAAALQAAALAGAFQAGAFAIAAQALAAAIgGQAHgGADgIIAAgDIABgFIAAgTQgNAAgLAAg");
	this.shape_29.setTransform(-136.1,2.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_30.setTransform(-148.1,2.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_31.setTransform(-163.9,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSA3QgOgIgHgNQgIgOAAgTQAAgRAIgPQAIgOAPgJQAOgIATAAQAKAAAIACQAIACAFADIgFARQgEgDgHgCQgGgCgJAAQgOABgIAGQgKAGgFAKQgFALAAALQABAOAFALQAFAKAKAFQAIAFAMAAQAKAAAGgBIALgFIAEARQgEADgJACQgJACgNAAQgRAAgNgIg");
	this.shape_32.setTransform(-173.4,2.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_33.setTransform(-185.4,2.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_34.setTransform(-194.6,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgJQANgIARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgJQgDgIgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_35.setTransform(-203.8,2.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYBVIgPgEQgGgCgFgDIAGgSQAHAEAKADQAKAEALAAQAQAAAKgIQAJgIAAgNQAAgMgIgHQgHgIgQgHQgVgGgLgLQgMgMgBgRQABgNAGgLQAHgKAMgGQANgGAPAAQANAAAJADQAKACAFADIgGASIgMgFQgJgDgLAAQgKAAgHAEQgIAEgDAGQgCAFAAAGQgBAMAJAHQAHAHARAHQAWAIAKAKQALAMAAASQAAANgGALQgHALgNAHQgNAHgTAAIgRgCg");
	this.shape_36.setTransform(-216.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Instructionsclip, new cjs.Rectangle(-224.4,-17,448.9,34.1), null);


(lib.holdingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgCIAAAVIgJACIgOABQgJAAgHgDg");
	this.shape.setTransform(354.5,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_1.setTransform(342.2,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgIAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgHADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_2.setTransform(322.1,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_3.setTransform(295.8,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(284.2,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgNAAQgLAAgKADQgJADgJAFIgFgSQAIgGANgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(270.9,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(251.7,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(240.7,59.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_8.setTransform(232.3,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(216.3,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_10.setTransform(200.3,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_11.setTransform(193.2,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_12.setTransform(175.9,61.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_13.setTransform(155.8,61.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_14.setTransform(139.8,58.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_15.setTransform(131.2,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_16.setTransform(111.7,61.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(95.9,61.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJADQAJADAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_18.setTransform(80,58);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAYIAFAWIABAAIAHgWIAGgYIAYhJIAVAAIAWBIIAIAZIAGAWIABAAIAEgWIAHgZIAUhIIAaAAIguCQg");
	this.shape_19.setTransform(60.7,61.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_20.setTransform(39.2,61.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_21.setTransform(25.2,61.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_22.setTransform(536.9,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgNABgIAGg");
	this.shape_23.setTransform(523.5,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_24.setTransform(511.9,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_25.setTransform(497.9,23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_26.setTransform(484.5,21.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_27.setTransform(472.1,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_28.setTransform(461.2,23.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKgBAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_29.setTransform(448,23.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagKAQQgJASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_30.setTransform(432.4,26.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_31.setTransform(410.9,23.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_32.setTransform(390.9,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_33.setTransform(378.2,21.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_34.setTransform(363,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_35.setTransform(349.8,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_36.setTransform(334.2,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_37.setTransform(316.9,23.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_38.setTransform(304.7,23.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_39.setTransform(290.9,26.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_40.setTransform(269.4,23.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAIAAAEAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_41.setTransform(253.4,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAGgBIACAUIgKACIgOABQgJAAgIgDg");
	this.shape_42.setTransform(238.5,21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_43.setTransform(226,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_44.setTransform(203.9,20.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_45.setTransform(187.7,23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_46.setTransform(171.2,23.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_47.setTransform(159.4,19.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_48.setTransform(144.3,19.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_49.setTransform(130.9,23.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_50.setTransform(108.9,23.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_51.setTransform(95.3,23.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_52.setTransform(81.2,23.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_53.setTransform(64.9,26.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_54.setTransform(49.9,23.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_55.setTransform(40.5,20.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag8BmIgWgCIAAjGIAagDIAegBQAbAAAUAHQAUAGAOAMQANANAHASQAIARAAAZQAAAYgIAUQgHATgOAPQgOAOgXAHQgWAIgeAAIgZgBgAgrhQIgNABIAACfIAMABIAPABQApgBAWgWQAWgWAAgoQAAgYgJgSQgJgRgSgKQgTgJgaAAIgSABg");
	this.shape_56.setTransform(27.6,20.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_57.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holdingbullet2, new cjs.Rectangle(0,0,600.1,78.1), null);


(lib.Holdingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape.setTransform(495.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABOBKIAAhRQAAgVgIgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQAEgGAEgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_1.setTransform(475.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(459.3,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(450.7,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAPgJASgBQAPABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIACASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgCgMgKgJQgLgIgPAAQgMgBgKAIg");
	this.shape_4.setTransform(430.6,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(414.3,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_6.setTransform(398.4,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgHADgMADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_7.setTransform(377.7,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(366.1,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(352.1,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(338.7,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgLAGQgMAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHABAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(326.3,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(315.4,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_13.setTransform(302.2,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_14.setTransform(286.6,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(265.1,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_16.setTransform(245.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_17.setTransform(232.4,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_18.setTransform(212.4,26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_19.setTransform(196.1,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_20.setTransform(184.3,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_21.setTransform(171.9,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_22.setTransform(160.3,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_23.setTransform(148.6,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_24.setTransform(132.1,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_25.setTransform(113.3,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_26.setTransform(99.4,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_27.setTransform(86.1,21.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_28.setTransform(77.7,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_29.setTransform(65.9,23.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_30.setTransform(49.3,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABOBlIgGhZIgBgcIgBgfIAAgbIgBAAIgMAkIgOAoIgkBiIgSAAIghhhIgNgnQgGgUgEgSIgBAAIgBAbIgBAfIgCAeIgFBXIgZAAIAOjJIAhAAIAjBhIALAjQAFARAEAQIAAAAIAJghIAMgjIAkhhIAhAAIANDJg");
	this.shape_31.setTransform(29.1,20.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_32.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Holdingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.HoldingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-207.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-224.4,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-237.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsBjQgOgJgJgRQgIgRAAgXQAAgZAJgQQAJgRAPgKQAPgJARAAQANAAAKAFQAKAEAGAIIAAAAIAAhQIAuAAIAACoIAAAZIABATIgpAAIgCgVIAAAAQgIAMgMAGQgMAGgNAAQgSAAgOgJgAgOgDQgIAEgDAKQgEAJAAAMQABATAHAKQAJALAOAAQAJAAAIgGQAHgGACgKIABgFIAAgFIAAgTIAAgFIAAgDQgCgKgHgFQgIgHgKAAQgKAAgGAGg");
	this.shape_3.setTransform(-250.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_4.setTransform(-263.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-276.2,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmBlIAAhVIhLAAIAABVIguAAIAAjJIAuAAIAABOIBLAAIAAhOIAuAAIAADJg");
	this.shape_6.setTransform(-295.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HoldingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.holdingbg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DMH_08_06_spaghetti_meatball_chafing_dishes();
	this.instance.parent = this;
	this.instance.setTransform(303,-10,0.921,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.holdingbg, new cjs.Rectangle(0,-10,1209.3,639.4), null);


(lib.coolingtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBCQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAFAFQAEAGABAIQgBAIgEAFQgFAGgIAAQgHAAgFgGgAgMgmQgFgGAAgIQAAgIAFgFQAFgGAHAAQAIAAAFAGQAEAFABAIQgBAIgEAGQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(-176.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_1.setTransform(-183.5,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_2.setTransform(-196.7,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAOgJATAAQAPAAALAGQALAGAGAJIAAAAIAAhWIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgJAHgGALQgFANAAAQQAAAPAFAMQAEANAKAGQAKAIANAAQAOAAAKgJQAKgHAFgPIABgGIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgKgIgPgBQgMAAgKAIg");
	this.shape_3.setTransform(-213.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_4.setTransform(-224.6,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_5.setTransform(-234.1,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_6.setTransform(-248.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(-264.9,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_8.setTransform(-281.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingtext, new cjs.Rectangle(-292.5,-20,585.1,40.1), null);


(lib.coolingimage2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_52_03_fridge_cool_pots_of_soup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhedAxLMAAAhiVMC87AAAMAAABiVg");
	this.shape.setTransform(-35.2,209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingimage2, new cjs.Rectangle(-639.8,-105.7,1209.3,629.4), null);


(lib.CoolingHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-210.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-227.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-240.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_3.setTransform(-248.9,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-261.7,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-279,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBbQgXgNgMgXQgMgXAAgdQAAgiAPgYQAPgXAZgNQAYgMAeAAQASAAANADQANACAGAEIgJAkQgHgDgKgCQgJgCgMgBQgTAAgOAIQgOAHgIAPQgJAPAAAVQAAAfARASQAQARAfAAQALAAAKgCQAKgBAHgDIAHAkQgHADgNACQgNADgTAAQgiAAgYgNg");
	this.shape_6.setTransform(-296.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CoolingHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.coolingbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(352.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_1.setTransform(339.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(327.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(313.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQABgXQAAgYAJgQQAIgRAPgKQAPgJASgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAEAMAKAGQAKAIANAAQAOAAAKgJQAKgHAFgQIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgJgIgQAAQgMgBgKAIg");
	this.shape_4.setTransform(296.4,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_5.setTransform(280.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(266.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(251.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(239.4,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_9.setTransform(225.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape_10.setTransform(201.4,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_11.setTransform(185,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(169.1,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(150.8,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(137.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_15.setTransform(121.8,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_16.setTransform(101.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIABAAQAHgNANgHQANgIARAAQARAAAOAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_17.setTransform(81.2,26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_18.setTransform(68.7,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_19.setTransform(56.9,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AApBoIAAhSIAAAAQgGALgMAHQgMAIgRAAQgRgBgOgIQgOgJgIgRQgIgQAAgVQAAgcAKgRQAKgSAPgHQAPgJAPAAQAQAAALAIQAMAGAFAMIABAAIAAgXIAZAAIAAATIgBAVIAACkgAgUhLQgKAHgFANQgGANAAAQQAAAPAFALQAFAMAJAHQAKAIANAAQANgBAKgGQAKgIAFgNIACgGIAAgGIAAgcIAAgGIgBgFQgDgNgKgIQgKgJgPAAQgNAAgJAHg");
	this.shape_20.setTransform(39.7,26.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_21.setTransform(25,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_22.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.coolingbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape.setTransform(349.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(333,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_2.setTransform(316.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_3.setTransform(304.8,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_4.setTransform(289.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(276.3,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_6.setTransform(255.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_7.setTransform(244.7,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(231.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(214.9,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_10.setTransform(198.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_11.setTransform(177.7,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_12.setTransform(157.6,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_13.setTransform(135.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_14.setTransform(119.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(103.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_16.setTransform(84.1,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(70.7,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgOAJgRAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_18.setTransform(55.1,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_19.setTransform(39,26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_20.setTransform(24.5,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.coolingbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM_140_01_soup_on_counter();
	this.instance.parent = this;
	this.instance.setTransform(210,76,0.979,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coolingbg1, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.cookingbg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM72_34_08_chef_thinks_take_temperature_chicken_thermometer();
	this.instance.parent = this;
	this.instance.setTransform(456,97,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookingbg2, new cjs.Rectangle(0,0,1209.7,637.5), null);


(lib.cookingbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cooking one
	this.instance = new lib.DM72_34_08_cooked_chicken_skillet();
	this.instance.parent = this;
	this.instance.setTransform(425,35,0.745,0.745);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookingbg1, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.CookHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-202.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-219.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-232.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBrIgig9IgMAPIAAAuIguAAIAAjVIAuAAIAACAIABAAIAEgJIAGgJIAdgrIA3AAIg1A6IA8BYg");
	this.shape_3.setTransform(-243.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_4.setTransform(-261.7,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBDQgRgJgKgQQgKgRAAgYQAAgXAKgRQAKgSARgJQASgKAXAAQAWAAARAKQARAJAJARQAKARAAAWQgBAagLARQgLASgRAIQgSAJgTgBQgVABgSgKgAgQglQgHAHgDAKQgDAKAAAKQAAAMAEAKQADALAHAFQAHAGAIAAQAOAAAIgMQAHgMAAgUQAAgLgCgKQgDgJgHgHQgGgGgLAAQgKAAgGAGg");
	this.shape_5.setTransform(-279,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBbQgXgNgMgXQgMgXAAgdQAAgiAPgYQAPgXAZgNQAYgMAeAAQASAAANADQANACAGAEIgJAkQgHgDgKgCQgJgCgMgBQgTAAgOAIQgOAHgIAPQgJAPAAAVQAAAfARASQAQARAfAAQALAAAKgCQAKgBAHgDIAHAkQgHADgNACQgNADgTAAQgiAAgYgNg");
	this.shape_6.setTransform(-296.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CookHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.cookbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgQAAgXQAAgYAJgQQAJgRAPgKQAOgJASgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIAAATIABASIgXAAIgBgZIgBAAQgGAMgNAIQgNAIgRAAQgRAAgPgJgAgVgOQgKAHgEAMQgGAMAAAQQAAAPAFANQAEAMAKAGQAJAIAOAAQANAAALgJQALgHADgQIABgFIABgGIAAgZIgBgFIgBgGQgDgMgJgJQgLgIgOAAQgNgBgKAIg");
	this.shape.setTransform(421.9,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_1.setTransform(406.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_2.setTransform(390.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_3.setTransform(375.6,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(361.1,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_5.setTransform(346.8,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(335.2,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(315.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(304,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgMAGQgLAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(290.7,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_10.setTransform(271.5,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_11.setTransform(258.1,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(246.5,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_13.setTransform(232.5,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_14.setTransform(219.2,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_15.setTransform(206.7,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_16.setTransform(195.8,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_17.setTransform(182.6,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAXAAIABAZIABAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQALAIAPAAQANAAAKgHQAJgHAFgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_18.setTransform(167,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABPBKIAAhRQAAgVgIgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgHgLgQgBQgIABgGADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEALAAQAQAAAKAIQAKAIAFANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQAKAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_19.setTransform(145.5,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_20.setTransform(125.5,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgHgDg");
	this.shape_21.setTransform(112.9,21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_22.setTransform(94.2,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_23.setTransform(82.6,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_24.setTransform(68.6,23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_25.setTransform(54.3,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_26.setTransform(40.1,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag4BlIAAjJIBsAAIAAAWIhSAAIAAA/IBOAAIAAAVIhOAAIAABJIBXAAIAAAWg");
	this.shape_27.setTransform(25,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_28.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.cookbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(427.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAJgSAPgKQAPgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgNABgIAGg");
	this.shape_1.setTransform(414.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(402.5,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_3.setTransform(388.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgIgDg");
	this.shape_4.setTransform(375.2,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgMAGQgLAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(362.7,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(351.8,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAKgCQAJgCAHgDIAFATQgIADgLADQgMADgRAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBMAAQABgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_7.setTransform(338.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagKAQQgJASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAKgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_8.setTransform(323,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_9.setTransform(301.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_10.setTransform(281.5,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_11.setTransform(268.9,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_12.setTransform(248.8,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_13.setTransform(232.6,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_14.setTransform(220.8,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_15.setTransform(211.5,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(195,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_17.setTransform(178.5,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(163.7,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_19.setTransform(143,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_20.setTransform(127.1,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_21.setTransform(115.3,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_22.setTransform(99.3,23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_23.setTransform(82.8,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_24.setTransform(69.6,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_25.setTransform(56.9,21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_26.setTransform(44.6,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag8BmIgWgCIAAjGIAagDIAegBQAbAAAUAHQAUAGAOAMQANANAHASQAIARAAAZQAAAYgIAUQgHATgOAPQgOAOgXAHQgWAIgeAAIgZgBgAgrhQIgNABIAACfIAMABIAPABQApgBAWgWQAWgWAAgoQAAgYgJgSQgJgRgSgKQgTgJgaAAIgSABg");
	this.shape_27.setTransform(27.6,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_28.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib._53interfacecrosscancel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAeGAhgI+G+HI+FeHQguAtg/AAQhAAAgtgtQgtgtAAhAQAAg/AtguIeH+GI+H+FQgtgtAAhAQAAhAAtgtQAtgtBAAAQA/AAAuAtIeFeHIeG+HQAtgtBAAAQBAAAAtAtQAtAtAABAQAABAgtAtI+HeFIeHeGQAtAuAAA/QAABAgtAtQgtAthAAAQhAAAgtgtg");
	this.shape.setTransform(218.9,218.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._53interfacecrosscancel, new cjs.Rectangle(0,0,437.8,437.8), null);


(lib.CCButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.testbutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.617,0.617);

	this.instance_1 = new lib.testbuttonover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,50);


(lib.BtnStorage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AhZCNIAAkZICuAAIAAA0IhuAAIAAA7IBnAAIAAAzIhnAAIAABDIBzAAIAAA0g");
	this.shape.setTransform(502.8,441.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("AgkCGQgcgJgTgTQgUgTgKgaQgLgaABgfQAAgvAVggQAVgiAkgRQAkgRAugBQAcABAUAEQAUAEALAGIgOAyQgLgFgQgDQgQgDgXgBQgbAAgUAKQgVALgMAUQgMAUAAAeQAAAdALAVQALAUAUALQATAMAbAAIATgCQAIgBAEgCIAAg6IgsAAIAAgyIBqAAIAACVIgZAGQgPAEgSACQgSADgTAAQglAAgdgKg");
	this.shape_1.setTransform(476.3,441.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AA8CNIgWhIIhQAAIgUBIIhCAAIBWkZIBUAAIBXEZgAAdAVIgRg7IgIgbIgGgbIAAAAIgHAbIgGAbIgRA7IA9AAg");
	this.shape_2.setTransform(448.4,441.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.949)").s().p("AAqCOQgEgFgFgSIgLgqQgGgagKgKQgKgKgTAAIgUAAIAABvIg/AAIAAkVQAQgDAVgCQAXgCAaAAQAeAAAXAGQAWAFAPAMQANAJAGAQQAHAOAAAUQAAASgHAOQgIAOgLAKQgMAIgMAEIAAACQAPAGAJANQAIAOAGATIAIAhIAIAdQAEANADAFgAgghdIgLABIAABOIAaAAQAXAAANgLQAOgLAAgTQAAgTgNgKQgMgKgWAAIgSABg");
	this.shape_3.setTransform(423.4,441.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.949)").s().p("AhKB+QgdgSgRggQgPghAAgpQAAgqARghQARghAfgUQAfgSApgBQArABAeASQAeAUAPAgQAQAhAAAnQgBAugRAhQgRAhgfASQggASgoAAQgqAAgegUgAgkhSQgPANgJAWQgHAVgBAbQABAcAHAVQAJAVAQAMQAPAMAVAAQAVAAAPgNQAPgMAIgVQAIgWAAgbQAAgZgIgWQgIgVgPgNQgPgNgWAAQgVAAgPAMg");
	this.shape_4.setTransform(395,441.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.949)").s().p("AggCNIAAjkIhMAAIAAg1IDZAAIAAA1IhOAAIAADkg");
	this.shape_5.setTransform(368.4,441.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.949)").s().p("Ag+CNQgVgGgNgGIANg1QANAHASAFQATAFAVAAQAVAAALgIQAMgIAAgOQAAgNgLgJQgLgJgZgJQgjgMgVgUQgVgUAAgfQAAgYAMgTQANgTAYgLQAZgMAgAAQAYAAARAFQASAEANAGIgOAzQgJgEgPgFQgPgEgVAAQgTAAgKAIQgLAIABALQgBANANAJQANAIAaAKQAlAOASATQASAUAAAeQAAAYgMAUQgMAUgaAMQgZALgmABQgYAAgWgFg");
	this.shape_6.setTransform(345.6,441.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.953)").s().p("AhZCNIAAkZICuAAIAAA0IhuAAIAAA6IBnAAIAAAzIhnAAIAABEIBzAAIAAA0g");
	this.shape_7.setTransform(502.8,216.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.953)").s().p("AgkCHQgcgKgTgTQgUgSgKgbQgLgbABgfQAAguAVghQAVggAkgSQAkgRAuAAQAcAAAUAEQAUAEALAFIgOA0QgLgFgQgEQgQgEgXAAQgbAAgUALQgVAJgMAVQgMAUAAAeQAAAdALAVQALAUAUAMQATAKAbABIATgBQAIgBAEgDIAAg6IgsAAIAAgyIBqAAIAACVIgZAHQgPADgSACQgSADgTABQglgBgdgJg");
	this.shape_8.setTransform(476.3,216.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.953)").s().p("AA8CNIgWhJIhQAAIgUBJIhCAAIBWkZIBUAAIBXEZgAAdAVIgRg7IgIgcIgGgbIAAAAIgHAcIgGAbIgRA7IA9AAg");
	this.shape_9.setTransform(448.4,216.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.953)").s().p("AAqCOQgEgFgFgRIgLgsQgGgagKgJQgKgKgTAAIgUAAIAABvIg/AAIAAkWQAQgDAVgBQAXgBAaAAQAeAAAXAEQAWAGAPALQANALAGAPQAHAPAAATQAAASgHAOQgIAOgLAKQgMAIgMAEIAAACQAPAGAJAOQAIANAGATIAIAhIAIAdQAEANADAFgAgghdIgLABIAABOIAaAAQAXAAANgLQAOgLAAgTQAAgUgNgJQgMgKgWAAIgSABg");
	this.shape_10.setTransform(423.4,216.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.953)").s().p("AhKB/QgdgUgRggQgPggAAgpQAAgqARghQARgiAfgSQAfgUApAAQArAAAeAUQAeATAPAgQAQAhAAAnQgBAtgRAiQgRAhgfASQggASgoAAQgqgBgegSgAgkhSQgPANgJAVQgHAWgBAbQABAbAHAWQAJAVAQAMQAPAMAVAAQAVAAAPgMQAPgNAIgWQAIgVAAgbQAAgagIgVQgIgVgPgNQgPgMgWgBQgVAAgPAMg");
	this.shape_11.setTransform(395,216.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.953)").s().p("AggCNIAAjkIhMAAIAAg1IDZAAIAAA1IhOAAIAADkg");
	this.shape_12.setTransform(368.4,216.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.953)").s().p("Ag+CNQgVgGgNgGIANg1QANAHASAFQATAFAVAAQAVAAALgIQAMgIAAgOQAAgNgLgJQgLgJgZgJQgjgMgVgUQgVgUAAgfQAAgYAMgTQANgTAYgLQAZgMAgAAQAYAAARAFQASAEANAGIgOAzQgJgEgPgFQgPgEgVAAQgTAAgKAIQgLAIABALQgBANANAJQANAIAaAKQAlAOASATQASAUAAAeQAAAYgMAUQgMAUgaAMQgZALgmABQgYAAgWgFg");
	this.shape_13.setTransform(345.6,216.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F78D22").ss(7,2,0,3).p("EA/tAWaIgDPHMhS8AAAMAAAghGMgsbAAAMAAAgp7MBVxAAAMAAAA75g");
	this.shape_14.setTransform(419.2,254.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.498)").s().p("EgTSAlhMAAAghGMgsbAAAMAAAgp7MBVxAAAMAAAA75MAppAABIgDPHg");
	this.shape_15.setTransform(419.2,254.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFD628").ss(7,2,0,3).p("EA/tAWaIgDPHMhS8AAAMAAAghGMgsbAAAMAAAgp7MBVxAAAMAAAA75g");
	this.shape_16.setTransform(419.2,254.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_16},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,11.4,844.5,493.6);


(lib.BtnServenSell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCGQgcgJgTgTQgUgTgKgaQgLgaABgfQAAgvAVggQAVgiAkgRQAkgRAugBQAcABAUAEQAUAEALAGIgOAzQgLgGgQgDQgQgDgXgBQgbABgUAJQgVALgMAUQgMAUAAAeQAAAdALAVQALAVAUAKQATAMAbAAIATgBQAIgCAEgCIAAg6IgsAAIAAgyIBqAAIAACVIgZAGQgPAEgSACQgSADgTAAQglAAgdgKg");
	this.shape.setTransform(237.6,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyCNIg7htIgagvIgXgzIgCAAIACA6IABBAIAABVIg7AAIAAkZIBLAAIA5BnQANAXAMAYQAMAZAKAYIABAAQgDgcgBgdQgCgcAAggIAAhSIA7AAIAAEZg");
	this.shape_1.setTransform(209.2,92.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCNIAAkZIA/AAIAAEZg");
	this.shape_2.setTransform(188.7,92.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCNIAAkZIBAAAIAADkIBvAAIAAA1g");
	this.shape_3.setTransform(172.9,92.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYCNIAAkZIBBAAIAADkIBvAAIAAA1g");
	this.shape_4.setTransform(151.5,92.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhZCNIAAkZICuAAIAAA0IhuAAIAAA6IBnAAIAAA0IhnAAIAABDIBzAAIAAA0g");
	this.shape_5.setTransform(129.2,92.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+CNQgVgGgNgGIANg1QANAHASAFQATAFAVAAQAVAAALgIQAMgIAAgOQAAgNgLgJQgLgJgZgJQgjgMgVgUQgVgUAAgfQAAgYAMgTQANgTAYgLQAZgMAgAAQAYAAARAFQASAEANAGIgOAzQgJgEgPgFQgPgEgVAAQgTAAgKAIQgLAIABALQgBANANAJQANAIAaAKQAlAOASATQASAUAAAeQAAAYgMAUQgMAUgaAMQgZALgmABQgYAAgWgFg");
	this.shape_6.setTransform(106.2,92.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqCOQgEgFgFgRIgLgrQgGgagKgKQgKgKgTAAIgUAAIAABvIg/AAIAAkWQAQgDAVgBQAXgCAaAAQAeABAXAEQAWAGAPAMQAMAKAHAPQAHAPAAATQAAASgIAOQgHAOgLAKQgLAIgNAEIAAACQAPAGAJAOQAJANAFATIAIAhIAIAdQAEANADAFgAgghdIgLABIAABOIAaAAQAXAAANgLQAOgLAAgTQAAgUgNgJQgMgKgVAAIgTABg");
	this.shape_7.setTransform(74.9,92.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKB+QgdgTgQgfQgQghAAgpQAAgqARghQARghAfgUQAegSApgBQAsABAeASQAeAUAPAgQAQAgAAAoQgBAugRAhQgRAhgfASQggASgoAAQgqAAgegUgAgkhSQgPANgJAWQgHAVgBAbQABAcAHAVQAJAVAQAMQAPAMAUAAQAWAAAPgMQAPgNAIgVQAIgWAAgbQAAgagIgVQgHgVgQgNQgPgNgWAAQgVAAgPAMg");
	this.shape_8.setTransform(46.4,92.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkCHQgcgKgTgTQgUgSgKgbQgLgaABggQAAguAVghQAVggAkgSQAkgRAuAAQAcAAAUAEQAUAEALAFIgOA0QgLgFgQgEQgQgEgXABQgbAAgUAKQgVAKgMAUQgMAUAAAeQAAAdALAVQALAUAUAMQATALAbgBIATAAQAIgBAEgCIAAg8IgsAAIAAgwIBqAAIAACTIgZAIQgPADgSADQgSACgTABQglAAgdgKg");
	this.shape_9.setTransform(210.2,38.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyCOIg7huIgagwIgXgzIgCAAIACA7IABBAIAABWIg7AAIAAkbIBLAAIA5BpQANAWAMAYQAMAZAKAYIABAAQgDgcgBgdQgCgcAAggIAAhTIA7AAIAAEbg");
	this.shape_10.setTransform(181.8,38.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfCOIAAkbIA/AAIAAEbg");
	this.shape_11.setTransform(161.3,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnCOIhbkbIBHAAIAiB4IAOAxQAGAZAFAbIABAAIALg0IAPgvIAkh6IBDAAIhfEbg");
	this.shape_12.setTransform(142.1,38.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqCPQgEgHgFgRIgLgrQgGgagKgJQgKgKgTAAIgUAAIAABwIg/AAIAAkWQAQgEAWgBQAVgCAbABQAeAAAXAEQAWAGAPALQAMALAHAOQAHAPAAAUQAAASgIAOQgHAOgLAJQgLAJgNAFIAAABQAOAGAKANQAIAOAGAUIAJAgIAHAdQAEANADAGgAggheIgLACIAABOIAaAAQAXAAANgLQAOgLAAgTQAAgUgNgJQgMgKgVAAIgTAAg");
	this.shape_13.setTransform(117.3,38.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA6IBnAAIAAAzIhnAAIAABEIBzAAIAAA1g");
	this.shape_14.setTransform(93.2,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+CNQgWgGgMgGIANg1QANAHATAFQASAFAVAAQAVAAAMgIQALgIAAgOQAAgNgLgJQgMgJgYgJQgkgMgUgUQgVgUAAgfQAAgYAMgTQANgTAZgLQAXgMAhAAQAXAAATAFQASAEAMAGIgPAzQgIgEgPgFQgPgEgUAAQgVAAgKAIQgJAIgBALQAAANANAJQANAIAaAKQAlAOASATQASAUAAAeQAAAYgMAUQgNAUgZAMQgZALgmABQgZAAgVgFg");
	this.shape_15.setTransform(70.1,38.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F68F16").ss(7,2,0,3).p("AVFpHIAASPMgqJAAAIAAyPg");
	this.shape_16.setTransform(142.1,64.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.498)").s().p("A1EJIIAAyOMAqJAAAIAASOg");
	this.shape_17.setTransform(142.1,64.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFD628").ss(7,2,0,3).p("AVFpHIAASPMgqJAAAIAAyPg");
	this.shape_18.setTransform(142.1,64.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_18},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,2.3,276.8,123.7);


(lib.BtnReheat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggCOIAAjlIhMAAIAAg2IDZAAIAAA2IhOAAIAADlg");
	this.shape.setTransform(168.8,89.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA8COIgWhJIhQAAIgUBJIhCAAIBWkbIBUAAIBXEbgAAdAVIgRg7IgIgbIgGgbIAAAAIgHAbIgGAbIgRA7IA9AAg");
	this.shape_1.setTransform(143.3,89.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAyIhnAAIAABEIBzAAIAAA1g");
	this.shape_2.setTransform(119.1,89.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1COIAAh3IhoAAIAAB3IhBAAIAAkbIBBAAIAABtIBoAAIAAhtIBAAAIAAEbg");
	this.shape_3.setTransform(92.8,89.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAyIhnAAIAABEIBzAAIAAA1g");
	this.shape_4.setTransform(67.7,89.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApCPQgDgHgFgRIgLgrQgGgZgKgKQgKgKgTAAIgTAAIAABwIhAAAIAAkWQAQgDAWgCQAVgBAagBQAfAAAWAGQAXAFAPAMQAMAJAHAPQAHAPAAAUQAAASgIAOQgHAOgLAJQgMAJgMAFIAAABQAOAGAKANQAIAOAGAUIAJAgIAIAdQADANADAGgAggheIgKACIAABOIAZAAQAXAAANgLQANgLAAgTQAAgTgMgKQgMgKgVAAIgTAAg");
	this.shape_5.setTransform(44.6,89.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59011").ss(7,2,0,3).p("APXsbIAAY3I+tAAIAA43g");
	this.shape_6.setTransform(107.6,93.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.498)").s().p("AvWMcIAA42IetAAIAAY2g");
	this.shape_7.setTransform(107.6,93.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFD628").ss(7,2,0,3).p("APXsbIAAY3I+tAAIAA43g");
	this.shape_8.setTransform(107.6,93.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,10.4,203.7,166.1);


(lib.BtnReceiving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AgkCHQgcgKgTgTQgUgSgKgbQgLgaABggQAAguAVghQAVggAkgSQAkgRAuAAQAcAAAUAEQAUAEALAFIgOAzQgLgEgQgEQgQgEgXABQgbgBgUALQgVAJgMAVQgMAUAAAeQAAAdALAVQALAVAUAKQATAMAbgBIATgBQAIAAAEgCIAAg8IgsAAIAAgwIBqAAIAACTIgZAHQgPAEgSADQgSACgTABQglAAgdgKg");
	this.shape.setTransform(233.1,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AAyCOIg7htIgagxIgXgzIgCAAIACA7IABBAIAABWIg7AAIAAkbIBLAAIA5BpQANAWAMAYQAMAZAKAZIABAAQgDgdgBgdQgCgcAAggIAAhTIA7AAIAAEbg");
	this.shape_1.setTransform(204.7,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgfCOIAAkbIA/AAIAAEbg");
	this.shape_2.setTransform(184.2,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AgmCOIhbkbIBGAAIAiB5IAOAwQAHAZAEAbIAAAAIANg0IANgvIAkh6IBFAAIhgEbg");
	this.shape_3.setTransform(165,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AgfCOIAAkbIA/AAIAAEbg");
	this.shape_4.setTransform(145.6,62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAyIhnAAIAABEIBzAAIAAA1g");
	this.shape_5.setTransform(129,62.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AgtB/QghgSgRggQgQggAAgpQABgvAUghQAVgiAigRQAjgSArAAQAYAAATAEQARAEAJAFIgNAzQgJgFgOgDQgOgDgRAAQgaAAgTAKQgUALgMAUQgMAVAAAfQAAArAYAYQAXAZAqAAQAPAAAPgDQAPgCAJgEIAJAyQgJAEgSAEQgTAEgaAAQgwgBghgSg");
	this.shape_6.setTransform(104.9,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAyIhnAAIAABEIBzAAIAAA1g");
	this.shape_7.setTransform(81.6,62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AApCPQgDgHgFgRIgLgrQgGgZgKgKQgKgKgTAAIgTAAIAABwIhAAAIAAkWQAQgEAWgBQAVgBAbAAQAegBAWAGQAXAFAPALQAMAKAHAPQAHAPAAAUQAAASgIAOQgHAOgLAJQgLAJgNAFIAAABQAOAGAKANQAIAOAGAUIAJAgIAIAdQADANADAGgAggheIgKACIAABOIAZAAQAXAAANgLQANgLAAgTQAAgTgMgKQgMgKgVAAIgTAAg");
	this.shape_8.setTransform(58.4,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F78D22").ss(7,2,0,3).p("AVhWdMgrBAAAMAAAgs5MArBAAAg");
	this.shape_9.setTransform(151.6,157.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.498)").s().p("A1gWdMAAAgs5MArBAAAMAAAAs5g");
	this.shape_10.setTransform(151.6,157.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFD628").ss(7,2,0,3).p("AVh2cMAAAAs5MgrBAAAMAAAgs5g");
	this.shape_11.setTransform(151.6,157.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_11},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,10.6,282.5,294.4);


(lib.BtnPrep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyCOIg7htIgagxIgXgyIgCAAIACA6IABBAIAABWIg7AAIAAkbIBLAAIA5BoQANAXAMAYQAMAZAKAZIABAAQgDgcgBgeQgCgcAAggIAAhTIA7AAIAAEbg");
	this.shape.setTransform(374.7,216.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKB+QgegSgQggQgPghAAgpQAAgpARgiQARghAfgUQAegTAqAAQArAAAeATQAeAUAPAhQAQAfAAAoQgBAugQAhQgSAhggASQgeASgpAAQgqAAgegUgAgkhSQgQANgHAWQgJAVAAAbQAAAcAJAVQAIAVAQAMQAPAMAVAAQAVAAAPgNQAPgMAIgVQAIgWAAgbQAAgZgIgWQgIgVgOgNQgQgMgWgBQgVAAgPAMg");
	this.shape_1.setTransform(345.3,216.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCOIAAkbIA/AAIAAEbg");
	this.shape_2.setTransform(324.2,216.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCOIAAjlIhMAAIAAg2IDZAAIAAA2IhOAAIAADlg");
	this.shape_3.setTransform(306.7,216.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8COIgWhJIhQAAIgUBJIhCAAIBWkbIBUAAIBXEbgAAdAVIgRg7IgIgbIgGgbIAAAAIgHAbIgGAbIgRA7IA9AAg");
	this.shape_4.setTransform(281.3,216.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApCPQgDgGgFgSIgLgqQgGgagKgKQgKgKgTAAIgTAAIAABwIhAAAIAAkWQAQgDAWgCQAWgBAZgBQAfAAAWAGQAXAFAPAMQANAJAGAPQAHAQAAATQAAASgHAOQgIAOgLAJQgMAJgMAEIAAACQAOAGAKANQAJAOAFAUIAJAgIAIAdQADANADAGgAgghdIgKABIAABOIAZAAQAXAAANgLQANgLAAgTQAAgTgMgKQgMgKgWAAIgSABg");
	this.shape_5.setTransform(256.3,216.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA8COIgWhJIhQAAIgUBJIhCAAIBWkbIBUAAIBXEbgAAdAVIgRg7IgIgbIgGgbIAAAAIgHAbIgGAbIgRA7IA9AAg");
	this.shape_6.setTransform(228.9,216.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlCPIAAkWQAPgDAVgCQAWgBAdgBQAdABAVAFQAVAGAPALQANALAIARQAIARABAVQAAAVgHAQQgHARgMALQgRAQgXAIQgYAHgbAAIgMgBIgKAAIAABlgAgbhcIgKACIAABTIAJABIAMAAQAZAAAPgMQAOgMAAgWQAAgTgNgLQgNgLgXAAIgQABg");
	this.shape_7.setTransform(203.8,216.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAzIhnAAIAABDIBzAAIAAA1g");
	this.shape_8.setTransform(180.2,216.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApCPQgDgGgFgSIgLgqQgGgagKgKQgKgKgTAAIgTAAIAABwIhAAAIAAkWQAQgDAWgCQAVgBAagBQAfAAAWAGQAXAFAPAMQAMAJAHAPQAHAQAAATQAAASgIAOQgHAOgLAJQgMAJgMAEIAAACQAOAGAKANQAIAOAGAUIAJAgIAIAdQADANADAGgAgghdIgKABIAABOIAZAAQAXAAANgLQANgLAAgTQAAgTgMgKQgMgKgVAAIgTABg");
	this.shape_9.setTransform(157.1,216.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhlCPIAAkWQAPgDAVgCQAWgBAdgBQAdABAVAFQAVAGAPALQANALAIARQAIARABAVQAAAVgHAQQgHARgMALQgRAQgXAIQgYAHgbAAIgMgBIgKAAIAABlgAgbhcIgKACIAABTIAJABIAMAAQAZAAAPgMQAOgMAAgWQAAgTgNgLQgNgLgXAAIgQABg");
	this.shape_10.setTransform(132.1,216.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F68E19").ss(7,2,0,3).p("EAv7AHZIABK2Mhf4AAAMAAAgkdMAm0AAAIAAZlg");
	this.shape_11.setTransform(314.2,132.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.498)").s().p("Egv8ASPMAAAgkdMAm0AAAIAAZlMA5EAACIABK2g");
	this.shape_12.setTransform(314.2,132.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFD628").ss(7,2,0,3).p("EAv7AHZIABK2Mhf4AAAMAAAgkdMAm0AAAIAAZlg");
	this.shape_13.setTransform(314.2,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_13},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,11.9,687.5,240.4);


(lib.BtnHolding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCHQgcgKgTgTQgUgSgKgbQgLgbABgfQAAguAVghQAVggAkgSQAkgRAuAAQAcAAAUAEQAUAEALAFIgOA0QgLgFgQgEQgQgEgXAAQgbAAgUALQgVAJgMAVQgMAUAAAeQAAAdALAVQALAUAUAMQATAKAbABIATgBQAIgBAEgDIAAg6IgsAAIAAgyIBqAAIAACVIgZAHQgPADgSACQgSADgTABQglgBgdgJg");
	this.shape.setTransform(250.6,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyCNIg7htIgagvIgXg0IgCAAIACA7IABBAIAABVIg7AAIAAkZIBLAAIA5BnQANAXAMAYQAMAZAKAYIABAAQgDgbgBgeQgCgcAAggIAAhSIA7AAIAAEZg");
	this.shape_1.setTransform(222.1,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCNIAAkZIA/AAIAAEZg");
	this.shape_2.setTransform(201.7,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheCOIgegCIAAkVQASgDAWgCQAWgBAYAAQAnAAAcAIQAcAHAUAQQAXAQAMAaQANAbAAAkQAAAogNAcQgNAdgVARQgWATghAJQghAJgpAAQgZAAgSgCgAgxhdIgLACIAAC3IAKACIAMAAQAeAAAUgLQAVgKAMgWQAMgWAAghQAAgtgYgWQgXgXgpAAIgSABg");
	this.shape_3.setTransform(181.7,61.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXCNIAAkZIBAAAIAADkIBvAAIAAA1g");
	this.shape_4.setTransform(156.6,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKB/QgdgUgQggQgQggAAgpQAAgqARghQARgiAfgSQAfgUAoAAQAsAAAeAUQAeATAPAgQAQAhAAAnQgBAtgRAiQgRAhgfASQggASgoAAQgqgBgegSgAgkhSQgPANgJAVQgHAWgBAbQABAbAHAWQAJAVAQAMQAPAMAVAAQAVAAAPgMQAPgNAIgVQAIgWAAgbQAAgagIgVQgHgVgQgNQgPgMgWgBQgVAAgPAMg");
	this.shape_5.setTransform(130,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA1CNIAAh2IhpAAIAAB2IhAAAIAAkZIBAAAIAABsIBpAAIAAhsIBAAAIAAEZg");
	this.shape_6.setTransform(100.4,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68E1C").ss(7,2,0,3).p("AbWnnIAAPPMg2sAAAIAAvPg");
	this.shape_7.setTransform(183.2,56.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("A7WHoIAAvPMA2sAAAIAAPPg");
	this.shape_8.setTransform(183.2,56.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFD628").ss(7,2,0,3).p("AbWnnIAAPPMg2sAAAIAAvPg");
	this.shape_9.setTransform(183.2,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,4.5,357.1,104.6);


(lib.BtnCooling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCHQgcgKgTgTQgUgSgKgbQgLgaABggQAAguAVghQAVggAkgSQAkgRAuAAQAcAAAUAEQAUAEALAFIgOAzQgLgEgQgEQgQgEgXABQgbgBgUALQgVAJgMAVQgMAUAAAeQAAAdALAVQALAVAUALQATALAbgBIATgBQAIAAAEgCIAAg8IgsAAIAAgwIBqAAIAACTIgZAIQgPADgSADQgSACgTAAQglABgdgKg");
	this.shape.setTransform(239,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyCOIg7htIgagxIgXgzIgCAAIACA7IABBAIAABWIg7AAIAAkbIBLAAIA5BpQANAWAMAYQAMAZAKAZIABAAQgDgdgBgdQgCgcAAggIAAhTIA7AAIAAEbg");
	this.shape_1.setTransform(210.5,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCOIAAkbIA/AAIAAEbg");
	this.shape_2.setTransform(190.1,50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCOIAAkbIBAAAIAADlIBvAAIAAA2g");
	this.shape_3.setTransform(174.3,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKB+QgdgSgQghQgQggAAgpQAAgpARgiQARghAfgTQAegUApAAQAsAAAeAUQAeATAPAhQAQAfAAAoQgBAugRAhQgRAhgfASQggASgoAAQgqgBgegTgAgkhRQgPAMgJAWQgHAVgBAbQABAbAHAWQAJAVAPAMQAQAMAUAAQAWAAAPgNQAPgMAIgWQAIgVAAgbQAAgagIgVQgHgVgQgNQgPgNgWAAQgVAAgPANg");
	this.shape_4.setTransform(147.7,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKB+QgdgSgRghQgPggAAgpQAAgpARgiQARghAfgTQAegUAqAAQArAAAeAUQAeATAPAhQAQAfAAAoQgBAugQAhQgSAhggASQgeASgpAAQgqgBgegTgAgkhRQgQAMgHAWQgJAVAAAbQAAAbAJAWQAIAVAQAMQAPAMAVAAQAVAAAPgNQAPgMAIgWQAIgVAAgbQAAgagIgVQgIgVgOgNQgQgNgWAAQgVAAgPANg");
	this.shape_5.setTransform(117.6,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtB/QghgSgQggQgRggAAgpQAAgvAVghQAVgiAigRQAjgSArAAQAYAAATAEQARAEAJAFIgNAzQgKgFgNgDQgOgDgRAAQgZAAgUAKQgUALgMAUQgMAVAAAfQAAArAYAYQAXAZAqAAQAPAAAPgDQAOgCAKgEIAJAyQgIAEgTAEQgTAEgaAAQgwgBghgSg");
	this.shape_6.setTransform(90.2,50.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F98A32").ss(7,2,0,3).p("AY+qzIAAVnMgx7AAAIAA1ng");
	this.shape_7.setTransform(170.2,79.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("A49K0IAA1nMAx7AAAIAAVng");
	this.shape_8.setTransform(170.2,79.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFD628").ss(7,2,0,3).p("AY+qzIAAVnMgx7AAAIAA1ng");
	this.shape_9.setTransform(170.2,79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,6.4,326.6,145.5);


(lib.Btncook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqCNIhFh5IgYAdIAABcIhAAAIAAkaIBAAAIAAB+IABAAIAKgQIAJgQIA/heIBPAAIheB5IBjChg");
	this.shape.setTransform(128.2,88.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKB/QgegUgPggQgQggAAgpQAAgqARghQARghAfgTQAegUApAAQAsAAAeAUQAeATAQAgQAPAhAAAnQAAAtgSAiQgRAhggASQgeASgpAAQgqgBgegSgAgkhRQgPAMgIAVQgIAWAAAbQAAAbAIAWQAIAVAPAMQAQAMAUAAQAWAAAPgMQAPgNAIgWQAIgVAAgbQAAgagIgVQgHgVgQgNQgPgMgWgBQgVAAgPANg");
	this.shape_1.setTransform(98.8,88.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKB/QgdgUgRggQgPggAAgpQAAgqARghQARghAfgTQAfgUAoAAQAsAAAeAUQAeATAPAgQAQAhAAAnQgBAtgRAiQgRAhgfASQggASgoAAQgqgBgegSgAgkhRQgPAMgJAVQgHAWgBAbQABAbAHAWQAJAVAQAMQAPAMAVAAQAVAAAPgMQAPgNAIgWQAIgVAAgbQAAgagIgVQgIgVgPgNQgPgMgWgBQgVAAgPANg");
	this.shape_2.setTransform(68.7,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtB/QghgSgQggQgRggAAgpQAAgvAVghQAUgiAjgRQAjgSAqAAQAaAAASAEQASAEAIAFIgNAzQgKgFgNgDQgNgDgSAAQgZAAgUAKQgUALgMAUQgMAVAAAfQAAArAYAYQAWAZArAAQAQAAAOgDQAOgCAKgEIAJAyQgIAEgTAEQgTAEgaAAQgwgBghgSg");
	this.shape_3.setTransform(41.3,88.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F88B29").ss(7,2,0,3).p("AMPsZIAAYzI4dAAIAA4zg");
	this.shape_4.setTransform(86.7,94.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AsOMaIAA4zIYdAAIAAYzg");
	this.shape_5.setTransform(86.7,94.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFD628").ss(7,2,0,3).p("AMPsZIAAYzI4dAAIAA4zg");
	this.shape_6.setTransform(86.7,94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,11.4,163.6,165.8);


(lib.BtnAssembleandPackage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCGQgcgJgTgTQgUgTgKgaQgLgbABgeQAAgvAVghQAVggAkgSQAkgRAugBQAcABAUAEQAUAEALAFIgOA0QgLgGgQgDQgQgEgXAAQgbABgUAJQgVALgMAUQgMAUAAAeQAAAdALAVQALAUAUAMQATAKAbABIATgBQAIgCAEgCIAAg6IgsAAIAAgyIBqAAIAACVIgZAHQgPADgSACQgSADgTABQglAAgdgLg");
	this.shape.setTransform(240.3,110.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyCNIg7htIgagvIgXg0IgCAAIACA7IABBAIAABVIg7AAIAAkZIBLAAIA5BnQANAXAMAYQAMAZAKAYIABAAQgDgcgBgdQgCgcAAggIAAhSIA7AAIAAEZg");
	this.shape_1.setTransform(211.8,110.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCNIAAkZIA/AAIAAEZg");
	this.shape_2.setTransform(191.4,110.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqCNIhFh5IgZAdIAABcIg/AAIAAkZIA/AAIAAB9IACAAIAKgQIAJgQIBAhdIBOAAIheB4IBjChg");
	this.shape_3.setTransform(174,110.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtB/QghgSgQggQgRggAAgpQAAgvAVghQAVgiAigRQAjgSArAAQAYAAATAEQARAEAJAFIgNAzQgKgFgNgDQgOgDgRAAQgZAAgUAKQgUALgMAUQgMAVAAAfQAAArAYAYQAXAZAqAAQAPAAAPgDQAOgCAKgEIAJAyQgIAEgTAEQgTAEgaAAQgwgBghgSg");
	this.shape_4.setTransform(147.3,110.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA8CNIgWhJIhQAAIgUBJIhCAAIBWkZIBUAAIBXEZgAAdAVIgRg7IgIgcIgGgbIAAAAIgHAcIgGAbIgRA7IA9AAg");
	this.shape_5.setTransform(120.7,110.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlCOIAAkWQAPgDAVgBQAWgBAdAAQAdgBAVAGQAVAFAPAMQANALAIARQAIARABAUQAAAVgHASQgHAQgMAMQgRAPgXAHQgYAIgbgBIgMAAIgKgBIAABlgAgbhdIgKACIAABUIAJABIAMABQAZgBAPgMQAOgMAAgVQAAgVgNgKQgNgLgXAAIgQAAg");
	this.shape_6.setTransform(95.6,110.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhbCGQgWgMgKgSQgLgSAAgUQABgcAOgVQAOgSAZgNIAAgBQgJgLgGgOQgGgPAAgPQAAgSAJgRQAJgSATgKQATgLAcgBQAWAAARAIQARAIAKAPQAKAPAAAVQABAVgOASQgNASgdAPIgBACIAZAbIAXAZQAIgOAGgSQAGgRAEgUIA5AAQgGAggLAbQgMAbgSAVIAYAbIAaAcIhLAAIgJgJIgJgLQgOALgTAHQgTAHgZAAQgiAAgWgMgAhDAgQgGAJAAAPQAAAMAFAJQAGAKALAHQAKAFAPABQANgBAKgDQAJgFAGgGQgNgNgQgSIgigmQgJAHgHAJgAgmhgQgGAJAAALQAAAKAFAKQAFAKAJAKQAQgKAHgKQAHgJAAgMQAAgKgFgJQgGgIgNgBQgMABgHAIg");
	this.shape_7.setTransform(60.4,110.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghCOIAAh0IhZinIBJAAIAdBFIALAcIAKAaIAAAAIAKgaIAMgcIAchFIBIAAIhdClIAAB2g");
	this.shape_8.setTransform(239.2,56.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXCOIAAkbIBAAAIAADlIBwAAIAAA2g");
	this.shape_9.setTransform(216.7,56.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLCPIgdgDIAAkVQAJgCANgBIAdgCIAggBQAcAAATAEQAVADAOAJQAQAIAJAOQAKAOAAAUQAAATgLAQQgMAQgYAJIAAABQAZAHAPAQQAQASAAAcQAAATgIAPQgIAPgNAKQgPANgcAHQgaAGgqAAQgXAAgRgBgAgoBgIAKABIAPAAQAOAAAMgEQALgEAJgJQAGgJABgPQAAgOgIgJQgHgJgOgEQgMgEgQAAIgVAAgAgehgIgKABIAABCIAUAAQAZAAANgJQAOgJAAgQQgBgRgLgIQgMgIgVAAIgRAAg");
	this.shape_10.setTransform(193,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABeCOIgFhtIgBg3IgBg8IgBAAIgPA4IgRA1IgiBuIgxAAIgfhtIgNg2QgHgcgFgcIgBAAIgCA7IgDA5IgFBsIg7AAIASkbIBVAAIAcBfIANAxIALAzIAAAAIANgzIAOgxIAehfIBUAAIAPEbg");
	this.shape_11.setTransform(161.9,56.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhZCOIAAkbICuAAIAAA1IhuAAIAAA7IBnAAIAAAyIhnAAIAABEIBzAAIAAA1g");
	this.shape_12.setTransform(133.5,56.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+CNQgVgGgNgGIANg1QANAHATAFQASAFAVAAQAVAAALgIQAMgIAAgOQAAgNgLgJQgMgJgYgJQgjgMgVgUQgVgUgBgfQABgYANgTQANgTAYgLQAXgMAhAAQAYAAASAFQARAEANAGIgOAzQgJgEgPgFQgPgEgVAAQgUAAgJAIQgKAIAAALQgBANANAJQAMAIAbAKQAlAOASATQASAUAAAeQAAAYgMAUQgNAUgZAMQgZALgmABQgYAAgWgFg");
	this.shape_13.setTransform(110.5,56.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+CNQgWgGgMgGIANg1QANAHATAFQASAFAVAAQAVAAAMgIQALgIAAgOQAAgNgLgJQgMgJgYgJQgjgMgVgUQgVgUgBgfQABgYANgTQANgTAYgLQAXgMAhAAQAXAAATAFQASAEAMAGIgPAzQgIgEgPgFQgPgEgUAAQgVAAgKAIQgJAIgBALQAAANANAJQANAIAaAKQAlAOASATQASAUAAAeQAAAYgMAUQgMAUgaAMQgZALgmABQgYAAgWgFg");
	this.shape_14.setTransform(87.8,56.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA8COIgWhJIhQAAIgUBJIhCAAIBWkbIBUAAIBXEbgAAdAVIgRg7IgIgbIgGgbIAAAAIgHAbIgGAbIgRA7IA9AAg");
	this.shape_15.setTransform(62.4,56.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F78D22").ss(7,2,0,3).p("AWhqtIAAVbMgtBAAAIAA1bg");
	this.shape_16.setTransform(151.2,80);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.498)").s().p("A2gKuIAA1bMAtBAAAIAAVbg");
	this.shape_17.setTransform(151.2,80);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFD628").ss(7,2,0,3).p("AWhqtIAAVbMgtBAAAIAA1bg");
	this.shape_18.setTransform(151.2,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_18},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,7.9,295.3,144.2);


(lib.AssemblyandPackbullet7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape.setTransform(272.1,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(260.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(248.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_3.setTransform(237.3,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_4.setTransform(224.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_5.setTransform(207.6,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_6.setTransform(192.8,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_7.setTransform(172.1,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_8.setTransform(160.5,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_9.setTransform(146.5,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_10.setTransform(133.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(120.7,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(109.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_13.setTransform(96.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagJAQQgKASgOAIQgPAJgSAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANAKAJQAMAIAOAAQANAAAJgHQALgHAEgMQAGgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_14.setTransform(81,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgLABgJAHQgIAGgDAKIgCAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgPgBQgHABgHADQgHAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAPAAALAIQAJAIAGANIAAAAQAEgGAEgFIAJgIQAGgFAHgDQAIgCAKAAQALAAALAFQAKAFAIAOQAIAOAAAZIAABUg");
	this.shape_15.setTransform(59.5,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_16.setTransform(39.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_17.setTransform(24.5,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet7, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(260,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_1.setTransform(248.3,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_2.setTransform(234.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_3.setTransform(224.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_4.setTransform(217.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(196.7,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(180.2,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_7.setTransform(168.5,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_8.setTransform(159.9,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(147.4,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(132.2,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_11.setTransform(120.4,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgHAHQgJAGgEAKIgBAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgIADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAKAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_12.setTransform(104.4,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_13.setTransform(84.3,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgHgDg");
	this.shape_14.setTransform(72.4,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_15.setTransform(59.2,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_16.setTransform(42.6,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBcQgXgLgNgXQgNgXAAghQAAgfAOgYQANgXAXgOQAYgNAfAAQASAAAMADIASAGIgHAVQgHgDgLgDQgKgCgMAAQgYAAgRAKQgSAJgJATQgKATAAAZQAAAZAJASQAJASARAKQARAKAYAAQAMAAAMgCQALgCAIgEIAFAVQgHADgOADQgOADgSAAQgcAAgWgMg");
	this.shape_17.setTransform(25.8,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_18.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet6, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape.setTransform(181.2,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_1.setTransform(165,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(153.2,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAJIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJADAIAHQAHAIAGALQAFALAAATIAABWg");
	this.shape_3.setTransform(141.4,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(127,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_5.setTransform(113.5,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiBIIgVhFIgHgWIgGgZIAAAAIgGAZIgHAXIgYBEIgYAAIgriQIAbAAIATBJIAFAXIAGAYIABAAIAGgYIAGgWIAYhKIAVAAIAWBIIAIAYIAFAYIACAAIAEgYIAHgYIAUhIIAaAAIguCQg");
	this.shape_6.setTransform(95.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgQAAgXQABgYAIgQQAJgRAPgKQAOgJATgBQAPABALAGQALAHAGAJIAAAAIAAhXIAaAAIAACvIABATIABASIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgOQgKAHgFAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAKAIANAAQAOAAAKgJQAKgHAEgQIACgFIAAgGIAAgZIAAgFIgCgGQgCgMgLgJQgKgIgPAAQgMgBgKAIg");
	this.shape_7.setTransform(75.7,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_8.setTransform(59.3,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGAKAAQANAAAKgHQAIgHAEgKIAAgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_9.setTransform(43.4,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAxBlIAAhfIhhAAIAABfIgaAAIAAjJIAaAAIAABVIBhAAIAAhVIAaAAIAADJg");
	this.shape_10.setTransform(26.8,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_11.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet5, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape.setTransform(294.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_1.setTransform(278.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_2.setTransform(266.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAHALABIAJgBIAHgBIAAAUIgJACIgOABQgJAAgHgDg");
	this.shape_3.setTransform(257.8,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_4.setTransform(245.3,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_5.setTransform(233.4,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_6.setTransform(224.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_7.setTransform(210.5,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBoIAAicIgBgaIAAgWIAYAAIABAZIAAAAQAJgNAMgHQANgIARAAQASAAANAJQAOAKAIAQQAIARAAAWQAAAagKAQQgIASgPAIQgQAJgRAAQgNAAgMgHQgLgFgIgLIAAAAIAABPgAgYhJQgLAIgEAQIgCAFIAAAFIAAAaIAAAFIABAFQAEANALAJQALAIAOAAQANAAAJgHQALgHAFgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_8.setTransform(194.3,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_9.setTransform(179.3,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_10.setTransform(165,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQAAANAGAGQAIAGAKAAQANAAAJgHQAKgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(149.1,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(138.2,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgKQgDgJABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAHALABIAJgBIAHgBIABAUIgKACIgOABQgJAAgIgDg");
	this.shape_13.setTransform(127.4,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_14.setTransform(112.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_15.setTransform(98.2,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgMQADgOAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAVIgHgDIgKgBQgLAAgGAGQgGAGgDAKQgBAJAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_16.setTransform(86.4,19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_17.setTransform(69.1,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_18.setTransform(54.3,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_19.setTransform(39.8,23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_20.setTransform(25.5,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_21.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet4, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape.setTransform(210.3,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOApAAIAAgDQAAgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgFgSQAJgGAMgDQAMgDANgBQAWABANAIQAMAJAEANQAEAOAAAPIAAA1IABASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQABANAGAGQAIAGAKAAQANAAAKgHQAIgHADgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(195.6,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_2.setTransform(185.2,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIABAZIACAAQAHgNANgHQANgIARAAQASAAAOAJQANAKAIAQQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOAAgMgHQgMgFgGgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANAKAJQAMAIAOAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgJgHgOAAQgNAAgLAJg");
	this.shape_3.setTransform(173.6,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_4.setTransform(158.6,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_5.setTransform(149.2,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgQAAgXQgBgYAKgQQAIgRAPgKQAPgJARgBQAQABALAGQAMAHAEAJIABAAIAAhXIAaAAIAACvIABATIAAASIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgOQgJAHgGAMQgFAMAAAQQAAAPAFANQAFAMAJAGQAJAIAOAAQANAAALgJQALgHAEgQIAAgFIABgGIAAgZIgBgFIAAgGQgDgMgLgJQgJgIgPAAQgNgBgKAIg");
	this.shape_6.setTransform(136.8,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_7.setTransform(114.1,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_8.setTransform(97.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_9.setTransform(75.5,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWBCQgQgJgJgQQgJgSAAgVQAAgWAJgSQAKgQARgLQASgKAXAAQALAAAKACQAKADAFADIgGAUQgEgDgIgBQgIgDgKAAQgRAAgLAIQgLAHgGAMQgGANAAAOQAAARAHANQAHAMALAGQAKAHAPgBQALAAAIgCIANgEIAFATQgGADgKACQgLAEgPAAQgVAAgQgKg");
	this.shape_10.setTransform(61.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABAMAIQAMAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAKgHADgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_11.setTransform(46.9,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_12.setTransform(36.5,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag9BmIAAjHIAVgDIAdgBQASAAAOAFQAOAEAKAIQAIAHAEALQAFALAAANQAAAOgEALQgDAKgJAHQgKALgQAGQgQAGgSAAIgLgBIgKgBIAABRgAgZhQIgKACIAABOIAKABIALABQAXgBANgKQAOgLAAgVQAAgUgNgJQgNgKgUAAIgPAAg");
	this.shape_13.setTransform(25.5,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet3, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape.setTransform(217.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_1.setTransform(204.8,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQgBgGgBgIQgCgHgIgGQgHgGgOAAQgKAAgKADQgJADgJAFIgGgSQAJgGANgDQAMgDANgBQAWABANAIQALAJAFANQAEAOABAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgHAJgLAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAHAGQAIAGAKAAQANAAAKgHQAIgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_2.setTransform(190.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_3.setTransform(179.2,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAHALABIAJgBIAGgBIABAUIgJACIgOABQgJAAgHgDg");
	this.shape_4.setTransform(168.4,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_5.setTransform(148.9,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_6.setTransform(132.3,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_7.setTransform(110.3,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_8.setTransform(93.9,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_9.setTransform(77.6,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_10.setTransform(61.7,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_11.setTransform(50.8,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_12.setTransform(41.1,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA5BlIgWg/IhGAAIgWA/IgbAAIBFjJIAeAAIBFDJgAAeARIgUg5IgGgTIgEgSIAAAAIgFASIgGASIgTA6IA8AAg");
	this.shape_13.setTransform(26.2,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet2, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblyandPackbullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgWIAXAAIACAZIABAAQAIgNAMgHQANgIARAAQARAAAPAJQANAKAIAQQAIARAAAWQAAAagKAQQgIASgQAIQgPAJgQAAQgOAAgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAIgEAQIgBAFIgBAFIAAAaIABAFIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape.setTransform(75.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_1.setTransform(59,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_2.setTransform(48.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnBlIgahpIgIgjIgFgeIAAAAIgGAeIgJAjIgdBpIgbAAIgzjJIAbAAIAYBlIAJAlIAGAhIAAAAIAHghIAKglIAbhlIAaAAIAZBmIAIAjQAEARACARIABAAIAHgiIAJgkIAahlIAbAAIg5DJg");
	this.shape_3.setTransform(29.8,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAnQgQgQAAgXQAAgWAQgQIAJgHIAhgJQAUABAPAPQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_4.setTransform(5.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblyandPackbullet1, new cjs.Rectangle(0,0,600.1,40.1), null);


(lib.AssemblePackcaptiontext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(100.7,55.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_1.setTransform(95,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_2.setTransform(89.1,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA3QgNgHgHgOQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAGQAKAFAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAFQAJAEAKAAQAMAAAIgCQAIgBAGgEIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_3.setTransform(79.9,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdA9IgTg6IgFgTIgFgUIAAAAIgFAUIgGATIgTA6IgVAAIgkh5IAXAAIAQA9IAEATIAFATIAAAAIAFgTIAGgTIAUg9IARAAIATA8IAGAUIAEATIACAAIADgTIAGgUIARg8IAWAAIgnB5g");
	this.shape_4.setTransform(64.5,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXA9QgJgCgHgEIAGgRQAFADAHADQAJADAIgBQALAAAGgEQAFgGAAgHQABgIgGgFQgFgFgLgEQgRgHgIgHQgHgJAAgLQAAgKAFgHQAFgIAJgGQAKgEALAAQAKAAAIACQAHACAFAEIgFAQIgKgGQgHgBgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAIAHQAJAKAAANQgBAQgLAKQgMAJgUABQgLAAgIgCg");
	this.shape_5.setTransform(45,50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgKQAAgWATgKQASgMAjAAIAAgCIgCgLQgCgHgGgFQgFgFgMAAQgJAAgIACQgIADgHAEIgEgPQAHgEALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABAOIgUAAIgBgQIgBAAQgGAIgJAEQgKAGgLAAQgNAAgIgFgAABAAQgLACgHAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIABgDIAAgFIAAgTQgNAAgLAAg");
	this.shape_6.setTransform(33.7,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA9QgJgCgHgEIAGgRQAFADAHADQAJADAIgBQALAAAFgEQAGgGAAgHQAAgIgFgFQgFgFgLgEQgQgHgIgHQgIgJAAgLQAAgKAFgHQAFgIAJgGQAJgEAMAAQAKAAAHACQAIACAFAEIgGAQIgJgGQgHgBgIAAQgJgBgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAJgVABQgKAAgIgCg");
	this.shape_7.setTransform(17.8,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYBZIgpg6IgLAMIAAAuIgWAAIAAixIAWAAIAABvIAAAAIAGgHIAFgGIAjgpIAaAAIguAwIA1BIg");
	this.shape_8.setTransform(8,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA9QgIgCgGgEIAFgRQAFADAIADQAHADAJgBQALAAAGgEQAFgGAAgHQABgIgGgFQgFgFgLgEQgQgHgJgHQgHgJAAgLQAAgKAFgHQAFgIAJgGQAJgEANAAQAJAAAIACQAHACAFAEIgGAQIgJgGQgHgBgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAJgUABQgKAAgKgCg");
	this.shape_9.setTransform(-3.9,50.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(-11.8,48.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_11.setTransform(-18.1,50.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_12.setTransform(-31.1,48);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdA3QgOgHgHgOQgIgOAAgTQAAgUAIgOQAIgOAOgHQANgIAQAAQARAAANAIQAOAIAHANQAHAOAAATQAAAWgJAOQgJAOgOAGQgNAHgOAAQgQAAgNgIgAgUgmQgIAGgEALQgEALAAAKQABANAEALQAFALAIAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAEgLAAgNQAAgKgDgKQgDgLgJgHQgHgHgOAAQgLgBgJAIg");
	this.shape_13.setTransform(-41,50.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_14.setTransform(-51.3,50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgGgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgHAAgHgCg");
	this.shape_15.setTransform(-60.3,49.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_16.setTransform(-71.3,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeA3QgMgHgIgOQgIgOAAgTQABgUAHgOQAIgOANgHQAOgIAQAAQARAAAOAIQAMAIAIANQAHAOAAATQAAAWgJAOQgJAOgOAGQgNAHgOAAQgQAAgOgIgAgUgmQgIAGgEALQgEALAAAKQABANAEALQAFALAIAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAFgLgBgNQAAgKgDgKQgEgLgHgHQgJgHgNAAQgMgBgIAIg");
	this.shape_17.setTransform(-85.1,50.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA3QgOgHgHgOQgIgOAAgTQAAgRAIgPQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFADIgFARQgEgDgHgCQgGgBgJAAQgOAAgIAGQgKAGgFAKQgFALAAALQABAOAFALQAFAJAKAGQAIAFAMAAQAKAAAGgBIALgFIAEARQgEADgJACQgJACgNAAQgRAAgNgIg");
	this.shape_18.setTransform(-97.5,50.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_19.setTransform(510.8,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_20.setTransform(501.1,18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcA6QgKgFgGgLQgHgMABgVIAAhGIAVAAIAABCQAAASAHAKQAFAKAPABQAHAAAFgDQAGgDAFgFQADgEACgFIACgGIAAgGIAAhJIAXAAIAABXIAAASIAAAPIgTAAIgBgUIgBAAQgCAFgGAGQgFAFgIADQgIAEgKAAIgCAAQgIAAgJgEg");
	this.shape_21.setTransform(489.4,18.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_22.setTransform(478.3,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXATgKQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgFgPQAIgEAKgDQAKgDAMAAQARAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABAOIgUAAIgBgQIgBAAQgGAIgJAEQgKAGgLAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgEIAAgTQgNAAgLABg");
	this.shape_23.setTransform(467.9,18.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_24.setTransform(458.7,18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_25.setTransform(447.7,18.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag4BXIAAiDIAAgVIgBgSIAUAAIABAVIAAAAQAIgLAKgGQALgGANgBQAPAAAMAIQAMAHAGAPQAGAOABARQgBAXgHANQgIAOgMAIQgNAGgOAAQgLAAgKgEQgKgFgFgJIgBAAIAABCgAgUg9QgJAHgDANIgBAFIgBAEIAAAVIABAEIAAAFQADAKAJAIQAJAGAMAAQAKAAAJgFQAIgHAFgKQADgJAAgPQAAgLgDgKQgFgLgHgGQgJgGgLAAQgLAAgJAHg");
	this.shape_26.setTransform(434.7,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_27.setTransform(416.8,18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_28.setTransform(400.1,18.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_29.setTransform(389.6,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfBSQgMgHgGgOQgHgOAAgSQAAgVAHgNQAIgOAMgIQANgIAOAAQANAAAKAFQAJAFADAJIABAAIAAhJIAWAAIAACRIAAARIABAPIgTAAIgBgWIgBAAQgFALgLAGQgKAHgOAAQgPAAgMgIgAgRgMQgIAGgFAKQgEALAAANQAAAMAEAKQAEALAIAFQAIAHALAAQALAAAJgIQAJgGADgNIABgFIAAgEIAAgVIAAgFIgBgEQgCgLgJgGQgIgIgMAAQgLAAgIAGg");
	this.shape_30.setTransform(372.8,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_31.setTransform(359.2,18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXATgKQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgFgPQAIgEAKgDQAKgDAMAAQARAAALAIQAJAGAFAMQADALAAAMIAAAsIABAQIABAOIgTAAIgCgQIgBAAQgGAIgJAEQgKAGgLAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgEIAAgTQgNAAgLABg");
	this.shape_32.setTransform(345.9,18.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_33.setTransform(327.9,18.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeA3QgMgHgIgOQgIgOAAgTQAAgTAIgPQAIgOANgHQAOgIAQAAQARAAANAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgOgIgAgUgnQgIAHgEALQgEALAAALQABAMAEALQAFALAIAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAFgLAAgNQAAgKgEgLQgEgKgHgHQgJgIgMABQgNAAgIAGg");
	this.shape_34.setTransform(314.1,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_35.setTransform(304.3,16.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAGgBIABAQIgJACIgLABQgIAAgGgCg");
	this.shape_36.setTransform(297.2,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgIAAgJADQgIACgGAEIgGgPQAIgEAKgDQALgDALAAQARAAALAIQAKAGADAMQAFALAAAMIAAAsIAAAQIABAOIgTAAIgCgQIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIAAgEIABgEIAAgTQgNAAgLABg");
	this.shape_37.setTransform(286.8,18.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_38.setTransform(274.1,18.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_39.setTransform(264.2,16.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_40.setTransform(250.9,18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgIAAgJADQgIACgGAEIgGgPQAIgEAKgDQALgDALAAQARAAALAIQAKAGADAMQAFALAAAMIAAAsIAAAQIABAOIgTAAIgCgQIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAALAGAFQAGAFAJAAQAKAAAIgHQAHgGADgHIAAgEIABgEIAAgTQgNAAgLABg");
	this.shape_41.setTransform(234.1,18.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAHAAIAGgBIABAQIgIACIgMABQgHAAgHgCg");
	this.shape_42.setTransform(224.2,17.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_43.setTransform(213.1,18.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgdA3QgOgHgHgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQARAAANAIQAOAIAHANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgNgIgAgUgnQgIAHgEALQgEALAAALQABAMAEALQAFALAIAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAEgLAAgNQAAgKgDgLQgDgKgJgHQgHgIgOABQgLAAgJAGg");
	this.shape_44.setTransform(199.3,18.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSA3QgOgHgHgOQgIgOAAgTQAAgRAIgPQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFADIgFAQQgEgCgHgCQgGgBgJAAQgOAAgIAGQgKAGgFAKQgFALAAAMQABAOAFAKQAFAJAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEACgJADQgJACgNAAQgRAAgNgIg");
	this.shape_45.setTransform(187,18.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_46.setTransform(172.5,18.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_47.setTransform(161.5,18.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_48.setTransform(148.3,15.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAHAAIAGgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_49.setTransform(137.1,17.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdA3QgNgHgIgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQASAAANAIQANAIAHANQAHAPAAASQAAAWgJAOQgJAOgOAGQgNAHgOAAQgRAAgMgIgAgUgnQgIAHgEALQgEALAAALQABAMAEALQAEALAJAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAFgLgBgNQABgKgEgLQgEgKgHgHQgJgIgNABQgMAAgIAGg");
	this.shape_50.setTransform(126.2,18.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeA3QgMgHgIgOQgIgOAAgTQAAgTAIgPQAIgOANgHQAOgIAQAAQARAAAOAIQAMAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgOgIgAgUgnQgIAHgEALQgEALAAALQABAMAEALQAFALAIAFQAIAHAKgBQAKABAJgHQAIgFAFgLQAFgLAAgNQAAgKgEgLQgEgKgHgHQgJgIgMABQgNAAgIAGg");
	this.shape_51.setTransform(107.1,18.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAGgBIAAAQIgIACIgLABQgIAAgGgCg");
	this.shape_52.setTransform(96,17.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_53.setTransform(79.7,18.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_54.setTransform(66.5,18.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKA9Iguh5IAXAAIAYBEIAFAPIAEAPIAAAAIAFgPIAGgPIAXhEIAXAAIgvB5g");
	this.shape_55.setTransform(54.3,18.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_56.setTransform(45.3,16.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFBYQgLAAgKgDQgLgCgIgFIAFgRQAGAEAJADQAKADALAAQAKAAAJgEQAJgFAFgJQAFgJAAgPIAAgOIAAAAQgGAJgJAFQgKAGgNAAQgPAAgMgIQgMgHgGgOQgHgMABgRQAAgUAHgPQAIgOANgHQAMgIAOAAQAKAAAHADQAIADAEAFQAFAFADAFIABAAIABgSIASAAIgBAOIAAATIAABFQAAAVgEANQgEAOgJAIQgJAIgLADQgLADgJAAIgDAAgAgXg5QgKAMgBAVQABAMAEAKQADAJAJAGQAHAFALABQALgBAIgFQAIgGAEgKIACgGIAAgGIAAgVIAAgGIgCgFQgCgJgJgHQgHgGgNgBQgOABgKAMg");
	this.shape_57.setTransform(35,21.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_58.setTransform(16.8,18.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTBVQgKgGgHgMIgBAAIgBAUIgTAAIABgOIAAgRIAAiRIAWAAIAABMIABAAQAFgKALgGQAKgGAOAAQAPAAALAHQAMAIAGAOQAGANAAASQABAWgJAOQgHAPgNAHQgMAHgOAAIgCAAQgKAAgKgFgAgUgLQgJAHgEAMIAAAEIgBAFIAAAWIABAEIAAAEQAEALAIAHQAJAHAMAAQAQAAAKgMQAKgNAAgVQAAgMgFgKQgEgKgHgGQgJgGgLAAQgLAAgJAHg");
	this.shape_59.setTransform(3.8,16.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfBSQgMgHgGgOQgHgOAAgSQAAgVAHgNQAIgOAMgIQANgIAOAAQANAAAJAFQAKAFADAJIABAAIAAhJIAWAAIAACRIAAARIABAPIgTAAIgBgWIgBAAQgFALgLAGQgKAHgOAAQgPAAgMgIgAgRgMQgIAGgFAKQgEALAAANQAAAMAEAKQAEALAIAFQAIAHALAAQALAAAJgIQAJgGADgNIABgFIAAgEIAAgVIAAgFIgBgEQgCgLgJgGQgIgIgMAAQgLAAgIAGg");
	this.shape_60.setTransform(-16.4,16.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_61.setTransform(-26,15.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgcA6QgJgFgHgLQgGgMAAgVIAAhGIAVAAIAABCQAAASAGAKQAGAKAPABQAHAAAGgDQAGgDAEgFQADgEADgFIABgGIABgGIAAhJIAVAAIAABXIABASIAAAPIgTAAIgCgUIAAAAQgDAFgFAGQgFAFgIADQgIAEgKAAIgCAAQgIAAgJgEg");
	this.shape_62.setTransform(-35.9,18.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdA3QgNgHgIgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQARAAAOAIQANAIAHANQAHAPAAASQAAAWgJAOQgJAOgOAGQgNAHgOAAQgRAAgMgIgAgUgnQgIAHgEALQgEALAAALQABAMAEALQAFALAIAFQAIAHAKgBQALABAIgHQAIgFAFgLQAFgLgBgNQABgKgEgLQgEgKgHgHQgJgIgNABQgMAAgIAGg");
	this.shape_63.setTransform(-49.7,18.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_64.setTransform(-63.5,15.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgYA9QgJgDgGgDIAGgRQAFAEAHACQAJACAIAAQALABAFgGQAGgFAAgHQAAgIgFgFQgFgFgLgEQgQgHgIgHQgIgJAAgLQAAgJAFgIQAFgIAJgGQAJgEAMAAQAKAAAHACQAIACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAJgVABQgKAAgJgCg");
	this.shape_65.setTransform(-75.4,18.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_66.setTransform(-92.6,18.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgeA3QgNgHgHgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQASAAAMAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgIgAgUgnQgIAHgEALQgEALAAALQAAAMAFALQAEALAJAFQAIAHAKgBQALABAIgHQAIgFAFgLQAEgLABgNQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_67.setTransform(-106.4,18.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_68.setTransform(-116.2,16.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_69.setTransform(-123.4,17.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXATgKQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgFgPQAIgEAKgDQAKgDAMAAQARAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABAOIgUAAIgBgQIgBAAQgGAIgJAEQgKAGgLAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgEIAAgTQgNAAgLABg");
	this.shape_70.setTransform(-133.8,18.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_71.setTransform(-142.9,18.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_72.setTransform(-153.9,18.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgfBSQgMgHgGgOQgHgOAAgSQAAgVAHgNQAIgOAMgIQANgIAOAAQANAAAJAFQAKAFADAJIABAAIAAhJIAWAAIAACRIAAARIABAPIgTAAIgBgWIgBAAQgFALgLAGQgKAHgOAAQgPAAgMgIgAgRgMQgIAGgFAKQgEALAAANQAAAMAEAKQAEALAIAFQAIAHALAAQALAAAJgIQAJgGADgNIABgFIAAgEIAAgVIAAgFIgBgEQgCgLgJgGQgIgIgMAAQgLAAgIAGg");
	this.shape_73.setTransform(-167.6,16.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_74.setTransform(-177.2,16.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYA9QgJgDgGgDIAGgRQAFAEAHACQAIACAJAAQALABAFgGQAGgFAAgHQAAgIgFgFQgFgFgLgEQgRgHgHgHQgIgJAAgLQAAgJAFgIQAFgIAJgGQAJgEAMAAQAKAAAHACQAIACAFAEIgGAPIgJgEQgGgCgJAAQgJgBgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAJgVABQgKAAgJgCg");
	this.shape_75.setTransform(-185.1,18.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_76.setTransform(-197,18.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeA3QgNgHgHgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQASAAAMAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgIgAgUgnQgIAHgEALQgEALAAALQAAAMAFALQAEALAJAFQAIAHAKgBQALABAIgHQAIgFAFgLQAEgLABgNQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_77.setTransform(-210.8,18.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSA3QgOgHgHgOQgIgOAAgTQAAgRAIgPQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFADIgFAQQgEgCgHgCQgGgBgJAAQgOAAgIAGQgKAGgFAKQgFALAAAMQABAOAFAKQAFAJAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEACgJADQgJACgNAAQgRAAgNgIg");
	this.shape_78.setTransform(-223.2,18.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgfBSQgLgHgHgOQgHgOAAgSQAAgVAHgNQAIgOAMgIQANgIAOAAQANAAAKAFQAIAFAEAJIABAAIAAhJIAWAAIAACRIABARIAAAPIgTAAIgBgWIgBAAQgFALgLAGQgKAHgOAAQgPAAgMgIgAgRgMQgIAGgFAKQgEALAAANQAAAMAEAKQAEALAIAFQAIAHALAAQALAAAJgIQAJgGADgNIABgFIAAgEIAAgVIAAgFIgBgEQgDgLgIgGQgIgIgMAAQgLAAgIAGg");
	this.shape_79.setTransform(-241.6,16.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_80.setTransform(-255.3,18.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgIAAgJADQgIACgGAEIgGgPQAIgEAKgDQALgDALAAQARAAALAIQAKAGADAMQAFALAAAMIAAAsIAAAQIABAOIgTAAIgCgQIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAALAGAFQAGAFAIAAQALAAAIgHQAHgGADgHIAAgEIABgEIAAgTQgNAAgLABg");
	this.shape_81.setTransform(-268.5,18.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNANIAFgUIAEgVIAYgCIgHAXIgJAVIgHAQIgQABIAGgSg");
	this.shape_82.setTransform(-282.4,24.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXA9QgJgDgHgDIAGgRQAFAEAHACQAJACAIAAQALABAFgGQAGgFAAgHQAAgIgFgFQgFgFgLgEQgRgHgIgHQgHgJAAgLQAAgJAFgIQAFgIAJgGQAJgEAMAAQAKAAAHACQAIACAFAEIgFAPIgKgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAJgVABQgJAAgJgCg");
	this.shape_83.setTransform(-289.7,18.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Ag4BXIAAiDIAAgVIgBgSIAUAAIABAVIABAAQAGgLALgGQALgGANgBQAPAAAMAIQALAHAHAPQAGAOAAARQAAAXgHANQgIAOgMAIQgNAGgOAAQgLAAgKgEQgKgFgFgJIgBAAIAABCgAgUg9QgJAHgDANIgBAFIgBAEIAAAVIABAEIAAAFQADAKAJAIQAJAGAMAAQALAAAIgFQAIgHAEgKQAEgJABgPQgBgLgEgKQgEgLgHgGQgJgGgLAAQgLAAgJAHg");
	this.shape_84.setTransform(-301.4,21.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_85.setTransform(-315.1,18.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAGgBIAAAQIgIACIgLABQgIAAgGgCg");
	this.shape_86.setTransform(-325.6,17.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYA9QgIgDgGgDIAFgRQAFAEAIACQAHACAJAAQALABAGgGQAFgFAAgHQABgIgGgFQgFgFgLgEQgQgHgJgHQgHgJAAgLQAAgJAFgIQAFgIAJgGQAJgEANAAQAJAAAIACQAHACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAJgUABQgKAAgKgCg");
	this.shape_87.setTransform(-334.6,18.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_88.setTransform(-351.1,18.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXA9QgKgDgGgDIAGgRQAFAEAHACQAJACAIAAQALABAGgGQAFgFAAgHQABgIgGgFQgFgFgLgEQgQgHgJgHQgHgJAAgLQAAgJAFgIQAFgIAJgGQAKgEALAAQAKAAAIACQAHACAFAEIgFAPIgKgEQgGgCgJAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAIAKAAANQgBAQgMAKQgLAJgUABQgLAAgIgCg");
	this.shape_89.setTransform(-362.3,18.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_90.setTransform(-373.5,18.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_91.setTransform(-386.7,15.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAHAAIAGgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_92.setTransform(-397.9,17.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_93.setTransform(-414.3,18.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_94.setTransform(-424.1,16.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_95.setTransform(-439.3,18.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_96.setTransform(-449.7,18.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZA3QgNgIgHgNQgHgOAAgSQAAgSAHgOQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAJAKAEQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEAQIgQAGQgKACgPAAQgRAAgOgIgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMAAQgKAAgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_97.setTransform(-460.7,18.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgSA3QgOgHgHgOQgIgOAAgTQAAgRAIgPQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFADIgFAQQgEgCgHgCQgGgBgJAAQgOAAgIAGQgKAGgFAKQgFALAAAMQABAOAFAKQAFAJAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEACgJADQgJACgNAAQgRAAgNgIg");
	this.shape_98.setTransform(-472.4,18.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_99.setTransform(-485.1,18.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgeA3QgNgHgHgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQASAAAMAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgOgIgAgUgnQgIAHgEALQgEALAAALQAAAMAFALQAEALAJAFQAIAHAKgBQALABAIgHQAIgFAFgLQAFgLAAgNQAAgKgEgLQgDgKgJgHQgIgIgMABQgNAAgIAGg");
	this.shape_100.setTransform(-498.9,18.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgSA3QgOgHgHgOQgIgOAAgTQAAgRAIgPQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFADIgFAQQgEgCgHgCQgGgBgJAAQgOAAgIAGQgKAGgFAKQgFALAAAMQABAOAFAKQAFAJAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEACgJADQgJACgNAAQgRAAgNgIg");
	this.shape_101.setTransform(-511.3,18.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_102.setTransform(572.2,-13.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWASgLQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgJAAgIADQgIACgGAEIgGgOQAIgFAKgDQALgDAKAAQATAAAKAIQAJAGAEAMQAEALABAMIAAAsIAAAQIABANIgTAAIgDgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgGADgHIAAgEIABgDIAAgUQgMAAgMABg");
	this.shape_103.setTransform(561.1,-13.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_104.setTransform(552.4,-16.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgcA6QgKgFgGgLQgGgMgBgVIAAhGIAXAAIAABCQgBASAGAKQAGAKAQABQAGAAAFgDQAGgDAEgFQAEgEADgFIABgGIAAgGIAAhJIAWAAIAABXIABASIABAPIgUAAIgCgUIAAAAQgDAFgFAGQgFAFgIADQgIAEgKAAIgCAAQgIAAgJgEg");
	this.shape_105.setTransform(542.6,-13.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgSA3QgOgIgHgOQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_106.setTransform(530.2,-13.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_107.setTransform(521.5,-15.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgGgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgHAAgHgCg");
	this.shape_108.setTransform(514.4,-14.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_109.setTransform(506.9,-13.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgFgOQAIgFAKgDQAKgDAMAAQARAAALAIQAJAGAFAMQADALAAAMIAAAsIABAQIABANIgTAAIgCgPIgBAAQgGAIgJAEQgJAGgMAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgNAAgLABg");
	this.shape_110.setTransform(495.8,-13.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag4BWIAAiBIAAgWIgBgSIAUAAIABAVIAAAAQAIgMAKgFQALgHANAAQAPAAAMAIQAMAHAGAOQAGAOABASQgBAWgHAOQgIAPgMAGQgNAIgOgBQgLAAgKgEQgKgFgFgJIgBAAIAABBgAgUg9QgJAIgDAMIgBAFIgBAEIAAAVIABAEIAAAEQADALAJAIQAJAGAMAAQAKAAAJgFQAIgHAEgJQAEgKAAgPQAAgMgEgJQgEgLgHgGQgJgGgLAAQgLAAgJAHg");
	this.shape_111.setTransform(483.3,-10.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgCIgJAAQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_112.setTransform(467.5,-16.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgeA4QgMgIgIgOQgIgOAAgTQAAgTAIgPQAIgOANgHQAOgIAQAAQARAAANAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgOgHgAgUgnQgIAHgEALQgEALAAALQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKAAgOQAAgKgEgLQgEgKgHgHQgJgIgMABQgNAAgIAGg");
	this.shape_113.setTransform(456.3,-13.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgXA8QgJgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgRgFgIgIQgHgJAAgLQAAgKAFgHQAFgIAJgGQAKgEALAAQAKAAAHACQAIACAFAEIgFAPIgKgEQgGgCgJAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAIAKAAANQgBAQgLAKQgMAKgUAAQgLAAgIgDg");
	this.shape_114.setTransform(439.2,-13.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_115.setTransform(431.3,-15.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFBYQgLAAgLgDQgKgCgIgFIAGgRQAFAEAKADQAIADAMAAQAKAAAJgEQAJgFAFgJQAFgJAAgPIAAgOIgBAAQgEAJgLAFQgJAGgNAAQgPAAgLgIQgMgHgHgOQgGgMgBgRQABgUAIgPQAHgOAMgHQANgIAOAAQAJAAAIADQAHADAFAFQAFAFACAFIABAAIACgSIATAAIgBAOIAAATIAABFQAAAVgFANQgEAOgJAIQgJAIgMADQgKADgJAAIgDAAgAgXg5QgKAMAAAVQgBAMAFAKQAEAJAHAGQAJAFALABQAKgBAIgFQAIgGAEgKIABgGIAAgGIAAgVIAAgGIgBgFQgDgJgHgHQgIgGgMgBQgPABgKAMg");
	this.shape_116.setTransform(415.7,-10.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_117.setTransform(402.1,-13.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_118.setTransform(392.3,-15.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_119.setTransform(382.4,-16.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAGgGQAFgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgIAJgGQAJgEANAAQAJAAAIACQAHACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAKgUAAQgKAAgKgDg");
	this.shape_120.setTransform(370.5,-13.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWASgLQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgIAAgJADQgIACgGAEIgGgOQAIgFAKgDQALgDALAAQARAAALAIQAKAGADAMQAFALAAAMIAAAsIAAAQIABANIgTAAIgCgPIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIAAgEIABgDIAAgUQgNAAgLABg");
	this.shape_121.setTransform(359.2,-13.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAdA8IgSg5IgHgTIgEgUIAAAAIgFAVIgGASIgUA5IgTAAIglh4IAWAAIAQA9IAGATIADATIABAAIAFgTIAGgSIAUg+IASAAIASA8IAGAUIAFATIAAAAIAEgTIAFgTIASg9IAWAAIgoB4g");
	this.shape_122.setTransform(344.4,-13.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgeBTQgNgIgGgOQgHgOAAgSQAAgUAIgOQAHgPAMgHQAMgIAPAAQANAAAJAFQAJAGAFAIIAAAAIAAhJIAWAAIAACRIAAARIABAOIgUAAIgBgVIAAAAQgFALgLAGQgLAHgNAAQgPAAgLgHgAgRgMQgIAGgEAKQgFAKAAAOQAAAMAFAKQADALAIAFQAIAHALAAQALAAAJgIQAJgHADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgNgBQgKAAgIAGg");
	this.shape_123.setTransform(327.7,-16);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_124.setTransform(314,-13.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAKgDAKAAQATAAAJAIQALAGAEAMQADALAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgFAIgKAEQgKAGgLAAQgMAAgIgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQAKAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgNAAgLABg");
	this.shape_125.setTransform(300.8,-13.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AApBUIAAhPIhRAAIAABPIgWAAIAAinIAWAAIAABGIBRAAIAAhGIAWAAIAACng");
	this.shape_126.setTransform(286.9,-15.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_127.setTransform(271,-8.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgSA3QgOgIgHgOQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_128.setTransform(262.8,-13.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_129.setTransform(252.8,-14.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_130.setTransform(242.5,-13.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_131.setTransform(228.1,-7.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_132.setTransform(218.8,-13.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQASAAAMAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAEALAJAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_133.setTransform(205,-13.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_134.setTransform(195.2,-15.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_135.setTransform(188,-14.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgFgOQAIgFAKgDQAKgDAMAAQARAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgBgPIgBAAQgGAIgJAEQgJAGgMAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgNAAgLABg");
	this.shape_136.setTransform(177.6,-13.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAFgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_137.setTransform(167.7,-14.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_138.setTransform(160.2,-13.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgeA4QgMgIgIgOQgIgOAAgTQAAgTAIgPQAIgOANgHQAOgIAQAAQARAAANAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgQAAgOgHgAgUgnQgIAHgEALQgEALAAALQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKAAgOQAAgKgEgLQgEgKgHgHQgJgIgMABQgNAAgIAGg");
	this.shape_139.setTransform(148.5,-13.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("Ag4BWIAAiBIAAgWIgBgSIAUAAIABAVIAAAAQAIgMAKgFQALgHANAAQAPAAAMAIQALAHAHAOQAGAOABASQAAAWgIAOQgIAPgMAGQgNAIgOgBQgMAAgJgEQgKgFgFgJIgBAAIAABBgAgUg9QgJAIgDAMIgBAFIgBAEIAAAVIABAEIAAAEQADALAJAIQAJAGAMAAQAKAAAJgFQAIgHAFgJQADgKAAgPQAAgMgDgJQgEgLgIgGQgJgGgLAAQgLAAgJAHg");
	this.shape_140.setTransform(134.9,-10.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgHgIQgIgJAAgLQAAgKAFgHQAFgIAJgGQAJgEANAAQAJAAAIACQAHACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAQAFAIAHQAHAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_141.setTransform(122.5,-13.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_142.setTransform(110.5,-13.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgBgPIgBAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgIAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQAMAAAHgHQAHgGADgHIABgEIAAgDIAAgUQgMAAgMABg");
	this.shape_143.setTransform(97.3,-13.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_144.setTransform(88.1,-13.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_145.setTransform(79.1,-14.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_146.setTransform(66.3,-13.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQABgTAHgPQAIgOANgHQAOgIAQAAQASAAAMAIQANAIAIANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAEALAJAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_147.setTransform(54.7,-13.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgCIgJAAQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_148.setTransform(44.8,-16.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_149.setTransform(31,-14.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_150.setTransform(24,-15.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAYBZIgpg6IgLAMIAAAuIgWAAIAAixIAWAAIAABvIAAAAIAGgHIAFgGIAjgpIAaAAIguAwIA1BIg");
	this.shape_151.setTransform(10.9,-16.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgSA3QgOgIgHgOQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_152.setTransform(-1.5,-13.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgBgPIgBAAQgGAIgJAEQgKAGgLAAQgNAAgIgFgAABABQgLABgHAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgNAAgLABg");
	this.shape_153.setTransform(-13.5,-13.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ag4BWIAAiBIAAgWIgBgSIAUAAIABAVIABAAQAGgMALgFQALgHANAAQAPAAAMAIQALAHAHAOQAGAOAAASQAAAWgHAOQgIAPgMAGQgNAIgOgBQgLAAgKgEQgKgFgFgJIgBAAIAABBgAgUg9QgJAIgDAMIgBAFIgBAEIAAAVIABAEIAAAEQADALAJAIQAJAGAMAAQALAAAIgFQAIgHAEgJQAEgKABgPQgBgMgEgJQgEgLgHgGQgJgGgLAAQgLAAgJAHg");
	this.shape_154.setTransform(-26,-10.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_155.setTransform(-41.6,-7.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIABgCIgBgCIgBgEIgthuIAYAAIAaBHIAFANIACALIABAAIAEgLIADgNIAZhHIAXAAIghBWIgPAiQgGAPgFAKQgHAJgIAHQgIAHgHADIgMAEg");
	this.shape_156.setTransform(-49.9,-10.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgBgPIgBAAQgGAIgJAEQgKAGgLAAQgNAAgIgFgAABABQgLABgHAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgNAAgLABg");
	this.shape_157.setTransform(-62.1,-13.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_158.setTransform(-70.8,-16.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAVIAAAAQAIgMAKgFQALgHAOAAQAOAAAMAIQAMAHAGAOQAHAOgBASQABAWgIAOQgIAPgNAGQgMAIgOgBQgMAAgJgEQgKgFgGgJIAAAAIAABBgAgUg9QgJAIgEAMIgBAFIAAAEIAAAVIAAAEIABAEQADALAJAIQAJAGAMAAQAKAAAJgFQAIgHAFgJQADgKAAgPQAAgMgDgJQgFgLgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_159.setTransform(-80.5,-10.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYA8QgJgCgGgDIAGgRQAFAEAHACQAJACAIABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgIgIQgIgJAAgLQAAgKAFgHQAFgIAJgGQAJgEAMAAQAKAAAHACQAIACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgKAAgJgDg");
	this.shape_160.setTransform(-92.9,-13.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_161.setTransform(-100.8,-15.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgfBTQgLgIgHgOQgHgOAAgSQAAgUAHgOQAIgPAMgHQAMgIAPAAQANAAAJAFQAJAGAFAIIAAAAIAAhJIAWAAIAACRIAAARIABAOIgUAAIgBgVIAAAAQgFALgLAGQgLAHgNAAQgPAAgMgHgAgRgMQgIAGgEAKQgFAKAAAOQAAAMAFAKQADALAIAFQAIAHALAAQALAAAJgIQAJgHADgMIABgFIAAgEIAAgWIAAgEIgBgFQgCgJgJgIQgIgGgNgBQgKAAgIAGg");
	this.shape_162.setTransform(-111.2,-16);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_163.setTransform(-130.1,-13.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQASAAANAIQANAIAHANQAHAPAAASQAAAWgJAOQgJAOgOAGQgNAHgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAEALAJAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOABQgLAAgJAGg");
	this.shape_164.setTransform(-143.9,-13.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAHAAIAGgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_165.setTransform(-160.3,-14.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_166.setTransform(-167.3,-15.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_167.setTransform(-181.8,-13.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgSA3QgOgIgHgOQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAFAMABQAKAAAGgCIALgFIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_168.setTransform(-193.5,-13.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAIAAQAMAAAHgHQAHgGADgHIABgEIAAgDIAAgUQgMAAgMABg");
	this.shape_169.setTransform(-205.6,-13.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_170.setTransform(-214.2,-16.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAVIAAAAQAIgMAKgFQAKgHAPAAQAOAAAMAIQAMAHAGAOQAHAOAAASQAAAWgIAOQgIAPgNAGQgMAIgOgBQgMAAgJgEQgKgFgGgJIAAAAIAABBgAgUg9QgJAIgEAMIgBAFIAAAEIAAAVIAAAEIABAEQADALAJAIQAJAGAMAAQAKAAAJgFQAIgHAFgJQADgKAAgPQAAgMgDgJQgFgLgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_171.setTransform(-223.9,-10.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_172.setTransform(-239.6,-7.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgIAJgGQAJgEANAAQAJAAAIACQAHACAFAEIgGAPIgJgEQgHgCgIAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAKgUAAQgKAAgKgDg");
	this.shape_173.setTransform(-246.9,-13.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIAAgCIAAgCIgBgEIgthuIAYAAIAbBHIAEANIADALIAAAAIADgLIAFgNIAXhHIAYAAIghBWIgOAiQgHAPgGAKQgGAJgHAHQgJAHgHADIgLAEg");
	this.shape_174.setTransform(-257.7,-10.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWASgLQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgJAAgIADQgIACgGAEIgGgOQAIgFAKgDQALgDALAAQARAAALAIQAJAGAEAMQAFALAAAMIAAAsIAAAQIABANIgTAAIgDgPIAAAAQgGAIgJAEQgJAGgMAAQgMAAgJgFgAABABQgLABgIAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQAKAAAIgHQAHgGADgHIAAgEIABgDIAAgUQgMAAgMABg");
	this.shape_175.setTransform(-270,-13.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_176.setTransform(-279.1,-13.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AABBNQgFgDgDgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAHAAIAGgBIABAQIgIACIgMABQgIAAgGgCg");
	this.shape_177.setTransform(-288.1,-14.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_178.setTransform(-304.5,-13.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQASAAAMAIQAOAIAHANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAFALAIAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_179.setTransform(-318.3,-13.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgFgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAIAAIAEgBIABAQIgHACIgMABQgHAAgHgCg");
	this.shape_180.setTransform(-334.7,-14.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_181.setTransform(-341.7,-15.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAJQADAKgBAIIAAAGIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgIgGgHQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAIgBAIIA/AAIAAAAg");
	this.shape_182.setTransform(-356.1,-13.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgFBYQgLAAgKgDQgLgCgIgFIAFgRQAHAEAJADQAIADAMAAQAKAAAJgEQAJgFAFgJQAFgJAAgPIAAgOIgBAAQgFAJgJAFQgKAGgNAAQgPAAgMgIQgMgHgGgOQgHgMAAgRQABgUAHgPQAIgOAMgHQANgIAOAAQAJAAAIADQAHADAFAFQAFAFADAFIABAAIABgSIATAAIgBAOIAAATIAABFQgBAVgEANQgEAOgJAIQgJAIgLADQgLADgJAAIgDAAgAgXg5QgKAMAAAVQgBAMAFAKQADAJAJAGQAHAFAMABQAKgBAIgFQAIgGAEgKIABgGIAAgGIAAgVIAAgGIgBgFQgCgJgJgHQgHgGgMgBQgPABgKAMg");
	this.shape_183.setTransform(-369.8,-10.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_184.setTransform(-383.4,-13.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWASgLQATgLAiAAIAAgDIgBgMQgCgGgGgFQgGgFgLAAQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQATAAAJAIQALAGADAMQAEALAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgGAIgJAEQgJAGgMAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgGADgHIAAgEIABgDIAAgUQgMAAgMABg");
	this.shape_185.setTransform(-396.6,-13.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_186.setTransform(-405.8,-13.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_187.setTransform(-414,-13.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAKgDAKAAQATAAAJAIQALAGAEAMQADALAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgFAIgKAEQgKAGgLAAQgMAAgIgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQAKAAAIgHQAHgGADgHIABgEIAAgDIAAgUQgMAAgMABg");
	this.shape_188.setTransform(-425.1,-13.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_189.setTransform(-438.9,-7.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgeBTQgMgIgHgOQgHgOAAgSQAAgUAIgOQAHgPAMgHQAMgIAPAAQANAAAKAFQAIAGAEAIIABAAIAAhJIAWAAIAACRIABARIAAAOIgTAAIgCgVIAAAAQgFALgLAGQgLAHgNAAQgPAAgLgHgAgRgMQgIAGgFAKQgEAKAAAOQAAAMAEAKQAEALAIAFQAIAHALAAQALAAAJgIQAJgHADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgMgBQgLAAgIAGg");
	this.shape_190.setTransform(-448.7,-16);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQASAAAMAIQAOAIAHANQAHAPAAASQAAAWgJAOQgJAOgNAGQgOAHgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAFALAIAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNABQgMAAgJAGg");
	this.shape_191.setTransform(-462.3,-13.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgPQAIgOAOgHQANgIAQAAQASAAANAIQANAIAHANQAHAPAAASQAAAWgJAOQgJAOgOAGQgNAHgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEALAAALQAAANAFAKQAEALAJAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOABQgLAAgJAGg");
	this.shape_192.setTransform(-476,-13.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgCIgJAAQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_193.setTransform(-485.9,-16.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAVIABAAQAHgMAKgFQALgHAOAAQAOAAAMAIQAMAHAGAOQAHAOgBASQABAWgIAOQgIAPgNAGQgMAIgOgBQgLAAgKgEQgKgFgGgJIAAAAIAABBgAgUg9QgJAIgEAMIgBAFIAAAEIAAAVIAAAEIABAEQADALAJAIQAJAGAMAAQAKAAAJgFQAIgHAEgJQAFgKAAgPQAAgMgFgJQgDgLgJgGQgHgGgMAAQgLAAgJAHg");
	this.shape_194.setTransform(-502.2,-10.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgHAAgJQAAgWATgLQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgFgMAAQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQASAAAKAIQAKAGAFAMQADALAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgFAIgKAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAIAAQAMAAAHgHQAHgGADgHIABgEIAAgDIAAgUQgMAAgMABg");
	this.shape_195.setTransform(-516.1,-13.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_196.setTransform(-525.2,-13.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAdA8IgTg5IgGgTIgEgUIAAAAIgFAVIgGASIgUA5IgUAAIgkh4IAXAAIAPA9IAFATIAEATIABAAIAFgTIAGgSIAUg+IARAAIATA8IAGAUIAEATIABAAIAFgTIAEgTIASg9IAWAAIgoB4g");
	this.shape_197.setTransform(-539.1,-13.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgXA8QgKgCgFgDIAFgRQAFAEAIACQAIACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgIAJgGQAKgEAMAAQAJAAAIACQAHACAFAEIgFAPIgKgEQgGgCgJAAQgJgBgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAKgUAAQgLAAgIgDg");
	this.shape_198.setTransform(-558.6,-13.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgHAAgJQAAgWASgLQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgFgFgMAAQgJAAgIADQgIACgGAEIgGgOQAIgFAKgDQAKgDAMAAQARAAALAIQAKAGADAMQAFALAAAMIAAAsIAAAQIABANIgTAAIgCgPIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgKABgIAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgGADgHIAAgEIABgDIAAgUQgNAAgLABg");
	this.shape_199.setTransform(-569.9,-13.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAQADgFAEgEIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_200.setTransform(514.4,-48.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_201.setTransform(501.9,-45.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgcA6QgJgFgHgLQgHgMAAgVIAAhGIAXAAIAABCQgBASAHAKQAGAKAPABQAGAAAFgDQAHgDADgFQAFgEABgFIACgGIAAgGIAAhJIAXAAIAABXIAAASIABAPIgUAAIgBgUIgBAAQgCAFgGAGQgFAFgIADQgIAEgKAAIgCAAQgIAAgJgEg");
	this.shape_202.setTransform(489.3,-45.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgXA8QgJgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgRgFgIgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAKgEALAAQAKAAAHACQAIACAFADIgFAQIgKgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAIAKAAANQgBAQgLAKQgMAKgUAAQgLAAgIgDg");
	this.shape_203.setTransform(477.5,-45.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgXA8QgJgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgIgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAJgEAMAAQAKAAAHACQAIACAFADIgFAQIgKgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgJAAgJgDg");
	this.shape_204.setTransform(462.3,-45.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgFBYQgLAAgLgDQgLgCgHgFIAGgRQAFAEAKADQAIADAMAAQAKAAAJgEQAJgFAFgJQAFgJAAgPIAAgOIgBAAQgEAJgLAFQgJAGgNAAQgPAAgLgIQgMgHgHgOQgGgMgBgRQABgUAHgPQAIgOAMgHQANgIAOAAQAJAAAIADQAHADAFAFQAFAFACAFIABAAIACgSIATAAIgBAOIAAATIAABFQAAAVgFANQgEAOgJAIQgJAIgMADQgKADgJAAIgDAAgAgXg5QgKAMAAAVQgBAMAFAKQAEAJAHAGQAJAFALABQAKgBAIgFQAIgGAEgKIABgGIAAgGIAAgVIAAgGIgBgFQgDgJgHgHQgIgGgMgBQgPABgKAMg");
	this.shape_205.setTransform(449.9,-42.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_206.setTransform(436.3,-45.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_207.setTransform(426.5,-47.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_208.setTransform(416.6,-48.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQAEAGAJAAIAHAAIAGgBIABAQIgIACIgMABQgHAAgHgCg");
	this.shape_209.setTransform(405.4,-47);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgdA4QgNgIgIgOQgIgOAAgTQABgTAHgOQAIgPANgIQAOgHAQAAQARAAAOAIQAMAIAIAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKgBgOQAAgKgDgLQgEgKgHgHQgJgIgNAAQgMABgIAGg");
	this.shape_210.setTransform(389.2,-45.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgfBTQgLgIgHgOQgHgOAAgSQAAgUAHgOQAIgOAMgIQANgIAOAAQANAAAKAFQAIAGAEAIIABAAIAAhJIAWAAIAACSIABAQIAAAOIgTAAIgBgVIgBAAQgFALgLAHQgKAGgOAAQgPAAgMgHgAgRgMQgIAGgFAKQgEAKAAAOQAAAMAEAKQAEALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgMgBQgLAAgIAGg");
	this.shape_211.setTransform(374.9,-48);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIAAgCIAAgCIgBgEIgthuIAYAAIAaBHIAFANIACALIABAAIAEgLIADgNIAZhHIAXAAIghBWIgPAiQgGAPgFAKQgHAJgIAHQgIAHgHADIgMAEg");
	this.shape_212.setTransform(357,-42.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_213.setTransform(348.2,-48.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_214.setTransform(338.2,-45.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQARAAANAIQAOAIAHAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOAAQgLABgJAGg");
	this.shape_215.setTransform(324.4,-45.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_216.setTransform(307.1,-45.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_217.setTransform(286.3,-45.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQASAAAMAIQAOAIAHAOQAHAOAAASQAAAWgJAOQgJAOgNAHQgOAGgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQAAANAFAKQAFALAIAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNAAQgMABgJAGg");
	this.shape_218.setTransform(269,-45.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_219.setTransform(256.6,-45.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgXA8QgKgCgGgDIAGgRQAFAEAIACQAIACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAKgEALAAQAKAAAIACQAHACAFADIgFAQIgKgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQgBAQgMAKQgLAKgUAAQgLAAgIgDg");
	this.shape_220.setTransform(240.7,-45.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AABBNQgEgDgFgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAGgBIAAAQIgIACIgLABQgIAAgGgCg");
	this.shape_221.setTransform(231.5,-47);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_222.setTransform(220.4,-45.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_223.setTransform(207.3,-45.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_224.setTransform(190.6,-45.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAdBZIAAhGQABgJgDgJQgDgHgGgFQgGgEgKgBQgKABgIAGQgIAGgDAIIgBAFIAAAGIAABJIgWAAIAAixIAWAAIAABMIAAAAIAHgJIAJgHIAKgEIALgCQAGAAAIACQAHADAGAFQAHAGAEAKQAEAJAAAQIAABIg");
	this.shape_225.setTransform(173.2,-48.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgYA8QgJgCgGgDIAGgRQAFAEAHACQAJACAIABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgIgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEAMAAQAKAAAHACQAIACAFADIgGAQIgJgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgKAAgJgDg");
	this.shape_226.setTransform(161.3,-45.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_227.setTransform(153.4,-47.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_228.setTransform(147.6,-48.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgTBVQgKgGgHgMIgBAAIAAAUIgTAAIAAgOIABgRIAAiRIAVAAIAABMIAAAAQAHgKAKgGQAKgGAOAAQAPAAAMAHQALAIAGAOQAHANAAASQgBAWgHAOQgIAPgNAHQgLAHgOAAIgDAAQgKAAgKgFgAgUgLQgJAHgEAMIgBAEIAAAFIAAAWIAAAEIABAEQAEALAIAHQAJAHAMAAQARAAAJgMQAJgNAAgVQAAgMgDgKQgFgKgIgGQgHgGgMAAQgLAAgJAHg");
	this.shape_229.setTransform(137.9,-48);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXASgKQATgLAiAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQATAAAJAHQALAIAEAKQADAMAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgFADgIIAAgEIABgDIAAgVQgMABgMABg");
	this.shape_230.setTransform(124,-45.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AABBNQgEgDgEgEQgGgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAUgGIAAAjIAgAAIAAARIggAAIAABAQAAALAEAGQADAGAKAAIAIAAIAEgBIACAQIgIACIgMABQgIAAgGgCg");
	this.shape_231.setTransform(114.1,-47);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgYA8QgIgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgIgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEAMAAQAKAAAHACQAIACAFADIgFAQIgKgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgJAAgKgDg");
	this.shape_232.setTransform(105.1,-45.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_233.setTransform(93.9,-45.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_234.setTransform(78.9,-45.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXASgKQATgLAiAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgJAAgIADQgIACgHAEIgEgOQAHgFALgDQAJgDALAAQATAAAJAHQALAIAEAKQADAMAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgGAIgJAEQgKAGgLAAQgNAAgHgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQALAAAHgHQAHgFADgIIAAgEIABgDIAAgVQgMABgMABg");
	this.shape_235.setTransform(67.8,-45.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_236.setTransform(59.1,-48.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_237.setTransform(53.2,-47.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("ABBA+IAAhEQAAgRgGgKQgHgKgNAAQgJAAgHAGQgHAGgDAIIgBAFIgBAGIAABKIgUAAIAAhIQAAgOgHgKQgGgJgNAAQgGAAgGADQgFADgEAFQgEAFgCAGIgBAFIAAAGIAABIIgWAAIAAhYIAAgRIgBgPIATAAIABATIABAAQADgGAFgFQAGgFAHgDQAHgDAKAAQAMAAAJAHQAIAGAEALIABAAIAGgJQADgEAEgCQAGgFAGgCQAGgCAJAAQAIAAAJAEQAKAFAGALQAHAMAAAUIAABHg");
	this.shape_238.setTransform(39.9,-45.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_239.setTransform(26.5,-47.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgYA8QgJgCgGgDIAGgRQAFAEAHACQAJACAIABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgIgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEAMAAQAKAAAHACQAIACAFADIgFAQIgKgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAQAFAHAHQAJAKgBANQABAQgMAKQgMAKgVAAQgKAAgJgDg");
	this.shape_240.setTransform(18.7,-45.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgeBTQgNgIgGgOQgHgOAAgSQAAgUAIgOQAHgOAMgIQAMgIAPAAQANAAAJAFQAJAGAFAIIAAAAIAAhJIAWAAIAACSIAAAQIABAOIgUAAIgBgVIAAAAQgFALgLAHQgLAGgNAAQgPAAgLgHgAgRgMQgIAGgEAKQgFAKAAAOQAAAMAFAKQADALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgNgBQgKAAgIAGg");
	this.shape_241.setTransform(1,-48);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAeA+IAAhFQAAgKgDgIQgCgIgGgFQgHgEgKgBQgKABgIAGQgIAGgDAKIgBAFIAAAFIAABIIgWAAIAAhYIAAgRIgBgPIATAAIACAUIAAAAQADgGAGgFQAFgFAIgDQAIgEAJAAQAHAAAHACQAHADAHAFQAGAGAFAKQAEAKAAAQIAABHg");
	this.shape_242.setTransform(-12.7,-45.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgeA6QgJgFgEgIQgEgIAAgIQAAgXATgKQASgLAjAAIAAgDIgCgMQgCgGgGgFQgFgEgMgBQgIAAgJADQgIACgHAEIgEgOQAHgFALgDQAKgDAKAAQATAAAJAHQALAIAEAKQADAMAAAMIAAAsIABAQIABANIgUAAIgCgPIAAAAQgFAIgKAEQgKAGgLAAQgMAAgIgFgAABABQgKABgJAHQgHAFAAAMQAAAKAGAGQAGAFAJAAQAKAAAIgHQAHgFADgIIABgEIAAgDIAAgVQgMABgMABg");
	this.shape_243.setTransform(-25.9,-45.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_244.setTransform(-39.8,-39.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgQgFgJgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAIACQAHACAFADIgGAQIgJgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAJAHQAHAKABANQAAAQgNAKQgLAKgUAAQgKAAgKgDg");
	this.shape_245.setTransform(-47.1,-45.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_246.setTransform(-58.3,-45.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_247.setTransform(-70,-45.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_248.setTransform(-78.7,-47.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgKA8Iguh3IAXAAIAYBCIAFAQIAEAQIAAAAIAFgQIAGgQIAXhCIAXAAIgvB3g");
	this.shape_249.setTransform(-87.6,-45.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_250.setTransform(-97.1,-45.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_251.setTransform(-108.1,-45.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgHgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAHACQAIACAFADIgGAQIgJgEQgGgCgJgBQgJAAgFAFQgFAFAAAHQAAAHAGAFQAFAEALAFQAPAFAIAHQAIAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_252.setTransform(-119.3,-45.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIAAgCIAAgCIgBgEIgthuIAYAAIAbBHIAEANIADALIAAAAIADgLIAFgNIAXhHIAYAAIghBWIgOAiQgHAPgGAKQgGAJgHAHQgJAHgHADIgLAEg");
	this.shape_253.setTransform(-135.4,-42.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_254.setTransform(-144.8,-45.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_255.setTransform(-155.8,-45.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgKA8Iguh3IAXAAIAYBCIAFAQIAEAQIAAAAIAFgQIAGgQIAXhCIAXAAIgvB3g");
	this.shape_256.setTransform(-168,-45.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgKBUIAAh4IAVAAIAAB4gAgJg8QgEgEAAgGQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQABAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_257.setTransform(-177,-47.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgKBZIAAixIAVAAIAACxg");
	this.shape_258.setTransform(-182.9,-48.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_259.setTransform(-192.1,-45.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgfBTQgMgIgGgOQgHgOAAgSQAAgUAHgOQAIgOAMgIQANgIAOAAQANAAAJAFQAJAGAFAIIAAAAIAAhJIAWAAIAACSIAAAQIABAOIgUAAIAAgVIgBAAQgFALgLAHQgKAGgOAAQgPAAgMgHgAgRgMQgIAGgFAKQgEAKAAAOQAAAMAEAKQAEALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgCgJgJgIQgIgGgNgBQgKAAgIAGg");
	this.shape_260.setTransform(-205.8,-48);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgeBTQgMgIgHgOQgHgOAAgSQAAgUAIgOQAHgOAMgIQAMgIAPAAQANAAAKAFQAIAGAEAIIABAAIAAhJIAWAAIAACSIABAQIAAAOIgUAAIgBgVIAAAAQgFALgLAHQgLAGgNAAQgPAAgLgHgAgRgMQgIAGgEAKQgFAKAAAOQAAAMAFAKQADALAIAFQAIAGALABQALgBAJgGQAJgIADgMIABgFIAAgEIAAgWIAAgEIgBgFQgDgJgHgIQgJgGgNgBQgKAAgIAGg");
	this.shape_261.setTransform(-225.2,-48);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgeA4QgNgIgHgOQgIgOAAgTQABgTAHgOQAIgPANgIQAOgHAQAAQASAAAMAIQANAIAIAOQAHAOAAASQAAAWgJAOQgJAOgNAHQgOAGgOAAQgRAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQAAANAFAKQAEALAJAFQAIAHAKAAQALAAAIgHQAIgFAFgLQAEgKABgOQgBgKgDgLQgDgKgJgHQgHgIgNAAQgMABgJAGg");
	this.shape_262.setTransform(-238.7,-45.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQARAAANAIQAOAIAHAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOAAQgLABgJAGg");
	this.shape_263.setTransform(-252.5,-45.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgWBaIAAhnIgRAAIAAgRIARAAIAAgFQAAgNADgMQAEgLAHgHQAHgGAGgDQAIgCAIAAIAKABIAJACIgEARIgFgBIgJgBQgJAAgFAEQgFAGgCAHQgBAIAAAKIAAAGIAcAAIAAARIgcAAIAABng");
	this.shape_264.setTransform(-262.3,-48.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_265.setTransform(-274.8,-39.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgQgFgIgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAIACQAHACAFADIgGAQIgJgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAQAFAIAHQAHAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_266.setTransform(-282.1,-45.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_267.setTransform(-293.3,-45.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_268.setTransform(-303,-45.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgeA4QgMgIgIgOQgIgOAAgTQABgTAHgOQAIgPANgIQAOgHAQAAQARAAAOAIQAMAIAIAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgOgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAFgKgBgOQAAgKgDgLQgEgKgHgHQgJgIgNAAQgMABgIAGg");
	this.shape_269.setTransform(-314.6,-45.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgEgFgCgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQAEAGAJAAIAHAAIAGgBIABAQIgJACIgLABQgHAAgHgCg");
	this.shape_270.setTransform(-325.7,-47);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgYA8QgIgCgGgDIAFgRQAFAEAIACQAHACAJABQALAAAFgGQAGgEAAgIQAAgIgFgFQgFgFgLgFQgRgFgHgIQgIgJAAgLQAAgKAFgHQAFgJAJgFQAJgEANAAQAJAAAIACQAHACAFADIgGAQIgJgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAQAFAIAHQAHAKAAANQAAAQgMAKQgLAKgVAAQgJAAgKgDg");
	this.shape_271.setTransform(-334.7,-45.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgxBFIAJgDIAKgHQAFgEAFgGQAFgGAEgJIABgDIAAgCIAAgCIgBgEIgthuIAYAAIAbBHIAEANIADALIAAAAIADgLIAFgNIAXhHIAYAAIghBWIgOAiQgHAPgGAKQgGAJgHAHQgJAHgHADIgLAEg");
	this.shape_272.setTransform(-350.9,-42.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_273.setTransform(-360.2,-45.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_274.setTransform(-371.2,-45.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgSA3QgOgHgHgPQgIgNAAgSQAAgTAIgOQAIgPAPgHQAOgJATAAQAKAAAIACQAIACAFACIgFARQgEgCgHgBQgGgCgJAAQgOgBgIAHQgKAGgFAKQgFAKAAANQABAOAFAJQAFAKAKAGQAIAGAMAAQAKAAAGgDIALgEIAEARQgEADgJABQgJADgNAAQgRAAgNgIg");
	this.shape_275.setTransform(-383,-45.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgdA4QgOgIgHgOQgIgOAAgTQAAgTAIgOQAIgPAOgIQANgHAQAAQARAAANAIQAOAIAHAOQAHAOAAASQAAAWgJAOQgJAOgOAHQgNAGgOAAQgQAAgNgHgAgUgnQgIAHgEALQgEAKAAAMQABANAEAKQAFALAIAFQAIAHAKAAQAKAAAJgHQAIgFAFgLQAEgKAAgOQAAgKgDgLQgDgKgJgHQgHgIgOAAQgLABgJAGg");
	this.shape_276.setTransform(-395.6,-45.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_277.setTransform(-405.9,-45.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgFBYQgLAAgLgDQgKgCgIgFIAFgRQAGAEAKADQAJADALAAQAKAAAJgEQAJgFAFgJQAFgJAAgPIAAgOIgBAAQgFAJgJAFQgKAGgNAAQgPAAgMgIQgLgHgHgOQgHgMAAgRQABgUAHgPQAIgOAMgHQANgIAOAAQAKAAAHADQAHADAFAFQAFAFACAFIACAAIABgSIATAAIgBAOIAAATIAABFQAAAVgFANQgEAOgJAIQgJAIgMADQgKADgJAAIgDAAgAgXg5QgKAMAAAVQgBAMAFAKQAEAJAHAGQAJAFALABQAKgBAIgFQAIgGAEgKIABgGIAAgGIAAgVIAAgGIgBgFQgDgJgHgHQgIgGgMgBQgPABgKAMg");
	this.shape_278.setTransform(-418,-42.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgNANIAFgVIAEgUIAYgCIgHAWIgJAWIgHAQIgQABIAGgSg");
	this.shape_279.setTransform(-432.8,-39.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgXA8QgJgCgHgDIAGgRQAFAEAHACQAJACAIABQALAAAGgGQAFgEAAgIQABgIgGgFQgFgFgLgFQgRgFgIgIQgHgJAAgLQAAgKAFgHQAFgJAJgFQAKgEALAAQAKAAAHACQAIACAFADIgFAQIgKgEQgHgCgIgBQgJAAgFAFQgFAFAAAHQAAAHAFAFQAGAEALAFQAPAFAIAHQAJAKAAANQgBAQgLAKQgMAKgUAAQgLAAgIgDg");
	this.shape_280.setTransform(-440.1,-45.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_281.setTransform(-448.5,-45.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_282.setTransform(-459.5,-45.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgcA+IAAhTIgBgUIAAgRIATAAIAAAYIACAAQAEgNAIgHQAJgHALAAIADAAIADABIAAAVIgDgBIgEAAQgMAAgIAIQgGAHgDANIAAAFIgBAFIAABAg");
	this.shape_283.setTransform(-469.2,-45.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgZA4QgNgJgHgNQgHgNAAgTQAAgRAHgPQAGgPANgIQANgJARAAQAOAAAKAFQAKAGAFAJQAGAJACAKQADAJgBAJIAAAFIAAAEIhUAAQAAAPAGAJQAFAKAKADQAJAFAKAAQAMAAAIgCQAIgCAGgDIAEARIgQAEQgKADgPAAQgRAAgOgHgAAggLQAAgHgCgIQgDgJgGgGQgHgFgMgBQgKABgHAFQgIAGgDAIQgEAJgBAHIA/AAIAAAAg");
	this.shape_284.setTransform(-480.2,-45.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AABBNQgFgDgEgEQgFgFgBgIQgCgIAAgKIAAhBIgTAAIAAgRIATAAIAAgdIAVgGIAAAjIAfAAIAAARIgfAAIAABAQgBALAEAGQADAGAKAAIAHAAIAFgBIABAQIgIACIgLABQgIAAgGgCg");
	this.shape_285.setTransform(-490.7,-47);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgfA6QgIgFgEgIQgEgIAAgIQAAgXASgKQAUgLAhAAIAAgDIgBgMQgCgGgGgFQgGgEgLgBQgIAAgJADQgIACgGAEIgGgOQAIgFAKgDQALgDALAAQARAAALAHQAKAIADAKQAFAMAAAMIAAAsIAAAQIABANIgTAAIgCgPIgBAAQgFAIgKAEQgJAGgMAAQgMAAgJgFgAABABQgLABgHAHQgIAFAAAMQAAAKAGAGQAGAFAIAAQALAAAIgHQAHgFADgIIAAgEIABgDIAAgVQgNABgLABg");
	this.shape_286.setTransform(-501.1,-45.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgWBNQgTgKgLgTQgLgTAAgcQABgZALgUQAKgUAUgLQAUgLAZAAQAPAAALADQAKACAEADIgFARQgHgDgIgCQgJgCgKAAQgUAAgOAJQgPAIgHAPQgJAQAAAVQAAAVAIAPQAHAPAPAIQANAIAUAAQALAAAJgBQAJgCAHgEIAEASQgFADgMACQgMADgOAAQgYAAgSgKg");
	this.shape_287.setTransform(-514,-47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssemblePackcaptiontext, new cjs.Rectangle(-580.3,-65.1,1160.7,130.2), null);


(lib.assembleandpackagebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DM72_00_bg_kitchen_food_potato_salad_label();
	this.instance.parent = this;
	this.instance.setTransform(635,127,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EheeAxLMAAAhiVMC89AAAMAAABiVg");
	this.shape.setTransform(604.7,314.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.assembleandpackagebg, new cjs.Rectangle(0,0,1209.3,629.4), null);


(lib.AssembleandPackHeading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBnQgPgDgKgFIAJgiQAHAEAMADQALADANABQAQAAAKgKQALgJAAgUIAAgKIAAAAQgHAKgKAEQgKAFgMABQgSgBgOgJQgOgJgIgQQgIgPAAgVQAAgYAJgSQAJgRAPgJQAPgKASAAQAOAAAKAHQAKAFAGAJIAAAAIACgSIAnAAIgBARIAAAbIAABRQAAAVgFARQgFARgMALQgMALgQADQgPAFgQAAQgPAAgNgEgAgSg8QgJAKAAAVQAAAKADAKQAEAIAHAEQAGAGAJAAQAJAAAGgGQAHgDACgJIABgGIABgGIAAgWIgBgEIAAgEQgDgJgGgFQgGgGgKAAQgMAAgIALg");
	this.shape.setTransform(-15.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_1.setTransform(-32.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBqIAAiTIAtAAIAACTgAgRhBQgGgHAAgJQAAgLAGgGQAHgHAKAAQALAAAHAHQAGAGAAALQAAAJgGAHQgHAGgLAAQgKAAgHgGg");
	this.shape_2.setTransform(-45.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASBrIgjg9IgLAPIAAAuIguAAIAAjVIAuAAIAACAIAAAAIAGgJIAFgJIAdgrIA3AAIg0A6IA8BYg");
	this.shape_3.setTransform(-56.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBDQgSgJgJgRQgKgRAAgWQAAgVAKgSQAJgRATgLQATgLAaAAIATACIAQAEIgHAiIgKgDQgHgBgIgBQgTABgJALQgLALAAASQAAANAGAJQAFAKAIAEQAKAEALAAIAOAAIAMgEIAFAiQgGADgLACQgLABgNAAQgXAAgRgJg");
	this.shape_4.setTransform(-72.3,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_5.setTransform(-87.6,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhIBmIAAjHQALgBAPgBQAPgCAVAAQAVAAAOAEQAQAEAKAIQAKAIAGAMQAFAMAAAPQABAPgFANQgFALgJAIQgMALgRAGQgRAEgSAAIgJAAIgIgBIAABJgAgThBIgIABIAAA7IAIABIAIAAQASAAAKgJQAKgIAAgPQAAgOgJgJQgJgHgRgBIgLACg");
	this.shape_6.setTransform(-103.3,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsBjQgOgJgIgRQgJgRAAgXQAAgZAJgQQAJgRAPgKQAPgJARAAQANAAALAFQAKAEAEAIIABAAIAAhQIAuAAIAACoIAAAZIABATIgpAAIgCgVIAAAAQgHAMgMAGQgNAGgNAAQgSAAgOgJgAgOgDQgHAEgFAKQgDAJAAAMQAAATAJAKQAIALANAAQAKAAAIgGQAHgGACgKIABgFIAAgFIAAgTIAAgFIgBgDQgBgKgIgFQgGgHgMAAQgIAAgHAGg");
	this.shape_7.setTransform(-128,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZBLIAAhRQAAgOgGgIQgFgJgMAAQgJAAgFAFQgGAGgDAGIgBAFIAAAHIAABTIguAAIAAhjIAAgaIgBgVIAoAAIACAUIAAAAQAEgEAGgGQAGgGAJgDQAIgEAMAAQAPAAAMAGQAMAIAHAOQAGAOAAAVIAABWg");
	this.shape_8.setTransform(-145.5,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsBGQgLgGgFgKQgGgLAAgMQAAgSALgNQAKgMAUgFQATgHAZABIAAgCQAAgEgCgFQgCgEgGgDQgGgDgKAAQgLAAgLADQgLADgHAFIgJgdQAIgFAPgEQAOgFAUAAQAYAAAOAJQAOAIAGAPQAGAOAAARIAAAzIABAUIABAQIgpAAIgDgQIgBAAQgHAKgLAEQgJAEgOAAQgPABgKgHgAAAAGQgKACgFAFQgGAFAAAJQAAAJAFAEQAFAEAIABQAIAAAGgFQAGgFADgHIABgEIAAgEIAAgQQgNAAgIACg");
	this.shape_9.setTransform(-162.5,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag+BEIAKgDIAKgFQAFgDAFgFQAGgEADgGIACgEIAAgDIAAgDIgCgEIg1iGIAyAAIAWBJIAEAOIACANIABAAIAEgOIADgNIAShJIAxAAIgiBhQgLAcgIATQgJATgIALQgHALgIAIQgMAKgMAEQgLAFgJABg");
	this.shape_10.setTransform(-183.9,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBrIAAjVIAtAAIAADVg");
	this.shape_11.setTransform(-196,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBnQgLgFgIgNIgBAAIgBAUIgnAAIABgTIAAgZIAAioIAuAAIAABUIAAAAQAGgKAMgFQALgGAPAAQARAAAOAJQANAKAJAQQAHAQABAWQgBAbgKARQgJASgPAJQgQAIgRAAIgCAAQgLAAgLgFgAgSgCQgHAFgCAKIgBAEIAAAEIAAAWIABAIQACAJAHAGQAHAGAKAAQAOAAAIgKQAJgLAAgUQAAgLgEgKQgDgJgHgEQgHgFgKgBQgJABgIAGg");
	this.shape_12.setTransform(-208.7,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABDBLIAAhPQAAgQgFgIQgFgJgLAAQgIAAgGAEQgFAFgDAGIgBAGIAAAGIAABVIgsAAIAAhRQAAgPgFgHQgFgJgLAAQgJAAgFAFQgFAFgCAGIgCAGIAAAGIAABUIgsAAIAAhjIgBgaIgBgVIAnAAIACAUIABAAQADgFAGgFQAFgGAJgDQAJgEAMAAQAPAAAKAGQAKAIAFALIAAAAIAJgLIAKgHQAGgDAHgCQAHgCAIAAQAOAAALAGQAMAIAGAOQAGAOABAWIAABVg");
	this.shape_13.setTransform(-231.1,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwA5QgUgVgBgiQAAgOAFgNQAEgOAJgLQAJgMAOgGQAOgIASAAQAYABAOAKQAPALAGAQQAHARAAASIgBAKIgBAHIhdAAQABAKAFAGQAGAHAJADQAIACALAAQAMAAAKgBQAKgBAJgDIAGAeQgMAFgNACQgNADgPgBQglAAgUgTgAAcgPQAAgHgDgGQgCgHgFgFQgGgFgKAAQgJAAgGAFQgGAEgDAHQgDAHAAAHIA1AAIAAAAg");
	this.shape_14.setTransform(-251.8,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBKQgMgDgJgFIAJghIAKAGIAPAEIAOACQAJAAAFgEQAFgDgBgGQABgFgFgEQgEgEgMgEQgXgHgKgLQgJgMAAgNQAAgOAHgKQAIgLANgGQAOgGAQgBQAOABALACQAKACAHAEIgIAgQgFgDgJgDQgIgDgKAAQgIAAgDADQgFAEAAAFQAAAFAFAEQAFADANAFQAUAHAKAKQAJALAAAQQAAAOgGALQgIAKgOAGQgOAHgUgBQgOAAgNgCg");
	this.shape_15.setTransform(-266.2,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKQgMgDgIgFIAHghIAMAGIANAEIAPACQAJAAAFgEQAEgDAAgGQAAgFgEgEQgEgEgMgEQgXgHgKgLQgKgMABgNQAAgOAIgKQAHgLANgGQANgGASgBQANABAKACQALACAHAEIgIAgQgFgDgIgDQgJgDgJAAQgJAAgEADQgEAEAAAFQAAAFAFAEQAEADANAFQAWAHAJAKQAKALAAAQQAAAOgIALQgHAKgOAGQgOAHgUgBQgPAAgMgCg");
	this.shape_16.setTransform(-279.2,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AArBlIgPg0Ig6AAIgOA0IgvAAIA9jJIA7AAIA/DJgAAVAPIgMgqIgGgUIgEgTIAAAAIgFAUIgFATIgMAqIAsAAg");
	this.shape_17.setTransform(-295.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AssembleandPackHeading, new cjs.Rectangle(-307.5,-20.6,615.1,41.2), null);


(lib.CaptionClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._53interfacecrosscancel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.056,0.056,0,0,0,218.8,218.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiFCGIAAkLIELAAIAAELg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-12.2,24.4,24.4);


(lib.CapReheat = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		this.capClose_reheat.addEventListener("click", close_cap_reheat_clickHandler.bind(this));
		function close_cap_reheat_clickHandler(){
			this.play();
			exportRoot.reheat.cc_btn_reheat.visible = true;
			exportRoot.reheat.cc_btn_reheat.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// close
	this.capClose_reheat = new lib.CaptionClose();
	this.capClose_reheat.parent = this;
	this.capClose_reheat.setTransform(582.2,126.2);
	new cjs.ButtonHelper(this.capClose_reheat, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_reheat).wait(1).to({x:582.1,y:118.2},0).wait(1).to({y:110.2},0).wait(1).to({x:582,y:102.2},0).wait(1).to({x:581.9,y:94.2},0).wait(1).to({x:581.8,y:86.2},0).wait(1).to({y:78.2},0).wait(1).to({x:581.7,y:70.2},0).wait(1).to({x:581.6,y:62.2},0).wait(1).to({y:54.2},0).wait(1).to({x:581.5,y:46.2},0).wait(1).to({x:581.4,y:38.2},0).wait(1).to({x:581.3,y:30.2},0).wait(1).to({y:22.2},0).wait(1).to({x:581.2,y:14.2},0).wait(1).to({x:581.3,y:21.6},0).wait(1).to({y:29.1},0).wait(1).to({x:581.4,y:36.6},0).wait(1).to({x:581.5,y:44},0).wait(1).to({y:51.5},0).wait(1).to({x:581.6,y:59},0).wait(1).to({x:581.7,y:66.4},0).wait(1).to({y:73.9},0).wait(1).to({x:581.8,y:81.4},0).wait(1).to({x:581.9,y:88.8},0).wait(1).to({y:96.3},0).wait(1).to({x:582,y:103.8},0).wait(1).to({x:582.1,y:111.2},0).wait(1).to({y:118.7},0).wait(1).to({x:582.2,y:126.2},0).wait(1));

	// text
	this.text = new cjs.Text("If you reheat foods, especially for hot holding, consider the types and amounts of food to be \nreheated as well as the equipment and procedures needed to heat the food to 165°F within two hours.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(-19.2,115.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:-19.3,y:107.8},0).wait(1).to({x:-19.4,y:99.8},0).wait(1).to({x:-19.5,y:91.8},0).wait(1).to({y:83.8},0).wait(1).to({x:-19.6,y:75.8},0).wait(1).to({x:-19.7,y:67.8},0).wait(1).to({y:59.8},0).wait(1).to({x:-19.8,y:51.8},0).wait(1).to({x:-19.9,y:43.8},0).wait(1).to({x:-20,y:35.8},0).wait(1).to({y:27.8},0).wait(1).to({x:-20.1,y:19.8},0).wait(1).to({x:-20.2,y:11.8},0).wait(1).to({y:3.8},0).wait(1).to({y:11.2},0).wait(1).to({x:-20.1,y:18.7},0).wait(1).to({y:26.2},0).wait(1).to({x:-20,y:33.6},0).wait(1).to({x:-19.9,y:41.1},0).wait(1).to({y:48.6},0).wait(1).to({x:-19.8,y:56},0).wait(1).to({x:-19.7,y:63.5},0).wait(1).to({x:-19.6,y:71},0).wait(1).to({y:78.4},0).wait(1).to({x:-19.5,y:85.9},0).wait(1).to({y:93.4},0).wait(1).to({x:-19.4,y:100.8},0).wait(1).to({x:-19.3,y:108.3},0).wait(1).to({x:-19.2,y:115.8},0).wait(1));

	// background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(-19.2,197.7,1,0.56,0,0,0,0,86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.6,x:-19.3,y:139.7},0).wait(1).to({y:131.7},0).wait(1).to({x:-19.4,y:123.7},0).wait(1).to({x:-19.5,y:115.7},0).wait(1).to({x:-19.6,y:107.7},0).wait(1).to({y:99.7},0).wait(1).to({x:-19.7,y:91.7},0).wait(1).to({x:-19.8,y:83.7},0).wait(1).to({y:75.7},0).wait(1).to({x:-19.9,y:67.7},0).wait(1).to({x:-20,y:59.7},0).wait(1).to({x:-20.1,y:51.7},0).wait(1).to({y:43.7},0).wait(1).to({x:-20.2,y:35.7},0).wait(1).to({x:-20.1,y:43.2},0).wait(1).to({y:50.6},0).wait(1).to({x:-20,y:58.1},0).wait(1).to({x:-19.9,y:65.6},0).wait(1).to({y:73},0).wait(1).to({x:-19.8,y:80.5},0).wait(1).to({x:-19.7,y:88},0).wait(1).to({y:95.4},0).wait(1).to({x:-19.6,y:102.9},0).wait(1).to({x:-19.5,y:110.4},0).wait(1).to({y:117.8},0).wait(1).to({x:-19.4,y:125.3},0).wait(1).to({x:-19.3,y:132.8},0).wait(1).to({y:140.2},0).wait(1).to({x:-19.2,y:147.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-659.1,97.7,1279.8,100);


(lib.CapClipReceive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_rec.addEventListener("click", capClose_rec_clickHandler.bind(this));
		function capClose_rec_clickHandler(){
			this.play();
			exportRoot.receive.cc_btn_rec.visible = true;
			exportRoot.receive.cc_btn_rec.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// capClose
	this.capClose_rec = new lib.CaptionClose();
	this.capClose_rec.parent = this;
	this.capClose_rec.setTransform(600.8,129.4);
	new cjs.ButtonHelper(this.capClose_rec, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_rec).wait(1).to({y:113.9},0).wait(1).to({y:98.5},0).wait(1).to({y:83.1},0).wait(1).to({y:67.6},0).wait(1).to({y:52.2},0).wait(1).to({y:36.8},0).wait(1).to({y:21.4},0).wait(1).to({y:5.9},0).wait(1).to({y:-9.5},0).wait(1).to({y:-24.9},0).wait(1).to({y:-40.4},0).wait(1).to({y:-55.8},0).wait(1).to({y:-71.2},0).wait(1).to({y:-86.6},0).wait(1).to({y:-72.2},0).wait(1).to({y:-57.8},0).wait(1).to({y:-43.4},0).wait(1).to({y:-29},0).wait(1).to({y:-14.6},0).wait(1).to({y:-0.2},0).wait(1).to({y:14.2},0).wait(1).to({y:28.6},0).wait(1).to({y:43},0).wait(1).to({y:57.4},0).wait(1).to({y:71.8},0).wait(1).to({y:86.2},0).wait(1).to({y:100.6},0).wait(1).to({y:115},0).wait(1).to({y:129.4},0).wait(1));

	// text
	this.text = new cjs.Text("In addition to purchasing food, ingredients, and packaging materials from approved suppliers, you \nshould also have procedures in place for inspecting deliveries and checking food temperatures. \nReady-to-eat TCS food is of particular concern at receiving since it likely won’t be cooked before service. Seafood \nalso requires special attention; there might be additional regulations for you to follow, such as keeping \nshellstock identification tags on file and verifying that fish for raw consumption has been frozen to kill parasites.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:110.1},0).wait(1).to({y:94.6},0).wait(1).to({y:79.2},0).wait(1).to({y:63.8},0).wait(1).to({y:48.4},0).wait(1).to({y:32.9},0).wait(1).to({y:17.5},0).wait(1).to({y:2.1},0).wait(1).to({y:-13.4},0).wait(1).to({y:-28.8},0).wait(1).to({y:-44.2},0).wait(1).to({y:-59.6},0).wait(1).to({y:-75.1},0).wait(1).to({y:-90.5},0).wait(1).to({y:-76.1},0).wait(1).to({y:-61.7},0).wait(1).to({y:-47.3},0).wait(1).to({y:-32.9},0).wait(1).to({y:-18.5},0).wait(1).to({y:-4.1},0).wait(1).to({y:10.3},0).wait(1).to({y:24.7},0).wait(1).to({y:39.1},0).wait(1).to({y:53.5},0).wait(1).to({y:67.9},0).wait(1).to({y:82.3},0).wait(1).to({y:96.7},0).wait(1).to({y:111.1},0).wait(1).to({y:125.5},0).wait(1));

	// background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,305.3,1,1.12,0,0,0,0,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.6,y:191.2},0).wait(1).to({y:175.7},0).wait(1).to({y:160.3},0).wait(1).to({y:144.9},0).wait(1).to({y:129.5},0).wait(1).to({y:114},0).wait(1).to({y:98.6},0).wait(1).to({y:83.2},0).wait(1).to({y:67.7},0).wait(1).to({y:52.3},0).wait(1).to({y:36.9},0).wait(1).to({y:21.5},0).wait(1).to({y:6},0).wait(1).to({y:-9.4},0).wait(1).to({y:5},0).wait(1).to({y:19.4},0).wait(1).to({y:33.8},0).wait(1).to({y:48.2},0).wait(1).to({y:62.6},0).wait(1).to({y:77},0).wait(1).to({y:91.4},0).wait(1).to({y:105.8},0).wait(1).to({y:120.2},0).wait(1).to({y:134.6},0).wait(1).to({y:149},0).wait(1).to({y:163.4},0).wait(1).to({y:177.8},0).wait(1).to({y:192.2},0).wait(1).to({y:206.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.9,106.7,1279.8,199.9);


(lib.Cap_Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_intro.addEventListener("click", capClose_intro_clickHandler.bind(this));
		function capClose_intro_clickHandler(){
			this.play();
			exportRoot.cc_intro.visible = true;
			exportRoot.cc_intro.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Close
	this.capClose_intro = new lib.CaptionClose();
	this.capClose_intro.parent = this;
	this.capClose_intro.setTransform(601.2,177.2);
	new cjs.ButtonHelper(this.capClose_intro, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_intro).wait(1).to({x:601.3,y:169.2},0).wait(1).to({x:601.4,y:161.2},0).wait(1).to({x:601.5,y:153.2},0).wait(1).to({x:601.6,y:145.2},0).wait(1).to({x:601.7,y:137.2},0).wait(1).to({x:601.8,y:129.2},0).wait(1).to({x:601.9,y:121.2},0).wait(1).to({x:602,y:113.2},0).wait(1).to({x:602.1,y:105.2},0).wait(1).to({x:602.2,y:97.2},0).wait(1).to({x:602.3,y:89.2},0).wait(1).to({x:602.4,y:81.2},0).wait(1).to({x:602.5,y:73.2},0).wait(1).to({x:602.6,y:65.2},0).wait(1).to({x:602.5,y:72.6},0).wait(1).to({x:602.4,y:80.1},0).wait(1).to({x:602.3,y:87.6},0).wait(1).to({x:602.2,y:95},0).wait(1).to({x:602.1,y:102.5},0).wait(1).to({x:602,y:110},0).wait(1).to({x:601.9,y:117.4},0).wait(1).to({x:601.8,y:124.9},0).wait(1).to({x:601.7,y:132.4},0).wait(1).to({y:139.9},0).wait(1).to({x:601.6,y:147.3},0).wait(1).to({x:601.5,y:154.8},0).wait(1).to({x:601.4,y:162.3},0).wait(1).to({x:601.3,y:169.7},0).wait(1).to({x:601.2,y:177.2},0).wait(1));

	// text
	this.instance = new lib.IntroCapText();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,151.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,regY:49,x:-0.2,y:192.8},0).wait(1).to({x:-0.1,y:184.8},0).wait(1).to({x:0,y:176.8},0).wait(1).to({x:0.1,y:168.8},0).wait(1).to({x:0.2,y:160.8},0).wait(1).to({x:0.3,y:152.8},0).wait(1).to({x:0.4,y:144.8},0).wait(1).to({y:136.8},0).wait(1).to({x:0.5,y:128.8},0).wait(1).to({x:0.6,y:120.8},0).wait(1).to({x:0.7,y:112.8},0).wait(1).to({x:0.8,y:104.8},0).wait(1).to({x:0.9,y:96.8},0).wait(1).to({x:1,y:88.8},0).wait(1).to({x:0.9,y:96.2},0).wait(1).to({x:0.8,y:103.7},0).wait(1).to({x:0.7,y:111.2},0).wait(1).to({x:0.6,y:118.6},0).wait(1).to({y:126.1},0).wait(1).to({x:0.5,y:133.6},0).wait(1).to({x:0.4,y:141},0).wait(1).to({x:0.3,y:148.5},0).wait(1).to({x:0.2,y:156},0).wait(1).to({x:0.1,y:163.5},0).wait(1).to({y:170.9},0).wait(1).to({x:0,y:178.4},0).wait(1).to({x:-0.1,y:185.9},0).wait(1).to({x:-0.2,y:193.3},0).wait(1).to({x:-0.3,y:200.8},0).wait(1));

	// BG
	this.instance_1 = new lib.TextBackground();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,246.7,1,0.56,0,0,0,-0.1,83.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:-2.6,x:-0.5,y:190.7},0).wait(1).to({x:-0.4,y:182.7},0).wait(1).to({x:-0.3,y:174.7},0).wait(1).to({x:-0.2,y:166.7},0).wait(1).to({x:-0.1,y:158.7},0).wait(1).to({x:0,y:150.7},0).wait(1).to({x:0.1,y:142.7},0).wait(1).to({x:0.2,y:134.7},0).wait(1).to({x:0.3,y:126.7},0).wait(1).to({x:0.4,y:118.7},0).wait(1).to({x:0.5,y:110.7},0).wait(1).to({x:0.6,y:102.7},0).wait(1).to({x:0.7,y:94.7},0).wait(1).to({x:0.8,y:86.6},0).wait(1).to({x:0.7,y:94.1},0).wait(1).to({x:0.6,y:101.6},0).wait(1).to({x:0.5,y:109.1},0).wait(1).to({x:0.4,y:116.5},0).wait(1).to({x:0.3,y:124},0).wait(1).to({x:0.2,y:131.5},0).wait(1).to({x:0.1,y:138.9},0).wait(1).to({x:0,y:146.4},0).wait(1).to({y:153.9},0).wait(1).to({x:-0.1,y:161.3},0).wait(1).to({x:-0.2,y:168.8},0).wait(1).to({x:-0.3,y:176.3},0).wait(1).to({x:-0.4,y:183.8},0).wait(1).to({x:-0.5,y:191.2},0).wait(1).to({x:-0.6,y:198.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.5,148.7,1279.8,100);


(lib.Cap_Holding = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		this.capClose_hold.addEventListener("click", close_cap_hold_clickHandler.bind(this));
		function close_cap_hold_clickHandler(){
			this.play();
			exportRoot.hold.cc_btn_hold.visible = true;
			exportRoot.hold.cc_btn_hold.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// close
	this.capClose_hold = new lib.CaptionClose();
	this.capClose_hold.parent = this;
	this.capClose_hold.setTransform(582.2,126.2);
	new cjs.ButtonHelper(this.capClose_hold, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_hold).wait(1).to({y:115.5},0).wait(1).to({y:104.9},0).wait(1).to({y:94.3},0).wait(1).to({y:83.7},0).wait(1).to({y:73.1},0).wait(1).to({y:62.5},0).wait(1).to({y:51.9},0).wait(1).to({y:41.3},0).wait(1).to({y:30.7},0).wait(1).to({y:20.1},0).wait(1).to({y:9.5},0).wait(1).to({y:-1.1},0).wait(1).to({y:-11.7},0).wait(1).to({y:-22.3},0).wait(1).to({y:-12.4},0).wait(1).to({y:-2.5},0).wait(1).to({y:7.4},0).wait(1).to({y:17.3},0).wait(1).to({y:27.2},0).wait(1).to({y:37.1},0).wait(1).to({y:47},0).wait(1).to({y:56.9},0).wait(1).to({y:66.8},0).wait(1).to({y:76.7},0).wait(1).to({y:86.6},0).wait(1).to({y:96.5},0).wait(1).to({y:106.4},0).wait(1).to({y:116.3},0).wait(1).to({y:126.2},0).wait(1));

	// text
	this.text = new cjs.Text("Whether cold holding, hot holding, or holding without temperature control, you must have procedures \nin place to ensure that temperatures and holding times are monitored and that food is properly disposed \nof if it reaches improper temperatures or when time limits are met.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(-19.2,115.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:105.1},0).wait(1).to({y:94.5},0).wait(1).to({y:83.9},0).wait(1).to({y:73.3},0).wait(1).to({y:62.7},0).wait(1).to({y:52.1},0).wait(1).to({y:41.5},0).wait(1).to({y:30.9},0).wait(1).to({y:20.3},0).wait(1).to({y:9.7},0).wait(1).to({y:-0.9},0).wait(1).to({y:-11.5},0).wait(1).to({y:-22.1},0).wait(1).to({y:-32.7},0).wait(1).to({y:-22.8},0).wait(1).to({y:-12.9},0).wait(1).to({y:-3},0).wait(1).to({y:6.9},0).wait(1).to({y:16.8},0).wait(1).to({y:26.7},0).wait(1).to({y:36.6},0).wait(1).to({y:46.5},0).wait(1).to({y:56.4},0).wait(1).to({y:66.3},0).wait(1).to({y:76.2},0).wait(1).to({y:86.1},0).wait(1).to({y:96},0).wait(1).to({y:105.9},0).wait(1).to({y:115.8},0).wait(1));

	// background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(-19.2,233.9,1,0.783,0,0,0,0,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.6,y:153.3},0).wait(1).to({y:142.7},0).wait(1).to({y:132.1},0).wait(1).to({y:121.5},0).wait(1).to({y:110.9},0).wait(1).to({y:100.3},0).wait(1).to({y:89.6},0).wait(1).to({y:79},0).wait(1).to({y:68.4},0).wait(1).to({y:57.8},0).wait(1).to({y:47.2},0).wait(1).to({y:36.6},0).wait(1).to({y:26},0).wait(1).to({y:15.4},0).wait(1).to({y:25.3},0).wait(1).to({y:35.2},0).wait(1).to({y:45.1},0).wait(1).to({y:55},0).wait(1).to({y:64.9},0).wait(1).to({y:74.8},0).wait(1).to({y:84.7},0).wait(1).to({y:94.6},0).wait(1).to({y:104.5},0).wait(1).to({y:114.4},0).wait(1).to({y:124.3},0).wait(1).to({y:134.2},0).wait(1).to({y:144.1},0).wait(1).to({y:154},0).wait(1).to({y:163.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-659.1,94,1279.8,139.8);


(lib.Cap_AssemblePack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_ap.addEventListener("click", capClose_ap_clickHandler.bind(this));
		function capClose_ap_clickHandler(){
			this.play();
			exportRoot.assemble_pack.cc_btn_ap.visible = true;
			exportRoot.assemble_pack.cc_btn_ap.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Close
	this.capClose_ap = new lib.CaptionClose();
	this.capClose_ap.parent = this;
	this.capClose_ap.setTransform(601.2,185.3);
	new cjs.ButtonHelper(this.capClose_ap, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_ap).wait(1).to({y:171.8},0).wait(1).to({y:158.3},0).wait(1).to({y:144.8},0).wait(1).to({y:131.3},0).wait(1).to({y:117.8},0).wait(1).to({y:104.3},0).wait(1).to({y:90.8},0).wait(1).to({y:77.3},0).wait(1).to({y:63.8},0).wait(1).to({y:50.3},0).wait(1).to({y:36.8},0).wait(1).to({y:23.3},0).wait(1).to({y:9.8},0).wait(1).to({y:-3.7},0).wait(1).to({y:8.9},0).wait(1).to({y:21.5},0).wait(1).to({y:34.1},0).wait(1).to({y:46.7},0).wait(1).to({y:59.3},0).wait(1).to({y:71.9},0).wait(1).to({y:84.5},0).wait(1).to({y:97.1},0).wait(1).to({y:109.7},0).wait(1).to({y:122.3},0).wait(1).to({y:134.9},0).wait(1).to({y:147.5},0).wait(1).to({y:160.1},0).wait(1).to({y:172.7},0).wait(1).to({y:185.3},0).wait(1));

	// text
	this.instance = new lib.AssemblePackcaptiontext();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,238.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:-0.1,x:-0.5,y:224.6},0).wait(1).to({y:211.1},0).wait(1).to({y:197.6},0).wait(1).to({y:184.1},0).wait(1).to({y:170.6},0).wait(1).to({y:157.1},0).wait(1).to({y:143.6},0).wait(1).to({y:130.1},0).wait(1).to({y:116.6},0).wait(1).to({y:103.1},0).wait(1).to({y:89.6},0).wait(1).to({y:76.1},0).wait(1).to({y:62.6},0).wait(1).to({y:49.1},0).wait(1).to({y:61.7},0).wait(1).to({y:74.3},0).wait(1).to({y:86.9},0).wait(1).to({y:99.5},0).wait(1).to({y:112.1},0).wait(1).to({y:124.7},0).wait(1).to({y:137.3},0).wait(1).to({y:149.9},0).wait(1).to({y:162.5},0).wait(1).to({y:175.1},0).wait(1).to({y:187.7},0).wait(1).to({y:200.3},0).wait(1).to({y:212.9},0).wait(1).to({y:225.5},0).wait(1).to({y:238.1},0).wait(1));

	// BG
	this.instance_1 = new lib.TextBackground();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,325.3,1,1.002,0,0,0,-0.2,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:-2.6,x:-0.5,y:226},0).wait(1).to({y:212.5},0).wait(1).to({y:199},0).wait(1).to({y:185.5},0).wait(1).to({y:172},0).wait(1).to({y:158.5},0).wait(1).to({y:145},0).wait(1).to({y:131.5},0).wait(1).to({y:118},0).wait(1).to({y:104.5},0).wait(1).to({y:91},0).wait(1).to({y:77.5},0).wait(1).to({y:64},0).wait(1).to({y:50.5},0).wait(1).to({y:63.1},0).wait(1).to({y:75.7},0).wait(1).to({y:88.3},0).wait(1).to({y:100.9},0).wait(1).to({y:113.5},0).wait(1).to({y:126.1},0).wait(1).to({y:138.7},0).wait(1).to({y:151.3},0).wait(1).to({y:163.9},0).wait(1).to({y:176.5},0).wait(1).to({y:189.1},0).wait(1).to({y:201.7},0).wait(1).to({y:214.3},0).wait(1).to({y:226.9},0).wait(1).to({y:239.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.4,150.1,1279.8,178.8);


(lib.AssemblyandPackingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_ap.addEventListener("click", cap_btn_ap_clickHandler.bind(this));
		function cap_btn_ap_clickHandler(){
			exportRoot.assemble_pack.cc_clip_ap.gotoAndPlay(1);
			exportRoot.assemble_pack.cc_btn_ap.mouseEnabled = false;
			exportRoot.assemble_pack.cc_btn_ap.visible = false;
		}
		playSound("_120c00_en_71616");
	}
	this.frame_724 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(723).call(this.frame_724).wait(1));

	// Caption 
	this.cc_clip_ap = new lib.Cap_AssemblePack();
	this.cc_clip_ap.parent = this;
	this.cc_clip_ap.setTransform(0.1,325.6,1,1,0,0,0,-0.6,130.2);
	this.cc_clip_ap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_ap).wait(1).to({_off:false},0).wait(1).to({regX:-0.5,regY:145,x:0.2,y:340.4},0).wait(708).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Caption Button
	this.cc_btn_ap = new lib.CCButton();
	this.cc_btn_ap.parent = this;
	this.cc_btn_ap.setTransform(568.8,275.1);
	this.cc_btn_ap._off = true;
	new cjs.ButtonHelper(this.cc_btn_ap, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_ap).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599.4,y:300.1},0).wait(708).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.AssembleandPackHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-156.4,regY:3.7,x:-425.1,y:-280.6,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(696).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.AssemblyandPackbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-240.9,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).wait(1).to({regX:41.3,regY:23.4,x:-518.7,y:-237.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(436).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.AssemblyandPackbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-197.7,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(294).to({_off:false},0).wait(1).to({regX:111.3,regY:23.8,x:-448.7,y:-193.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(401).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 3
	this.instance_3 = new lib.AssemblyandPackbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-153.2,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(339).to({_off:false},0).wait(1).to({regX:108.6,regY:23.2,x:-451.4,y:-150,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(356).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 4
	this.instance_4 = new lib.AssemblyandPackbullet4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-260,-112.7,1,1,0,0,0,300,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(384).to({_off:false},0).wait(1).to({regX:150.4,regY:22.7,x:-409.6,y:-110,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// consider
	this.instance_5 = new lib.coolingtext();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,-51.7,1,1,0,0,0,300,20);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(459).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-71.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(237).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 5
	this.instance_6 = new lib.AssemblyandPackbullet5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-260,-31.7,1,1,0,0,0,300,20);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(459).to({_off:false},0).wait(1).to({regX:94,regY:23,x:-466,y:-28.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(237).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 6
	this.instance_7 = new lib.AssemblyandPackbullet6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-260,11.5,1,1,0,0,0,300,20);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(609).to({_off:false},0).wait(1).to({regX:132.4,regY:20.1,x:-427.6,y:11.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 7
	this.instance_8 = new lib.AssemblyandPackbullet7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-260,54.7,1,1,0,0,0,300,20);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(644).to({_off:false},0).wait(1).to({regX:136.7,regY:22.9,x:-423.3,y:57.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(51).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_9 = new lib.assembleandpackagebg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(696).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_10 = new lib.Whitebg("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,-10);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-322.9,1231.9,637.7);


(lib.SnSCaption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		this.capClose_sns.addEventListener("click", capClose_sns_clickHandler.bind(this));
		function capClose_sns_clickHandler(){
			this.play();
			exportRoot.serve_sell.cc_btn_sns.visible = true;
			exportRoot.serve_sell.cc_btn_sns.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
		
		exportRoot.serve_sell.cc_btn_sns.visible = true;
		exportRoot.serve_sell.cc_btn_sns.mouseEnabled = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Close
	this.capClose_sns = new lib.CaptionClose();
	this.capClose_sns.parent = this;
	this.capClose_sns.setTransform(602.6,111.7);
	new cjs.ButtonHelper(this.capClose_sns, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_sns).wait(1).to({y:101},0).wait(1).to({y:90.4},0).wait(1).to({y:79.8},0).wait(1).to({y:69.2},0).wait(1).to({y:58.6},0).wait(1).to({y:48},0).wait(1).to({y:37.4},0).wait(1).to({y:26.8},0).wait(1).to({y:16.2},0).wait(1).to({y:5.6},0).wait(1).to({y:-5},0).wait(1).to({y:-15.6},0).wait(1).to({y:-26.2},0).wait(1).to({y:-36.8},0).wait(1).to({y:-26.9},0).wait(1).to({y:-17},0).wait(1).to({y:-7.1},0).wait(1).to({y:2.8},0).wait(1).to({y:12.7},0).wait(1).to({y:22.6},0).wait(1).to({y:32.5},0).wait(1).to({y:42.4},0).wait(1).to({y:52.3},0).wait(1).to({y:62.2},0).wait(1).to({y:72.1},0).wait(1).to({y:82},0).wait(1).to({y:91.9},0).wait(1).to({y:101.8},0).wait(1).to({y:111.7},0).wait(1));

	// Text
	this.text = new cjs.Text("This is the final step before food reaches the customer. Personal hygiene is extremely important for employees \ninvolved in this step. If you have a self-service area, you will also need preventive controls \nto prevent contamination by customers.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0,101.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:90.8},0).wait(1).to({y:80.2},0).wait(1).to({y:69.6},0).wait(1).to({y:59},0).wait(1).to({y:48.4},0).wait(1).to({y:37.8},0).wait(1).to({y:27.2},0).wait(1).to({y:16.6},0).wait(1).to({y:6},0).wait(1).to({y:-4.6},0).wait(1).to({y:-15.2},0).wait(1).to({y:-25.8},0).wait(1).to({y:-36.4},0).wait(1).to({y:-47},0).wait(1).to({y:-37.1},0).wait(1).to({y:-27.2},0).wait(1).to({y:-17.3},0).wait(1).to({y:-7.4},0).wait(1).to({y:2.5},0).wait(1).to({y:12.4},0).wait(1).to({y:22.3},0).wait(1).to({y:32.2},0).wait(1).to({y:42.1},0).wait(1).to({y:52},0).wait(1).to({y:61.9},0).wait(1).to({y:71.8},0).wait(1).to({y:81.7},0).wait(1).to({y:91.6},0).wait(1).to({y:101.5},0).wait(1));

	// Background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(1.4,219.2,1,0.792,0,0,0,0,86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.6,y:137.9},0).wait(1).to({y:127.3},0).wait(1).to({y:116.7},0).wait(1).to({y:106.1},0).wait(1).to({y:95.5},0).wait(1).to({y:84.9},0).wait(1).to({y:74.3},0).wait(1).to({y:63.7},0).wait(1).to({y:53.1},0).wait(1).to({y:42.5},0).wait(1).to({y:31.9},0).wait(1).to({y:21.3},0).wait(1).to({y:10.7},0).wait(1).to({y:0},0).wait(1).to({y:9.9},0).wait(1).to({y:19.8},0).wait(1).to({y:29.7},0).wait(1).to({y:39.6},0).wait(1).to({y:49.5},0).wait(1).to({y:59.4},0).wait(1).to({y:69.3},0).wait(1).to({y:79.2},0).wait(1).to({y:89.1},0).wait(1).to({y:99},0).wait(1).to({y:108.9},0).wait(1).to({y:118.8},0).wait(1).to({y:128.7},0).wait(1).to({y:138.6},0).wait(1).to({y:148.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-638.5,77.9,1279.8,141.4);


(lib.ServenSellMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_sns.addEventListener("click", cc_sns_clickHandler.bind(this));
		function cc_sns_clickHandler(){
			exportRoot.serve_sell.cc_clip_sns.gotoAndPlay(1);
			exportRoot.serve_sell.cc_btn_sns.visible = false;
			exportRoot.serve_sell.cc_btn_sns.mouseEnabled = false;
		}
		playSound("_120c00_en_71618");
	}
	this.frame_519 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(518).call(this.frame_519).wait(1));

	// Small Caption
	this.cc_clip_sns = new lib.SnSCaption();
	this.cc_clip_sns.parent = this;
	this.cc_clip_sns.setTransform(-0.2,262.9);
	this.cc_clip_sns._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_sns).wait(1).to({_off:false},0).wait(1).to({regX:1.4,regY:74.3,x:1.2,y:337.2},0).wait(503).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Caption Button
	this.cc_btn_sns = new lib.CCButton();
	this.cc_btn_sns.parent = this;
	this.cc_btn_sns.setTransform(568.4,274.5);
	this.cc_btn_sns._off = true;
	new cjs.ButtonHelper(this.cc_btn_sns, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_sns).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599,y:299.5},0).wait(503).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.SSHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-188,regY:3.5,x:-456.8,y:-280.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(491).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// consider
	this.instance_1 = new lib.coolingtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,-224.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-244.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.SSBullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).wait(1).to({regX:115.4,regY:23.2,x:-444.6,y:-197.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_3 = new lib.SSBullet2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319).to({_off:false},0).wait(1).to({regX:114.7,regY:19.9,x:-445.3,y:-160,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.SSbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(491).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.ReheatMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_reheat.addEventListener("click", cc_reheat_clickHandler.bind(this));
		function cc_reheat_clickHandler(){
			exportRoot.reheat.cc_clip_reheat.gotoAndPlay(1);
			exportRoot.reheat.cc_btn_reheat.visible = false;
			exportRoot.reheat.cc_btn_reheat.mouseEnabled = false;
		}
		playSound("_120c00_en_71614");
	}
	this.frame_454 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(453).call(this.frame_454).wait(1));

	// Caption
	this.cc_clip_reheat = new lib.CapReheat();
	this.cc_clip_reheat.parent = this;
	this.cc_clip_reheat.setTransform(20.6,249.4);
	this.cc_clip_reheat._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_reheat).wait(1).to({_off:false},0).wait(1).to({regX:-19.8,regY:91.7,x:0.8,y:341.1},0).wait(438).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Cap Btnd
	this.cc_btn_reheat = new lib.CCButton();
	this.cc_btn_reheat.parent = this;
	this.cc_btn_reheat.setTransform(568.4,274);
	this.cc_btn_reheat._off = true;
	new cjs.ButtonHelper(this.cc_btn_reheat, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_reheat).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599,y:299},0).wait(438).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.ReheatHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-236.8,regY:3.5,x:-505.7,y:-281,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(426).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// consider
	this.instance_1 = new lib.coolingtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,-224.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).wait(1).to({regX:-231.9,regY:0,x:-514.5,y:-244.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(291).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.reheatbullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).wait(1).to({regX:178.1,regY:23.1,x:-381.9,y:-197.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(291).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_3 = new lib.reheatbullet2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).wait(1).to({regX:178.7,regY:22.9,x:-381.3,y:-157,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.reheatbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:308.2,y:-6.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(426).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-327.7,1231.9,642.4);


(lib.RecievingMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_rec.addEventListener("click", cc_rec_clickHandler.bind(this));
		function cc_rec_clickHandler(){
			exportRoot.receive.cc_clip_rec.gotoAndPlay(1);
			exportRoot.receive.cc_btn_rec.visible = false;
			exportRoot.receive.cc_btn_rec.mouseEnabled = false;
		}
		playSound("_120c00_en_7163");
	}
	this.frame_1009 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1008).call(this.frame_1009).wait(1));

	// CC Clip
	this.cc_clip_rec = new lib.CapClipReceive();
	this.cc_clip_rec.parent = this;
	this.cc_clip_rec.setTransform(1.3,245);
	this.cc_clip_rec._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_rec).wait(1).to({_off:false},0).wait(1).to({regY:98.6,y:343.6},0).wait(993).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// CC Btn
	this.cc_btn_rec = new lib.CCButton();
	this.cc_btn_rec.parent = this;
	this.cc_btn_rec.setTransform(568.7,274.5);
	this.cc_btn_rec._off = true;
	new cjs.ButtonHelper(this.cc_btn_rec, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_rec).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599.3,y:299.5},0).wait(993).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.ReceivingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-3.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-240.2,regY:3.7,x:-509.1,y:-281.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(981).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Purchase
	this.instance_1 = new lib.receivingbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(1).to({regX:221.5,regY:22.7,x:-338.5,y:-242.3,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(952).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Inspect
	this.instance_2 = new lib.receivingbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-204.5,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(274).to({_off:false},0).wait(1).to({regX:116.3,regY:22.9,x:-443.7,y:-201.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(706).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Temp
	this.instance_3 = new lib.receivingbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-164,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).wait(1).to({regX:166.6,regY:22.7,x:-393.4,y:-161.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(671).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Particular Concern
	this.instance_4 = new lib.receivingtext();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-287.4,-123.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(364).to({_off:false},0).wait(1).to({regX:-155.9,regY:2.7,x:-443.3,y:-120.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(616).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Ready to Eat
	this.instance_5 = new lib.receivingbullet4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-260,-83,1,1,0,0,0,300,20);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(364).to({_off:false},0).wait(1).to({regX:120.4,regY:23.1,x:-439.6,y:-79.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(616).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Seafood
	this.instance_6 = new lib.receivingbullet5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-260,-42.5,1,1,0,0,0,300,20);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(574).to({_off:false},0).wait(1).to({regX:58.9,regY:19.9,x:-501.1,y:-42.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(406).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_7 = new lib.receivingbg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(981).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_8 = new lib.Whitebg("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,-2.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.HoldingMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_hold.addEventListener("click", cc_hold_clickHandler.bind(this));
		function cc_hold_clickHandler(){
			exportRoot.hold.cc_clip_hold.gotoAndPlay(1);
			exportRoot.hold.cc_btn_hold.visible = false;
			exportRoot.hold.cc_btn_hold.mouseEnabled = false;
		}
		playSound("_120c00_en_71615");
	}
	this.frame_515 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
			
			//Hide the caption because they won't go away on it's Own
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(514).call(this.frame_515).wait(1));

	// Caption
	this.cc_clip_hold = new lib.Cap_Holding();
	this.cc_clip_hold.parent = this;
	this.cc_clip_hold.setTransform(20.6,249.4);
	this.cc_clip_hold._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_hold).wait(1).to({_off:false},0).wait(1).to({regX:-19.3,regY:89.7,x:1.3,y:339.1},0).wait(498).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Caption Button
	this.cc_btn_hold = new lib.CCButton();
	this.cc_btn_hold.parent = this;
	this.cc_btn_hold.setTransform(568.7,273.7);
	this.cc_btn_hold._off = true;
	new cjs.ButtonHelper(this.cc_btn_hold, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_hold).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599.3,y:298.7},0).wait(498).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.HoldingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-251.6,regY:3.5,x:-520.5,y:-280.8,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(486).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.Holdingbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).wait(1).to({regX:250.9,regY:23,x:-309.1,y:-242,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(256).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.holdingbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314).to({_off:false},0).wait(1).to({regX:270.8,regY:38.9,x:-289.2,y:-181.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(171).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_3 = new lib.holdingbg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:309.7,y:-5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(486).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// Backgroud
	this.instance_4 = new lib.Whitebg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,-2.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-324.7,1231.9,639.4);


(lib.CCClipStore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_store.addEventListener("click", capClose_store_clickHandler.bind(this));
		function capClose_store_clickHandler(){
			this.play();
			exportRoot.store.cc_btn_store.visible = true;
			exportRoot.store.cc_btn_store.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// CC Close
	this.capClose_store = new lib.CaptionClose();
	this.capClose_store.parent = this;
	this.capClose_store.setTransform(609.3,126.7);
	new cjs.ButtonHelper(this.capClose_store, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_store).wait(1).to({y:113.2},0).wait(1).to({y:99.7},0).wait(1).to({y:86.2},0).wait(1).to({y:72.7},0).wait(1).to({y:59.2},0).wait(1).to({y:45.7},0).wait(1).to({y:32.2},0).wait(1).to({y:18.7},0).wait(1).to({y:5.2},0).wait(1).to({y:-8.3},0).wait(1).to({y:-21.8},0).wait(1).to({y:-35.3},0).wait(1).to({y:-48.8},0).wait(1).to({y:-62.3},0).wait(1).to({y:-49.7},0).wait(1).to({y:-37.1},0).wait(1).to({y:-24.5},0).wait(1).to({y:-11.9},0).wait(1).to({y:0.7},0).wait(1).to({y:13.3},0).wait(1).to({y:25.9},0).wait(1).to({y:38.5},0).wait(1).to({y:51.1},0).wait(1).to({y:63.7},0).wait(1).to({y:76.3},0).wait(1).to({y:88.9},0).wait(1).to({y:101.5},0).wait(1).to({y:114.1},0).wait(1).to({y:126.7},0).wait(1));

	// Text
	this.text = new cjs.Text("Maintaining refrigerator and freezer temperatures and checking the internal temperatures of food are \nimportant considerations for refrigerated storage. Storing raw foods below or away from ready-to-eat \nfoods, storing chemicals in separate areas, and taking other steps to prevent cross-contamination are important \nin all food storage areas.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0.5,129.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:115.9},0).wait(1).to({y:102.4},0).wait(1).to({y:88.9},0).wait(1).to({y:75.4},0).wait(1).to({y:61.9},0).wait(1).to({y:48.4},0).wait(1).to({y:34.9},0).wait(1).to({y:21.4},0).wait(1).to({y:7.9},0).wait(1).to({y:-5.6},0).wait(1).to({y:-19.1},0).wait(1).to({y:-32.6},0).wait(1).to({y:-46.1},0).wait(1).to({y:-59.6},0).wait(1).to({y:-47},0).wait(1).to({y:-34.4},0).wait(1).to({y:-21.8},0).wait(1).to({y:-9.2},0).wait(1).to({y:3.4},0).wait(1).to({y:16},0).wait(1).to({y:28.6},0).wait(1).to({y:41.2},0).wait(1).to({y:53.8},0).wait(1).to({y:66.4},0).wait(1).to({y:79},0).wait(1).to({y:91.6},0).wait(1).to({y:104.2},0).wait(1).to({y:116.8},0).wait(1).to({y:129.4},0).wait(1));

	// background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,189,1,1,0,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:175.5},0).wait(1).to({y:162},0).wait(1).to({y:148.5},0).wait(1).to({y:135},0).wait(1).to({y:121.5},0).wait(1).to({y:108},0).wait(1).to({y:94.5},0).wait(1).to({y:81},0).wait(1).to({y:67.5},0).wait(1).to({y:54},0).wait(1).to({y:40.5},0).wait(1).to({y:27},0).wait(1).to({y:13.5},0).wait(1).to({y:0},0).wait(1).to({y:12.6},0).wait(1).to({y:25.2},0).wait(1).to({y:37.8},0).wait(1).to({y:50.4},0).wait(1).to({y:63},0).wait(1).to({y:75.6},0).wait(1).to({y:88.2},0).wait(1).to({y:100.8},0).wait(1).to({y:113.4},0).wait(1).to({y:126},0).wait(1).to({y:138.6},0).wait(1).to({y:151.2},0).wait(1).to({y:163.8},0).wait(1).to({y:176.4},0).wait(1).to({y:189},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.9,99.8,1279.8,178.5);


(lib.CCClipPrep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_prep.addEventListener("click", capClose_prep_clickHandler.bind(this));
		function capClose_prep_clickHandler(){
			this.play();
			exportRoot.prep.cc_btn_prep.visible = true;
			exportRoot.prep.cc_btn_prep.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// cap close
	this.capClose_prep = new lib.CaptionClose();
	this.capClose_prep.parent = this;
	this.capClose_prep.setTransform(603.5,124.3);
	new cjs.ButtonHelper(this.capClose_prep, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_prep).wait(1).to({y:110.8},0).wait(1).to({y:97.3},0).wait(1).to({y:83.8},0).wait(1).to({y:70.3},0).wait(1).to({y:56.8},0).wait(1).to({y:43.3},0).wait(1).to({y:29.8},0).wait(1).to({y:16.3},0).wait(1).to({y:2.8},0).wait(1).to({y:-10.7},0).wait(1).to({y:-24.2},0).wait(1).to({y:-37.7},0).wait(1).to({y:-51.2},0).wait(1).to({y:-64.7},0).wait(1).to({y:-52.1},0).wait(1).to({y:-39.5},0).wait(1).to({y:-26.9},0).wait(1).to({y:-14.3},0).wait(1).to({y:-1.7},0).wait(1).to({y:10.9},0).wait(1).to({y:23.5},0).wait(1).to({y:36.1},0).wait(1).to({y:48.7},0).wait(1).to({y:61.3},0).wait(1).to({y:73.9},0).wait(1).to({y:86.5},0).wait(1).to({y:99.1},0).wait(1).to({y:111.7},0).wait(1).to({y:124.3},0).wait(1));

	// Text
	this.text = new cjs.Text("A great variety of activities occur during food preparation, including things like thawing, mixing ingredients, \nchopping, and breading. Many of your prerequisite programs are intended to protect food during this \nstage, and additional preventive controls may be required. Temperature control, personal hygiene, and cross-\ncontamination will be of particular concern during this step.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(-0.7,128);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:114.5},0).wait(1).to({y:101},0).wait(1).to({y:87.5},0).wait(1).to({y:74},0).wait(1).to({y:60.5},0).wait(1).to({y:47},0).wait(1).to({y:33.5},0).wait(1).to({y:20},0).wait(1).to({y:6.5},0).wait(1).to({y:-7},0).wait(1).to({y:-20.5},0).wait(1).to({y:-34},0).wait(1).to({y:-47.5},0).wait(1).to({y:-61},0).wait(1).to({y:-48.4},0).wait(1).to({y:-35.8},0).wait(1).to({y:-23.2},0).wait(1).to({y:-10.6},0).wait(1).to({y:2},0).wait(1).to({y:14.6},0).wait(1).to({y:27.2},0).wait(1).to({y:39.8},0).wait(1).to({y:52.4},0).wait(1).to({y:65},0).wait(1).to({y:77.6},0).wait(1).to({y:90.2},0).wait(1).to({y:102.8},0).wait(1).to({y:115.4},0).wait(1).to({y:128},0).wait(1));

	// Background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,189,1,1,0,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:175.5},0).wait(1).to({y:162},0).wait(1).to({y:148.5},0).wait(1).to({y:135},0).wait(1).to({y:121.5},0).wait(1).to({y:108},0).wait(1).to({y:94.5},0).wait(1).to({y:81},0).wait(1).to({y:67.5},0).wait(1).to({y:54},0).wait(1).to({y:40.5},0).wait(1).to({y:27},0).wait(1).to({y:13.5},0).wait(1).to({y:0},0).wait(1).to({y:12.6},0).wait(1).to({y:25.2},0).wait(1).to({y:37.8},0).wait(1).to({y:50.4},0).wait(1).to({y:63},0).wait(1).to({y:75.6},0).wait(1).to({y:88.2},0).wait(1).to({y:100.8},0).wait(1).to({y:113.4},0).wait(1).to({y:126},0).wait(1).to({y:138.6},0).wait(1).to({y:151.2},0).wait(1).to({y:163.8},0).wait(1).to({y:176.4},0).wait(1).to({y:189},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.9,99.8,1279.8,178.5);


(lib.CCClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_cook.addEventListener("click", capClose_cook_clickHandler.bind(this));
		function capClose_cook_clickHandler(){
			this.play();
			exportRoot.cook.cc_btn_cook.visible = true;
			exportRoot.cook.cc_btn_cook.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Close
	this.capClose_cook = new lib.CaptionClose();
	this.capClose_cook.parent = this;
	this.capClose_cook.setTransform(600.8,141.6);
	new cjs.ButtonHelper(this.capClose_cook, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_cook).wait(1).to({y:129},0).wait(1).to({y:116.4},0).wait(1).to({y:103.9},0).wait(1).to({y:91.3},0).wait(1).to({y:78.7},0).wait(1).to({y:66.2},0).wait(1).to({y:53.6},0).wait(1).to({y:41.1},0).wait(1).to({y:28.5},0).wait(1).to({y:15.9},0).wait(1).to({y:3.4},0).wait(1).to({y:-9.2},0).wait(1).to({y:-21.7},0).wait(1).to({y:-34.3},0).wait(1).to({y:-22.6},0).wait(1).to({y:-10.9},0).wait(1).to({y:0.8},0).wait(1).to({y:12.5},0).wait(1).to({y:24.2},0).wait(1).to({y:35.9},0).wait(1).to({y:47.6},0).wait(1).to({y:59.3},0).wait(1).to({y:71},0).wait(1).to({y:82.7},0).wait(1).to({y:94.4},0).wait(1).to({y:106.1},0).wait(1).to({y:117.8},0).wait(1).to({y:129.5},0).wait(1).to({y:141.2},0).wait(1));

	// Text
	this.text = new cjs.Text("The most effective step for reducing biological hazards in animal products is cooking. In order for cooking \nto be effective, though, proper temperatures must be reached. You need to determine the \ntemperatures for the foods you cook as well as a system to ensure that those temperatures are reached.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0.5,140.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:127.5},0).wait(1).to({y:115},0).wait(1).to({y:102.4},0).wait(1).to({y:89.9},0).wait(1).to({y:77.3},0).wait(1).to({y:64.7},0).wait(1).to({y:52.2},0).wait(1).to({y:39.6},0).wait(1).to({y:27.1},0).wait(1).to({y:14.5},0).wait(1).to({y:1.9},0).wait(1).to({y:-10.6},0).wait(1).to({y:-23.2},0).wait(1).to({y:-35.7},0).wait(1).to({y:-24},0).wait(1).to({y:-12.3},0).wait(1).to({y:-0.6},0).wait(1).to({y:11.1},0).wait(1).to({y:22.8},0).wait(1).to({y:34.5},0).wait(1).to({y:46.2},0).wait(1).to({y:57.9},0).wait(1).to({y:69.6},0).wait(1).to({y:81.3},0).wait(1).to({y:93},0).wait(1).to({y:104.7},0).wait(1).to({y:116.4},0).wait(1).to({y:128.1},0).wait(1).to({y:139.8},0).wait(1));

	// Background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,264.8,1,0.851,0,0,0,0,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.6,y:176.2},0).wait(1).to({y:163.7},0).wait(1).to({y:151.1},0).wait(1).to({y:138.6},0).wait(1).to({y:126},0).wait(1).to({y:113.4},0).wait(1).to({y:100.9},0).wait(1).to({y:88.3},0).wait(1).to({y:75.8},0).wait(1).to({y:63.2},0).wait(1).to({y:50.6},0).wait(1).to({y:38.1},0).wait(1).to({y:25.5},0).wait(1).to({y:12.9},0).wait(1).to({y:24.6},0).wait(1).to({y:36.3},0).wait(1).to({y:48},0).wait(1).to({y:59.7},0).wait(1).to({y:71.4},0).wait(1).to({y:83.1},0).wait(1).to({y:94.8},0).wait(1).to({y:106.5},0).wait(1).to({y:118.2},0).wait(1).to({y:129.9},0).wait(1).to({y:141.6},0).wait(1).to({y:153.3},0).wait(1).to({y:165},0).wait(1).to({y:176.7},0).wait(1).to({y:188.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.9,112.9,1279.8,151.9);


(lib.CaptionCooling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		//close button to hide
		this.capClose_cool.addEventListener("click", capClose_cool_clickHandler.bind(this));
		function capClose_cool_clickHandler(){
			this.play();
			exportRoot.cool.cc_btn_cool.visible = true;
			exportRoot.cool.cc_btn_cool.mouseEnabled = true;
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// cap close
	this.capClose_cool = new lib.CaptionClose();
	this.capClose_cool.parent = this;
	this.capClose_cool.setTransform(601.3,127.8);
	new cjs.ButtonHelper(this.capClose_cool, 0, 1, 2, false, new lib.CaptionClose(), 3);

	this.timeline.addTween(cjs.Tween.get(this.capClose_cool).wait(1).to({y:114.2},0).wait(1).to({y:100.6},0).wait(1).to({y:87},0).wait(1).to({y:73.4},0).wait(1).to({y:59.8},0).wait(1).to({y:46.2},0).wait(1).to({y:32.6},0).wait(1).to({y:19},0).wait(1).to({y:5.4},0).wait(1).to({y:-8.2},0).wait(1).to({y:-21.8},0).wait(1).to({y:-35.4},0).wait(1).to({y:-49},0).wait(1).to({y:-62.6},0).wait(1).to({y:-50},0).wait(1).to({y:-37.4},0).wait(1).to({y:-24.8},0).wait(1).to({y:-12.2},0).wait(1).to({y:0.4},0).wait(1).to({y:13},0).wait(1).to({y:25.6},0).wait(1).to({y:38.2},0).wait(1).to({y:50.8},0).wait(1).to({y:63.4},0).wait(1).to({y:76},0).wait(1).to({y:88.6},0).wait(1).to({y:101.2},0).wait(1).to({y:113.8},0).wait(1).to({y:126.4},0).wait(1));

	// text
	this.text = new cjs.Text("Improper cooling of TCS foods is a common cause of foodborne illness. Quickly cooling large amounts \nof food according to the two-stage cooling method can be difficult. Consider the types and amounts of food \nyou will need to cool and the equipment and procedures that will be necessary to cool the food in a way that \nkeeps the food safe.", "25px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(-0.4,125.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:111.7},0).wait(1).to({y:98.1},0).wait(1).to({y:84.5},0).wait(1).to({y:70.9},0).wait(1).to({y:57.3},0).wait(1).to({y:43.7},0).wait(1).to({y:30.1},0).wait(1).to({y:16.5},0).wait(1).to({y:2.9},0).wait(1).to({y:-10.7},0).wait(1).to({y:-24.3},0).wait(1).to({y:-37.9},0).wait(1).to({y:-51.5},0).wait(1).to({y:-65.1},0).wait(1).to({y:-52.5},0).wait(1).to({y:-39.9},0).wait(1).to({y:-27.3},0).wait(1).to({y:-14.7},0).wait(1).to({y:-2.1},0).wait(1).to({y:10.5},0).wait(1).to({y:23.1},0).wait(1).to({y:35.7},0).wait(1).to({y:48.3},0).wait(1).to({y:60.9},0).wait(1).to({y:73.5},0).wait(1).to({y:86.1},0).wait(1).to({y:98.7},0).wait(1).to({y:111.3},0).wait(1).to({y:123.9},0).wait(1));

	// background
	this.instance = new lib.TextBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,189,1,1,0,0,0,0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:175.4},0).wait(1).to({y:161.8},0).wait(1).to({y:148.2},0).wait(1).to({y:134.6},0).wait(1).to({y:121},0).wait(1).to({y:107.4},0).wait(1).to({y:93.8},0).wait(1).to({y:80.2},0).wait(1).to({y:66.6},0).wait(1).to({y:53},0).wait(1).to({y:39.4},0).wait(1).to({y:25.9},0).wait(1).to({y:12.2},0).wait(1).to({y:-1.3},0).wait(1).to({y:11.3},0).wait(1).to({y:23.9},0).wait(1).to({y:36.5},0).wait(1).to({y:49.1},0).wait(1).to({y:61.7},0).wait(1).to({y:74.3},0).wait(1).to({y:86.9},0).wait(1).to({y:99.5},0).wait(1).to({y:112.1},0).wait(1).to({y:124.7},0).wait(1).to({y:137.3},0).wait(1).to({y:149.9},0).wait(1).to({y:162.5},0).wait(1).to({y:175.1},0).wait(1).to({y:187.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.9,99.8,1279.8,178.5);


(lib.StorageMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_store.addEventListener("click", cc_store_clickHandler.bind(this));
		function cc_store_clickHandler(){
			exportRoot.store.cc_clip_store.gotoAndPlay(1);
			exportRoot.store.cc_btn_store.visible = false;
			exportRoot.store.cc_btn_store.mouseEnabled = false;
		}
		playSound("_120c00_en_7166");
	}
	this.frame_664 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(663).call(this.frame_664).wait(1));

	// CC Clip
	this.cc_clip_store = new lib.CCClipStore();
	this.cc_clip_store.parent = this;
	this.cc_clip_store.setTransform(1.3,245);
	this.cc_clip_store._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_store).wait(1).to({_off:false},0).wait(1).to({regY:94.5,y:339.5},0).wait(648).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// CC Button
	this.cc_btn_store = new lib.CCButton();
	this.cc_btn_store.parent = this;
	this.cc_btn_store.setTransform(569.2,273.7);
	this.cc_btn_store._off = true;
	new cjs.ButtonHelper(this.cc_btn_store, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_store).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:599.8,y:298.7},0).wait(648).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.StorageHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-252.8,regY:3.9,x:-521.7,y:-281.4,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(636).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.storagebullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:164.2,regY:41.8,x:-395.8,y:-223.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(601).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.storagebullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-164,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).wait(1).to({regX:185.6,regY:39.1,x:-374.4,y:-144.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(516).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 3
	this.instance_3 = new lib.storagebullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-83,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(1).to({regX:192.5,regY:42.1,x:-367.5,y:-60.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(346).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 4
	this.instance_4 = new lib.storagebullet4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-260,-8.7,1,1,0,0,0,300,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(404).to({_off:false},0).wait(1).to({regX:178.2,regY:39.1,x:-381.8,y:10.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(231).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_5 = new lib.storagebg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(635).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Background
	this.instance_6 = new lib.Whitebg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-2.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.PrepMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_prep.addEventListener("click", cc_prep_clickHandler.bind(this));
		function cc_prep_clickHandler(){
			exportRoot.prep.cc_clip_prep.gotoAndPlay(1);
			exportRoot.prep.cc_btn_prep.visible = false;
			exportRoot.prep.cc_btn_prep.mouseEnabled = false;
		}
		playSound("_120c00_en_7168");
	}
	this.frame_759 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(758).call(this.frame_759).wait(1));

	// CC Clip
	this.cc_clip_prep = new lib.CCClipPrep();
	this.cc_clip_prep.parent = this;
	this.cc_clip_prep.setTransform(1.3,246.1);
	this.cc_clip_prep._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_prep).wait(1).to({_off:false},0).wait(1).to({regY:94.5,y:340.6},0).wait(743).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// CC button
	this.cc_btn_prep = new lib.CCButton();
	this.cc_btn_prep.parent = this;
	this.cc_btn_prep.setTransform(567.2,273.7);
	this.cc_btn_prep._off = true;
	new cjs.ButtonHelper(this.cc_btn_prep, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_prep).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:597.8,y:298.7},0).wait(743).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.PrepHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-225.5,regY:3.5,x:-494.4,y:-281.3,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(731).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.prepbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(554).to({_off:false},0).wait(1).to({regX:136.7,regY:22.9,x:-423.3,y:-242.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(176).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.prepbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(584).to({_off:false},0).wait(1).to({regX:115.4,regY:23.2,x:-444.6,y:-197.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(146).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 3
	this.instance_3 = new lib.prepbullet3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-260,-159.9,1,1,0,0,0,300,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(625).to({_off:false},0).wait(1).to({regX:137.8,regY:20.4,x:-422.2,y:-159.5,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(106).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_4 = new lib.prepbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(731).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.CoolingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{SWITCH:329});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_cool.addEventListener("click", cc_cool_clickHandler.bind(this));
		function cc_cool_clickHandler(){
			exportRoot.cool.cc_clip_cool.gotoAndPlay(1);
			exportRoot.cool.cc_btn_cool.visible = false;
			exportRoot.cool.cc_btn_cool.mouseEnabled = false;
		}
		playSound("_120c00_en_71612");
	}
	this.frame_624 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(623).call(this.frame_624).wait(1));

	// Caption
	this.cc_clip_cool = new lib.CaptionCooling();
	this.cc_clip_cool.parent = this;
	this.cc_clip_cool.setTransform(1.4,246.7);
	this.cc_clip_cool._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_cool).wait(1).to({_off:false},0).wait(1).to({regY:93.8,y:340.5},0).wait(608).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Caption Button
	this.cc_btn_cool = new lib.CCButton();
	this.cc_btn_cool.parent = this;
	this.cc_btn_cool.setTransform(567.4,273.7);
	this.cc_btn_cool._off = true;
	new cjs.ButtonHelper(this.cc_btn_cool, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_cool).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:598,y:298.7},0).wait(608).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.CoolingHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-253.8,regY:3.5,x:-522.7,y:-281.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(596).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_1 = new lib.coolingbullet2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-263,-167.5,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(429).to({_off:false},0).wait(1).to({regX:178.7,regY:22.9,x:-384.3,y:-164.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(166).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_2 = new lib.coolingbullet1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-263,-208,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(329).to({_off:false},0).wait(1).to({regX:178.1,regY:23.1,x:-384.9,y:-204.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Consider
	this.instance_3 = new lib.coolingtext();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-284,-242);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(329).to({_off:false},0).wait(1).to({regX:-231.9,x:-515.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image 2
	this.instance_4 = new lib.coolingimage2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(143,52.9,1,1,0,0,0,104,261.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(329).to({_off:false},0).wait(1).to({regX:-35.2,regY:209,x:3.8,y:0,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(266).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image
	this.instance_5 = new lib.coolingbg1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(306).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(290));

	// bg
	this.instance_6 = new lib.Whitebg("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-2.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


(lib.CookingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.cc_btn_cook.addEventListener("click", cc_cook_clickHandler.bind(this));
		function cc_cook_clickHandler(){
			exportRoot.cook.cc_clip_cook.gotoAndPlay(1);
			exportRoot.cook.cc_btn_cook.visible = false;
			exportRoot.cook.cc_btn_cook.mouseEnabled = false;
		}
		playSound("_120c00_en_71610");
	}
	this.frame_554 = function() {
		this.stop();
		
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = true;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = true;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = true;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = true;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = true;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = true;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = true;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = true;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = true;}
		
			this.visible = false;
			
			if(exportRoot.btn_receive.visible == false && exportRoot.btn_store.visible == false && exportRoot.btn_prep.visible == false && exportRoot.btn_cook.visible == false && exportRoot.btn_cool.visible == false && exportRoot.btn_reheat.visible == false && exportRoot.btn_hold.visible == false && exportRoot.btn_assemble_pack.visible == false && exportRoot.btn_serve_sell.visible == false){
				exportRoot.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(553).call(this.frame_554).wait(1));

	// caption clip
	this.cc_clip_cook = new lib.CCClip();
	this.cc_clip_cook.parent = this;
	this.cc_clip_cook.setTransform(1.3,246.4);
	this.cc_clip_cook._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cc_clip_cook).wait(1).to({_off:false},0).wait(1).to({regY:100.9,y:347.3},0).wait(538).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Caption button
	this.cc_btn_cook = new lib.CCButton();
	this.cc_btn_cook.parent = this;
	this.cc_btn_cook.setTransform(567.3,275);
	this.cc_btn_cook._off = true;
	new cjs.ButtonHelper(this.cc_btn_cook, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cc_btn_cook).wait(1).to({_off:false},0).wait(1).to({regX:30.6,regY:25,x:597.9,y:300},0).wait(538).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Heading
	this.instance = new lib.CookHeading();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-289.3,1.002,1.001,0,0,0,-3.9,-4.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-249.8,regY:3.5,x:-518.7,y:-281.4,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(526).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 1
	this.instance_1 = new lib.cookbullet1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-245,1,1,0,0,0,300,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).wait(1).to({regX:216.2,regY:23,x:-343.8,y:-242,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(201).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Bullet 2
	this.instance_2 = new lib.cookbullet2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260,-200.4,1,1,0,0,0,300,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(444).to({_off:false},0).wait(1).to({regX:214.3,regY:22.9,x:-345.7,y:-197.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(81).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image2
	this.instance_3 = new lib.cookingbg2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(324).to({_off:false},0).wait(1).to({regX:604.8,regY:318.7,x:0.2,y:4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(201).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Image1
	this.instance_4 = new lib.cookingbg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,604.6,314.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(311).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(215));

	// Background
	this.instance_5 = new lib.Whitebg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,-2.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.9,-315.9,1231.9,630.6);


// stage content:
(lib._120a00_en_716i = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_cc_intro.addEventListener("click", cc_mc_clickHandler.bind(this));
		function cc_mc_clickHandler(){
			exportRoot.cc_intro.gotoAndPlay(1);
			exportRoot.btn_cc_intro.mouseEnabled = false;
			exportRoot.btn_cc_intro.visible = false;
		}
		playSound("_120c00_en_7161");
	}
	this.frame_144 = function() {
		exportRoot.stop();
		
		function disableAll(){
			if(exportRoot.btn_receive.visible == true){exportRoot.btn_receive.mouseEnabled = false;}
			if(exportRoot.btn_store.visible == true){exportRoot.btn_store.mouseEnabled = false;}
			if(exportRoot.btn_prep.visible == true){exportRoot.btn_prep.mouseEnabled = false;}
			if(exportRoot.btn_cook.visible == true){exportRoot.btn_cook.mouseEnabled = false;}
			if(exportRoot.btn_cool.visible == true){exportRoot.btn_cool.mouseEnabled = false;}
			if(exportRoot.btn_reheat.visible == true){exportRoot.btn_reheat.mouseEnabled = false;}
			if(exportRoot.btn_hold.visible == true){exportRoot.btn_hold.mouseEnabled = false;}
			if(exportRoot.btn_assemble_pack.visible == true){exportRoot.btn_assemble_pack.mouseEnabled = false;}
			if(exportRoot.btn_serve_sell.visible == true){exportRoot.btn_serve_sell.mouseEnabled = false;}
		}
		
		exportRoot.btn_receive.addEventListener("click", receive_clickHandler.bind(this));
		function receive_clickHandler(){
			exportRoot.receive.gotoAndPlay(1); //play the info clip
			exportRoot.btn_receive.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_store.addEventListener("click", store_clickHandler.bind(this));
		function store_clickHandler(){
			exportRoot.store.gotoAndPlay(1); //play the info clip
			exportRoot.btn_store.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_prep.addEventListener("click", prep_clickHandler.bind(this));
		function prep_clickHandler(){
			exportRoot.prep.gotoAndPlay(1); //play the info clip
			exportRoot.btn_prep.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_cook.addEventListener("click", cook_clickHandler.bind(this));
		function cook_clickHandler(){
			exportRoot.cook.gotoAndPlay(1); //play the info clip
			exportRoot.btn_cook.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_cool.addEventListener("click", cool_clickHandler.bind(this));
		function cool_clickHandler(){
			exportRoot.cool.gotoAndPlay(1); //play the info clip
			exportRoot.btn_cool.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_reheat.addEventListener("click", reheat_clickHandler.bind(this));
		function reheat_clickHandler(){
			exportRoot.reheat.gotoAndPlay(1); //play the info clip
			exportRoot.btn_reheat.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_hold.addEventListener("click", hold_clickHandler.bind(this));
		function hold_clickHandler(){
			exportRoot.hold.gotoAndPlay(1); //play the info clip
			exportRoot.btn_hold.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_assemble_pack.addEventListener("click", assemble_pack_clickHandler.bind(this));
		function assemble_pack_clickHandler(){
			exportRoot.assemble_pack.gotoAndPlay(1); //play the info clip
			exportRoot.btn_assemble_pack.visible = false; //hide button for no replays
			disableAll();
		}
		
		exportRoot.btn_serve_sell.addEventListener("click", serve_sell_clickHandler.bind(this));
		function serve_sell_clickHandler(){
			exportRoot.serve_sell.gotoAndPlay(1); //play the info clip
			exportRoot.btn_serve_sell.visible = false; //hide button for no replays
			disableAll();
		}
	}
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(25).call(this.frame_169).wait(1));

	// Caption
	this.cc_intro = new lib.Cap_Intro();
	this.cc_intro.parent = this;
	this.cc_intro.setTransform(640.7,583.8);

	this.timeline.addTween(cjs.Tween.get(this.cc_intro).wait(1).to({regX:0.1,regY:142.7,x:640.8,y:726.5},0).wait(129).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(26));

	// Caption Button
	this.btn_cc_intro = new lib.CCButton();
	this.btn_cc_intro.parent = this;
	this.btn_cc_intro.setTransform(1208.3,659.5);
	new cjs.ButtonHelper(this.btn_cc_intro, 0, 1, 2, false, new lib.CCButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cc_intro).wait(1).to({regX:30.6,regY:25,x:1238.9,y:684.5},0).wait(129).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(26));

	// Serving or Selling
	this.serve_sell = new lib.ServenSellMC();
	this.serve_sell.parent = this;
	this.serve_sell.setTransform(639.9,385.4);
	this.serve_sell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.serve_sell).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Assembly and Packaging
	this.assemble_pack = new lib.AssemblyandPackingMC();
	this.assemble_pack.parent = this;
	this.assemble_pack.setTransform(639.9,385.4);
	this.assemble_pack._off = true;

	this.timeline.addTween(cjs.Tween.get(this.assemble_pack).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Holding
	this.hold = new lib.HoldingMC();
	this.hold.parent = this;
	this.hold.setTransform(639.9,385.4);
	this.hold._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hold).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Reheating
	this.reheat = new lib.ReheatMC();
	this.reheat.parent = this;
	this.reheat.setTransform(639.9,385.4);
	this.reheat._off = true;

	this.timeline.addTween(cjs.Tween.get(this.reheat).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Cooling
	this.cool = new lib.CoolingMC();
	this.cool.parent = this;
	this.cool.setTransform(639.9,385.4);
	this.cool._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cool).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Cooking
	this.cook = new lib.CookingMC();
	this.cook.parent = this;
	this.cook.setTransform(639.9,385.4);
	this.cook._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cook).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Prep
	this.prep = new lib.PrepMC();
	this.prep.parent = this;
	this.prep.setTransform(639.9,385.4);
	this.prep._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prep).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Storage
	this.store = new lib.StorageMC();
	this.store.parent = this;
	this.store.setTransform(639.9,385.4);
	this.store._off = true;

	this.timeline.addTween(cjs.Tween.get(this.store).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Receiving
	this.receive = new lib.RecievingMC();
	this.receive.parent = this;
	this.receive.setTransform(639.9,385.4);
	this.receive._off = true;

	this.timeline.addTween(cjs.Tween.get(this.receive).wait(144).to({_off:false},0).to({_off:true},1).wait(25));

	// Borders
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("EBjSA4QIAAgBMjGiAAAIAAABIguAAIAAgBIgBAAIAAguIABAAMAAAhvwIAuAAMAAABvwMDGiAAAMAAAhoqIAuAAMAAABpZg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170));

	// Title
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_1.setTransform(817.5,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525252").s().p("AhCBwIAAi8IAAggIAZAAIABAEIAAALIABAKIAAAAQAHgOAMgHQALgHASAAQAdAAAPAUQAOATAAAqQAABSg6ABQgjAAgNgcIgBAAIABAZIAAA+gAgVhUQgJAHgEAOQgFANAAAXQAAAeAKAPQAKAPAVAAQAUAAAJgOQAJgPAAghQAAghgJgOQgJgOgUAAQgOgBgJAHg");
	this.shape_2.setTransform(802.1,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525252").s().p("AgzA9QgSgVgBgoQABgnASgVQASgVAhAAQBGAAAABTIAAAEIhvAAQAAAbALAPQALAOAUAAQASAAAKgGQAKgHAEgLIAYAHQgPAlgzAAQgiAAgSgVgAgdgxQgLANgBAWIBUAAQgCgZgKgLQgLgMgUAAQgSAAgLANg");
	this.shape_3.setTransform(785.1,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_4.setTransform(772.7,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525252").s().p("AhVA2IAbgGQAFATAPAJQAPAIAZAAQAbAAAPgJQAPgJAAgSQAAgKgFgHQgFgGgIgEQgIgEgMgDIgYgGQgZgFgMgFQgNgFgIgHQgHgHgEgIQgEgJABgMQgBgbAVgOQAUgOAkAAQAkAAASALQATAKAHAaIgbAFQgFgQgNgIQgMgHgXAAQgYAAgNAIQgMAIAAARQAAAJAEAGQAGAHAJAEQAJAEAcAGIATAFIASAFQAJADAHAEQAIAEAFAGQAGAGADAJQAEAIAAALQgBAdgWAQQgXAPgoAAQhLAAgLg0g");
	this.shape_5.setTransform(758.4,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525252").s().p("AgMBtIAAjZIAZAAIAADZg");
	this.shape_6.setTransform(736.7,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_7.setTransform(725.7,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_8.setTransform(708.4,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_9.setTransform(691.6,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("AgMBtIAAieIAZAAIAACegAgMhSIAAgaIAZAAIAAAag");
	this.shape_10.setTransform(680,26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_11.setTransform(672.6,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_12.setTransform(660.6,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525252").s().p("AgkBRIAAh5IgBglIAaAAIABAhIAAAAQAGgVAIgHQAIgIAOAAIALACIAAAYQgFgCgIAAQgRAAgIAPQgJAOAAAaIAABSg");
	this.shape_13.setTransform(647.4,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525252").s().p("AgzA9QgTgVAAgoQAAgnATgVQATgVAgAAQBGAAABBTIAAAEIhxAAQAAAbAMAPQALAOAUAAQASAAAKgGQALgHADgLIAXAHQgOAlgzAAQghAAgTgVgAgdgxQgMANgBAWIBWAAQgDgZgLgLQgKgMgUAAQgSAAgLANg");
	this.shape_14.setTransform(633.2,29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525252").s().p("AhCBwIAAi8IAAggIAZAAIABAEIAAALIABAKIAAAAQAHgOAMgHQALgHASAAQAdAAAPAUQAOATAAAqQAABSg6ABQgjAAgNgcIgBAAIABAZIAAA+gAgVhUQgJAHgEAOQgFANAAAXQAAAeAKAPQAKAPAVAAQAUAAAJgOQAJgPAAghQAAghgJgOQgJgOgUAAQgOgBgJAHg");
	this.shape_15.setTransform(616.9,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525252").s().p("Ag2BdQgXgNgMgYQgNgYAAggQAAgxAcgcQAbgcAvAAQAgAAAXAMQAXANANAYQAMAYgBAgQAAAfgMAZQgMAYgXANQgXANggAAQgfAAgXgNgAg1g9QgUAWAAAnQAAAmAUAXQATAWAiAAQAkAAATgVQATgXAAgnQAAgmgTgWQgUgWgjAAQgiAAgTAVg");
	this.shape_16.setTransform(596.6,27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_17.setTransform(568.2,29.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_18.setTransform(551.5,29.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525252").s().p("ABPBRIAAhkQAAgXgGgJQgGgIgRAAQgRAAgKANQgKAMAAAYIAABbIgZAAIAAhkQAAgXgGgJQgGgIgQAAQgSAAgJANQgKAMAAAYIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAIgQALgHQALgHAPAAQASAAALAIQAKAHAEAPQAJgQALgHQALgHARAAQAYAAALANQALANAAAeIAABpg");
	this.shape_19.setTransform(530.7,29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525252").s().p("ABPBRIAAhkQAAgXgGgJQgGgIgRAAQgRAAgKANQgKAMAAAYIAABbIgZAAIAAhkQABgXgHgJQgGgIgRAAQgRAAgJANQgKAMAAAYIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIAAAIIABAPIAAAAQAJgQALgHQALgHAPAAQATAAAKAIQAJAHAFAPQAIgQAMgHQAMgHAQAAQAYAAALANQALANAAAeIAABpg");
	this.shape_20.setTransform(505.7,29.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_21.setTransform(484.8,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525252").s().p("AgvBdQgXgNgMgYQgMgYAAggQAAgxAbgcQAagcAvAAQAhAAAWANQAWANAKAZIgaAJQgHgSgQgKQgQgJgWAAQghAAgTAWQgUAWABAmQgBAlAVAXQATAXAhAAQAsAAAVgrIAXAMQgNAagWAOQgYAOgeAAQgeAAgXgNg");
	this.shape_22.setTransform(465.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(170));

	// Border
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("Ehj/AD6IAAnzMDH/AAAIAAHzg");
	this.shape_23.setTransform(640,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(170));

	// Serving or Selling
	this.btn_serve_sell = new lib.BtnServenSell();
	this.btn_serve_sell.parent = this;
	this.btn_serve_sell.setTransform(961.6,545.4,0.862,0.862);
	this.btn_serve_sell.alpha = 0;
	this.btn_serve_sell._off = true;
	new cjs.ButtonHelper(this.btn_serve_sell, 0, 1, 2, false, new lib.BtnServenSell(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_serve_sell).wait(129).to({_off:false},0).wait(1).to({regX:142.1,regY:64.1,x:1084.2,y:600.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Assembly and Packing
	this.btn_assemble_pack = new lib.BtnAssembleandPackage();
	this.btn_assemble_pack.parent = this;
	this.btn_assemble_pack.setTransform(559.5,323.4,0.89,0.875);
	this.btn_assemble_pack.alpha = 0;
	this.btn_assemble_pack._off = true;
	new cjs.ButtonHelper(this.btn_assemble_pack, 0, 1, 2, false, new lib.BtnAssembleandPackage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_assemble_pack).wait(129).to({_off:false},0).wait(1).to({regX:151.2,regY:80,x:694,y:393.4,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Reheating
	this.btn_reheat = new lib.BtnReheat();
	this.btn_reheat.parent = this;
	this.btn_reheat.setTransform(927,107.1,0.888,0.888);
	this.btn_reheat.alpha = 0;
	this.btn_reheat._off = true;
	new cjs.ButtonHelper(this.btn_reheat, 0, 1, 2, false, new lib.BtnReheat(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_reheat).wait(129).to({_off:false},0).wait(1).to({regX:107.6,regY:93.4,x:1022.5,y:190,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Holding
	this.btn_hold = new lib.BtnHolding();
	this.btn_hold.parent = this;
	this.btn_hold.setTransform(793.2,451.6,0.885,0.88,0,0,0,0,0.1);
	this.btn_hold.alpha = 0;
	this.btn_hold._off = true;
	new cjs.ButtonHelper(this.btn_hold, 0, 1, 2, false, new lib.BtnHolding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_hold).wait(129).to({_off:false},0).wait(1).to({regX:183.2,regY:56.8,x:955.4,y:501.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Cooling
	this.btn_cool = new lib.BtnCooling();
	this.btn_cool.parent = this;
	this.btn_cool.setTransform(817.9,324.8,0.884,0.867,0,0,0,0.1,0.1);
	this.btn_cool.alpha = 0;
	this.btn_cool._off = true;
	new cjs.ButtonHelper(this.btn_cool, 0, 1, 2, false, new lib.BtnCooling(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cool).wait(129).to({_off:false},0).wait(1).to({regX:170.2,regY:79.1,scaleX:0.89,x:968.3,y:393.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Cooking
	this.btn_cook = new lib.Btncook();
	this.btn_cook.parent = this;
	this.btn_cook.setTransform(784.5,107.2,0.881,0.881,0,0,0,0.1,0.1);
	this.btn_cook.alpha = 0;
	this.btn_cook._off = true;
	new cjs.ButtonHelper(this.btn_cook, 0, 1, 2, false, new lib.Btncook(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cook).wait(129).to({_off:false},0).wait(1).to({regX:86.6,regY:94.3,x:860.7,y:190.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Recieving
	this.btn_receive = new lib.BtnReceiving();
	this.btn_receive.parent = this;
	this.btn_receive.setTransform(64.1,349.5,0.886,0.886,0,0,0,0.1,0.1);
	this.btn_receive.alpha = 0;
	this.btn_receive._off = true;
	new cjs.ButtonHelper(this.btn_receive, 0, 1, 2, false, new lib.BtnReceiving(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_receive).wait(129).to({_off:false},0).wait(1).to({regX:151.6,regY:157.8,x:198.2,y:489.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Prep
	this.btn_prep = new lib.BtnPrep();
	this.btn_prep.parent = this;
	this.btn_prep.setTransform(559.4,107.3,0.886,0.886,0,0,0,0,0.3);
	this.btn_prep.alpha = 0;
	this.btn_prep._off = true;
	new cjs.ButtonHelper(this.btn_prep, 0, 1, 2, false, new lib.BtnPrep(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_prep).wait(129).to({_off:false},0).wait(1).to({regX:314.2,regY:132.1,x:837.7,y:224,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// Storage
	this.btn_store = new lib.BtnStorage();
	this.btn_store.parent = this;
	this.btn_store.setTransform(64.6,107.1,0.884,0.884,0,0,0,0,0.1);
	this.btn_store.alpha = 0;
	this.btn_store._off = true;
	new cjs.ButtonHelper(this.btn_store, 0, 1, 2, false, new lib.BtnStorage(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_store).wait(129).to({_off:false},0).wait(1).to({regX:419.2,regY:254.9,x:435.2,y:332.3,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(25));

	// instruction
	this.instance = new lib.Instructionsclip();
	this.instance.parent = this;
	this.instance.setTransform(640.5,82.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).wait(1).to({regY:2.4,y:85,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(9));

	// Click Area BG
	this.instance_1 = new lib.MainBG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640.3,360.1,1,1,0,0,0,587.3,289.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:317.5,y:388.5,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(132).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(9));

	// Click Next
	this.instance_2 = new lib.PressNext();
	this.instance_2.parent = this;
	this.instance_2.setTransform(699.9,397.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).wait(1).to({regX:-59.4,regY:88.9,x:640.5,y:486.2,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,832.5);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/DM72_00_bg_kitchen_food_potato_salad_label.jpg", id:"DM72_00_bg_kitchen_food_potato_salad_label"},
		{src:"images/DM72_04_2_FRED_JUAN_happy_man_meal_server.jpg", id:"DM72_04_2_FRED_JUAN_happy_man_meal_server"},
		{src:"images/DM72_124_01_receiving_truck_approved_supplier.jpg", id:"DM72_124_01_receiving_truck_approved_supplier"},
		{src:"images/DM72_190_01_food_flow_floor_plan.jpg", id:"DM72_190_01_food_flow_floor_plan"},
		{src:"images/DM72_34_08_chef_thinks_take_temperature_chicken_thermometer.jpg", id:"DM72_34_08_chef_thinks_take_temperature_chicken_thermometer"},
		{src:"images/DM72_34_08_cooked_chicken_skillet.jpg", id:"DM72_34_08_cooked_chicken_skillet"},
		{src:"images/DM_140_01_soup_on_counter.png", id:"DM_140_01_soup_on_counter"},
		{src:"images/DMH_08_06_spaghetti_meatball_chafing_dishes.jpg", id:"DMH_08_06_spaghetti_meatball_chafing_dishes"},
		{src:"images/DMH_110080_21_02_waitress_contaminate_food.png", id:"DMH_110080_21_02_waitress_contaminate_food"},
		{src:"images/DMH_122_01_walkin_temperature.png", id:"DMH_122_01_walkin_temperature"},
		{src:"images/DMH_44a_04_HARROON_employee_thermocouple.png", id:"DMH_44a_04_HARROON_employee_thermocouple"},
		{src:"images/DMH_52_03_fridge_cool_pots_of_soup.png", id:"DMH_52_03_fridge_cool_pots_of_soup"},
		{src:"images/NextButton.png", id:"NextButton"},
		{src:"images/testbuttonover.png", id:"testbuttonover"},
		{src:"images/testbutton.png", id:"testbutton"},
		{src:"sounds/_120c00_en_7161.mp3", id:"_120c00_en_7161"},
		{src:"sounds/_120c00_en_71610.mp3", id:"_120c00_en_71610"},
		{src:"sounds/_120c00_en_71612.mp3", id:"_120c00_en_71612"},
		{src:"sounds/_120c00_en_71614.mp3", id:"_120c00_en_71614"},
		{src:"sounds/_120c00_en_71615.mp3", id:"_120c00_en_71615"},
		{src:"sounds/_120c00_en_71616.mp3", id:"_120c00_en_71616"},
		{src:"sounds/_120c00_en_71618.mp3", id:"_120c00_en_71618"},
		{src:"sounds/_120c00_en_7163.mp3", id:"_120c00_en_7163"},
		{src:"sounds/_120c00_en_7166.mp3", id:"_120c00_en_7166"},
		{src:"sounds/_120c00_en_7168.mp3", id:"_120c00_en_7168"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;