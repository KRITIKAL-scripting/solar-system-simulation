var angle = 0;
var angleSpeed = 0.2;
var sun;
var img;
var planet1;

function preload() {
	img = loadImage("sun.png");
	img2 = loadImage("earth.png");
}
function setup(){
 createCanvas(1200, 1200);
  sun = createSprite(0, 0);
  sun.addImage("sun",img);
  sun.scale = 0.5;
  sun.setCollider("circle",0,0,sun.radius);
  sun.debug = true;
  earth = createSprite(500,50,40,40);
  earth.addImage("earth",img2);
  earth.scale = 0.1;
}
function draw(){
	background(0);
	//translate(150, 150); 
	//rotate(radians(frameCount*100));
	angleMode(DEGREES)
	translate(width/2,height/2);
	rotate(angle);
	angle = angle + angleSpeed;
	if(frameCount%1 === 0) {

		sun.scale = sun.scale + 0.001;
	}

	if(earth.isTouching(sun)) {
		earth.destroy();
	}
	drawSprites();
}

