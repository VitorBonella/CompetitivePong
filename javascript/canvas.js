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

    screenContext.clearRect(0, 0, screen.width, screen.height);
}