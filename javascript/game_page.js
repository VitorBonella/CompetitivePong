const logoTime1Placar = document.getElementById("logoTime1");
const numGolsTime1Placar = document.getElementById("numGolsTime1");
const logoTime2Placar = document.getElementById("logoTime2");
const numGolsTime2Placar = document.getElementById("numGolsTime2");
let gameLoopInterval;

let listatimes = [  fla = 'images/in-game/times/flamengo.jpg',  flu = 'images/in-game/times/fluminense.jpg',
                    arg = 'images/in-game/times/argentinos.jpg',atl = 'images/in-game/times/atletico.jpg', 
                    boca = 'images/in-game/times/boca.jpg',     cer = 'images/in-game/times/cerro.jpg', 
                    dyj = 'images/in-game/times/defensa.jpg',   int = 'images/in-game/times/inter.jpg', 
                    oli = 'images/in-game/times/olimpia.jpg',   pal = 'images/in-game/times/palmeiras.jpg', 
                    rac = 'images/in-game/times/racing.jpg',    riv = 'images/in-game/times/river.jpg', 
                    sao = 'images/in-game/times/saopaulo.jpg',  uni = 'images/in-game/times/universidade.jpg', 
                    bar = 'images/in-game/times/barcelona.jpg', vel = 'images/in-game/times/velez.jpg', 
                ];


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
            let imgTime = new Image();
            imgTime.src = pattern;
            
            let pat = screenContext.createPattern(imgTime,"repeat");
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
    constructor(){
        super(15,15);
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

jogador1.posicao.x = 40;
jogador2.posicao.x = largura - 40;

jogador1.posicao.y = altura/2;
jogador2.posicao.y = altura/2;

jogador1.logo = "images/in-game/times/flamengo.jpg";
jogador2.logo = "images/in-game/times/fluminense.jpg";

function desenhaElementos(){
    LimpaTela();
    atualizarPlanoDeFundo("url('images/in-game/campo.jpg')");

    ball.desenha();
    jogador1.desenha(cor = "#FFF",pattern = jogador1.logo);
    jogador2.desenha(cor = "#FFF",pattern = jogador2.logo);
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
        bola.velocidade.x = -bola.velocidade.x * 1.10;
        bola.velocidade.y += bola.velocidade.y * 0.05 ;
    }
    
}

function atualizaPlacar(jogador){
    if(jogador.pontos === 1){
        // jogador.logo = LOGO 1
    }else if(jogador.pontos === 2){
        // jogador.logo = LOGO 2
    }else if(jogador.pontos === 3){
        // jogador.logo = LOGO 3
    }else if(jogador.pontos === 4){
        // jogador.logo = LOGO 4
    }else if(jogador.pontos === 5){
        // jogador.logo = LOGO 5
    }
}

function terminaJogo(){
    
    ball.init();
    jogador1.pontos = 0;
    jogador2.pontos = 0;
    console.log("GANHOU");

    clearInterval(gameLoopInterval);
    
    LimpaTela();
    desenhaMenu();
}

function iniciaJogo(){
    let direcao = (Math.random() > .5 ? 1 : -1);
    let diagonal = (Math.random() * 2 - 1)

    ball.velocidade.x = 5 * direcao;
    ball.velocidade.y = 5 * diagonal;
    
}

let multiplayer = false;

function atualiza(){
    
    ball.posicao.x += ball.velocidade.x;
    ball.posicao.y += ball.velocidade.y;

    if(ball.direita > largura - 30 || ball.esquerda < 10){
        if(ball.velocidade < 0){
            jogador2.pontos += 1;
            
        }else{
            jogador1.pontos += 1;
        }
        
        const maxGols = 1;

        if(jogador1.pontos === maxGols || jogador2.pontos === maxGols){
            terminaJogo();
            return;
        }
        else{
            console.log(jogador1,jogador2);
            ball.init();
        }
        
    }
    
    if(ball.cima > altura - 5 || ball.baixo < 5){
        ball.velocidade.y = -ball.velocidade.y;
    }

    houveColisao(jogador1,ball);
    houveColisao(jogador2,ball);

    if(!multiplayer){
        jogador2.posicao.y = ball.posicao.y;
    }
    
    desenhaElementos();

}

movelen = 40
function ativar1Player(){
    document.onkeydown = function(e) {
        e.preventDefault(); //to prevent scroll of screen
        switch (e.keyCode) {
            //player 1 keys
            case 38:
                if(jogador1.posicao.y > 20){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case 40:
                if(jogador1.posicao.y < altura - 20){
                    jogador1.posicao.y += movelen;
                }
                break;
            case 87:
                if(jogador1.posicao.y > 20){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case 83:
                if(jogador1.posicao.y < altura - 20){
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
            case 38:
                if(jogador2.posicao.y > 20){
                    jogador2.posicao.y -= movelen;
                }
                break;
            case 40:
                if(jogador2.posicao.y < altura - 20){
                    jogador2.posicao.y += movelen;
                }
                break;
            //player 2 keys
            case 87:
                if(jogador1.posicao.y > 20){
                    jogador1.posicao.y -= movelen;
                }
                break;
            case 83:
                if(jogador1.posicao.y < altura - 20){
                    jogador1.posicao.y += movelen;
                }
                break;
        }
    };

 

}
function clickHandle(){
    screen.addEventListener('click',evento => {
        iniciaJogo();
    });
    
}

function inicializaJogo(){
    
    clickHandle();
    multiplayer = false;
    ativar1Player();
    gameLoopInterval = setInterval(function() {
        atualiza()
      }, 1000/60);
      
    
}

function inicializaJogoMultiplayer(){
    
    clickHandle();
    multiplayer = true;
    ativar2Player();
    gameLoopInterval = setInterval(function() {
        atualiza()
      }, 1000/60);
    

}

