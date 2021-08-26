const caixaEscolhaSingleplayer = document.getElementById("caixaEscolhaSingleplayer");
const caixaEscolhaMultiplayer = document.getElementById("caixaEscolhaMultiplayer");

class Logo{
    constructor(urlImgPlacar, urlImgRoupa, coordenada, indice){
        let imgPlacar = new Image();
        imgPlacar.src = urlImgPlacar;

        let imgRoupa = new Image();
        imgRoupa.src = urlImgRoupa;

        this.imgPlacar = imgPlacar;
        this.imgRoupa = imgRoupa;
        this.coordenada = coordenada;
        this.indice = indice;

        this.imgPlacar.onload = function(){
            screenContext.drawImage(imgPlacar, coordenada.x, coordenada.y);
        };
    }
}

let logos = [];
let primeiroTimeEscolhido = null;
let qtdTimesEscolhidos = 0;
let escolheuSingleplayer = false;
let escolheuMultiplayer = false;

function mostraEscolhaSingleplayer(){
    caixaCabecalho.style.display = "none";
    caixaEscolhaSingleplayer.style.display = "flex"
}

function mostraEscolhaMultiplayer(){
    caixaCabecalho.style.display = "none";
    caixaEscolhaMultiplayer.style.display = "flex";
}

function desenhaFundoLogo(x,y,largura = 80, altura = 80){
    screenContext.fillStyle = "rgba(255,255,255,0.35)";
    screenContext.fillRect(x, y, largura, altura);
}

function desenhaLogos(){
    x = 100;
    y = 25;

    const varX = 243.3;
    const varY = 126.6;

    logo1 = new Logo("images/placar/argenlogo.png", "images/in-game/times/argentinos.jpg", new Coordenada(x, y), 0);
    desenhaFundoLogo(logo1.coordenada.x - 5, logo1.coordenada.y - 5);
    logos.push(logo1);
    
    logo2 = new Logo("images/placar/barcelogo.png", "images/in-game/times/barcelona.jpg", new Coordenada(x+(varX*1), y), 1);
    desenhaFundoLogo(logo2.coordenada.x - 5, logo2.coordenada.y - 5);
    logos.push(logo2);

    logo3 = new Logo("images/placar/bocalogo.png", "images/in-game/times/boca.jpg", new Coordenada(x+(varX*2), y), 2);
    desenhaFundoLogo(logo3.coordenada.x - 5, logo3.coordenada.y - 5);
    logos.push(logo3);

    logo4 = new Logo("images/placar/cerrologo.png", "images/in-game/times/cerro.jpg", new Coordenada(x+(varX*3), y), 3);
    desenhaFundoLogo(logo4.coordenada.x - 5, logo4.coordenada.y - 5);
    logos.push(logo4);

    logo5 = new Logo("images/placar/dyjlogo.png", "images/in-game/times/defensa.jpg", new Coordenada(x, y + varY*1), 4);
    desenhaFundoLogo(logo5.coordenada.x - 5, logo5.coordenada.y - 5);
    logos.push(logo5);

    logo6 = new Logo("images/placar/flalogo.png", "images/in-game/times/flamengo.jpg", new Coordenada(x+(varX*1), y + varY*1), 5);
    desenhaFundoLogo(logo6.coordenada.x - 5, logo6.coordenada.y - 5);
    logos.push(logo6);

    logo7 = new Logo("images/placar/flulogo.png", "images/in-game/times/fluminense.jpg", new Coordenada(x+(varX*2), y + varY*1), 6);
    desenhaFundoLogo(logo7.coordenada.x - 5, logo7.coordenada.y - 5);
    logos.push(logo7);

    logo8 = new Logo("images/placar/galologo.png", "images/in-game/times/atletico.jpg", new Coordenada(x+(varX*3), y + varY*1), 7);
    desenhaFundoLogo(logo8.coordenada.x - 5, logo8.coordenada.y - 5);
    logos.push(logo8);

    logo9 = new Logo("images/placar/interlogo.png", "images/in-game/times/inter.jpg", new Coordenada(x, y + varY*2), 8);
    desenhaFundoLogo(logo9.coordenada.x - 5, logo9.coordenada.y - 5);
    logos.push(logo9);

    logo10 = new Logo("images/placar/olimpialogo.png", "images/in-game/times/olimpia.jpg", new Coordenada(x+(varX*1), y + varY*2), 9);
    desenhaFundoLogo(logo10.coordenada.x - 5, logo10.coordenada.y - 5);
    logos.push(logo10);

    logo11 = new Logo("images/placar/pallogo.png", "images/in-game/times/palmeiras.jpg", new Coordenada(x+(varX*2), y + varY*2), 10);
    desenhaFundoLogo(logo11.coordenada.x - 5, logo11.coordenada.y - 5);
    logos.push(logo11);

    logo12 = new Logo("images/placar/racinglogo.png", "images/in-game/times/racing.jpg", new Coordenada(x+(varX*3), y + varY*2), 11);
    desenhaFundoLogo(logo12.coordenada.x - 5, logo12.coordenada.y - 5);
    logos.push(logo12);

    logo13 = new Logo("images/placar/riverlogo.png", "images/in-game/times/river.jpg", new Coordenada(x, y + varY*3), 12);
    desenhaFundoLogo(logo13.coordenada.x - 5, logo13.coordenada.y - 5);
    logos.push(logo13);

    logo14 = new Logo("images/placar/splogo.png", "images/in-game/times/saopaulo.jpg", new Coordenada(x+243.3, y + varY*3), 13);
    desenhaFundoLogo(logo14.coordenada.x - 5, logo14.coordenada.y - 5);
    logos.push(logo14);

    logo15 = new Logo("images/placar/unilogo.png", "images/in-game/times/universidade.jpg", new Coordenada(x+486.6, y + varY*3), 14);
    desenhaFundoLogo(logo15.coordenada.x - 5, logo15.coordenada.y - 5);
    logos.push(logo15);

    logo16 = new Logo("images/placar/velezlogo.png", "images/in-game/times/velez.jpg", new Coordenada(x+729.9, y + varY*3), 15);
    desenhaFundoLogo(logo16.coordenada.x - 5, logo16.coordenada.y - 5);
    logos.push(logo16);
}

