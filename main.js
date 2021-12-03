// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  context.beginPath();
  context.moveTo(50, 0);
  context.lineTo(50, 500);
  context.stroke();
  context.moveTo(100,500);
  context.lineTo(100, 0);
  context.stroke();
  context.moveTo(150,500);
  context.lineTo(150, 0);
  context.stroke();
  context.moveTo(200,500);
  context.lineTo(200, 0);
  context.stroke();
  context.moveTo(250,500);
  context.lineTo(250, 0);
  context.stroke();
  context.moveTo(300,500);
  context.lineTo(300, 0);
  context.stroke();
  context.moveTo(350,500);
  context.lineTo(350, 0);
  context.stroke();
  context.moveTo(400,500);
  context.lineTo(400, 0);
  context.stroke();
  context.moveTo(450,500);
  context.lineTo(450, 0);
  context.stroke();
  context.moveTo(0,50);
  context.lineTo(500,50);
  context.stroke();
  context.moveTo(0,100);
  context.lineTo(500,100);
  context.stroke();
  context.moveTo(0,150);
  context.lineTo(500,150);
  context.stroke();
  context.moveTo(0,200);
  context.lineTo(500,200);
  context.stroke();
  context.moveTo(0,250);
  context.lineTo(500,250);
  context.stroke();
  context.moveTo(0,300);
  context.lineTo(500,300);
  context.stroke();
  context.moveTo(0,350);
  context.lineTo(500,350);
  context.stroke();
  context.moveTo(0,400);
  context.lineTo(500,400);
  context.stroke();
  context.moveTo(0,450);
  context.lineTo(500,450);
  context.stroke();
  context.closePath();
}

class Character {
    constructor(col, row){
    this.col = col;
    this.row = row;
    this.coly = 50;
    this.rowx = 50;
}
    moveUp(){
        this.row -= this.rowx;
        drawEverything();
    }
    moveDown(){
        this.row += this.rowx;
        drawEverything();
    }
    moveLeft(){
        this.col -= this.coly;
        drawEverything();
    }
    moveRight(){
        this.col += this.coly;
        drawEverything();
    }
}

const player = new Character(0, 0);

function drawPlayer() {
    const playerImg = new Image();
    playerImg.src = '/images/character-down.png';
    playerImg.onload = () => {
        context.drawImage(playerImg, 0, 0, 50, 50);
    }
}

class Treasure {
    constructor() {
    this.col = col;
    this.row = row;
    }
    
}

function drawTreasure() {
    const treasureImg = new Image();
    treasureImg.src = '/images/treasure.png';
    treasureImg.onload = () => {
        context.drawImage(treasureImg, Math.floor((Math.random() * 10))* 50, Math.floor((Math.random() * 10))* 50, 50, 50);
    }
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
  };

  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 38:
        player.moveUp();
        break;
      case 40:
        player.moveDown();
        break;
      case 37:
        player.moveLeft();
        break;
      case 39:
        player.moveRight();
        break;
    } 
});

drawEverything()
