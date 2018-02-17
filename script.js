// declare and initialize global variables

/*
 * setup()
 */


/*
 * drawEllipse()
 */


/*
 * updateSpread()
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */


 /*
  * drawSplatter()
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
var canvas;
var canvasArea;
var r;
var g;
var b;

function setup(){
  canvas = createCanvas(600,500);
  canvas.parent("#canvas-area");
  canvas.mousePressed(drawEllipse);
  background("#999999");
  r = 255;
  g = 0;
  b = 0;
}
 function draw(){
   fill(r,g,b);
   ellipse(mouseX,mouseY,50,50);
   
   if(r == 255 && b == 0){
      if(g <= 255){
        g += 1;
      }
   }
    if(g == 255 && b == 0){
      if(r <= 255){
        r -= 1;
      }
   }
    if(r == 0 && g == 255){
      if(b <= 255){
        b += 1;
      }
   }
    if(r == 0 && b == 255){
      if(g <= 255){
        g -= 1;
      }
   }
    if(g <= 0 && b == 255){
      if(r <= 255){
        r += 1;
      }
   }
    if(r == 255 && g == 0){
      if(b <= 255){
        b -= 1;
      }
   }

 }


function drawEllipse(){

  fill(r,g,b);
  noStroke();
  ellipse(mouseX,mouseY,50,50);

}
