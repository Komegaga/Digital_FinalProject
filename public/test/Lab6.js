$(document).ready(()=>{ 
var stage = new createjs.Stage("canvas");
createjs.Ticker.on("tick", stage);

var shapeW = 50, hitW = 100;

var hit1 = new createjs.Shape().set({x:50, y:150});
hit1.color = hit1.graphics.s("blue").command;
hit1.graphics.ss(3, "round").sd([12,12]).f("#ddd").dr(0,0,hitW,hitW);

var hit2 = new createjs.Shape().set({x:250, y:150});
hit2.color = hit2.graphics.s("blue").command;
hit2.graphics.ss(3, "round").sd([12,12]).f("#ddd").dr(0,0,hitW,hitW);

var shape = new createjs.Shape().set({x:175, y:10, cursor:"pointer", alpha:0.75});
shape.graphics.f("#906").dr(0,0,shapeW,shapeW);
shape.on("pressmove", handleDrag);
console.log(shape.x);

stage.addChild(hit1, hit2, shape);

function handleDrag(event) {
	// Just snap to the center of the mouse
    console.log(event.stageX);
    shape.x = event.stageX-shapeW/2;
  shape.y = event.stageY-shapeW/2;
  
  // Hit test only the mouse position
  var p = hit1.globalToLocal(event.stageX, event.stageY);  
  if (hit1.hitTest(p.x, p.y)) {
  	hit1.color.style = "green";
  } else {
  	hit1.color.style = "blue";
  }
  
  // Hit test box to box (simple example)
  if (shape.x >= hit2.x-shapeW && shape.x <= hit2.x+hitW 
  		&& shape.y >= hit2.y-shapeW && shape.y <= hit2.y+hitW) {
    hit2.color.style = "green";    
  } else {
  	hit2.color.style = "blue";
  }
}

});