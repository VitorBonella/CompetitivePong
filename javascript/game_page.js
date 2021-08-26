const logoTime1Placar = document.getElementById("logoTime1");
const numGolsTime1Placar = document.getElementById("numGolsTime1");
const logoTime2Placar = document.getElementById("logoTime2");
const numGolsTime2Placar = document.getElementById("numGolsTime2");
let gameLoopInterval;

/*
let listatimes = {  fla : 'images/in-game/times/flamengo.jpg',  flu : 'images/in-game/times/fluminense.jpg',
                    arg : 'images/in-game/times/argentinos.jpg',atl : 'images/in-game/times/atletico.jpg', 
                    boca : 'images/in-game/times/boca.jpg',     cer : 'images/in-game/times/cerro.jpg', 
                    dyj : 'images/in-game/times/defensa.jpg',   int : 'images/in-game/times/inter.jpg', 
                    oli : 'images/in-game/times/olimpia.jpg',   pal : 'images/in-game/times/palmeiras.jpg', 
                    rac : 'images/in-game/times/racing.jpg',    riv : 'images/in-game/times/river.jpg', 
                    sao : 'images/in-game/times/saopaulo.jpg',  uni : 'images/in-game/times/universidade.jpg', 
                    bar : 'images/in-game/times/barcelona.jpg', vel : 'images/in-game/times/velez.jpg', 
};
*/

let numerosPlacarEsq = {
    0 : "url('images/placar/0l.png')",
    1 : "url('images/placar/1l.png')",
    2 : "url('images/placar/2l.png')",
    3 : "url('images/placar/3l.png')",
    4 : "url('images/placar/4l.png')",
    5 : "url('images/placar/5l.png')",
}

let numerosPlacarDir = {
    0 : "url('images/placar/0r.png')",
    1 : "url('images/placar/1r.png')",
    2 : "url('images/placar/2r.png')",
    3 : "url('images/placar/3r.png')",
    4 : "url('images/placar/4r.png')",
    5 : "url('images/placar/5r.png')",
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
    desenha(cor = "#FFF",pattern = null){
       
        if(pattern != null){
            //let imgTime = new Image();
            //imgTime.src = pattern;
            
            let pat = screenContext.createPattern(pattern,"repeat");
            screenContext.fillStyle = pat;
            screenContext.fillRect(this.esquerda,this.cima,this.tamanho.x,this.tamanho.y);
            screenContext.strokeRect(this.esquerda,this.cima,this.tamanho.x,this.tamanho.y);
        }
        else{
            screenContext.fillStyle = cor;
            screenContext.fillRect(this.esquerda,this.cima,this.tamanho.x,this.tamanho.y);
        }
        
    }
}

class Bola extends Retangulo{
    constructor(size = 15){
        super(size,size);
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
        this.logo = "#FFF"
    }
}

let ball = new Bola;

ball.init();

let jogador1 = new Jogador;
let jogador2 = new Jogador;

jogador1.posicao.x = p1_posX;
jogador2.posicao.x = p2_posX;

jogador1.posicao.y = p_posY;
jogador2.posicao.y = p_posY;

function defineJogadores(time1, time2 = null){
    
    logoTime1Placar.style.backgroundImage = "url(" + time1.imgPlacar.src +")";
    
    jogador1.logo = time1.imgRoupa;
    
    let indice;
    if(time2 === null){
        do{
            indice = Math.floor(Math.random() * (15 + 1));
        }while(time2 === time1.indice);
        
        logoTime2Placar.style.backgroundImage = "url(" + logos[indice].imgPlacar.src +")";
        jogador2.logo = logos[indice].imgRoupa;
        
    }else{
        logoTime2Placar.style.backgroundImage = "url(" +  time2.imgPlacar.src +")";
        jogador2.logo = time2.imgRoupa;
    }
}

function desenhaElementos(){
    LimpaTela();
    atualizarPlanoDeFundo("url('images/in-game/campo.jpg')");

    ball.desenha();
    jogador1.desenha(cor = "#FFF",pattern = jogador1.logo);
    jogador2.desenha(cor = "#FFF",pattern = jogador2.logo);
}


function houveColisaoEsq(jogador, bola){

}
function houveColisaoDir(jogador, bola){

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
        if(Math.abs(bola.velocidade.x) < MaxVelX){
            bola.velocidade.x = - 1 - bola.velocidade.x * 1.05;
        }else{
            bola.velocidade.x = -bola.velocidade.x;
        }

        if(Math.abs(bola.velocidade.y) < MaxVelY){
            if((bola.cima+bola.baixo)/2 > (jogador.cima+jogador.baixo)/2){
                bola.velocidade.y = Math.abs(bola.velocidade.y * 1.2);
            }else{
                bola.velocidade.y = -Math.abs(bola.velocidade.y * 1.2);
            }

        }else{
            if((bola.cima+bola.baixo)/2 > (jogador.cima+jogador.baixo)/2){
                bola.velocidade.y = bola.velocidade.y;
            }else{
                bola.velocidade.y = bola.velocidade.y * (-1);
            }
        }
    }
    
}

