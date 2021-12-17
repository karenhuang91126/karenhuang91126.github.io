(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B2A45_燈籠_HTML5 Canvas_atlas_1", frames: [[0,1152,333,314],[0,1468,82,230],[0,0,1121,1150],[335,1152,79,434],[1123,0,496,570],[1123,572,496,570],[1123,1144,496,570]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B2A45_燈籠_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,115), null);


(lib.春燈底稿ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 背景
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,558.2,572.7);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,217), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,39.6,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112,-66.3,1,1,0,0,0,83.4,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.5,1,1,0,0,0,19.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0,regX:39.6}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.3873,x:-118.15,y:89.75,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0.9888,x:-115.45,y:-67,regY:0}},{t:this.ikNode_1,p:{rotation:0.9521,x:-69.5,y:-279.7,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7746,x:-124.4,y:88.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:1.978,x:-119,y:-67.8,regY:0}},{t:this.ikNode_1,p:{rotation:1.9045,x:-69.5,y:-279.7,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.162,x:-130.65,y:87.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:2.9677,x:-122.5,y:-68.65,regY:0}},{t:this.ikNode_1,p:{rotation:2.8566,x:-69.5,y:-279.7,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5494,x:-136.8,y:86.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:3.9575,x:-126,y:-69.55,regY:0}},{t:this.ikNode_1,p:{rotation:3.8094,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.9369,x:-143,y:85.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:4.9467,x:-129.45,y:-70.5,regY:0}},{t:this.ikNode_1,p:{rotation:4.7615,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.3244,x:-149.15,y:84.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:5.9356,x:-132.95,y:-71.55,regY:0}},{t:this.ikNode_1,p:{rotation:5.7141,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.7121,x:-155.3,y:82.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:6.9254,x:-136.4,y:-72.65,regY:0}},{t:this.ikNode_1,p:{rotation:6.6665,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.099,x:-161.55,y:81.5,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:7.9146,x:-139.85,y:-73.75,regY:0}},{t:this.ikNode_1,p:{rotation:7.619,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.487,x:-167.5,y:79.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:8.9044,x:-143.2,y:-74.95,regY:0}},{t:this.ikNode_1,p:{rotation:8.5719,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.8742,x:-173.55,y:78.2,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:9.8934,x:-146.65,y:-76.2,regY:0}},{t:this.ikNode_1,p:{rotation:9.5244,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.2616,x:-179.6,y:76.45,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:10.8827,x:-150,y:-77.5,regY:0}},{t:this.ikNode_1,p:{rotation:10.477,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.6492,x:-185.6,y:74.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:11.8716,x:-153.35,y:-78.9,regY:0}},{t:this.ikNode_1,p:{rotation:11.4289,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0362,x:-191.55,y:72.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:12.8617,x:-156.65,y:-80.3,regY:0}},{t:this.ikNode_1,p:{rotation:12.3814,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.4242,x:-197.5,y:70.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:13.8509,x:-160,y:-81.8,regY:0}},{t:this.ikNode_1,p:{rotation:13.3337,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.8116,x:-203.4,y:68.2,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:14.8401,x:-163.25,y:-83.3,regY:0}},{t:this.ikNode_1,p:{rotation:14.2862,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.1993,x:-209.25,y:65.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:15.83,x:-166.45,y:-84.9,regY:0}},{t:this.ikNode_1,p:{rotation:15.2392,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.5864,x:-215.2,y:63.5,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:16.8193,x:-169.7,y:-86.5,regY:0}},{t:this.ikNode_1,p:{rotation:16.1911,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.9737,x:-220.85,y:61.15,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:17.8085,x:-172.9,y:-88.2,regY:0}},{t:this.ikNode_1,p:{rotation:17.1437,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.3615,x:-226.55,y:58.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:18.7974,x:-176.05,y:-90,regY:0}},{t:this.ikNode_1,p:{rotation:18.096,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.7487,x:-232.4,y:55.8,regX:19.1,regY:1.8}},{t:this.ikNode_2,p:{rotation:19.7867,x:-179.15,y:-91.75,regY:0}},{t:this.ikNode_1,p:{rotation:19.0487,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.1362,x:-237.95,y:52.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:20.7765,x:-182.3,y:-93.6,regY:0}},{t:this.ikNode_1,p:{rotation:20.0013,x:-69.5,y:-279.5,regY:0.1,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.5232,x:-243.5,y:50.15,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:21.7663,x:-185.35,y:-95.45,regY:0}},{t:this.ikNode_1,p:{rotation:20.9533,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.9115,x:-249.1,y:47.05,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:22.7556,x:-188.4,y:-97.45,regY:0}},{t:this.ikNode_1,p:{rotation:21.906,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.2985,x:-254.55,y:44,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:23.7449,x:-191.4,y:-99.45,regY:0}},{t:this.ikNode_1,p:{rotation:22.8587,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.6858,x:-260,y:40.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:24.7337,x:-194.4,y:-101.5,regY:0}},{t:this.ikNode_1,p:{rotation:23.811,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.0736,x:-265.4,y:37.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:25.7232,x:-197.3,y:-103.6,regY:0}},{t:this.ikNode_1,p:{rotation:24.7635,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.461,x:-270.7,y:34.25,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:26.7125,x:-200.25,y:-105.75,regY:0}},{t:this.ikNode_1,p:{rotation:25.7154,x:-69.4,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.848,x:-276,y:30.75,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:27.7025,x:-203.1,y:-107.95,regY:0}},{t:this.ikNode_1,p:{rotation:26.6683,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.2355,x:-281.25,y:27.25,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:28.6913,x:-205.95,y:-110.15,regY:0}},{t:this.ikNode_1,p:{rotation:27.6204,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.8614,x:-276.15,y:30.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:27.735,x:-203.2,y:-108.05,regY:0}},{t:this.ikNode_1,p:{rotation:26.6999,x:-69.35,y:-279.7,regY:-0.1,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.4867,x:-271.05,y:34,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:26.7789,x:-200.45,y:-105.9,regY:0}},{t:this.ikNode_1,p:{rotation:25.7795,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.1119,x:-265.95,y:37.2,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:25.8222,x:-197.65,y:-103.8,regY:0}},{t:this.ikNode_1,p:{rotation:24.8589,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.7381,x:-260.85,y:40.5,regX:19.1,regY:1.8}},{t:this.ikNode_2,p:{rotation:24.8656,x:-194.8,y:-101.8,regY:0}},{t:this.ikNode_1,p:{rotation:23.9383,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.3631,x:-255.5,y:43.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:23.9093,x:-191.9,y:-99.8,regY:0}},{t:this.ikNode_1,p:{rotation:23.0173,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.9884,x:-250.2,y:46.6,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:22.9527,x:-189,y:-97.85,regY:0}},{t:this.ikNode_1,p:{rotation:22.0962,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.6143,x:-244.8,y:49.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:21.997,x:-186.05,y:-95.95,regY:0}},{t:this.ikNode_1,p:{rotation:21.1755,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.2395,x:-239.45,y:52.2,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:21.0405,x:-183.05,y:-94.2,regY:-0.1}},{t:this.ikNode_1,p:{rotation:20.2547,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.8651,x:-234.1,y:54.9,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:20.0843,x:-180.05,y:-92.4,regY:-0.1}},{t:this.ikNode_1,p:{rotation:19.3349,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.4902,x:-228.45,y:57.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:19.1275,x:-177.1,y:-90.55,regY:0}},{t:this.ikNode_1,p:{rotation:18.4137,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.1156,x:-222.95,y:60.1,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:18.1715,x:-174.05,y:-88.85,regY:0}},{t:this.ikNode_1,p:{rotation:17.4927,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.7414,x:-217.4,y:62.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:17.2143,x:-171,y:-87.15,regY:0}},{t:this.ikNode_1,p:{rotation:16.572,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.3665,x:-211.8,y:64.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:16.2584,x:-167.9,y:-85.6,regY:0}},{t:this.ikNode_1,p:{rotation:15.652,x:-69.45,y:-279.6,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.9918,x:-206.15,y:67.15,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:15.3018,x:-164.75,y:-84.05,regY:0}},{t:this.ikNode_1,p:{rotation:14.7307,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.6174,x:-200.45,y:69.35,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:14.3458,x:-161.6,y:-82.55,regY:0}},{t:this.ikNode_1,p:{rotation:13.8104,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.2433,x:-194.75,y:71.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:13.3895,x:-158.4,y:-81.1,regY:0}},{t:this.ikNode_1,p:{rotation:12.8894,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.8686,x:-188.95,y:73.5,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:12.4324,x:-155.2,y:-79.7,regY:0}},{t:this.ikNode_1,p:{rotation:11.969,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.494,x:-183.2,y:75.3,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:11.4762,x:-152,y:-78.3,regY:0}},{t:this.ikNode_1,p:{rotation:11.0483,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.1196,x:-177.4,y:77.2,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:10.5197,x:-148.75,y:-77,regY:0}},{t:this.ikNode_1,p:{rotation:10.1269,x:-69.45,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.7445,x:-171.55,y:78.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:9.5634,x:-145.5,y:-75.8,regY:0}},{t:this.ikNode_1,p:{rotation:9.2063,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.3705,x:-165.7,y:80.5,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:8.6072,x:-142.2,y:-74.55,regY:0}},{t:this.ikNode_1,p:{rotation:8.2864,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.9957,x:-159.95,y:81.9,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:7.6507,x:-138.9,y:-73.45,regY:0}},{t:this.ikNode_1,p:{rotation:7.365,x:-69.6,y:-279.7,regY:0,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.6211,x:-153.9,y:83.45,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:6.6946,x:-135.55,y:-72.4,regY:0}},{t:this.ikNode_1,p:{rotation:6.4448,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.2466,x:-147.9,y:84.6,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:5.7378,x:-132.25,y:-71.3,regY:0}},{t:this.ikNode_1,p:{rotation:5.5235,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8722,x:-141.95,y:85.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:4.7817,x:-128.9,y:-70.35,regY:0}},{t:this.ikNode_1,p:{rotation:4.6028,x:-69.55,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4978,x:-136,y:86.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:3.8252,x:-125.55,y:-69.45,regY:0}},{t:this.ikNode_1,p:{rotation:3.6824,x:-69.55,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1235,x:-130,y:88.1,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:2.8688,x:-122.15,y:-68.6,regY:0}},{t:this.ikNode_1,p:{rotation:2.762,x:-69.5,y:-279.7,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7484,x:-123.95,y:88.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:1.9124,x:-118.75,y:-67.75,regY:0}},{t:this.ikNode_1,p:{rotation:1.8406,x:-69.5,y:-279.7,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3742,x:-117.95,y:89.75,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0.9556,x:-115.35,y:-66.95,regY:0}},{t:this.ikNode_1,p:{rotation:0.9206,x:-69.5,y:-279.65,regY:0,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0,regX:39.6}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.4,-297.9,325.5,501.7);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,39.6,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112,-66.3,1,1,0,0,0,83.4,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.5,1,1,0,0,0,19.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.5,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-1.4654,x:-104.95,y:91.15,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.1795,x:-108.2,y:-65.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-1.0133,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.9318,x:-97.95,y:91.7,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.3594,x:-104.4,y:-64.85,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-2.0261,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.3984,x:-90.9,y:92.25,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-3.5387,x:-100.6,y:-64.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-3.0404,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.8644,x:-83.9,y:92.4,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-4.7186,x:-96.8,y:-63.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-4.0538,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.3306,x:-76.85,y:92.55,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-5.8987,x:-92.95,y:-63.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-5.0669,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.7974,x:-69.95,y:92.6,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-7.0786,x:-89.15,y:-62.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-6.0806,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2636,x:-62.75,y:92.4,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-8.2581,x:-85.3,y:-62.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-7.0936,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.7297,x:-55.75,y:92.15,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-9.4376,x:-81.5,y:-62.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-8.1071,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.1963,x:-48.7,y:91.75,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-10.6176,x:-77.65,y:-62.2,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-9.1204,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.662,x:-41.7,y:91.25,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-11.7976,x:-73.75,y:-62.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-10.134,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.1283,x:-34.8,y:90.75,regY:1.8,regX:19.1}},{t:this.ikNode_2,p:{rotation:-12.9773,x:-69.95,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-11.1481,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.5945,x:-27.75,y:89.8,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-14.1573,x:-66.1,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-12.1613,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.0609,x:-20.75,y:88.9,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-15.3362,x:-62.2,y:-62.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-13.1749,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.5272,x:-13.75,y:87.95,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-16.5164,x:-58.4,y:-62.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-14.1881,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.9935,x:-6.85,y:86.7,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-17.6965,x:-54.55,y:-62.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-15.2021,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.4599,x:0.05,y:85.3,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-18.8759,x:-50.7,y:-62.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-16.2149,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.9262,x:6.75,y:83.95,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-20.0556,x:-46.85,y:-63.2,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-17.2289,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-26.3918,x:13.75,y:82.3,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-21.2356,x:-43.05,y:-63.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-18.2423,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-27.8585,x:20.4,y:80.65,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-22.4154,x:-39.25,y:-64.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-19.2553,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-29.3253,x:27.25,y:78.8,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-23.5953,x:-35.4,y:-64.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-20.2688,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-30.7912,x:33.95,y:76.8,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-24.7748,x:-31.65,y:-65.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-21.2824,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-32.2578,x:40.7,y:74.8,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-25.9547,x:-27.85,y:-66.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-22.2963,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-33.7235,x:47.3,y:72.5,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-27.1343,x:-24.1,y:-66.85,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-23.3095,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.19,x:53.95,y:70.2,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-28.3142,x:-20.35,y:-67.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-24.3233,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-36.6557,x:60.45,y:67.7,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-29.4941,x:-16.55,y:-68.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-25.3369,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-38.1227,x:66.95,y:65.15,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-30.6739,x:-12.85,y:-69.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-26.35,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-39.5889,x:73.45,y:62.35,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-31.8532,x:-9.15,y:-70.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-27.3635,x:-69.6,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-41.0546,x:79.85,y:59.6,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-33.0332,x:-5.5,y:-71.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-28.3768,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-42.5215,x:86.2,y:56.6,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-34.2131,x:-1.75,y:-72.75,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-29.3903,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-41.1042,x:80.05,y:59.5,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-33.0729,x:-5.35,y:-71.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-28.4108,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-39.6864,x:73.9,y:62.2,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-31.9325,x:-8.9,y:-70.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-27.4311,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-38.2696,x:67.65,y:64.9,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-30.7919,x:-12.5,y:-69.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-26.4513,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-36.8519,x:61.3,y:67.35,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-29.6514,x:-16.05,y:-68.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-25.4714,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.434,x:55.05,y:69.75,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-28.511,x:-19.7,y:-67.8,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-24.4924,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-34.0172,x:48.6,y:72.05,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-27.3701,x:-23.45,y:-66.95,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:-23.5123,x:-69.6,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-32.5993,x:42.2,y:74.3,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-26.23,x:-27,y:-66.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-22.533,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-31.1825,x:35.85,y:76.35,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-25.0893,x:-30.6,y:-65.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-21.5529,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-29.7646,x:29.2,y:78.25,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-23.9488,x:-34.3,y:-64.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-20.5728,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.3471,x:22.7,y:80.05,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-22.8085,x:-37.95,y:-64.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-19.5934,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-26.9298,x:16.15,y:81.75,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-21.6686,x:-41.7,y:-63.95,regY:-0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-18.6138,x:-69.5,y:-279.5,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-25.5128,x:9.7,y:83.35,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-20.528,x:-45.35,y:-63.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-17.634,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.0952,x:3.05,y:84.7,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-19.3877,x:-49.15,y:-62.95,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:-16.6542,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.6776,x:-3.7,y:86.05,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-18.2469,x:-52.75,y:-62.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-15.6747,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.2608,x:-10.35,y:87.3,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-17.1064,x:-56.45,y:-62.45,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-14.6953,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.8434,x:-17.05,y:88.35,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-15.9662,x:-60.15,y:-62.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-13.715,x:-69.6,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.4255,x:-23.8,y:89.3,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-14.8255,x:-63.95,y:-62.25,regY:-0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-12.7352,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.0085,x:-30.5,y:90.2,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-13.6853,x:-67.6,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-11.7556,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.5911,x:-37.25,y:90.9,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-12.5444,x:-71.35,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-10.7758,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.1736,x:-44.2,y:91.45,regY:1.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-11.4039,x:-75.05,y:-62.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-9.7966,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.7558,x:-50.8,y:91.9,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-10.2636,x:-78.8,y:-62.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-8.8168,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.3389,x:-57.6,y:92.25,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-9.1231,x:-82.45,y:-62.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-7.8369,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.921,x:-64.4,y:92.45,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-7.9826,x:-86.2,y:-62.6,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-6.8575,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.5037,x:-71.2,y:92.55,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-6.8425,x:-89.9,y:-63,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-5.8775,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.0865,x:-78.05,y:92.55,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-5.7018,x:-93.6,y:-63.4,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-4.8984,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.6693,x:-84.85,y:92.35,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-4.5615,x:-97.3,y:-63.85,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-3.9181,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.252,x:-91.6,y:92.2,regY:1.8,regX:19.2}},{t:this.ikNode_2,p:{rotation:-3.4213,x:-101,y:-64.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-2.9389,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.8347,x:-98.35,y:91.65,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-2.2807,x:-104.65,y:-64.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-1.9588,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.4173,x:-105.2,y:91.15,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:-1.1401,x:-108.3,y:-65.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-0.9792,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.5,regY:1.7,regX:19.2}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,374.20000000000005,487.2);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.6,-279.7,1,1,0,0,0,39.6,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-112,-66.3,1,1,0,0,0,83.4,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-112,90.5,1,1,0,0,0,19.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-112,y:90.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0,x:-112,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.6,y:-279.7,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.821,x:-106.5,y:91.1,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-0.821,x:-108.7,y:-65.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-0.869,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.6421,x:-101,y:91.6,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-1.6421,x:-105.5,y:-65.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-1.7383,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4636,x:-95.5,y:92,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-2.4636,x:-102.25,y:-64.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-2.6071,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.2847,x:-90,y:92.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-3.2847,x:-98.95,y:-64.15,regY:-0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-3.4765,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1056,x:-84.5,y:92.7,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-4.1056,x:-95.65,y:-63.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-4.3458,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.9274,x:-78.9,y:92.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-4.9274,x:-92.4,y:-63.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-5.2152,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.7483,x:-73.55,y:93,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-5.7483,x:-89.1,y:-62.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-6.0841,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.5697,x:-67.9,y:93,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-6.5697,x:-85.8,y:-62.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-6.9536,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.3906,x:-62.35,y:93.05,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-7.3906,x:-82.55,y:-62.45,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-7.8227,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.2122,x:-56.85,y:92.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-8.2122,x:-79.2,y:-62.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-8.6921,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.0327,x:-51.45,y:92.6,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-9.0327,x:-75.95,y:-62.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-9.5608,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.8544,x:-45.85,y:92.25,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-9.8544,x:-72.65,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-10.4298,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.6753,x:-40.45,y:91.9,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-10.6753,x:-69.35,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-11.2996,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.4968,x:-34.8,y:91.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-11.4968,x:-66.05,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-12.1685,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.3178,x:-29.35,y:90.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-12.3178,x:-62.7,y:-62.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-13.0375,x:-69.55,y:-279.5,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.1397,x:-23.8,y:90.3,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-13.1397,x:-59.45,y:-62.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-13.9069,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.9608,x:-18.35,y:89.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-13.9608,x:-56.1,y:-62.45,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-14.7759,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.7822,x:-12.9,y:88.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-14.7822,x:-52.8,y:-62.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-15.6456,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.603,x:-7.45,y:87.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-15.603,x:-49.5,y:-62.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-16.5145,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.4243,x:-2,y:87.05,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-16.4243,x:-46.25,y:-63.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-17.3838,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.2455,x:3.45,y:85.9,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-17.2455,x:-43,y:-63.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-18.2533,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.0667,x:8.85,y:84.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-18.0667,x:-39.7,y:-64.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-19.122,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.8881,x:14.2,y:83.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-18.8881,x:-36.45,y:-64.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-19.9914,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.7096,x:19.5,y:82.35,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-19.7096,x:-33.2,y:-65.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-20.8609,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.5308,x:24.95,y:81.1,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-20.5308,x:-29.95,y:-65.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-21.7298,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.3519,x:30.25,y:79.7,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-21.3519,x:-26.7,y:-66.25,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-22.5992,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.1727,x:35.55,y:78.05,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-22.1727,x:-23.45,y:-66.95,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-23.4685,x:-69.55,y:-279.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.9946,x:40.75,y:76.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-22.9946,x:-20.25,y:-67.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-24.3378,x:-69.55,y:-279.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.8158,x:46.1,y:74.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-23.8158,x:-17.05,y:-68.5,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-25.207,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.022,x:40.9,y:76.5,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-23.022,x:-20.15,y:-67.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-24.3664,x:-69.5,y:-279.5,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.2276,x:35.85,y:77.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-22.2276,x:-23.25,y:-67,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-23.5265,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.4335,x:30.7,y:79.45,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-21.4335,x:-26.35,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-22.6862,x:-69.55,y:-279.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.6401,x:25.55,y:80.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-20.6401,x:-29.5,y:-65.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-21.8456,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.8462,x:20.4,y:82.15,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-19.8462,x:-32.65,y:-65.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-21.0059,x:-69.6,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.0526,x:15.3,y:83.4,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-19.0526,x:-35.75,y:-64.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-20.1654,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.258,x:10.15,y:84.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-18.258,x:-38.95,y:-64.2,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-19.3255,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.4645,x:4.85,y:85.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-17.4645,x:-42.1,y:-63.8,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-18.4847,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.6705,x:-0.35,y:86.7,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-16.6705,x:-45.25,y:-63.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-17.645,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.8773,x:-5.75,y:87.6,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-15.8773,x:-48.45,y:-63.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-16.8047,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.0825,x:-10.85,y:88.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-15.0825,x:-51.6,y:-62.75,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-15.9645,x:-69.65,y:-279.7,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.289,x:-16.2,y:89.25,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-14.289,x:-54.95,y:-62.5,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:-15.1243,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.4955,x:-21.5,y:89.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-13.4955,x:-58,y:-62.35,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-14.2837,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.7011,x:-26.75,y:90.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-12.7011,x:-61.2,y:-62.3,regY:-0.1,regX:83.4}},{t:this.ikNode_1,p:{rotation:-13.4434,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.9075,x:-32.05,y:91.2,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-11.9075,x:-64.4,y:-62.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-12.6035,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.1134,x:-37.35,y:91.65,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-11.1134,x:-67.55,y:-62,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-11.7628,x:-69.6,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.3197,x:-42.7,y:92.05,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-10.3197,x:-70.75,y:-62.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-10.9228,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.5261,x:-48,y:92.5,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-9.5261,x:-73.95,y:-62.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-10.0825,x:-69.55,y:-279.55,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.7319,x:-53.35,y:92.8,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-8.7319,x:-77.1,y:-62.15,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-9.2426,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.9385,x:-58.7,y:92.85,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-7.9385,x:-80.35,y:-62.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-8.4021,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.1446,x:-64.05,y:92.95,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-7.1446,x:-83.5,y:-62.45,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-7.5616,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.3506,x:-69.35,y:93.15,regX:19.2,regY:1.8}},{t:this.ikNode_2,p:{rotation:-6.3506,x:-86.7,y:-62.7,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-6.7211,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.5568,x:-74.85,y:92.95,regX:19.1,regY:1.7}},{t:this.ikNode_2,p:{rotation:-5.5568,x:-89.9,y:-63,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-5.8811,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.7624,x:-80,y:92.8,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-4.7624,x:-93.05,y:-63.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-5.0414,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.9689,x:-85.4,y:92.6,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-3.9689,x:-96.2,y:-63.65,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-4.2012,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.1752,x:-90.75,y:92.35,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-3.1752,x:-99.4,y:-64.1,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-3.3609,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.3813,x:-96.05,y:92,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-2.3813,x:-102.5,y:-64.55,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-2.5205,x:-69.6,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.587,x:-101.35,y:91.55,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-1.587,x:-105.7,y:-65.05,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-1.6797,x:-69.55,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.793,x:-106.7,y:91.05,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:-0.793,x:-108.85,y:-65.6,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:-0.8402,x:-69.55,y:-279.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-111.95,y:90.5,regX:19.2,regY:1.7}},{t:this.ikNode_2,p:{rotation:0,x:-111.95,y:-66.3,regY:0,regX:83.4}},{t:this.ikNode_1,p:{rotation:0,x:-69.55,y:-279.7,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-279.7,317.8,487.5);


// stage content:
(lib.B2A45_燈籠_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮色片9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_170 = new cjs.Graphics().p("AgvCZIAAkxIBgAAIAAExg");
	var mask_graphics_171 = new cjs.Graphics().p("AgTCWIgRAAIAAgEIAAgFIAAg2IAAgSIgDgUIgFjCIA2gDIADAAIAGAAIAEAAIAKAAIACAAIgCAAIgKAAIAMAAIAFgBIAAABIgFAAIAFAAIAAAjIAMBfIABAKIgNhXIAAgSIAAASIANBXIABBkIAAAGIAAgGIABgFIAAgDIAAACIAAABIgBALIgGAvIhUABIBUgBIAAABIgnAEgAAKiUIAJAAgAAwCRgAg2gvIAAhiIAIAAIACAAIAFDCg");
	var mask_graphics_172 = new cjs.Graphics().p("AgICSIgRAAIAAgHIAAAHIgCAAIACgHIAAAAIBJgEIgBAEIgmAHgAgZCKIAAgmIAAgSIgGgTIgJjKIApgEIAXgBIABAAIAFgBIAAABIgFAAIAFAAIAAAXIAAARIAaBTIADBsIAAAHIAAgHIACgEIAAgDIAAACIAAABIgCALIgKAiIgBAHIhJAEgAAwCHgAg8geIAAhrIAAgBIAIAAIAMgBIAJDKgAAehoIAAgRIAaBaIAAAKgAAIiQIAQAAIgXABgAAYiQg");
	var mask_graphics_173 = new cjs.Graphics().p("AACCPIgPAAIAAgIIAAAIIgEAAIAEgIIAAgEIA+gEIgBAGIgnAKgAgNBwIAAgRIgIgQIAAgGIgOjOIAhgGIAXAAIgXAAIAGAAIAMAAIAFgDIAAADIAAAKIAAARIAnBQIAFBzIAAAIIAAgIIACgFIAAgCIAAABIAAABIgCANIgPAgIgBAEIg+AEgAAxB/gAgVBPIguhcIAAh1IAKAAIAWgDIAODOIAAAGgAAVhwIAAgRIAnBXIAAAKg");
	var mask_graphics_174 = new cjs.Graphics().p("AgCCLIAAgHIAAAHIgFAAIAFgHIAAgHIAAgBIA0gFIgCAIIgoAMgAhJADIAAh+IAAAAIAKAAIAfgGIAUDGIAAAYgABGBWIAAgIIADgEIgDANgABKBIIAAABIgBABgAAAiHIAGAAIAFgEIAAACIAAACIgWACg");
	var mask_graphics_175 = new cjs.Graphics().p("AACCIIAEgDIACADIAAAAgAAGCFIhVhpIAAgHIBMBWIAAALIAIgBIAEAEIAAAIIgDAEIADgEIAAgIIgEgEIAwgGIgCACIgDAIIgoAPgAgDBrIhMhWIAAiIIAAgBIALAAIAogJIAZDAIAAAogABMBNIAAgDIAEgEIAAgDIAAACIAAABIgEANgAhPAVgAgEiDIACAAIAEgEIAAAFIAAABIgTABg");
	var mask_graphics_176 = new cjs.Graphics().p("AhWApIAAgHIBlBbIgHADIAEAAIADgDIAAAAIACgBIADgBIAAgCIgDADIgCABIAAAAIgDADIgEAAIAHgDIhlhbIAAiTIAAgBIAMAAIBBgSIgCAAIAFgFIAAgHIAOAOIghADIAdC6IAAAvIA1gIIgFAFIgEAHIgcANIAAAHIgFgFIACgBIgCABIAFAFIAAgHIAcgNIgFAOIgKAEIABAAIgOAPIAAABgAAUB5IAAACIgDABgAAwBugABRA+IAAghIgOhqIAUARIAAB3IAAABIgBABIgFAEIAAgDIAAADIAAAJIgJAJgABWA9IABgCg");
	var mask_graphics_177 = new cjs.Graphics().p("AhcA3IAAgGIBjBJIAqgUIgHAQIgKAFIAAgHIgJAHIgPAAIAPAAIAJgHIAAAHIAAARIAAAAIgYgRIAYARIAAAPgAAIB7IgBgBIAAABIABAAgAAIB7gAAHB7IAAgBIABABgAAHB6IhjhJIAAicIAAgBIAAAAIANAAIBCgVIgHAAIAFgGIAAgTIAiAaIgnAFIAhCxIAAArIAygJIgLAIIgDAGIgqAUgAAxBmgABXAzIAAAIIAAAKIgOALgABXAzIAAggIgShuIAYARIAAB+IAAACIgBABIgFAEgABcA3IABgDg");
	var mask_graphics_178 = new cjs.Graphics().p("AhiBHIAAimIAAgBIAAAAIANAAIBDgYIgLAAIAFgHIAAgaIAAgFIA6AlIgyAHIAmCqIAAAnIAxgLIgTAMIgCAGIgrAXIAXAAIACAAIALgGIAAAGIgLAAIALAAIAAATIAAAOgAArB9gAAHB9IArgXIgJARIgLAGgAAyBmgABcAvIAAgeIgXh0IAeATIAACGIAAABIgBABIgGADgABiA4IABgCgAgmh4IgJAAIAXghIAAAaIgFAHIALAAIhDAYgAgYiZg");
	var mask_graphics_179 = new cjs.Graphics().p("AhpBWIAAiwIAAgBIAPAAIBDgbIgPAAIAEgIIAAgdIAAgNIBYAuIhDALIAAAAIAsChIAAAkIAsgMIgDAFIgTAKIgCAEIgtAaIAXAAIgXAAIAtgaIgLAUIgLAGIAOAAIAMgGIAAAGIgMAAIAMAAIAAAVIAAAdgAA3B3gAA1BZIATgKIgCADIgTALgABIBPgABiAjIAAgdIgeh5IAlAUIAACOIgBACIgGADgABoAxgABpAvIAAABIgBABgABpAvgAgph2IgOAAIAVglIAAAdIgEAIIAPAAIhDAbgAgiibg");
	var mask_graphics_180 = new cjs.Graphics().p("AhvBlIAAi6IAAgBIAPAAIBFgeIgRAAIARAAIhFAeIA0geIgDAAIAEgJIAAggIAAgWICbBFIAACXIgBABIgIAEIAAgXIAAgaIgjh3IhNAOIABAAIAvCZIAAAgIAmgMIgEAIIgTAJIgDAEIgtAcIAVAAIgVAAIAtgcIgMAUIgMAIIAaAAIANgGIAAAGIgNAAIANAAIAAAXIAAArgABCBygAAzBWgABvAqgABwApIAAABIgBAAgABwApg");
	var mask_graphics_181 = new cjs.Graphics().p("Ah1B0IAAjEIAAgBIAQAAIBGghIgRAAIARAAIhGAhIA1ghIgIAAIADgKIAAgjIAAgfICrBCIAACeIgBACIgJADIAAgbIAAgZIgmhsIhLAQIA2CRIAAAcIAegMIgEAHIgMAIIgJAEIgCADIguAeIAUAAIgUAAIAugeIgOAWIgMAIIAlAAIAPgFIAAAFIgPAAIAPAAIAAAaIAAA5gABOBsgAA0BOgAB1AkgAB2AiIAAACIgBAAgAB2AigAhIhyIATgtIAAAjIgDAKgAg1ifg");
	var mask_graphics_182 = new cjs.Graphics().p("Ah7CDIAAjNIAAgBIAAgBIAQAAIBHgkIgQAAIAQAAIhHAkIA3gkIgNAAIADgKIAAgnIAAgoIC6A+IAACnIAAACIgKADIAAghIAAgXIgqhgIhJARIA7CJIAAAYIAXgKIgEAFIgSAMIgEACIgCACIgwAhIATAAIgTAAIAwghIgQAYIgNAJIAyAAIAPgGIAAAGIgPAAIAPAAIAAAcIAABHgABZBngAA1BGgAB8AegAB8AcIAAABIAAABgAB8Acg");
	var mask_graphics_183 = new cjs.Graphics().p("AiCCSIAAjXIAAgBIAAgBIARAAIBIgoIgPAAIAPAAIhIAoIA5goIgSAAIADgKIAAgrIAAgvIDKA6IAACvIgBABIgLADIAAgDIgmATIAmg1IAAAiIAAgiIAAgXIgthUIhIASIBACCIAAATIAPgHIgBACIgVAPIgEABIgCADIgwAiIASAAIgSAAIAwgiIgRAYIgNAKIA8AAIARgFIAAAFIgRAAIARAAIAAAfIAABUgABkBhgAA1A/gAA7A7gABQAsIABgCIAmgTIAAADIALgDIgLARIg8ATgAB3AagACCAXgACDAWIAAABIgBAAgACDAWgAB3gLg");
	var mask_graphics_184 = new cjs.Graphics().p("AiIChIAAjhIAAgBIAAgBIASAAIBJgqIgOAAIgYAAIADgNIAAgtIAAg5IDZA3IAAC4IAAABIgMACIAAgHIAAgjIAAgVIgxhIIhGATIBFB5IAAAQIgRAMIgCABIgCACIgxAkIAQAAIBJAAIASgEIAAAEIgSAAIASAAIAAAiIAABjgABwBbgAAFBbIAxgkIgTAaIgOAKgAA2A3gABLAoIAHgFIArg6IAAAjIgyAcgACJARgACJAQIAAABIAAAAgACJAQgAg7hsIAOAAIhJAqg");
	var mask_graphics_185 = new cjs.Graphics().p("AiOCwIAAjrIAAgBIAAAAIASAAIBKguIgNAAIgdAAIADgNIAAgxIAAhBIDoAzIAAC/IAAABIgMADIAAgNIAAgUIAAgOIgBABIAAgVIg0g+IhFAXIABAAIBKBwIAAAGIgbAVIgBAAIgBABIgyAnIAPAAIgPAAIAygnIgVAcIgOALIBUAAIATgFIAAAFIgTAAIATAAIAAAkIAABwgAB7BWgAA3AvgABUAZIABgBIAtg5IABANIgBgNIABgBIAAAOIAAAUIgvAfgACPAKgACPAJIAAABIAAAAgACPAJgAg/hqIANAAIhKAug");
	var mask_graphics_186 = new cjs.Graphics().p("AiVC/IAAj1IAAgBIAAAAIAUAAIBLgxIgMAAIgjAAIACgOIAAg0IAAhKID5AwIAADHIgBABIgNADIAAgQIAAgXIAAgNIAAAAIAAAAIAAANIAAgNIAAgTIg4gyIhDAYIABAAIBNBlIgEAEIgeAYIAAAAIgBAAIg0AqIAPAAIBfAAIAUgFIAAAFIgUAAIAUAAIAAAlIAAB/gACGBRgAAEBRIA0gqIgXAeIgOAMgAA4AngACWADIAAABIgBAAgAhChoIAMAAIhLAxg");
	var mask_graphics_187 = new cjs.Graphics().p("AibDOIAAj/IAAgBIAAgBIAUAAIBMgzIgLAAIgoAAIACgPIAAg3IAAhTIEIAsIAADQIgBACIgNABIAAgVIAAgXIgBgNIABgBIAAAOIAAgOIgBABIAAgSIg7gmIhBAZIAAAAIBNBYIgFAFIggAaIAAAAIgBABIg0ArIANAAIBrAAIAVgEIAAAEIgVAAIAVAAIAAAoIAACNgACRBLgAAEBLIA0grIgXAfIgQAMgAA4AggACbgBgACcgDIAAABIgBABgACcgDgAhGhmIALAAIhMAzg");
	var mask_graphics_188 = new cjs.Graphics().p("AiiDdIAAkJIAAgBIAAgBIAWAAIBMg2IgKAAIgtAAIACgQIAAg6IAAhcIEXApIAADYIAAABIgPACIAAgaIAAgXIAAgOIAAAAIAAAOIAAgOIAAAAIAAgQIg/gaIg/AaIABAAIBLBMIgFAGIgiAbIgBAAIg1AtIALAAIgLAAIA1gtIgZAgIgRANIB3AAIAXgDIAAADIgXAAIAXAAIAAArIAACbgACdBFgACigIIAAgBIAAABgACigJgAhKhkIAKAAIhMA2gAiBhkIAMhKIAAA6IgCAQg");
	var mask_graphics_189 = new cjs.Graphics().p("AinDsIAAkTIAAgBIAAgBIAVAAIBOg5IgJAAIAJAAIhOA5IBFg5Ig0AAIACgRIAAg9IAAhkIEnAkIAADhIAAABIgQACIAAgfIAAgXIAAgOIAAgBIAAAPIAAgPIAAABIAAgPIhCgPIg9AcIBKBAIgFAFIhaBNIAKAAICDAAIAXgDIAAADIgXAAIAXAAIAAAtIAACogACoBAgACogOIAAgBIAAABgACogPgAiJhiIAKhOIAAA9IgCARgAh/iwg");
	var mask_graphics_190 = new cjs.Graphics().p("AiwD7IAAkcIAAgCIAAgBIAWAAIBPg8IgJAAIAJAAIhPA8IBGg8Ig4AAIACgRIAAhBIAAhtIE3AhIAADpIgBAAIgQACIAAgjIAAgYIgBgOIABAAIAAAOIAAgOIgBAAIAAgNIhGgDIg7AdIBIA1IgDAEIgmAgIAAAAIgBABIg3AvIAKAAICNAAIAZgCIAAACIgZAAIAZAAIAAAwIAAC2gACxA6gAABA6IA3gvIgdAhIgQAOgAA4ALgACsgVIABAAIAAAAgACtgVgAiUhgIAKhSIAABBIgCARgAiKiyg");
	var mask_graphics_191 = new cjs.Graphics().p("Ai5EJIAAkmIAAgBIAAgBIAXAAIBQhAIgIAAIg9AAIABgSIAAhEIAAh1IFGAdIAADxIAAAAIgSADIAAgpIAAgJIAAgdIAAAAIAAgLIhJAIIg5AfIAAAAIBEAqIgBACIhhBUIAIAAICaAAIAagCIAAACIgaAAIAaAAIAAAzIAADEgAC6A0gACwgcIAAAAIAAAAgAhahfIAIAAIhQBAgACehoIAAAAIAAAdgAiehfIAIhWIAABEIgBASg");
	var mask_graphics_192 = new cjs.Graphics().p("AjCEYIAAkwIAAgBIAAgBIAYAAIBRhCIgHAAIhDAAIABhaIAAh/IFWAaIAAD5IAAAAIgTABIAAgsIAAgRIAAgWIAAAAIAAgKIhNAUIg3AgIAAAAIBAAhIhhBYIAGAAIClAAIAcgCIAAACIgcAAIAcAAIAAA0IAADTgADDAvgAhghcIAHAAIhRBCgAC0giIAAAAIAAAAgAiphcIAHhaIgBBagAChh0IAAAAIAAAWg");
	var mask_graphics_193 = new cjs.Graphics().p("AjLEnIAAk5IAAgCIAAgBIAZAAIBShGIgGAAIhJAAIABhdIAAiHIFmAVIAAECIgBAAIgTABIAAgxIAAgRIAAgXIAAABIAAgJIhQAgIg2AhIABAAIA6AZIhgBYIAHAAICvAAIAdgCIAAACIgdAAIAdAAIAAA2IAADggADMAqgAhmhbIAGAAIhSBGgAC3goIABAAIAAAAgAi0hbIAGhdIgBBdgACkh/IAAgBIAAAXg");
	var mask_graphics_194 = new cjs.Graphics().p("AjUE2IAAlDIAAgCIAAgBIAZAAIBThJIgEAAIhPAAIABhiIAAiQIF2ATIAAEKIgVABIAAg2IAAgRIAAgXIAAAAIAAgHIhUArIgzAjIAAAAIAzARIgjAhIAAAAIgCABIg4A1IAFAAIC7AAIAfgBIAAABIgfAAIAfAAIAAA5IAADvgADVAkgAgKAkIA4g1IgzA1gAhshZIAEAAIhTBJgAAugRgAi/hZIAFhiIgBBigACniLIAAAAIAAAXg");
	var mask_graphics_195 = new cjs.Graphics().p("AjdFGIAAlOIAAgCIAAgBIAaAAIBVhLIgEAAIhUAAIABhnIAAiYIGEAOIAAESIAAAAIgVABIAAg7IAAgRIAAgXIAAABIAAgGIhYA2IgxAlIABAAIAqALIhZBVIAFAAIDGAAIAggCIAAACIggAAIAgAAIAAA7IAAD8gADeAfgAhyhWIAEAAIhVBLgAC/g1IAAAAIAAAAgAjJhWIAEhnIgBBngACqiWIAAgBIAAAXg");
	var mask_graphics_196 = new cjs.Graphics().p("AjmFVIAAlYIAAgCIAAgBIAbAAIBShOIADAAIhVBOIBVhOIgDAAIhZAAIABhrIAAihIGUALIAAEaIgWAAIAAg/IAAgRIAAgXIgBAAIAAgEIiKBoIAiAGIhUBRIADAAIDTAAIAhgBIAAABIghAAIAhAAIAAA+IAAEKgADnAZgAjUhUIADhrIgBBrgACsiiIABAAIAAAXgAjRi/g");
	var mask_graphics_197 = new cjs.Graphics().p("AjvFkIAAljIAAgBIAAAAIAcAAIAlgkIAvguIACAAIgxAuIAxguIgCAAIheAAIAAhTIAAgcIAAiqIGkAIIAAEhIgXABIAAhEIAAgSIgBgXIABAAIAAAXIAAgXIgBAAIAAgCIiMB0IABAAIAYADIhPBNIADAAIDdAAIAJAAIAagBIAAABIgaAAIAaAAIAABAIAAEYgADwAUg");
	var mask_graphics_198 = new cjs.Graphics().p("AjeFzIgaAAIAAlsIAAgCIAAgBIAdAAIA+g8IAYgYIABAAIgZAYIAZgYIgBAAIhkAAIAAgsIAAhHIAAizIGzAEIAAEqIgYAAIAAhIIAAgSIAAgYIAAABIAAgCIiOCCIABAAIAMABIgJAJIgBABIgmAmIgXAWIABAAIgBAAIAXgWIgWAWIDqAAIAJAAIAaAAIgaAAIAaAAIAAAAIABAZIgBAqIAAEmIgwAAgACyi5IAAgBIAAAYg");
	var mask_graphics_199 = new cjs.Graphics().p("AhhGCIiCAAIgdAAIAAl5IAdAAIBYhXIhqAAIAAkyIHEAAIAAEyIgZAAIAAh3IgBAAIAAAAIiPCPIg+A/IEZAAIAAF5gAhhAJIiCAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_graphics_170,x:385.8,y:474.2}).wait(1).to({graphics:mask_graphics_171,x:386.45,y:474.825}).wait(1).to({graphics:mask_graphics_172,x:387.125,y:475.475}).wait(1).to({graphics:mask_graphics_173,x:387.75,y:476.1}).wait(1).to({graphics:mask_graphics_174,x:388.425,y:476.75}).wait(1).to({graphics:mask_graphics_175,x:389.075,y:477.375}).wait(1).to({graphics:mask_graphics_176,x:389.75,y:478.5}).wait(1).to({graphics:mask_graphics_177,x:390.375,y:479.325}).wait(1).to({graphics:mask_graphics_178,x:391.05,y:479.45}).wait(1).to({graphics:mask_graphics_179,x:391.7,y:480.325}).wait(1).to({graphics:mask_graphics_180,x:392.35,y:481.175}).wait(1).to({graphics:mask_graphics_181,x:393,y:482.025}).wait(1).to({graphics:mask_graphics_182,x:393.65,y:482.875}).wait(1).to({graphics:mask_graphics_183,x:394.325,y:483.75}).wait(1).to({graphics:mask_graphics_184,x:394.975,y:484.6}).wait(1).to({graphics:mask_graphics_185,x:395.625,y:485.45}).wait(1).to({graphics:mask_graphics_186,x:396.275,y:486.3}).wait(1).to({graphics:mask_graphics_187,x:396.95,y:487.175}).wait(1).to({graphics:mask_graphics_188,x:397.6,y:488.025}).wait(1).to({graphics:mask_graphics_189,x:398.25,y:488.875}).wait(1).to({graphics:mask_graphics_190,x:399.15,y:489.725}).wait(1).to({graphics:mask_graphics_191,x:400.05,y:490.6}).wait(1).to({graphics:mask_graphics_192,x:400.975,y:491.45}).wait(1).to({graphics:mask_graphics_193,x:401.875,y:492.3}).wait(1).to({graphics:mask_graphics_194,x:402.8,y:493.15}).wait(1).to({graphics:mask_graphics_195,x:403.7,y:494.025}).wait(1).to({graphics:mask_graphics_196,x:404.625,y:494.875}).wait(1).to({graphics:mask_graphics_197,x:405.525,y:495.725}).wait(1).to({graphics:mask_graphics_198,x:406.4625,y:496.5875}).wait(1).to({graphics:mask_graphics_199,x:407.35,y:497.45}).wait(1));

	// 春
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("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");
	this.shape.setTransform(403.7104,411.434,0.683,0.7338);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170).to({_off:false},0).wait(30));

	// 遮色片8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_130 = new cjs.Graphics().p("AglI1IhGm5ICOgXIAAl4ID/AAIj/AAQgQgWgJgbIgHgVIjAAAIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAogiA0AAIAFAAQBAABAtAzIAEAFQAsAzAEBGIAAAQQAABGglA0IBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AgjJCIgCgNIgBgKIhFmvICOgXIAAl4ID/AAIj/AAIjgAAIAAhGIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAoghA0gBQBFABAtAzQAwA4AEBGQAABBgVAuIgQAbIBiAAIAANIIj8AAIipAbg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AglI1IhGm5ICOgXIAAl4ID/AAIj/AAQgQgWgJgbIgHgVIjAAAIjGAAIAAjzIDGAAIERAAQgJAPgGAQQAogiA0AAIAFAAQBAABAtAzIAEAFQAsAzAEBGIAAAQQAABGglA0IBiAAIAANIIj8AAIipAbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_1_graphics_130,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_131,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_132,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_133,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_134,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_135,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_136,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_137,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_138,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_139,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_140,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_141,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_142,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_143,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_144,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_145,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_146,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_147,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_148,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_149,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_150,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_151,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_152,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_153,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_154,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_155,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_156,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_157,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_158,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_159,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_160,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_161,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_162,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_163,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_164,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_165,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_166,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_167,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_168,x:421.375,y:486.95}).wait(1).to({graphics:mask_1_graphics_169,x:421.375,y:486.95}).wait(31));

	// 春
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F1F").s().p("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");
	this.shape_1.setTransform(403.7208,411.4391,0.683,0.7338);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(130).to({_off:false},0).wait(70));

	// 遮色片7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_110 = new cjs.Graphics().p("Ah0AjIAAg7IAAgKIDqAAIAAAKIAAA7g");
	var mask_2_graphics_111 = new cjs.Graphics().p("Ah0BBIAAhuIAAgTIDqAAIAAATIAABug");
	var mask_2_graphics_112 = new cjs.Graphics().p("Ah0BfIAAiiIAAgbIDqAAIAAAbIAACig");
	var mask_2_graphics_113 = new cjs.Graphics().p("Ah0B9IAAjVIAAgkIDqAAIAAAkIAADVg");
	var mask_2_graphics_114 = new cjs.Graphics().p("Ah0CbIAAkJIAAgsIDqAAIAAAsIAAEJg");
	var mask_2_graphics_115 = new cjs.Graphics().p("Ah0C4IAAk6IAAg2IDqAAIAAA2IAAE6g");
	var mask_2_graphics_116 = new cjs.Graphics().p("Ah0DXIAAlvIAAg+IDqAAIAAA+IAAFvg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Ah0D0IAAmhIAAhGIDqAAIAABGIAAGhg");
	var mask_2_graphics_118 = new cjs.Graphics().p("Ah0ESIAAnVIAAhOIDqAAIAABOIAAHVg");
	var mask_2_graphics_119 = new cjs.Graphics().p("Ah0EwIAAoIIAAhXIDqAAIAABXIAAIIg");
	var mask_2_graphics_120 = new cjs.Graphics().p("Ah0FOIAAo8IAAhfIDqAAIAABfIAAI8g");
	var mask_2_graphics_121 = new cjs.Graphics().p("Ah0FsIAApvIAAhoIDqAAIAABoIAAJvg");
	var mask_2_graphics_122 = new cjs.Graphics().p("Ah0GKIAAqjIAAhwIDqAAIAABwIAAKjg");
	var mask_2_graphics_123 = new cjs.Graphics().p("Ah0GoIAArWIAAh5IDqAAIAAB5IAALWg");
	var mask_2_graphics_124 = new cjs.Graphics().p("Ah0HGIAAsJIAAiCIDqAAIAACCIAAMJg");
	var mask_2_graphics_125 = new cjs.Graphics().p("Ah0HkIAAs8IAAiLIDqAAIAACLIAAM8g");
	var mask_2_graphics_126 = new cjs.Graphics().p("Ah0IBIAAtvIAAiTIDqAAIAACTIAANvg");
	var mask_2_graphics_127 = new cjs.Graphics().p("Ah0IgIAAujIAAicIDqAAIAACcIAAOjg");
	var mask_2_graphics_128 = new cjs.Graphics().p("Ah0I9IAAvVIAAikIDqAAIAACkIAAPVg");
	var mask_2_graphics_129 = new cjs.Graphics().p("Ah0JbIAAwJIAAisIDqAAIAACsIAAQJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_2_graphics_110,x:373.25,y:427.95}).wait(1).to({graphics:mask_2_graphics_111,x:373.25,y:430.95}).wait(1).to({graphics:mask_2_graphics_112,x:373.25,y:433.925}).wait(1).to({graphics:mask_2_graphics_113,x:373.25,y:436.925}).wait(1).to({graphics:mask_2_graphics_114,x:373.25,y:439.925}).wait(1).to({graphics:mask_2_graphics_115,x:373.25,y:442.9}).wait(1).to({graphics:mask_2_graphics_116,x:373.25,y:445.9}).wait(1).to({graphics:mask_2_graphics_117,x:373.25,y:448.875}).wait(1).to({graphics:mask_2_graphics_118,x:373.25,y:451.875}).wait(1).to({graphics:mask_2_graphics_119,x:373.25,y:454.875}).wait(1).to({graphics:mask_2_graphics_120,x:373.25,y:457.85}).wait(1).to({graphics:mask_2_graphics_121,x:373.25,y:460.85}).wait(1).to({graphics:mask_2_graphics_122,x:373.25,y:463.85}).wait(1).to({graphics:mask_2_graphics_123,x:373.25,y:466.825}).wait(1).to({graphics:mask_2_graphics_124,x:373.25,y:469.825}).wait(1).to({graphics:mask_2_graphics_125,x:373.25,y:472.8}).wait(1).to({graphics:mask_2_graphics_126,x:373.25,y:475.8}).wait(1).to({graphics:mask_2_graphics_127,x:373.25,y:478.8}).wait(1).to({graphics:mask_2_graphics_128,x:373.25,y:481.775}).wait(1).to({graphics:mask_2_graphics_129,x:373.25,y:484.775}).wait(71));

	// 春
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332F1F").s().p("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");
	this.shape_2.setTransform(403.726,411.4493,0.683,0.7338);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(110).to({_off:false},0).wait(90));

	// 遮色片6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_89 = new cjs.Graphics().p("AglBkIAAjHIBLAAIAADHg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AA2BuIAAgNIAPgeIAAAWIgCAOIgEAJIgJgCIAJACIAEgJIACgOIAAAfIgPAAgAggBqIgHgTIADggIAJATIAAAggAgkA3IAAgBIAFgLIgFgVIAAgCIAFgJIgPguIACgKIgYgtIAAgbIBYAAIAMAAIAIAVIAAAFIAEANIhJAAIAABLIACAJIAABEgAgnAxIADgbIAFAVIgFALIAAABgAgkAWgAAshOIgEgNIAAgFIgIgVIgMAAIAFgCIAKACIAFACIAAAEIALAhg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AA+B/IAegcIAAALIgFARIgHAFgAgkB4IgOgUIAEggIABgJIALgKIgLgWIALgHIgbgwIABgCIgFgFIAFgOIgwgqIAwAqIgFAOIgrgxIAAgHIAAgkIB0AAIAKAAIAFADIAGALIAEAGIAAAGIBDCKIhDiKIAAgGIgEgGIgGgLIgFgDIgKAAIAGgEIATAGIAAAGIBMCEIgJAYIgIAYIAAAQIgOg/IgVg+IhYAAIAABQIAEALIAAAvIgTgWIATAWIAAAfgAhBgOIAEgOIAbAwIgLAHgAhBgjIAFAFIgBACg");
	var mask_3_graphics_92 = new cjs.Graphics().p("ABbCQIAcgQIgGASIgMACgAgjCBIgVgVIAFgeIADgTIAQgHIgPgXIAPgFIgqg5IACgGIgFgDIAFgPIhHgnIBHAnIgFAPIhCgwIAAgGIAAgtICPAAIAJAAIAHABIAJAMIAHAFIAAAJIBmCfIhmifIAAgJIgHgFIgJgMIgHgBIgJAAIAIgGIAOAGIAKABIAAAIIBwCZIgKAYIgOAjIAAAPIgHgPIgPgtIgeg6IhgAAIAABXIAGALIAAAcIgdgZIAdAZIAAAcgAhKghIgEgHIABgCIAFADIgCAGg");
	var mask_3_graphics_93 = new cjs.Graphics().p("ABTCLIAnARIAEAAIgrARgAB+CcIAOgGIgDAHgAB+CcgACTCGIAAAAIAAANIgHADgACTBpIgKgKIgTguIgog3IhnAAIAABdIAHAKIAAAJIgngaIAnAaIAAAbIgRgDIgcgWIAGgcIAFgdIAVgFIgSgYIASgCIg4hCIAEgJIgHgDIAHgOIhggmIAAg2ICsAAIAHAAIAJgCIALAPIAJAEIAAAKICMC1IiMi1IAAgKIgJgEIgLgPIgJACIgHAAIAIgIIARAIIALABIAAAJICXCvIgLAXIgWAvIAAAqIAAABgAg/BMIALg1IADgBIASAYIgVAFIgFAdgAgxAWg");
	var mask_3_graphics_94 = new cjs.Graphics().p("ABlCMIAwAYIATAEIAMgZIAAAYIhPAYgACoBuIgZgwIgxg0IhuAAIAABgIgqgYIAHgmIAcgDIgVgZIAVAAIhIhMIAFgMIgGgDIAGgNIh3gjIB3AjIgGANIAGADIgFAMIgGgFIAFgKIhxgqIAAgGIAAhAIDIAAIAGAAIAKgDIAOAPIAMAFIAAALICxDKIgeA7IAAANg");
	var mask_3_graphics_95 = new cjs.Graphics().p("ABSCzIAJgPIAPAHIAAAVgAgiCjIgqgYIAGgZIAzAaIAAAYIADACgAC8CbIgegyIg8gxIh1AAIAABUIgzgaIAKgxIAhAAIgXgYIAXAAIhYhUIAIgRIgHgBIAHABIgIARIgGgGIAHgMIAHgNIiPghIAAhIIDjAAIAFAAIANgGIAQARIAOAEIAAANIDXDfIjXjfIAAgNIgOgEIgQgRIgNAGIgFAAIALgMIAVAMIAQABIAAAMIDiDaIgLAUIgnBHIAAAMgAhGByIgGgDIAQhHIAKABIhHhKIAGgKIBYBUIgXAAIAXAYIghAAIgKAxg");
	var mask_3_graphics_96 = new cjs.Graphics().p("ABLDIIASAAIgBAEgADlCxIgRAFIgigyIhGguIh7AAIAABGIg+gcIA+AcIAAAYIgSgDIgxgZIAFgYIANg6IAmACIgYgYIAYACIhnheIAKgTIgGgCIAGgMIimgfIAAhRID/AAIACAAIAQgJIATATIAQAEIgQgEIgTgTIgQAJIgCAAIALgOIAYAOIASABIAAANIAAABIAAANID9D1IgvBSIAAAjIAAAAgADlDJgADlCmIAvhSIAKALIg5BqgAhSB+IAShPIAOABIAYAYIgmgCIgNA6gAgyAwIhVhSIAGgKIgGgFIAKgQIAGACIgKATIBnBegAgyAwgAh9hBg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AEADFIgTAKIgng0IhQgqIiDAAIAAA5IhHgeIAQhEIAsAEIgZgXIAZADIh4hoIB4BoIgZgDIhkhbIAFgKIANgXIgGgBIAGgLIi+gcIAAhbIEaAAIABAAIATgLIAVAUIATAEIgTgEIgVgUIgTALIgBAAIAOgQIAaAQIAUABIAAAMIAAADIAAANIEiEKIg3BeIABAgIgBAAgAEBDbgAEAC7IA3heIALAKIhBB0gAggC8Ig4gaIAEgWIBHAeIAAAWgAhYCKIAUhXIATACIAZAXIgsgEIgQBEgAgxA1g");
	var mask_3_graphics_98 = new cjs.Graphics().p("AEcDUIgWAPIgsg1IhagmIiKAAIAAAsIhRggIBRAgIAAAUIgWgFIg/gbIAEgUIAThOIAxAGIgYgWIAYADIiHhwICHBwIgYgDIh0hlIAFgIIAQgbIgHgBIAHgLIjXgZIAAhkIE2AAIABAAIABgBIATgMIAZAWIAUADIAAAFIAAAMIFJEgIhABpIAAAeIAAAAgAEcDpgAEcDLIBAhpIAKAIIhKB/gAgKC0gAgvA2g");
	var mask_3_graphics_99 = new cjs.Graphics().p("AA8CRIhFgcIAFgSIBZAiIAAASgAAugBIiChuIAFgIICVB6gAhUh7IARgbIAGABIgSAeg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AEHDWIhuggIiZAAIAAASIhjgiIAXhiIA8AKIgXgUIAXAEIimiDIAVghIgGgBIAGgIIkGgWIAAh2IFqAAIADAAIAGgHIAQgLIAeAZIAZADIAAAKIAAAKIGVFJIhRCCIAAAHIgaAZgAgaDTIhOgdIAFgQIBjAiIAAARgAhoCkIAchxIAlAHIAXAUIg8gKIgXBigAgnA6gAi2hFIgEgDIATgfIAGABIgVAhg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AEbDoIh5gcIigAAIAAAGIhtglIBtAlIAAAOIgdgHIhUgeIAEgOIAbhsIBBALIgWgRIAWAFIi2iNIAYglIgFAAIAFgIIkfgTIAAh/IGEAAIAGAAIAHgKIAPgLIAiAbIAbADIAAAMIAAAIIG8FfIhbCOIAAAHIgdAdgAhvCsIAfh6IArAJIAWARIhBgLIgbBsgAglA7IikiBIAEgHIC2CNgAglA7gAjJhPIAXgjIAFAAIgYAlgAiyhyg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AEuD7IhmgTIgKgHIgCAFIgJgCIgGgFIgBADIiOAAIiQguIAdh2IBIAOIgVgQIAVAEIjHiVIDHCVIgVgEIi1iMIADgFIAbgpIgFAAIAFgIIk2gQIAAiIIGeAAIAHAAIAKgNIANgJIAkAcIAeABIAAAQIAAAIIHhFzIhjCaIAAAGIgfAhgAC8DmIACgFIAKAHgAhyC0IgDgBIAgiCIAzALIAVAQIhIgOIgdB2gAgiA8g");
	var mask_3_graphics_103 = new cjs.Graphics().p("AFCENIhPgMIgogaIgDAHIADgHIAoAaIgVgCIgWgRIgLgIIgGATIgBgBIhrAAIjFg9IAhiAIBNARIgTgPIATAFIjWifIAdgtIgFAAIAFAAIgdAtIDWCfIgTgFIjGiVIADgFIgDgCIAbgrIAFgGIlOgOIAAiRIG4AAIAJAAIAMgRIALgIIAoAdIAgACIAAASIAAAGIIHGJIhsClIAAAGIghAmgAAwD4IhKgSIhiggIACgLIDFA9gAgfA9g");
	var mask_3_graphics_104 = new cjs.Graphics().p("AEZEPIA9AHIBJA+IAkgsIgkAsIhJg+Ig9gHIhBgrIgCAGIgLgHIgJAiIgDAAIhFAAIj7hMIAjiLIBSATIgQgMIAQAMIhSgTIgjCLIgDgBIAmiTIBCAQIAQAEIjmioIAggwIgDgBIADgEIllgMIAAibIHRAAIAMAAIAOgUIAJgHIArAfIAiACIAAAUIAAAGIIvGdIh2CyIAAAEIAAAJIAAAAIgkA2gABrEFIiFgjIhqggIADgJID7BMgAjyhvIgCgCIAfgvIADABIggAwg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AFpEyIgtgEIhXg5IgCAEIgIgGIgOAyIgFAAIgcAAIk0hbIAmiVIBYAVIgOgKIAOAEIj3iyIAjg0IgDAAIADgDIl+gKIAAijIHtAAIAMAAIARgYIAHgGIAuAhIAkABIAAAXIAAAEIJWGzIh/C9IAAADIgmAxgACmElIjAgzIhwghIACgHIE0BbgAiKDJIAoibIBKASIAOAKIhYgVIgmCVgAiIDKgAgYBAgAkBhuIgCgBIAigzIADAAIgjA0g");
	var mask_3_graphics_106 = new cjs.Graphics().p("AFcE9IAhACIBTBAIAog1IgoA1IhThAIghgCIhrhIIgBADIgGgEIgRA+IlphnIApieIBdAXIgLgIIALADIkGi6IAmg4IgCAAIACgDImWgHIAAitIIGAAIAOAAIAUgcIAFgEIAwAjIAnABIAAAZIAAADIJ9HIIiJDJIAAADIAAAFIgoA8gAiSDRIACgGIFpBnIARg+IAGAEIgRA9gAiQDLgAkQh7IgCgCIAmg2IACAAIgmA4g");
	var mask_3_graphics_107 = new cjs.Graphics().p("AGQFXIgUAAIh9hVIgBACIgEgDIgSBCIl/hrIAsioIBjAZIgIgFIAIACIkWjEIAog7IgBAAIABgCImugEIAAi2IIhAAIAPAAIAXggIADgDIAzAkIApABIAAAbIAAADIKjHdIiSDVIAAABIgqA7gAiYDcIABgEIF/BrIAShCIAEADIgSBAgAiXDYgAgQBEIkQjBIACgBIgCgBIApg6IABAAIgoA7IEWDEgAj3i5g");
	var mask_3_graphics_108 = new cjs.Graphics().p("AGkFqIgKAAIiPhiIAAABIgCgBIgTBGImVhvIAviyIBoAbIgDgDIADACIkmjNIArg+IgBAAIABAAIgrA+IgBAAIArg+IABgCInFgCIAAi/II6AAIASAAIAYgjIACgCIA2AmIAsAAIAAAfIAAABILJHyIibDgIAAABIgtA/gAigDhIABgCIGVBvIAThGIACABIgTBGgAigDfIAwi0IBlAaIkkjKIABgBIEmDNIgDgCIADADIhogbIgvCygAifDfg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AG3F8IiehuIgUBLImshyIAzi9IBuAdIk3jWIAuhBIndAAIAAjIIJoAAIAbgoIA4AoIAvAAIAAAgILvIHIikDtIgwBFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_3_graphics_89,x:395.2,y:412.45}).wait(1).to({graphics:mask_3_graphics_90,x:398.55,y:414.2625}).wait(1).to({graphics:mask_3_graphics_91,x:402.775,y:415.275}).wait(1).to({graphics:mask_3_graphics_92,x:406.525,y:416.7}).wait(1).to({graphics:mask_3_graphics_93,x:410.325,y:418.975}).wait(1).to({graphics:mask_3_graphics_94,x:413.55,y:421.2375}).wait(1).to({graphics:mask_3_graphics_95,x:417.9,y:420.5}).wait(1).to({graphics:mask_3_graphics_96,x:421.65,y:421.475}).wait(1).to({graphics:mask_3_graphics_97,x:425.45,y:422.775}).wait(1).to({graphics:mask_3_graphics_98,x:429.225,y:424.45}).wait(1).to({graphics:mask_3_graphics_99,x:423.725,y:431.8}).wait(1).to({graphics:mask_3_graphics_100,x:436.35,y:427.65}).wait(1).to({graphics:mask_3_graphics_101,x:440.1625,y:429.4}).wait(1).to({graphics:mask_3_graphics_102,x:443.9875,y:431.15}).wait(1).to({graphics:mask_3_graphics_103,x:447.7875,y:432.9}).wait(1).to({graphics:mask_3_graphics_104,x:451.65,y:435.625}).wait(1).to({graphics:mask_3_graphics_105,x:455.475,y:436.4}).wait(1).to({graphics:mask_3_graphics_106,x:459.325,y:438.725}).wait(1).to({graphics:mask_3_graphics_107,x:463.1125,y:439.9}).wait(1).to({graphics:mask_3_graphics_108,x:466.9625,y:441.65}).wait(1).to({graphics:mask_3_graphics_109,x:470.8,y:443.4}).wait(91));

	// 春
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332F1F").s().p("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");
	this.shape_3.setTransform(403.7311,411.4544,0.683,0.7339);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(89).to({_off:false},0).wait(111));

	// 遮色片5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_73 = new cjs.Graphics().p("AixAtIAAhZIFjAAIAABZg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AokGoIL/wmIFKDXIr/Qmg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_4_graphics_73,x:379.2,y:408.45}).wait(1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_4_graphics_88,x:342.125,y:447.575}).wait(112));

	// 春
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332F1F").s().p("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");
	this.shape_4.setTransform(403.7415,411.4595,0.6831,0.7339);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(73).to({_off:false},0).wait(127));

	// 遮色片4 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_60 = new cjs.Graphics().p("AB/AvIldAAIAAhdIFdAAIBgAAIAABdg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AjIBhIgZhaIFLhnIBxABIAHBZIhfBng");
	var mask_5_graphics_62 = new cjs.Graphics().p("AiyCSIgyhVIE4jPICEAEIANBTIhfDNg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AidDCIhKhPIEmk2ICVAFIAVBMIhgE2g");
	var mask_5_graphics_64 = new cjs.Graphics().p("AiHD0IhkhLIEUmdICoAGIAbBGIhfGdg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AhyElIh8hGIEBoFIC6AJIAiA/IhfIFg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AhcFWIiVhAIDwptIDLAKIApA5IhfJsg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AhGGGIivg7IDerUIDeAMIAvAyIhfLVg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AgxG3IjHg2IDMs7IDvANIA2AsIhfM8g");
	var mask_5_graphics_69 = new cjs.Graphics().p("AgbHoIjhgwIC7ukIEBAPIA9AmIhfOkg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AgGIZIj5grICowLIETAQIBEAgIhfQLg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AAPJLIkSgnICWxzIEmATIBLAZIhgRzg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AAkJ7IkqghICEzaIE3AUIBSATIhfTag");
	var mask_5_graphics_73 = new cjs.Graphics().p("AA6KtIlDgcIBx1CIFKAVIBYANIhfVBg");
	var mask_5_graphics_74 = new cjs.Graphics().p("ABQLeIlcgYIBe2pIFcAXIBgAHIhgWpg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_5_graphics_60,x:399.2,y:263.2}).wait(1).to({graphics:mask_5_graphics_61,x:398.825,y:268.5}).wait(1).to({graphics:mask_5_graphics_62,x:398.475,y:273.8}).wait(1).to({graphics:mask_5_graphics_63,x:398.1,y:279.125}).wait(1).to({graphics:mask_5_graphics_64,x:397.725,y:284.425}).wait(1).to({graphics:mask_5_graphics_65,x:397.375,y:289.725}).wait(1).to({graphics:mask_5_graphics_66,x:397,y:295.025}).wait(1).to({graphics:mask_5_graphics_67,x:396.65,y:300.375}).wait(1).to({graphics:mask_5_graphics_68,x:396.25,y:305.675}).wait(1).to({graphics:mask_5_graphics_69,x:395.875,y:310.975}).wait(1).to({graphics:mask_5_graphics_70,x:395.525,y:316.275}).wait(1).to({graphics:mask_5_graphics_71,x:395.15,y:321.575}).wait(1).to({graphics:mask_5_graphics_72,x:394.775,y:326.9}).wait(1).to({graphics:mask_5_graphics_73,x:394.425,y:332.2}).wait(1).to({graphics:mask_5_graphics_74,x:394.05,y:337.5}).wait(126));

	// 春
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332F1F").s().p("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");
	this.shape_5.setTransform(403.7467,411.4697,0.6831,0.7339);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(60).to({_off:false},0).wait(140));

	// 遮色片3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_40 = new cjs.Graphics().p("Ag9C5IAAlGIAAgrIB8AAIAAArIAAFGg");
	var mask_6_graphics_41 = new cjs.Graphics().p("Ahyi0IDjgIIACFxIjjAJg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AimiwIFKgRIADFxIlKASg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AjbisIGygZIAFFxImyAag");
	var mask_6_graphics_44 = new cjs.Graphics().p("AkPinIIZgiIAGFxIoZAig");
	var mask_6_graphics_45 = new cjs.Graphics().p("AlDijIKAgrIAHFyIqAArg");
	var mask_6_graphics_46 = new cjs.Graphics().p("Al4ieILog0IAJFxIroA0g");
	var mask_6_graphics_47 = new cjs.Graphics().p("AmsiaINOg8IALFxItPA8g");
	var mask_6_graphics_48 = new cjs.Graphics().p("AngiWIO1hEIAMFxIu1BEg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AoViRIQdhOIAOFxIwdBOg");
	var mask_6_graphics_50 = new cjs.Graphics().p("ApJiNISEhWIAPFxIyEBWg");
	var mask_6_graphics_51 = new cjs.Graphics().p("Ap9iJITrheIAQFxIzrBeg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AqxiEIVRhoIATFxI1SBog");
	var mask_6_graphics_53 = new cjs.Graphics().p("ArmiAIW5hwIAUFxI25Bwg");
	var mask_6_graphics_54 = new cjs.Graphics().p("Asah8IYgh4IAVFxI4gB4g");
	var mask_6_graphics_55 = new cjs.Graphics().p("AtPh4IaIiAIAXFwI6ICBg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AuDhzIbviJIAYFxI7vCIg");
	var mask_6_graphics_57 = new cjs.Graphics().p("Au3hvIdWiSIAZFxI9WCSg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AvshqIe+ibIAbFxI++Cag");
	var mask_6_graphics_59 = new cjs.Graphics().p("Awdg7IgDgrMAglgCjIADArIAZFFMgglACjg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_6_graphics_40,x:297.2,y:405.125}).wait(1).to({graphics:mask_6_graphics_41,x:302.675,y:404.65}).wait(1).to({graphics:mask_6_graphics_42,x:308.175,y:404.225}).wait(1).to({graphics:mask_6_graphics_43,x:313.65,y:403.75}).wait(1).to({graphics:mask_6_graphics_44,x:319.125,y:403.275}).wait(1).to({graphics:mask_6_graphics_45,x:324.575,y:402.825}).wait(1).to({graphics:mask_6_graphics_46,x:330.075,y:402.375}).wait(1).to({graphics:mask_6_graphics_47,x:335.55,y:401.9}).wait(1).to({graphics:mask_6_graphics_48,x:341.025,y:401.45}).wait(1).to({graphics:mask_6_graphics_49,x:346.5,y:400.975}).wait(1).to({graphics:mask_6_graphics_50,x:352,y:400.525}).wait(1).to({graphics:mask_6_graphics_51,x:357.475,y:400.05}).wait(1).to({graphics:mask_6_graphics_52,x:362.95,y:399.6}).wait(1).to({graphics:mask_6_graphics_53,x:368.425,y:399.125}).wait(1).to({graphics:mask_6_graphics_54,x:373.925,y:398.675}).wait(1).to({graphics:mask_6_graphics_55,x:379.375,y:398.225}).wait(1).to({graphics:mask_6_graphics_56,x:384.85,y:397.75}).wait(1).to({graphics:mask_6_graphics_57,x:390.325,y:397.275}).wait(1).to({graphics:mask_6_graphics_58,x:395.825,y:396.85}).wait(1).to({graphics:mask_6_graphics_59,x:401.3,y:396.375}).wait(141));

	// 斷春
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(279.65,270.15,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(160));

	// 遮色片2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_20 = new cjs.Graphics().p("AgzB6IAAj0IBnAAIAAD0g");
	var mask_7_graphics_21 = new cjs.Graphics().p("AhMB6IAAj0ICYAAIAAD0g");
	var mask_7_graphics_22 = new cjs.Graphics().p("AhkB6IAAj0IDJAAIAAD0g");
	var mask_7_graphics_23 = new cjs.Graphics().p("Ah8B6IAAj0ID5AAIAAD0g");
	var mask_7_graphics_24 = new cjs.Graphics().p("AiUB6IAAj0IEpAAIAAD0g");
	var mask_7_graphics_25 = new cjs.Graphics().p("AisB6IAAj0IFZAAIAAD0g");
	var mask_7_graphics_26 = new cjs.Graphics().p("AjEB6IAAj0IGJAAIAAD0g");
	var mask_7_graphics_27 = new cjs.Graphics().p("AjdB6IAAj0IG7AAIAAD0g");
	var mask_7_graphics_28 = new cjs.Graphics().p("Aj1B6IAAj0IHrAAIAAD0g");
	var mask_7_graphics_29 = new cjs.Graphics().p("AkNB6IAAj0IIbAAIAAD0g");
	var mask_7_graphics_30 = new cjs.Graphics().p("AklB6IAAj0IJLAAIAAD0g");
	var mask_7_graphics_31 = new cjs.Graphics().p("Ak9B6IAAj0IJ7AAIAAD0g");
	var mask_7_graphics_32 = new cjs.Graphics().p("AlVB6IAAj0IKrAAIAAD0g");
	var mask_7_graphics_33 = new cjs.Graphics().p("AluB6IAAj0ILcAAIAAD0g");
	var mask_7_graphics_34 = new cjs.Graphics().p("AmFB6IAAj0IMMAAIAAD0g");
	var mask_7_graphics_35 = new cjs.Graphics().p("AmeB6IAAj0IM9AAIAAD0g");
	var mask_7_graphics_36 = new cjs.Graphics().p("Am2B6IAAj0INtAAIAAD0g");
	var mask_7_graphics_37 = new cjs.Graphics().p("AnOB6IAAj0IOdAAIAAD0g");
	var mask_7_graphics_38 = new cjs.Graphics().p("AnmB6IAAj0IPNAAIAAD0g");
	var mask_7_graphics_39 = new cjs.Graphics().p("An+B6IAAj0IP9AAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_7_graphics_20,x:335.7,y:364.7}).wait(1).to({graphics:mask_7_graphics_21,x:338.35,y:364.7}).wait(1).to({graphics:mask_7_graphics_22,x:340.975,y:364.7}).wait(1).to({graphics:mask_7_graphics_23,x:343.65,y:364.7}).wait(1).to({graphics:mask_7_graphics_24,x:346.3,y:364.7}).wait(1).to({graphics:mask_7_graphics_25,x:348.925,y:364.7}).wait(1).to({graphics:mask_7_graphics_26,x:351.575,y:364.7}).wait(1).to({graphics:mask_7_graphics_27,x:354.2,y:364.7}).wait(1).to({graphics:mask_7_graphics_28,x:356.875,y:364.7}).wait(1).to({graphics:mask_7_graphics_29,x:359.525,y:364.7}).wait(1).to({graphics:mask_7_graphics_30,x:362.15,y:364.7}).wait(1).to({graphics:mask_7_graphics_31,x:364.8,y:364.7}).wait(1).to({graphics:mask_7_graphics_32,x:367.475,y:364.7}).wait(1).to({graphics:mask_7_graphics_33,x:370.1,y:364.7}).wait(1).to({graphics:mask_7_graphics_34,x:372.75,y:364.7}).wait(1).to({graphics:mask_7_graphics_35,x:375.375,y:364.7}).wait(1).to({graphics:mask_7_graphics_36,x:378.025,y:364.7}).wait(1).to({graphics:mask_7_graphics_37,x:380.7,y:364.7}).wait(1).to({graphics:mask_7_graphics_38,x:383.325,y:364.7}).wait(1).to({graphics:mask_7_graphics_39,x:385.975,y:364.7}).wait(161));

	// 斷春
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(279.65,270.2,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(180));

	// 遮色片1 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AhMCbIAAkrIAAgKICaAAIAAAKIAAErg");
	var mask_8_graphics_1 = new cjs.Graphics().p("AhoCbIAAk1IDQAAIAAE1g");
	var mask_8_graphics_2 = new cjs.Graphics().p("AiCCbIAAk1IEFAAIAAE1g");
	var mask_8_graphics_3 = new cjs.Graphics().p("AieCbIAAk1IE8AAIAAE1g");
	var mask_8_graphics_4 = new cjs.Graphics().p("Ai4CbIAAk1IFxAAIAAE1g");
	var mask_8_graphics_5 = new cjs.Graphics().p("AjTCbIAAk1IGnAAIAAE1g");
	var mask_8_graphics_6 = new cjs.Graphics().p("AjuCbIAAk1IHdAAIAAE1g");
	var mask_8_graphics_7 = new cjs.Graphics().p("AkJCbIAAk1IITAAIAAE1g");
	var mask_8_graphics_8 = new cjs.Graphics().p("AkkCaIAAk1IJJAAIAAE1IiTACg");
	var mask_8_graphics_9 = new cjs.Graphics().p("Ak/CaIAAk1IJ/AAIAAE1IigACg");
	var mask_8_graphics_10 = new cjs.Graphics().p("AlaCaIAAk1IK1AAIAAE1IitACg");
	var mask_8_graphics_11 = new cjs.Graphics().p("Al1CaIAAk1ILrAAIAAE1Ii7ACg");
	var mask_8_graphics_12 = new cjs.Graphics().p("AmQCaIAAk1IMhAAIAAE1IlfACg");
	var mask_8_graphics_13 = new cjs.Graphics().p("AmrCaIAAk1INXAAIAAE1Il2ACg");
	var mask_8_graphics_14 = new cjs.Graphics().p("AnFCaIAAk1IOMAAIAAE1InHACg");
	var mask_8_graphics_15 = new cjs.Graphics().p("AnhCaIAAk1IPCAAIAAE1InhACg");
	var mask_8_graphics_16 = new cjs.Graphics().p("An7CaIAAk1IP3AAIAAE1In8ACg");
	var mask_8_graphics_17 = new cjs.Graphics().p("AoXCaIAAk1IQuAAIAAE1IoXACg");
	var mask_8_graphics_18 = new cjs.Graphics().p("AoxCaIAAk1IRjAAIAAE1IoyACg");
	var mask_8_graphics_19 = new cjs.Graphics().p("ApMCbIAAkrIAAgKISZAAIAAAKIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:337.2,y:333.95}).wait(1).to({graphics:mask_8_graphics_1,x:340.05,y:333.95}).wait(1).to({graphics:mask_8_graphics_2,x:342.925,y:333.95}).wait(1).to({graphics:mask_8_graphics_3,x:345.8,y:333.95}).wait(1).to({graphics:mask_8_graphics_4,x:348.675,y:333.95}).wait(1).to({graphics:mask_8_graphics_5,x:351.525,y:333.95}).wait(1).to({graphics:mask_8_graphics_6,x:354.4,y:333.95}).wait(1).to({graphics:mask_8_graphics_7,x:357.25,y:333.95}).wait(1).to({graphics:mask_8_graphics_8,x:360.15,y:334.0125}).wait(1).to({graphics:mask_8_graphics_9,x:363,y:334.0125}).wait(1).to({graphics:mask_8_graphics_10,x:365.875,y:334.0125}).wait(1).to({graphics:mask_8_graphics_11,x:368.725,y:334.0125}).wait(1).to({graphics:mask_8_graphics_12,x:371.625,y:334.0625}).wait(1).to({graphics:mask_8_graphics_13,x:374.475,y:334.0625}).wait(1).to({graphics:mask_8_graphics_14,x:377.35,y:334.075}).wait(1).to({graphics:mask_8_graphics_15,x:380.2,y:334.075}).wait(1).to({graphics:mask_8_graphics_16,x:383.075,y:334.075}).wait(1).to({graphics:mask_8_graphics_17,x:385.95,y:334.075}).wait(1).to({graphics:mask_8_graphics_18,x:388.825,y:334.075}).wait(1).to({graphics:mask_8_graphics_19,x:391.675,y:333.95}).wait(181));

	// 斷春
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(279.65,270.2,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

	// 小燈籠
	this.instance_3 = new lib.小燈籠();
	this.instance_3.setTransform(79.4,144.9,0.5117,0.5187,0,0,0,-112,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	// 中燈籠
	this.instance_4 = new lib.中燈籠();
	this.instance_4.setTransform(256.65,181.65,0.7071,0.7203,0,0,0,-112,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200));

	// 大燈籠
	this.instance_5 = new lib.大燈籠();
	this.instance_5.setTransform(137.9,214.15,0.862,0.8552,0,0,0,-112,-38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200));

	// 背景
	this.instance_6 = new lib.春燈底稿ai("synched",0);
	this.instance_6.setTransform(279.2,288.05,1,1.0041,0,0,0,279.2,286.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,288.2,278.70000000000005,287.50000000000006);
// library properties:
lib.properties = {
	id: '9BD652DFC88B29419DA4D2ED1B95ACD5',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/B2A45_燈籠_HTML5 Canvas_atlas_1.png", id:"B2A45_燈籠_HTML5 Canvas_atlas_1"}
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
an.compositions['9BD652DFC88B29419DA4D2ED1B95ACD5'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;