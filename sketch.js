let imgLamp;
let imgCutlery;

function preload() {
  // Using user-provided images for both lamp and cutlery
  imgLamp = loadImage('https://assets.wfcdn.com/im/16744574/resize-h400-w400%5Ecompr-r85/3920/392012020/24%22+Led%2FBty%2FTmr+Standing+Lamp+Post.jpg');
  imgCutlery = loadImage('https://cb.scene7.com/is/image/Crate/CaesnaMrrDinnerForkSSS26/$web_spilllargeCat$/260609084418/CaesnaMrrDinnerForkSSS26.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Place canvas behind UI elements
  imageMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240, 240, 240, 25); // Fade effect for "colourfulness" trails
  
  let currentImg = mouseIsPressed ? imgCutlery : imgLamp;
  
  // 4-way Mirrored movement - makes photos "go anywhere" in a cool pattern
  image(currentImg, mouseX, mouseY, 100, 100);
  image(currentImg, width - mouseX, mouseY, 100, 100);
  image(currentImg, mouseX, height - mouseY, 100, 100);
  image(currentImg, width - mouseX, height - mouseY, 100, 100);
  
  // Add some "colourfulness" spheres that go anywhere with the mouse
  if (mouseIsPressed) {
    noStroke();
    fill(random(255), random(255), random(255), 150);
    ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), 20, 20);
    ellipse(width - mouseX + random(-50, 50), mouseY + random(-50, 50), 20, 20);
  }
}
