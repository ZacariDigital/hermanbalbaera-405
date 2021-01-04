// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, gray1, gray2;

var padding = 5;


function setup() {

    createCanvas(1280, 720);

    colorMode(HSB, 360, 100, 100, 1);

    // Define colors






    //noLoop();
}

function draw() {

    background(0);
    
    var mouseXGray = map(mouseX, 0, width, 0, 10);
    var mouseYGray = map(mouseY, 0, height, 0, 10);

    gray1 = color(0, 0, 10 + mouseXGray);
    gray2 = color(0, 0, 20 + mouseYGray);
    gray3 = color(0, 0, 30 + mouseYGray);
    gray4 = color(0, 0, 40 + mouseXGray);
    gray5 = color(0, 0, 50 + mouseXGray);
    gray6 = color(0, 0, 60 + mouseYGray);
    gray7 = color(0, 0, 70 + mouseYGray);
    gray8 = color(0, 0, 80 - mouseXGray);
    gray9 = color(0, 0, 90 - mouseYGray);



    stroke(255);
    //line(width / 2, height, width / 2, 0);
    
    
    
    GradientBlock(0, 0, 70, 500, gray1, gray9, Y_AXIS);
    
    GradientBlock(80, 0, 70, 500, gray2, gray8, X_AXIS);
    
    GradientBlock(0, height - 210, 150, 350, gray3, gray8, Y_AXIS);

    GradientBlock(width / 2, height / 2, 200, 400, gray7, gray8, X_AXIS);
    
    GradientBlock(width / 2 + 210, height / 2, 500, 200, gray5, gray5, X_AXIS);
    
    GradientBlock(width / 2 + 210, height / 2 - 210, 500, 200, gray6, gray9, Y_AXIS);
    
    GradientBlock(width / 2 + 210, height / 2 + 210, 500, 200, gray2, gray3, Y_AXIS);
    
    GradientBlock(width / 4, height / 2 + 110, 100, 400, gray1, gray3, X_AXIS);
    
    GradientBlock(width / 4 + 110, height / 2 + 110, 90, 400, gray4, gray1, X_AXIS);
    
    GradientBlock(width / 4 + 210, height / 2 + 110, 100, 100, gray2, gray6, Y_AXIS);
    
    GradientBlock(width / 4 + 210, height / 2 + 210, 100, 200, gray5, gray3, X_AXIS);

    GradientBlock(width / 2, height / 4 - 30, 200, 200, gray1, gray4, Y_AXIS);
    
    GradientBlock(width / 2, height / 4 - 240, 600, 100, gray5, gray2, Y_AXIS);
    
    GradientBlock(width / 2, height / 4 - 130, 600, 90, gray4, gray2, X_AXIS);

    GradientBlock(width / 4, height / 2, 310, 100, gray3, gray7, Y_AXIS);

    GradientBlock(width / 4, 0, 310, 350, gray2, gray6, Y_AXIS);

    GradientBlock(width / 8, 0, 150, 100, gray1, gray9, X_AXIS);

    GradientBlock(width / 8, 110, 150, 800, gray2, gray1, Y_AXIS);






}

function GradientBlock(x, y, w, h, gray1, gray2, axis) {
    noFill();

    if (axis === Y_AXIS) {

        // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(gray1, gray2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis === X_AXIS) {

        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let c = lerpColor(gray1, gray2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}
