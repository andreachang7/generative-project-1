var points = []
var mult = 0.001

var points2 = []
var mult2 = 0.001

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(3)
  angleMode(DEGREES)
  noiseDetail(1)
  
  var density = 30
  var space = width / density
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10),y + random(-10, 10))
      points.push(p)
    }
  }

  for (var a = 0; a < width; a += space) {
    for (var c = 0; c < height; c += space) {
        var d = createVector(a + random(-10,10), c + random(-10, 10))
        points.push(d)
    }
  }
}

function draw() {
  stroke(random(5, 255), random(5, 255), random(5, 255))
  strokeWeight(0.5)
  // fill(random(5, 255), random(5, 255), random(5, 255))
  
  for (var i = 0; i < points.length; i++) {
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    
    points[i].add(createVector(cos(angle), sin(angle)))
    
    
    ellipse(points[i].x, points[i].y, 1)
  }
}