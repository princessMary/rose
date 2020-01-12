var kitty;
let img;

function preload() {
  img = loadImage("n2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	loadImage('A1.png"', img => {
		image(img, 0, 0);
	});
	background(100);
}
function draw() {

	image(img, 0, 0);
	ellipse(20,20, mouseX, mouseY);
}
