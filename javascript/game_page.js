class Coordenada{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}

class Retangulo{
    constructor(w,h){
        this.posicao = new Coordenada;
        this.tamanho = new Coordenada(w,h);
    }
    get cima(){
        return this.posicao.y - this.tamanho.y /2;
    }
    get baixo(){
        return this.posicao.y + this.tamanho.y /2;
    }
    get direita(){
        return this.posicao.x + this.tamanho.x /2;
    }
    get esquerda(){
        return this.posicao.x - this.tamanho.x /2;
    }
    desenha(cor = "#FFF"){
        screenContext.fillStyle = cor
        screenContext.fillRect(this.esquerda,this.cima,this.tamanho.x,this.tamanho.y);
    }
}

class Bola extends Retangulo{
    constructor(){
        super(20,20);
        this.velocidade = new Coordenada;
    }
    init(){
        ball.posicao.x = largura/2;
        ball.posicao.y = altura/2;

        ball.velocidade.x = 0;
        ball.velocidade.y = 0;
    }
}

class Jogador extends Retangulo{
    constructor(){
        super(20,80);
        this.pontos = 0;
    }
}

let ball = new Bola;
ball.init();


let jogador1 = new Jogador;
let jogador2 = new Jogador;


jogador1.posicao.x = 40;
jogador2.posicao.x = largura - 40;

jogador1.posicao.y = altura/2;
jogador2.posicao.y = altura/2;

let ultimoInstante;

function frameCallback(milisegundos){
    if(ultimoInstante){
        atualiza((milisegundos - ultimoInstante) / 1000);
    }
    ultimoInstante = milisegundos;
    requestAnimationFrame(frameCallback);
}

function desenhaElementos(){
    LimpaTela();
    atualizarPlanoDeFundo("url('images/in-game/campo.jpg')");

    ball.desenha();
    jogador1.desenha();
    jogador2.desenha();
}

function houveColisao(jogador,bola){
    
    colidiu = false;
    if(jogador.baixo > bola.cima && 
       jogador.cima < bola.baixo &&
       jogador.esquerda < bola.direita && 
       jogador.direita > bola.esquerda){
        colidiu = true;
    }
    if(colidiu){
        bola.velocidade.x = -bola.velocidade.x;
    }
    
}

function iniciaJogo(){
    let direcao = (Math.random() > .5 ? 1 : -1);
    let diagonal = (Math.random() * 2 - 1)

    ball.velocidade.x = 200 * direcao;
    ball.velocidade.y = 200 * diagonal;
    
}

function atualiza(dt){
    
    ball.posicao.x += ball.velocidade.x*dt;
    ball.posicao.y += ball.velocidade.y*dt;

    if(ball.direita > largura - 30 || ball.esquerda < 10){
        if(ball.velocidade < 0){
            jogador2.pontos += 1;
        }
        else{
            jogador1.pontos += 1;
        }
        console.log(jogador1,jogador2);
        ball.init();
        
    }
    if(ball.cima > altura - 30 || ball.baixo < 10){
        ball.velocidade.y = -ball.velocidade.y;
    }

    houveColisao(jogador1,ball);
    houveColisao(jogador2,ball);

    jogador2.posicao.y = ball.posicao.y;

    desenhaElementos();

}

function inicializaJogo(){
    
    frameCallback();

}


screen.addEventListener('click',evento => {
    iniciaJogo();
});

screen.addEventListener('mousemove',evento => {
    jogador1.posicao.y = evento.offsetY;
    /*
    if(evento.key = 'w'){
        jogador1.posicao.y += 10;
    }
    if(evento.key = 's'){
        jogador1.posicao.y -= 10;
    }
    */
});