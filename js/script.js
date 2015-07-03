//Javscript File
window.onload = function(){

	function init(){
		//creating new stage instance
		var stage = new createjs.Stage("myStage");

		//making a circle
		var circle = new createjs.Shape();

		circle.graphics.beginFill("red").drawCircle(0,0,50);
		circle.x = 100;
		circle.y = 100;

		stage.addChild(circle);
		stage.update();
	}
	console.log('tings is runnin!');
	init();
};