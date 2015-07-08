//Javscript File
window.onload = function(){

	function init(){

		//creating new stage instance
		var stage = new createjs.Stage("myStage");

		var data = new createjs.SpriteSheet({
			"images":["./mario.jpg"],
			"frames":{"height":46, "count": 20, "width": 46},
			"animations":{"run":[0,4]}
		});

		var mario = new createjs.Sprite(data,"run");
		mario.scaleY = mario.scaleX = 3; 
		stage.addChild(mario);

		mario.on("click", function(){
			mario.gotoAndPlay();
			console.log("Click!");
		});

		createjs.Ticker.on("tick", stage);	
	}
	init();
};