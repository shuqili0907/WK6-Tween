let myShape ={ 
  x: 100,
  y: 100,
  w: 50,
  h: 50,
  c: 250
}
let tween = p5.tween.manager 
.addTween(myShape,'tween1')

function setup() {
  createCanvas(600, 600)
  colorMode(HSB, 255);
  
    p5.tween.manager.addTween(myShape, 'tween1')
      .addMotions([
        { key: 'y', target: height },
        { key: 'w', target: 50 },
        { key: 'h', target: 60 },
      ], 600, 'easeInQuad')
      .addMotions([
          { key: 'w', target: 100 },
          { key: 'h', target: 10 },
        ], 120)
      .addMotions([
          { key: 'w', target: 50 },
          { key: 'h', target: 100 },
        ], 100)
      .addMotions([
          { key: 'w', target: 50 },
          { key: 'h', target: 50 },
          { key: 'y', target: 100 }
       ], 500, 'easeOutQuad')
    .onLoop((tween) => myShape.c = random(0, 255))
    .startLoop()
}

function draw() {
  background(250)
  noStroke()
  fill(myShape.c, 125, 125);
  ellipse(myShape.x, myShape.y, myShape.w, myShape.h)
}

function mousePressed(){ 
console.log("click") 
tween.resetMotions() 
tween
.addMotions([{key: "x", target: mouseX},
{key: "y", target: mouseY}],1000,"easeInOutQuint")

.addMotion("x",mouseX,100, "easeInSin")
.addMotion("y",mouseY,100, "easeInSin")
.startTween()


}