const screen = document.getElementById("screen");
const screenContext = screen.getContext("2d");

class Coordenada{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}

let largura = screen.width;
let altura = screen.height;

function atualizarPlanoDeFundo(url) {
    screen.style.background = url;
}

function LimpaTela(){
    screen.removeEventListener('mousemove',handleMouse);
    screen.removeEventListener('click',handleClick);
    screen.removeEventListener('click',configuraClick);
    screenContext.clearRect(0, 0, screen.width, screen.height);
}

caixaBotaoHome.addEventListener('click', function(){
    LimpaTela();
    mostraPong();
    mostraMsgMenu();
    desenhaMenu();
    terminaJogo();
});