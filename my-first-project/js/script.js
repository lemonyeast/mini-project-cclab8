// alert('Hello!');
let circleSize=20;

function setup() {
 let canvas = createCanvas(400,400);
 canvas.parent("canvasContainer");
 
  noFill();
  noStroke();
  
  background(0)
  for(let i=0;i<=width;i+=circleSize){
    fill(random(0),random(0),random(150))
    for(let j=0; j<=height; j+=circleSize){
       
    circle(i+circleSize/2,j+circleSize/2,circleSize);
      
    
  }
   
    
    
    
}

function draw() {
  //background(220);
  //noFill();
 
  
}
}
