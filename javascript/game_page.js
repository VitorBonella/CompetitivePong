const logoTime1Placar = document.getElementById("logoTime1");
const numGolsTime1Placar = document.getElementById("numGolsTime1");
const logoTime2Placar = document.getElementById("logoTime2");
const numGolsTime2Placar = document.getElementById("numGolsTime2");
let gameLoopInterval; //variavel do loop principal do jogo


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
    desenha(cor = Cores["branco"], pattern = null){
       
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
        this.logo = Cores["branco"];
    }
}

//Inicializa os objetos basicos para existir uma partida do jogo
let ball = new Bola;
let jogador1 = new Jogador;
let jogador2 = new Jogador;

ball.init();

jogador1.posicao.x = p1_posX;
jogador2.posicao.x = p2_posX;

jogador1.posicao.y = p_posY;
jogador2.posicao.y = p_posY;

/*
Funcao que pode receber como entrada 1 ou 2 times
caso ele receba 1 time ira definir a imagem do placar 
e o estilo do jogador para o player1, e para o player2 irá 
definir aleatoriamente um time. Caso ele receba 2 times irá
definir a imagem e estilo dos 2.
*/
function defineJogadores(time1, time2 = null){
    
    logoTime1Placar.style.backgroundImage = "url(" + time1.imgPlacar.src +")";
    
    jogador1.logo = time1.imgRoupa;
    
    let indice;
    if(time2 === null){
        do{
            indice = Math.floor(Math.random() * (15 + 1));
        }while(indice === time1.indice);
        
        logoTime2Placar.style.backgroundImage = "url(" + logos[indice].imgPlacar.src +")";
        jogador2.logo = logos[indice].imgRoupa;
        
    }else{
        logoTime2Placar.style.backgroundImage = "url(" +  time2.imgPlacar.src +")";
        jogador2.logo = time2.imgRoupa;
    }
}

/* 
Funcao responsavel por desenhar os elementos no jogo
tais como o plano de fundo , a bola e os jogadores
*/
function desenhaElementos(){
    LimpaTela();
    atualizarPlanoDeFundo("url('images/in-game/campo.jpg')");

    ball.desenha();
    jogador1.desenha(cor = Cores["branco"], pattern = jogador1.logo);
    jogador2.desenha(cor = Cores["branco"], pattern = jogador2.logo);
}


function houveColisaoEsq(jogador, bola){

}
function houveColisaoDir(jogador, bola){

}

/*
Funcao responsavel por rebater a bola quando há 
colisao entre um player e um jogador
*/
function rebateBola(jogador, bola){
    //caso a velocidade x da bola seja menor que a velocidade maxima estipulada
    if(Math.abs(bola.velocidade.x) < MaxVelX){
        //rebate a bola e aumenta sua velocidade
        bola.velocidade.x = -bola.velocidade.x * 1.1;
    }else{
        //rebate a bola
        bola.velocidade.x = -bola.velocidade.x;
    }

    //caso a velocidade y da bola seja menor que a velocidade maxima estipulada
    if(Math.abs(bola.velocidade.y) < MaxVelY){
        if(bola.posicao.y > jogador.posicao.y + 20){ // se bater na metade de baixo do jogador
            console.log("bateu em baixo");
            bola.velocidade.y =   Math.abs(bola.velocidade.y * 1.2);
        }else if(bola.posicao.y < jogador.posicao.y - 20){ // se bater na metade de cima do jogador
            console.log("bateu em cima");
            bola.velocidade.y = - Math.abs(bola.velocidade.y * 1.2);
        }else{
            console.log("bateu no meio");
            bola.velocidade.y = bola.velocidade.y * 1.2;
        }

    }else{
        if(bola.posicao.y > jogador.posicao.y){
            bola.velocidade.y = bola.velocidade.y;
        }else{
            bola.velocidade.y = bola.velocidade.y * (-1);
        }
    }
}

/*
Funcao que define se houve colisao entre um jogador
e a bola , caso isso ocorra a bola ira rebater
*/
function houveColisao(jogador,bola){
    
    colidiu = false;
    if(jogador.baixo > bola.cima && 
       jogador.cima < bola.baixo &&
       jogador.esquerda < bola.direita && 
       jogador.direita > bola.esquerda){
       colidiu = true;
    }

    if(colidiu){
        rebateBola(jogador, bola);
    }
    
}

/* 
Funcao que reseta os objetos quando o jogo termina
*/
function reseta(){

    ball.init(); //reseta bola

    //reseta jogadores
    jogador1.posicao.x = p1_posX;
    jogador2.posicao.x = p2_posX;

    jogador1.posicao.y = p_posY;
    jogador2.posicao.y = p_posY;
    jogador1.pontos = 0;
    jogador2.pontos = 0;

    //reseta placar
    numGolsTime1Placar.style.backgroundImage = numerosPlacarEsq[0];
    numGolsTime2Placar.style.backgroundImage = numerosPlacarDir[0];

    //reseta os times da selecao
    logos = [];
}