function botaoClicado(pos){
    for(let i = 0; i < logos.length; i++){
        if(pos.x >= logos[i].coordenada.x && pos.x <= logos[i].coordenada.x + 70){
            if(pos.y >= logos[i].coordenada.y && pos.y <= logos[i].coordenada.y + 70){
                return i;
            }
        }
    }
    return -1;
}

function resetaTelaSelecao(){
    screen.removeEventListener("click", handleClickSelecao);

    primeiroTimeEscolhido = null;
    qtdTimesEscolhidos = 0;
    
    if(escolheuSingleplayer === true){
        caixaEscolhaSingleplayer.style.display = "none";
        escolheuSingleplayer = false;
    }
    else if(escolheuMultiplayer === true){
        caixaEscolhaMultiplayer.style.display = "none";
        escolheuMultiplayer = false;
    }

    caixaEscolhaMultiplayer.childNodes[1].innerHTML = "Escolha o time 1"

    mostraPlacar();
}

function handleClickSelecao(e){
    pos = new Coordenada(e.offsetX, e.offsetY);

    let indiceBotao = botaoClicado(pos);

    if(indiceBotao != -1){
        if(escolheuSingleplayer){
            inicializaJogo(logos[indiceBotao]);
        }else{
            if(qtdTimesEscolhidos === 0){
                primeiroTimeEscolhido = logos[indiceBotao];
                qtdTimesEscolhidos++;
                
                caixaEscolhaMultiplayer.childNodes[1].innerHTML = "Escolha o time 2";
            }else{
                inicializaJogoMultiplayer(primeiroTimeEscolhido, logos[indiceBotao]);
            }
        }
    }
}

function desenhaTelaSelecao(modalidade){
    LimpaTela();
    atualizarPlanoDeFundo('url("images/bg/bgchoose.jpg")');

    desenhaLogos();

    if(modalidade === 0){
        mostraEscolhaSingleplayer();
        escolheuSingleplayer = true;
    }
    else if(modalidade === 1){
        mostraEscolhaMultiplayer();
        escolheuMultiplayer = true;
    }

    screen.addEventListener("click", handleClickSelecao);
}