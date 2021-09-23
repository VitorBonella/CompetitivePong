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
    screenContext.strokeRect(x, y, largura, altura)
}

function desenhaLogos(){
    let x = 100;
    let y = 25;

    const varX = 243.3;
    const varY = 126.6;

    logo1 = new Logo(listaLogos["argentinos"], listaCamisas["argentinos"], new Coordenada(x, y), 0);
    desenhaFundoLogo(logo1.coordenada.x - 5, logo1.coordenada.y - 5);
    logos.push(logo1);
    
    logo2 = new Logo(listaLogos["barcelona"], listaCamisas["barcelona"], new Coordenada(x+(varX*1), y), 1);
    desenhaFundoLogo(logo2.coordenada.x - 5, logo2.coordenada.y - 5);
    logos.push(logo2);

    logo3 = new Logo(listaLogos["boca"], listaCamisas["boca"], new Coordenada(x+(varX*2), y), 2);
    desenhaFundoLogo(logo3.coordenada.x - 5, logo3.coordenada.y - 5);
    logos.push(logo3);

    logo4 = new Logo(listaLogos["cerro"], listaCamisas["cerro"], new Coordenada(x+(varX*3), y), 3);
    desenhaFundoLogo(logo4.coordenada.x - 5, logo4.coordenada.y - 5);
    logos.push(logo4);

    logo5 = new Logo(listaLogos["defensa"], listaCamisas["defensa"], new Coordenada(x, y + varY*1), 4);
    desenhaFundoLogo(logo5.coordenada.x - 5, logo5.coordenada.y - 5);
    logos.push(logo5);

    logo6 = new Logo(listaLogos["flamengo"], listaCamisas["flamengo"], new Coordenada(x+(varX*1), y + varY*1), 5);
    desenhaFundoLogo(logo6.coordenada.x - 5, logo6.coordenada.y - 5);
    logos.push(logo6);

    logo7 = new Logo(listaLogos["fluminense"], listaCamisas["fluminense"], new Coordenada(x+(varX*2), y + varY*1), 6);
    desenhaFundoLogo(logo7.coordenada.x - 5, logo7.coordenada.y - 5);
    logos.push(logo7);

    logo8 = new Logo(listaLogos["atletico"], listaCamisas["atletico"], new Coordenada(x+(varX*3), y + varY*1), 7);
    desenhaFundoLogo(logo8.coordenada.x - 5, logo8.coordenada.y - 5);
    logos.push(logo8);

    logo9 = new Logo(listaLogos["internacional"], listaCamisas["internacional"], new Coordenada(x, y + varY*2), 8);
    desenhaFundoLogo(logo9.coordenada.x - 5, logo9.coordenada.y - 5);
    logos.push(logo9);

    logo10 = new Logo(listaLogos["olimpia"], listaCamisas["olimpia"], new Coordenada(x+(varX*1), y + varY*2), 9);
    desenhaFundoLogo(logo10.coordenada.x - 5, logo10.coordenada.y - 5);
    logos.push(logo10);

    logo11 = new Logo(listaLogos["palmeiras"], listaCamisas["palmeiras"], new Coordenada(x+(varX*2), y + varY*2), 10);
    desenhaFundoLogo(logo11.coordenada.x - 5, logo11.coordenada.y - 5);
    logos.push(logo11);

    logo12 = new Logo(listaLogos["racing"], listaCamisas["racing"], new Coordenada(x+(varX*3), y + varY*2), 11);
    desenhaFundoLogo(logo12.coordenada.x - 5, logo12.coordenada.y - 5);
    logos.push(logo12);

    logo13 = new Logo(listaLogos["river"], listaCamisas["river"], new Coordenada(x, y + varY*3), 12);
    desenhaFundoLogo(logo13.coordenada.x - 5, logo13.coordenada.y - 5);
    logos.push(logo13);

    logo14 = new Logo(listaLogos["saopaulo"], listaCamisas["saopaulo"], new Coordenada(x+243.3, y + varY*3), 13);
    desenhaFundoLogo(logo14.coordenada.x - 5, logo14.coordenada.y - 5);
    logos.push(logo14);

    logo15 = new Logo(listaLogos["universidad"], listaCamisas["universidad"], new Coordenada(x+486.6, y + varY*3), 14);
    desenhaFundoLogo(logo15.coordenada.x - 5, logo15.coordenada.y - 5);
    logos.push(logo15);

    logo16 = new Logo(listaLogos["velez"], listaCamisas["velez"], new Coordenada(x+729.9, y + varY*3), 15);
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