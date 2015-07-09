//Javscript File
window.onload = function(){

	function init(){

		//creating new stage instance
		var stage = new createjs.Stage("myStage");

		var data = new createjs.SpriteSheet({
			"images":["./mario.jpg"],
			"frames":{"height":46, "count": 20, "width": 46,"regX":0,"regY":0},
			"animations":{"walk":[0,5]}
		});

		var mario = new createjs.Sprite(data,"walk");
		mario.scaleY = mario.scaleX = 3;
		stage.addChild(mario);

		mario.on("click", function(){
			mario.play();
		});

		createjs.Ticker.on("tick", stage);	
	}
	init();
};