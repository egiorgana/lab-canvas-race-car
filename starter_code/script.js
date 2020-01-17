const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const image = {car: '/starter_code/images/car.png'}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    draw();
    carrito = new Car(175, canvas.height -200);
    goRight();
  };
  function draw(){
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, 350, 600);
      ctx.stroke();
      ctx.fillStyle = 'gray';
      ctx.fillRect(50, 0, 350, 600);
      ctx.stroke();
      ctx.fillStyle = 'green';
      ctx.fillRect(300, 0, 350, 600);
      ctx.stroke();
      ctx.fillStyle = 'white';
      ctx.fillRect(275, 0, 10, 600);
      ctx.fillRect(62, 0, 10, 600);
      ctx.closePath();
      ctx.moveTo(175, 0);
      ctx.lineTo(175, 15);
      ctx.lineWidth = '5';
      ctx.strokeStyle = 'white';
      ctx.moveTo(175, 30);
      ctx.lineTo(175, 45);
      ctx.moveTo(175, 60);
      ctx.lineTo(175, 75);
      ctx.moveTo(175, 90);
      ctx.lineTo(175, 105);
      ctx.moveTo(175, 120);
      ctx.lineTo(175, 135);
      ctx.moveTo(175, 150);
      ctx.lineTo(175, 165);
      ctx.moveTo(175, 180);
      ctx.lineTo(175, 195);
      ctx.moveTo(175, 210);
      ctx.lineTo(175, 225);
      ctx.moveTo(175, 240);
      ctx.lineTo(175, 255);
      ctx.moveTo(175, 270);
      ctx.lineTo(175, 285);
      ctx.moveTo(175, 300);
      ctx.lineTo(175, 315);
      ctx.moveTo(175, 330);
      ctx.lineTo(175, 345);
      ctx.moveTo(175, 360);
      ctx.lineTo(175, 375);
      ctx.moveTo(175, 390);
      ctx.lineTo(175, 405);
      ctx.moveTo(175, 410);
      ctx.lineTo(175, 425);
      ctx.moveTo(175, 430);
      ctx.lineTo(175, 445);
      ctx.moveTo(175, 460);
      ctx.lineTo(175, 375);
      ctx.moveTo(175, 490);
      ctx.lineTo(175, 395);
      ctx.moveTo(175, 510);
      ctx.lineTo(175, 410);
      ctx.moveTo(175, 530);
      ctx.lineTo(175, 425);
      ctx.moveTo(175, 560);
      ctx.lineTo(175, 445);
      ctx.moveTo(175, 590);
      ctx.lineTo(175, 605);
      ctx.stroke();
  }
  class Car{
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.width = 50
      this.height = 100
      this.sx = 0
      this.sy = 0
      this.img = new Image()
      this.img.src = image.car;
      this.img.onload = () => {
        this.draw()
      }
    }
    draw(){
      ctx.drawImage(
        this.img,
        this.sx,
        this.sy,
        175,
        300,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
    goRight(){
      if(this.x>canvas.width - 100) return;
      this.x += 10;
    }
    goLeft(){
      if(this.x < canvas.width - 100) return
      this.x -= 10;
    }
  }
};

function startGame() {
}