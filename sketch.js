var kitty;
let img;

function preload() {
  img = loadImage("n2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	loadImage('n1.png"', img1 => {
		image(img, 0, 0);
	});
	background(100);
}
function draw() {

	image(img, 0, 0);
	image(img2, 0, 0);
	ellipse(20,20, mouseX, mouseY);
}
