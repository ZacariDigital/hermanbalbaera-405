var cnv;
var Y_AXIS = 1;
var X_AXIS = 1;
var padding = 5;

var clickCounter = 0;


function setup() {

    cnv = createCanvas(1280, 720);
    cnv.mouseClicked(mouseClickedCanvas);
    colorMode(HSB, 360, 100, 100, 1);
}

function draw() {


        if (clickCounter == 1) {

            background(0);
            artwork1();

        }
        if (clickCounter == 2) {

            background(0);
            noStroke();
            artwork2();

        }
        if (clickCounter == 3) {

            background(0);
            stroke(0);
            strokeWeight(10);
            artwork3();

        }
        if (clickCounter == 4) {

    background(255);
    noStroke();
    artwork4();
            
            
        } if (clickCounter == 5) {
            
            clickCounter = 0;
            setup();
        }
        
        
        else {

            
        }




}

function artwork1() {


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

function artwork2() {

    var mouseXCol = map(mouseX, 0, width, 0, 10);
    var mouseYCol = map(mouseY, 0, height, 0, 10);


    // UPPER ROW

    push();
    fill(250, 70 + mouseXCol, 70);
    rect(0, 0, 100, 150);
    pop();

    push();
    fill(0, 70, 15 + mouseYCol);
    rect(100, 0, 300, 150);
    pop();

    push();
    fill(10, 10, 90 - mouseXCol);
    rect(400, 0, 600, 150);
    pop();

    push();
    fill(200, 50 - mouseYCol, 80);
    rect(1000, 0, 600, 150);
    pop();

    // SECOND ROW

    push();
    fill(60, 80, 80 - mouseXCol);
    rect(0, 150, 200, 200);
    pop();

    push();
    fill(220, 70, 90 - mouseYCol);
    rect(200, 150, 400, 200);
    pop();

    push();
    fill(140, 5, 90 - mouseXCol);
    rect(600, 150, 100, 200);
    pop();

    push();
    fill(160, 10, 80 - mouseYCol);
    rect(700, 150, 250, 700);
    pop();

    push();
    fill(360, 80 - mouseXCol, 80);
    rect(950, 150, 200, 400);
    pop();

    push();
    fill(100, 10, 70 - mouseYCol);
    rect(950, 500, 200, 400);
    pop();


    // THIRD ROW

    push();
    fill(360, 90 - mouseXCol, 80 - mouseYCol);
    rect(0, 350, 300, 300);
    pop();

    push();
    fill(250, 60, 50 + mouseYCol);
    rect(0, 650, 300, 300);
    pop();

    push();
    fill(240, 10 + mouseXCol, 10);
    rect(300, 350, 400, 400);
    pop();



}

function artwork3() {

    push();

    rotate(20);
    translate(-200, -300);

    push();
    fill(10, 0, 90);
    rect(100, -150, 300, 150);
    pop();

    push();
    fill(240, 80, 80);
    rect(400, -150, 400, -350);
    pop();

    push();
    fill(240, 0, 80);
    rect(400, -500, 400, -350);
    pop();

    push();
    fill(200, 0, 10);
    rect(1000, -150, 600, 150);
    pop();

    push();
    fill(200, 90, 90);
    rect(1000, -150, 600, -850);
    pop();

    push();
    fill(50, 90, 90); // YELLOW TILE
    rect(100, 0, 300, 150);
    pop();

    push();
    fill(20, 0, 90); // MIDDLE WHITE BAR
    rect(400, 0, 600, 150);
    pop();

    push();
    fill(60, 10, 90); // MIDDLE WHITE BAR
    rect(400, 0, 600, -150);
    pop();

    push(); // RED TILE
    fill(350, 90, 60);
    rect(1000, 0, 600, 150);
    pop();

    push(); // YELLOW TILE
    fill(50, 80, 90);
    rect(200, 150, 400, 200);
    pop();

    push();
    fill(40, 0, 90);
    rect(600, 150, 100, 200);
    pop();

    push();
    fill(160, 0, 80);
    rect(700, 150, 250, 700);
    pop();

    push(); // RED TILE
    fill(360, 90, 80);
    rect(950, 150, 200, 400);
    pop();

    push();
    fill(240, 0, 90);
    rect(300, 350, 400, 400);
    pop();

    pop();


}

function artwork4() {


    push(); // YELLOW
    fill(60, 100, 100, 0.75);
    rect(50, 50, 200, 20);
    pop();
    
    push();
    fill(60, 100, 100, 0.75);
    rect(650, 250, 200, 20);
    pop();
    
    
    push();
    fill(60, 100, 100, 0.75);
    rect(150, 350, 200, 20);
    pop();
    
    
    push();
    fill(60, 100, 100, 0.5);
    rect(50, 550, 200, 20);
    pop();
    
    push(); // RED
    fill(360, 100, 100, 0.5);
    rect(550, 550, 200, 30);
    pop();
    
    push();
    fill(360, 100, 100, 0.5);
    rect(150, 150, 200, 30);
    pop();
    
    push();
    fill(360, 100, 100, 0.5);
    rect(550, 100, 40, 200);
    pop();
    
    push();
    fill(360, 100, 100, 0.5);
    rect(200, 400, 40, 200);
    pop();
    
    push();
    fill(360, 100, 0, 0.5);
    rect(width/2, 400, 40, 200);
    pop();
    
    push();
    fill(360, 100, 0, 0.5);
    rect(50, 50, 40, 200);
    pop();
    
    push();
    fill(360, 100, 0, 0.5);
    rect(950, 650, 40, -800);
    pop();
    
    push();
    fill(360, 100, 0, 0.5);
    rect(650, 350, 200, 40);
    pop();
    
    push(); // BLUE
    fill(240, 100, 100, 0.25);
    rect(300, 300, 40, 200);
    pop();
    
    push();
    fill(240, 100, 100, 0.25);
    rect(400, 200, 40, 600);
    pop();
    
    push();
    fill(240, 100, 100, 0.25);
    rect(600, 300, 600, 40);
    pop();
    
    
    push();
    fill(360, 100, 100, 0.25);
    rect(0, 450, 700, 40);
    pop();
    
    
    
    
    


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

function mouseClickedCanvas() {


    clickCounter = clickCounter + 1;



    console.log(clickCounter);

}
