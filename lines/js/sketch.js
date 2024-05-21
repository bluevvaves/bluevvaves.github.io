let x, y;
let lineWeight = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  background(255);
}

function draw() {
  if (frameCount % 10 == 0) { // Execute every 10 frames (approximately 6 times per second at 60 FPS)
    let dice1 = rollDice();
    let dice2 = rollDice();
    let length = dice1 * 10; // Convert dice roll to digital cm (assuming 1 cm = 10 pixels)
    let direction = dice2;

    // Check special conditions
    if (dice1 + dice2 == 6) {
      length *= 2;
    } else if (dice1 + dice2 == 12) {
      length = 10; // 1 digital cm
    }

    if (dice1 == dice2) {
      strokeWeight(lineWeight * 3);
    } else {
      strokeWeight(lineWeight);
    }

    let newX = x;
    let newY = y;

    // Determine the direction
    switch (direction) {
      case 1:
        newY -= length;
        break;
      case 2:
        newX -= length * cos(PI / 4);
        newY -= length * sin(PI / 4);
        break;
      case 3:
        newX -= length;
        break;
      case 4:
        newX += length * cos(PI / 4);
        newY += length * sin(PI / 4);
        break;
      case 5:
        newX += length;
        break;
      case 6:
        newY += length;
        break;
    }

    // Check if the new position is outside the canvas and wrap around
    let wrapped = false;
    if (newX < 0) {
      newX += width;
      wrapped = true;
    } else if (newX > width) {
      newX -= width;
      wrapped = true;
    }
    if (newY < 0) {
      newY += height;
      wrapped = true;
    } else if (newY > height) {
      newY -= height;
      wrapped = true;
    }

    // Draw the line only if it does not wrap around
    if (!wrapped) {
      line(x, y, newX, newY);
    }

    // Update current position
    x = newX;
    y = newY;
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  background(255); // Optional: Clear the background on resize
}