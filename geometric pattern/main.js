var NUM_CIRCLES = 12;
var circleDiameter = width / NUM_CIRCLES;

function setup() {
    createCanvas(400, 600);
    circleDiameter = width / NUM_CIRCLES;
}

function draw() {
    var x = 0
    while (x <= width) {
        ellipse(x, 0, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
    
    y = y + circleDiameter;
}
