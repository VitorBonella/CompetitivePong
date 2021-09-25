let larguraMenu = 320;
let alturaMenu = 285;

function desenharBaseMenu() {
    screenContext.fillStyle = "rgba(255,255,255,0.25)";
    let x = parseInt((largura / 2) - (larguraMenu / 2));
    let y = parseInt((altura / 2) - (alturaMenu / 2));
    screenContext.fillRect(x-10, y, larguraMenu, alturaMenu);
}

/*
Funcao responsavel por carregar as imagens do menu principal
*/
function desenharItensMenu() {
    let x = parseInt((largura / 2) - (larguraMenu / 2));
    let y = parseInt((altura / 2) - (alturaMenu / 2));
    
    img1 = new Image();
    img1.src = "images/menu/amistoso0.png";
    img1.onload = function () {
      screenContext.drawImage(img1, x, y);
    };
  
    img2= new Image();
    img2.src = "images/menu/multiplayer0.png";
    img2.onload = function () {
      screenContext.drawImage(img2, x, y+100);
    };
  
    img3 = new Image();
    img3.src = "images/menu/configuracoes0.png";
    img3.onload = function () {
      screenContext.drawImage(img3, x, y+200);
    };    
}

/*
Funcao responsavel por carregar as imagens de
destaque quando o mouse está acima da opção
*/
function destacaItem(indice) {
    desenharItensMenu();
    let x = parseInt((largura / 2) - (larguraMenu / 2));
    let y = parseInt((altura / 2) - (alturaMenu / 2));
    
    img = new Image();
    switch (indice) {
        case 0:
            img.src = "images/menu/amistoso1.png";
            img.onload = function () {
              screenContext.drawImage(img, x, y);
            };
            break;
        case 1:
            img.src = "images/menu/multiplayer1.png";
            img.onload = function () {
              screenContext.drawImage(img, x, y+100);
            };
            break;
        case 2:
            img.src = "images/menu/configuracoes1.png";
            img.onload = function () {
              screenContext.drawImage(img, x, y+200);
            };
            break;
    }
    
}

function mostraMsgMenu(){
    caixaInformacoes.children[0].style.display = "initial";
    caixaInformacoes.children[1].style.display = "none";
    caixaInformacoes.children[2].style.display = "none";
    caixaInformacoes.children[3].style.display = "none";
}

/*
Funçao que define as ações quando um botão é clicado
*/
function selecionaItem(indice) {
    console.log(indice)
    switch (indice) {
        case 0:
            desenhaTelaSelecao(0);
            break;
        case 1:
            desenhaTelaSelecao(1);
            break;
        case 2:
            desenhaTelaConfiguracoes();
            break;
    }
    
}

//Funcao de controle quando o mouse é movimentado
function handleMouse(e){
    var posX = e.offsetX;
    var posY = e.offsetY;
  
    indice = getIndiceButton(posX,posY);
  
    destacaItem(indice);
}

//Funcao de controle quando ha um click no mouse
function handleClick(e){
  
  var posX = e.offsetX;
  var posY = e.offsetY;
  
  indice = getIndiceButton(posX,posY);
  
  selecionaItem(indice);
  
}

//Funcao para encontrar qual botao do menu foi clicado
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

//Funcao que inicia a tela de menu e os handlers
function desenhaMenu(){
    screen.addEventListener('mousemove',handleMouse);
    screen.addEventListener('click',handleClick);
    atualizarPlanoDeFundo("url('images/menu.jpg')");
    desenharBaseMenu();
    desenharItensMenu();
}