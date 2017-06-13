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
		
		mans[0].scaleX = 0.4; mans[0].scaleY = 0.45;
		mans[0].x = 1150; mans[0].y = 130;

		clothes[0].scaleX = 0.5; clothes[0].scaleY = 0.5;
		clothes[1].scaleX = 0.5; clothes[1].scaleY = 0.5;
		clothes[2].scaleX = 0.5; clothes[2].scaleY = 0.5;

		clothes[0].x = 0; clothes[0].y = 20;
		clothes[1].x = 250; clothes[1].y = 20;
		clothes[2].x = 100; clothes[2].y = 20;
		
		createjs.Tween.get(clothes[0],{loop:true}).to({x:1250,y:10},5000);
		createjs.Tween.get(clothes[1],{loop:true}).to({x:1250,y:10},4500);
		createjs.Tween.get(clothes[2],{loop:true}).to({x:1250,y:10},4000);
		
		
		window.addEventListener('keydown', function(e){ 
			switch(e.keyCode){
				case 38:// up
					mans[0].y -= 10;
					break;
				case 40:// down
					mans[0].y += 10;
					break; 
			}
		});
		
		mans[0].on('click', e=>{

			mans[1].x = mans[0].x;
			mans[1].y = mans[0].y;
			mans[1].scaleX = mans[0].scaleX;
			mans[1].scaleY = mans[0].scaleY;
			stage.addChild(mans[1]);
			createjs.Tween.get(mans[0]).call(()=>{stage.removeChild(mans[0])})
					.wait(500)
					.call(function(){stage.removeChild(mans[1])
						stage.addChild(mans[0]);})





			// let dot = new createjs.Shape();
			// dot.graphics.beginFill('red').drawCircle(plane.x + 120,plane.y + 30,20); 
			// createjs.Tween.get(dot)
			// 		.to({x:600},1000)
			// 		.call(function(){stage.removeChild(dot);
			// 				   exp.x = 500;
			// 			       exp.y = plane.y;
			// 			       stage.addChild(exp);
			// 		})
			// 		.wait(500)
			// 		.call(()=>{stage.removeChild(exp)});
			
			
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
			//var mt0 = mans[0].globalToLocal(clothes[0].x, clothes[0].y);
			// var mt1 = plane.globalToLocal(mountains[1].x, mountains[1].y);
			// var mt2 = plane.globalToLocal(mountains[2].x, mountains[2].y);
			// var mt3 = plane.globalToLocal(mountains[3].x, mountains[3].y);
			var pt = clothes[0].localToLocal(1150,0,mans[0]);
			if ( mans[0].hitTest(pt.x, pt.y)) {//if hit, change alpha
				mans[0].alpha = 0.5;
			}
			stage.update(event);
		}

		createjs.Ticker.addEventListener("tick", tick);

		stage.addChild(background);
		stage.addChild(clothes[0],clothes[1],clothes[2]);
		stage.addChild(mans[0]);
		
                            			
		
	}
	
	setup();
	
});






