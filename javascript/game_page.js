class Coordenada{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}

class Player{
    constructor(w,h){
        this.posicao = new Coordenada;
        this.tamanho = new Coordenada(w,h);
    }
}

class Bola extends Player{
    constructor(){
        super(20,20);
        this.velocidade = new Coordenada;
    }
}


let ball = new Bola;
ball.posicao.x = 500;
ball.posicao.y = 250;

ball.velocidade.x = 100;
ball.velocidade.y = 100;

let jogador1 = new Player(40, 80);
let jogador2 = new Player(40, 80);

let ultimoInstante;

function frameCallback(milisegundos){
    if(ultimoInstante){
        atualiza((milisegundos - ultimoInstante) / 1000);
    }
    ultimoInstante = milisegundos;
    requestAnimationFrame(frameCallback);
}

function atualiza(dt){
    
    ball.posicao.x += ball.velocidade.x*dt;
    ball.posicao.y += ball.velocidade.y*dt;

    if(ball.posicao.x > largura - 30 || ball.posicao.x < 10){
        console.log("gol")
        ball.velocidade.x = -ball.velocidade.x;
    }
    if(ball.posicao.y > altura - 30 || ball.posicao.y < 10){
        ball.velocidade.y = -ball.velocidade.y;
    }

    LimpaTela();
    atualizarPlanoDeFundo("url('images/in-game/campo.jpg')");

    screenContext.fillStyle = "#FFF"
    screenContext.fillRect(ball.posicao.x,ball.posicao.y,ball.tamanho.x,ball.tamanho.y);

}

function inicializaJogo(){
    
    frameCallback();

}