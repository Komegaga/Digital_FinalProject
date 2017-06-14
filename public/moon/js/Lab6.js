$(document).ready(()=>{ // jQuery main
    
	let stage = new createjs.Stage(canvas);
	let repo = new createjs.LoadQueue();
		   
	function setup() {
		// automatically update
		createjs.Ticker.on("tick", e => stage.update());
		createjs.Ticker.setFPS(60);
		// load assets
		repo.loadManifest([{id:'background',src:"image/background.png"},
						   {id:'man',src:"image/man.png"},
						   {id:'mandown',src:"image/manDown.png"},
						   {id:'clothes1',src:"image/clothes1.png"},
						   {id:'clothes2',src:"image/clothes2.png"},
						   {id:'clothes3',src:"image/clothes3.png"},
						   {id:'pooh',src:"image/pooh.png"},
						   {id:'mom',src:"image/mom.png"}
		]);
		repo.on('complete', draw);
	}
	
	function draw(){
		let background = new createjs.Bitmap(repo.getResult('background'));
		let mans = [new createjs.Bitmap(repo.getResult('man')),
					new createjs.Bitmap(repo.getResult('mandown'))
		];
		let clothes = [	 new createjs.Bitmap(repo.getResult('clothes1')),
						 new createjs.Bitmap(repo.getResult('clothes2')),
						 new createjs.Bitmap(repo.getResult('clothes3')),
		];

		let blocks = [	 new createjs.Bitmap(repo.getResult('pooh')),
						 new createjs.Bitmap(repo.getResult('mom')),
		];

		
		//plane.regX = plane.regY = plane.image.height/2;

		background.scaleX = 0.5; background.scaleY = 0.5;
		
		mans[0].scaleX = 0.4; mans[0].scaleY = 0.5;
		mans[0].x = 575; mans[0].y = 110;

		clothes[0].scaleX = 0.5; clothes[0].scaleY = 0.5;
		clothes[1].scaleX = 0.5; clothes[1].scaleY = 0.5;
		clothes[2].scaleX = 0.5; clothes[2].scaleY = 0.5;

		clothes[0].x = 0; clothes[0].y = 20;
		clothes[1].x = 250; clothes[1].y = 20;
		clothes[2].x = 100; clothes[2].y = 20;
		
		createjs.Tween.get(clothes[0],{loop:true}).to({x:1250,y:10},5000);
		createjs.Tween.get(clothes[1],{loop:true}).to({x:1250,y:10},4500);
		createjs.Tween.get(clothes[2],{loop:true}).to({x:1250,y:10},4000);
		
		mans[1].x = mans[0].x;
		mans[1].y = mans[0].y + 20;
		mans[1].scaleX = mans[0].scaleX;
		mans[1].scaleY = mans[0].scaleY;
		
		window.addEventListener('keydown', function(e){ 
			switch(e.keyCode){
				case 38:// up
		        	mans[0].y -= 10;
			        break;
				case 40:// down
					
					stage.addChild(mans[1]);
					createjs.Tween.get(mans[0]).call(()=>{stage.removeChild(mans[0])
														  mans[0].x += 200
														})
							.wait(800)
							.call(function(){
								mans[0].x = mans[1].x;
								stage.removeChild(mans[1])
								stage.addChild(mans[0])})
					console.log(mans[0].x);
					console.log(mans[1].x);
					break; 
			}
		});
		
		// var hit = new createjs.Shape();
		// hit.graphics.beginFill("#000").drawRect(0, 0, mans[0].image.width, mans[0].image.height);
		// mans[0].hitArea = hit;

		// plane.on("mouseover", handleInteraction);
		// plane.on("mouseover", handleInteraction);

		// function handleInteraction(event) {
		//     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5; 
		// }
		
		function tick(event) {
			mans[0].alpha = 1;
			//var pt = mans[0].globalToLocal(clothes[0].x, clothes[0].y);
			// var mt1 = plane.globalToLocal(mountains[1].x, mountains[1].y);
			// var mt2 = plane.globalToLocal(mountains[2].x, mountains[2].y);
			// var mt3 = plane.globalToLocal(mountains[3].x, mountains[3].y);
			//var pt = clothes[0].localToLocal(1150,110,mans[0]);

			// clothes[0].x = clothes[0].stageX-clothes[0].image.width/2;
  			// clothes[0].y = clothes[0].stageY-clothes[0].image.height/2;
			// clothes[0].y >= mans[0].y-clothes[0].image.width && clothes[0].y <= mans[0].y+mans[0].image.height-20

			if (clothes[0].x >= mans[0].x && clothes[0].x <= mans[0].x+10) {
				mans[0].alpha = 0.1;
				console.log("hit");  
			} else if (clothes[1].x >= mans[0].x && clothes[1].x <= mans[0].x+10){
				mans[0].alpha = 0.1;
				console.log("hit1");
			} else if (clothes[2].x >= mans[0].x && clothes[2].x <= mans[0].x+10){
				mans[0].alpha = 0.1;
				console.log("hit2");
			} else {
				mans[0].alpha = 1;
			}
		

			// if ( mans[0].hitTest(pt.x, pt.y)) {//if hit, change alpha
			// 	mans[0].alpha = 0.1;
			// 	console.log(pt.x)
			// 	console.log(pt.y)
			// }
			stage.update(event);
		}

		createjs.Ticker.addEventListener("tick", tick);

		stage.addChild(background);
		stage.addChild(clothes[0],clothes[1],clothes[2]);
		stage.addChild(mans[0]);
		
}             			
		

	
	setup();
	
});






