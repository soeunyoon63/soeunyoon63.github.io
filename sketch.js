
function setup() {
  createCanvas(1110, 400, WEBGL);
  perspective(PI / 3.0, width / height, 0.2, 30000);
}

function draw() {
  orbitControl();
  
  fill(244,122,158);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(237,34,93);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
  let locX = mouseX - height / 4;
  let locY = mouseY - width / 4;
  
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  
  background(250);
  translate(-240, -100, 0 + PI);
  push();
  normalMaterial();
  specularMaterial(100,100,100);
  rotateZ(frameCount * 0.01 + PI);
  rotateX(frameCount * 0.01 + PI);
  rotateY(frameCount * 0.01 + PI);
  plane(800);

  translate(100, 0, 0 + PI);
  push();
  rotateZ(frameCount * 0.01 + PI);
  rotateX(frameCount * 0.01 + PI);
  rotateY(frameCount * 0.01 + PI);
  torus(60, 20);
  pop();
  
  translate(40,100,20 + PI);
  push();
  rotateZ(frameCount * 0.01 + PI);
  rotateX(frameCount * 0.01 + PI);
  rotateY(frameCount * 0.01 + PI);
  sphere(200);
  pop();
 
  //circle//
   translate(240, 0, 0 + PI);
  push();
  rotateZ(frameCount * 0.01 + PI);
  rotateX(frameCount * 0.01 + PI);
  rotateY(frameCount * 0.01 + PI);
  torus(150, 80);
  pop();

  
rotateY(frameCount * 0.01 + PI);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j + PI) * 100,
        sin(frameCount * 0.001 + j + PI) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002 + PI);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }

}
