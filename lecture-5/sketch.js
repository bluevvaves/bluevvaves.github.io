let circleX = 100;
let circleY = 100;


let spot;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw () {
    background(0);


    fill("white");
    noStroke();
    circle(mouseX, mouseY, 50)

    stroke("black");
    noFill();
    circle(circleX, circleY, 50);
    if (mouseX > circleX - 25 && mouseX < circleX + 25) {

        if (mouseX > circleX - 25 && mouseX < circleX + 25) {

            //the mouse has entered the circle
            //let's move the circle

            circleX = random(0, width);
            circleY = random(0, height);
    
        fill("yellow");
        circle(width / 2, height / 2, 100);
    
    }
}

Image(spot, mouseX, mouseY, 100, 100)

}