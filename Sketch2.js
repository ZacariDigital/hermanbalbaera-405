function setup() {

    createCanvas(1280, 720);
    colorMode(HSB, 360, 100, 100, 1);

}

function draw() {

    background(0);
    strokeWeight(10);


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