/*
Funcao invocada quando o jogo acaba e
volta para o menu
*/
function terminaJogo(){
    
    reseta(); //reseta objetos
    console.log("GANHOU");

    clearInterval(gameLoopInterval); //para loop do jogo
    
    LimpaTela(); //limpa tela do jogo
    mostraPong(); //retorna titulo do jogo
    desenhaMenu(); //volta ao menu
}

/*
Funcao que bota a bola em movimento aleatoriamente
quando há um click na tela para iniciar o jogo
*/
function iniciaJogo(){
    let direcao = (Math.random() > .5 ? 1 : -1); //decide a direcao 
    let diagonal = (Math.random() * 2 - 1) //decide se a bola começa pra diagonal

    //da velocidade para bola
    ball.velocidade.x = ballBaseSpeed * direcao;
    ball.velocidade.y = ballBaseSpeed * diagonal; 

    screen.removeEventListener("click",iniciaJogo); //remove possibilidade de click
}

let multiplayer = false; //define se o jogo é multiplayer ou singleplayer

//seletor de dificuldade
const dificuldade = muitofacil

/*
Funcao principal do jogo para atualizar a tela e 
controlar a logica , em 60 fps
*/
function atualiza(){
    
    //movimenta bola
    ball.posicao.x += ball.velocidade.x;
    ball.posicao.y += ball.velocidade.y;

    //caso a bola colida com a direta ou esquerda
    if(ball.direita > largura || ball.esquerda < 0){
        if(ball.velocidade.x < 0){
            jogador2.pontos += 1;    
        }else{
            jogador1.pontos += 1;
        }
        
        //atualiza o placar baseado nos pontos dos jogadores
        numGolsTime1Placar.style.backgroundImage = numerosPlacarEsq[jogador1.pontos];
        numGolsTime2Placar.style.backgroundImage = numerosPlacarDir[jogador2.pontos];

        const maxGols = 5; //quantidade de gols para terminar o jogo

        //caso o jogo termine
        if(jogador1.pontos === maxGols || jogador2.pontos === maxGols){
            terminaJogo();
            return;
        }
        else{
            console.log(jogador1,jogador2);
            ball.init(); //centraliza bola
            clickHandle(); //volta a escutar o click para iniciar o jogo
        }
        
    }
    
    //colisao em cima ou em baixo do campo
    if(ball.baixo > altura - 5){
        ball.velocidade.y = -Math.abs(ball.velocidade.y);
    }else if(ball.cima < 5){
        ball.velocidade.y = Math.abs(ball.velocidade.y);
    }

    //detectar colisao com os players
    houveColisao(jogador1,ball);
    houveColisao(jogador2,ball);

    //mini IA caso o jogo seja singleplayer
    if(!multiplayer){
        
        //pra cima
        if (jogador2.posicao.y > ball.posicao.y) {
            //probabilidade de acertar
            if(Math.random() > dificuldade){
                if (ball.velocidade.x > 0) jogador2.posicao.y -= 15 ;
            }
        }
        //pra baixo
        if (jogador2.posicao.y < ball.posicao.y) {
            //probabilidade de acertar
            if(Math.random() > dificuldade){
                if (ball.velocidade.x > 0) jogador2.posicao.y += 15;
            }
        }
        
    }

    desenhaElementos(); //atualiza os elementos do jogo

}

/*
Ativa os os botoes para 1 jogador
W e S ou | UpArrow ou DownArrow
*/
function ativar1Player(){
    document.onkeydown = function(e) {
        e.preventDefault(); //tira o scroll
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

/*
Ativa os os botoes para 2 jogadores
Player1 -> W e S  
Player2 -> UpArrow e DownArrow
*/
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

/*
Ativa para que a bola começe o movimento
com um click
*/
function clickHandle(){
    screen.addEventListener('click',iniciaJogo);
}

/*
Loop Principal do jogo singleplayer
Inicializa as variaveis para o jogo rodar
*/
function inicializaJogo(time1){
    console.log("INICIALIZA JOGO SINGLEPLAYER:");
    console.log(time1);

    //inicializando as variaveis e telas
    resetaTelaSelecao();
    defineJogadores(time1);
    clickHandle();
    multiplayer = false;
    ativar1Player();

    //loop principal do jogo
    gameLoopInterval = setInterval(function() {
        atualiza();
      }, 1000/framehate);
      
    
}

/*
Loop Principal do jogo multiplayer
Inicializa as variaveis para o jogo rodar
*/
function inicializaJogoMultiplayer(time1 , time2){  
    console.log("INICIALIZA JOGO MULTIPLAYER:");  
    
    //inicializa variaveis e telas
    resetaTelaSelecao();
    defineJogadores(time1,time2);
    clickHandle();
    multiplayer = true;
    ativar2Player();

    //loop principal
    gameLoopInterval = setInterval(function() {
        atualiza()
      }, 1000/framehate);
}

function inicializaJogoCompeticao(time1){
    console.log("INICIALIZA JOGO COMPETICAO:");


}