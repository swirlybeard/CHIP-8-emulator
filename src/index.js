const OnColor = 'white'
const OffColor = 'black'

function App(canvas, width, height) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');

  this.canvas.width = 64;
  this.canvas.height = 32;
}

App.prototype.resize = function() {
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerWidth / 2;
}

App.prototype.drawPixel = function(x, y, on) {
  if (on) {
    this.context.fillStyle = OnColor;
  } else {
    this.context.fillStyle = OffColor;
  }
  
  this.context.fillRect(x, y, 1, 1);
}

App.prototype.clearDisplay = function () {
  this.context.fillStyle = OffColor;
  
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

function init() {
  const canvas = document.getElementById('screen');
  const app = new App(canvas, 64, 32); 
  app.clearDisplay();
  app.drawPixel(1, 1, true);
}

window.addEventListener('load', init);