function reseta(){

    ball.init(); //reseta bola

    //reseta jogadores
    jogador1.posicao.x = 40;
    jogador2.posicao.x = largura - 40;

    jogador1.posicao.y = altura/2;
    jogador2.posicao.y = altura/2;
    jogador1.pontos = 0;
    jogador2.pontos = 0;

    //reseta placar
    numGolsTime1Placar.style.backgroundImage = numerosPlacarEsq[0];
    numGolsTime2Placar.style.backgroundImage = numerosPlacarDir[0];

    logos = [];
}

function terminaJogo(){
    
    
    reseta();
    console.log("GANHOU");

    clearInterval(gameLoopInterval);
    
    LimpaTela();
    mostraPong();
    desenhaMenu();
}

function iniciaJogo(){
    let direcao = (Math.random() > .5 ? 1 : -1);
    let diagonal = (Math.random() * 2 - 1)

    console.log(direcao)
    ball.velocidade.x = 4 * direcao;
    ball.velocidade.y = 4 * diagonal;

    screen.removeEventListener("click",iniciaJogo);
}

let multiplayer = false;

const muitofacil = 0.9
const facil = 0.5
const medio = 0.3
const dificil = 0.1
const impossivel = 0
let dificuldade = muitofacil

function atualiza(){
    
    ball.posicao.x += ball.velocidade.x;
    ball.posicao.y += ball.velocidade.y;

    if(ball.direita > largura - 15 || ball.esquerda < 15){
        if(ball.velocidade.x < 0){
            jogador2.pontos += 1;
            
        }else{
            jogador1.pontos += 1;
        }
        
        numGolsTime1Placar.style.backgroundImage = numerosPlacarEsq[jogador1.pontos];
        numGolsTime2Placar.style.backgroundImage = numerosPlacarDir[jogador2.pontos];

        const maxGols = 5;

        if(jogador1.pontos === maxGols || jogador2.pontos === maxGols){
            terminaJogo();
            return;
        }
        else{
            console.log(jogador1,jogador2);
            ball.init();
            clickHandle();
        }
        
    }
    
    if(ball.baixo > altura - 5){
        ball.velocidade.y = -Math.abs(ball.velocidade.y);
    }else if(ball.cima < 5){
        ball.velocidade.y = Math.abs(ball.velocidade.y);
    }

    houveColisao(jogador1,ball);
    houveColisao(jogador2,ball);

    if(!multiplayer){
        
        //jogador2.posicao.y += movelen;

        //pra cima
        if (jogador2.posicao.y > ball.posicao.y) {
            if(Math.random() > dificuldade){
                if (ball.velocidade.x > 0) jogador2.posicao.y -= 10 ;
            }
        }
        //pra baixo
        if (jogador2.posicao.y < ball.posicao.y) {
            if(Math.random() > dificuldade){
                if (ball.velocidade.x > 0) jogador2.posicao.y += 10;
            }
        }
        
    }

    
    desenhaElementos();

}

const movelen = 40
const enterlength = 50

function ativar1Player(){
    document.onkeydown = function(e) {
        e.preventDefault(); //to prevent scroll of screen
        switch (e.keyCode) {
            //player 1 keys
            case p1_UP:
                if(jogador1.posicao.y > enterlength){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case p1_DOWN:
                if(jogador1.posicao.y < altura - enterlength){
                    jogador1.posicao.y += movelen;
                }
                break;
            case p2_UP:
                if(jogador1.posicao.y > enterlength){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case p2_DOWN:
                if(jogador1.posicao.y < altura - enterlength){
                    jogador1.posicao.y += movelen;
                }
                break;
        }
    
    };
}

function ativar2Player(){
    
    document.onkeydown = document.onkeyup = function(e) {
        e.preventDefault(); 
        switch (e.keyCode) {
            //player 1 keys
            case p1_UP:
                if(jogador2.posicao.y > enterlength){
                    jogador2.posicao.y -= movelen;
                }
                break;
            case p1_DOWN:
                if(jogador2.posicao.y < altura - enterlength){
                    jogador2.posicao.y += movelen;
                }
                break;
            //player 2 keys
            case p2_UP:
                if(jogador1.posicao.y > enterlength){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case p2_DOWN:
                if(jogador1.posicao.y < altura - enterlength){
                    jogador1.posicao.y += movelen;
                }
                break;
        }
    };

 

}


function clickHandle(){
    screen.addEventListener('click',iniciaJogo);
    
}

function inicializaJogo(time1){
    console.log("INICIALIZA JOGO SINGLEPLAYER:");
    console.log(time1);
    resetaTelaSelecao();
    defineJogadores(time1);
    clickHandle();
    multiplayer = false;
    ativar1Player();
    gameLoopInterval = setInterval(function() {
        atualiza();
      }, 1000/60);
      
    
}

function inicializaJogoMultiplayer(time1 , time2){  
    console.log("INICIALIZA JOGO MULTIPLAYER:");  
    resetaTelaSelecao();


    defineJogadores(time1,time2);
    clickHandle();
    multiplayer = true;
    ativar2Player();
    gameLoopInterval = setInterval(function() {
        atualiza()
      }, 1000/30);
    

}

