const OnColor = 'white'
const OffColor = 'black'

class Renderer {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.canvas.width = 64;
    this.canvas.height = 32;
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerWidth / 2;
  }
  
  drawPixel(x, y, on) {
    if (on) {
      this.context.fillStyle = OnColor;
    } else {
      this.context.fillStyle = OffColor;
    }
    
    this.context.fillRect(x, y, 1, 1);
  }
  
  clearDisplay () {
    this.context.fillStyle = OffColor;
    
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  drawSprite(x, y, numbers) {
    for (let row = 0; row < numbers.length; row++) {
      for (let i = 7; i >= 0; i--) {
        const value = numbers[row];
        const pixel = (value >> i) & 1;
  
        this.drawPixel(x + i, y + row, pixel);
      }
    }
  }
}

class CPU {
  constructor () {
    this.i = 0;
    this.dt = 0;
    this.st = 0;
    this.pc = 0;
    this.sp = 0;
    this.registers = new Array(16);
    this.memory = new Array(4096); 
  }
}


function init() {
  const canvas = document.getElementById('screen');
  const app = new Renderer(canvas, 64, 32); 
  app.clearDisplay();
}

window.addEventListener('load', init);
