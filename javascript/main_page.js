const screen = document.getElementById("screen");
const screenContext = screen.getContext("2d");

console.log("availwidth", screen.availWidth)
console.log(screen.pixelDepth)

screen.style.background = "url('images/menu.jpg')";

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

b1width = screen.width/2 - 75
b1height = screen.height/2 - 75

b2width = screen.width/2 - 75
b2height = screen.height/2 - 25

b3width = screen.width/2 - 75 
b3height = screen.height/2 + 25

b4width = screen.width/2 - 75 
b4height = screen.height/2 + 75

document.addEventListener('focus', redraw, true);
document.addEventListener('blur', redraw, true);
screen.addEventListener('click', handleClick, false);
redraw();

function redraw() {
    screenContext.clearRect(0, 0, screen.width, screen.height);
    drawButton(button1, b1width, b1height);
    drawButton(button2, b2width, b2height);
    drawButton(button3, b3width, b3height);
    drawButton(button4, b4width, b4height);
}

function handleClick(e) {
  // Calculate click coordinates
  const x = e.offsetX 
  const y = e.offsetY

  // Focus button1, if appropriate
  drawButton(button1,b1width,b1height);
  if (screenContext.isPointInPath(x, y)) {
    button1.focus();
    //alert("VAI A MERDA")
  }

  // Focus button2, if appropriate
  drawButton(button2, b2width, b2height);
  if (screenContext.isPointInPath(x, y)) {
    button2.focus();
  }

  // Focus button3, if appropriate
  drawButton(button3, b3width, b3height);
  if (screenContext.isPointInPath(x, y)) {
    button3.focus();
  }

  // Focus button4, if appropriate
  drawButton(button4, b4width, b4height);
  if (screenContext.isPointInPath(x, y)) {
    button4.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 200;
  const height = 40;

  // Button background
  screenContext.fillStyle = active ? 'pink' : 'lightgray';
  screenContext.fillRect(x, y, width, height);

  // Button text
  screenContext.font = '15px sans-serif';
  screenContext.textAlign = 'center';
  screenContext.textBaseline = 'middle';
  screenContext.fillStyle = active ? 'blue' : 'black';
  screenContext.fillText(el.textContent, x + width / 2, y + height / 2);

  // Define clickable area
  screenContext.beginPath();
  screenContext.rect(x, y, width, height);

  // Draw focus ring, if appropriate
  //screenContext.drawFocusIfNeeded(el);
}