function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  
  background(255,50);
  
  // Define one color for each touch point
  var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
  
  for(var i=0; i<touches.length; i++) {
    var touch = touches[i];
    console.log(touch)
    fill(colorList[i]);
    ellipse(touch.x, touch.y, 50, 50);
  }
}