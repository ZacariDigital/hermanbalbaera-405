function setup() {

    createCanvas(1280, 720);

    colorMode(HSB, 360, 100, 100, 1);

    noStroke();
}

function draw() {

    background(0);

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
    fill(250, 60, 50+ mouseYCol);
    rect(0, 650, 300, 300);
    pop();

    push();
    fill(240, 10+mouseXCol, 10);
    rect(300, 350, 400, 400);
    pop();


}
