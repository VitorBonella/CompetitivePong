const screen = document.getElementById("screen");
const screenContext = screen.getContext("2d");

let largura = screen.width;
let altura = screen.height;
let larguraMenu = 300;
let alturaMenu = 360;

function LimpaTela(){
  screen.removeEventListener('mousemove',handleMouse);
  screen.removeEventListener('click',handleClick);
  screenContext.clearRect(0, 0, screen.width, screen.height);
}

function atualizarPlanoDeFundo(url) {
  screen.style.background = url;
}

function desenharBaseMenu() {
  screenContext.fillStyle = "rgba(255,255,255,0.7)";
  let x = parseInt((largura / 2) - (larguraMenu / 2));
  let y = parseInt((altura / 2) - (alturaMenu / 2));
  screenContext.fillRect(x, y, larguraMenu, alturaMenu);
}

function desenharItensMenu() {
  let x = parseInt((largura / 2) - (larguraMenu / 2));
  let y = parseInt((altura / 2) - (alturaMenu / 2));
  

  img1 = new Image();
  img1.src = "images/AmistosoButton.png";
  img1.onload = function () {
    screenContext.drawImage(img1, x, y);
  };

  img2= new Image();
  img2.src = "images/MultiplayerButton.png";
  img2.onload = function () {
    screenContext.drawImage(img2, x, y+100);
  };

  img3 = new Image();
  img3.src = "images/CompeticaoButton.png";
  img3.onload = function () {
    screenContext.drawImage(img3, x, y+200);
  };

  img4 = new Image();
  img4.src = "images/CreditosButton.png";
  img4.onload = function () {
    screenContext.drawImage(img4, x, y+300);
  };
  
}

function desenhaMenu(){
  
  screen.addEventListener('mousemove',handleMouse);
  screen.addEventListener('click',handleClick);
  atualizarPlanoDeFundo("url('images/menu.jpg')");
  //desenharBaseMenu();
  desenharItensMenu();
}

function destacaItem(indice) {
  desenharItensMenu();
  let x = parseInt((largura / 2) - (larguraMenu / 2));
  let y = parseInt((altura / 2) - (alturaMenu / 2));
  
  img = new Image();
  switch (indice) {
      case 0:
          img.src = "images/AmistosoButton2.png";
          img.onload = function () {
            screenContext.drawImage(img, x, y);
          };
          break;
      case 1:
          img.src = "images/MultiplayerButton2.png";
          img.onload = function () {
            screenContext.drawImage(img, x, y+100);
          };
          break;
      case 2:
          img.src = "images/CompeticaoButton2.png";
          img.onload = function () {
            screenContext.drawImage(img, x, y+200);
          };
          break;
      case 3:
          img.src = "images/CreditosButton2.png";
          img.onload = function () {
            screenContext.drawImage(img, x, y+300);
          };
          break;
  }
  
}

function selecionaItem(indice) {
  
  switch (indice) {
      case 0:
          
          break;
      case 1:
          
          break;
      case 2:
          
          break;
      case 3:
          ShowCredits();
          break;
  }
  
}

function getIndiceButton(posX,posY){
    var x = parseInt((largura / 2) - (larguraMenu / 2));
    var y = parseInt((altura / 2) - (alturaMenu / 2));
    var indice = -1;
    if (posX > x && posX < x + larguraMenu) {
      if (posY > y && posY < y + alturaMenu) {
          indice = parseInt((posY - y) / 100);
      }
    }
    return indice;
}

function handleMouse(e){

    var posX = e.offsetX;
    var posY = e.offsetY;
    //alert(posX)
    
    indice = getIndiceButton(posX,posY);
    
    destacaItem(indice);
    
}

function handleClick(e){

  var posX = e.offsetX;
  var posY = e.offsetY;
  //alert(posX)
  
  indice = getIndiceButton(posX,posY);
  
  selecionaItem(indice);
  
}

desenhaMenu();

