const caixaEscolhaSingleplayer = document.getElementById("caixaEscolhaSingleplayer");
const caixaEscolhaMultiplayer = document.getElementById("caixaEscolhaMultiplayer");

class Logo{
    constructor(imgPlacar, imgRoupa, coordenada, indice){
        

        this.imgPlacar = imgPlacar;
        this.imgRoupa = imgRoupa;
        this.coordenada = coordenada;
        this.indice = indice;
    }
}

let logos = [];

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

    desenhaFundoLogo(x - 5, y - 5)
    img1Placar = new Image();
    img1Placar.src = "images/placar/argenlogo.png";
    img1Roupa = new Image();
    img1Roupa.src = "images/in-game/times/argentinos.jpg";
    img1Placar.onload = function () {
        screenContext.drawImage(img1Placar, x, y);
    };
    logos.push(new Logo(img1Placar, img1Roupa, new Coordenada(x, y), 0));
    
    desenhaFundoLogo(x+(varX*1) - 5, y - 5)
    img2Placar = new Image();
    img2Placar.src = "images/placar/barcelogo.png";
    img2Roupa = new Image();
    img2Roupa.src = "images/in-game/times/barcelona.jpg";
    img2Placar.onload = function () {
        screenContext.drawImage(img2Placar, x+(varX*1), y);
    };
    logos.push(new Logo(img2Placar, img2Roupa, new Coordenada(x+(varX*1), y), 1));

    desenhaFundoLogo(x+(varX*2) - 5, y - 5)
    img3Placar = new Image();
    img3Placar.src = "images/placar/bocalogo.png";
    img3Roupa = new Image();
    img3Roupa.src = "images/in-game/times/boca.jpg";
    img3Placar.onload = function () {
        screenContext.drawImage(img3Placar, x+(varX*2), y);
    };
    logos.push(new Logo(img3Placar, img3Roupa, new Coordenada(x+(varX*2), y), 2));

    desenhaFundoLogo(x+(varX*3) - 5, y - 5)
    img4Placar = new Image();
    img4Placar.src = "images/placar/cerrologo.png";
    img4Roupa = new Image();
    img4Roupa.src = "images/in-game/times/cerro.jpg";
    img4Placar.onload = function () {
        screenContext.drawImage(img4Placar, x+(varX*3), y);
    };
    logos.push(new Logo(img4Placar, img4Roupa, new Coordenada(x+(varX*3), y), 3));

    desenhaFundoLogo(x - 5, y + varY*1 - 5)
    img5Placar = new Image();
    img5Placar.src = "images/placar/dyjlogo.png";
    img5Roupa = new Image();
    img5Roupa.src = "images/in-game/times/defensa.jpg";
    img5Placar.onload = function () {
        screenContext.drawImage(img5Placar, x, y + varY*1);
    };
    logos.push(new Logo(img5Placar, img5Roupa, new Coordenada(x, y + varY*1), 4));

    desenhaFundoLogo(x+(varX*1) - 5, y+varY*1 - 5)
    img6Placar = new Image();
    img6Placar.src = "images/placar/flalogo.png";
    img6Roupa = new Image();
    img6Roupa.src = "images/in-game/times/flamengo.jpg";
    img6Placar.onload = function () {
        screenContext.drawImage(img6Placar, x+(varX*1), y + varY*1);
    };
    logos.push(new Logo(img6Placar, img6Roupa, new Coordenada(x+(varX*1), y + varY*1), 5));

    desenhaFundoLogo(x+(varX*2) - 5, y+varY*1 - 5)
    img7Placar = new Image();
    img7Placar.src = "images/placar/flulogo.png";
    img7Roupa = new Image();
    img7Roupa.src = "images/in-game/times/fluminense.jpg";
    img7Placar.onload = function () {
        screenContext.drawImage(img7Placar, x+(varX*2), y + varY*1);
    };
    logos.push(new Logo(img7Placar, img7Roupa, new Coordenada(x+(varX*2), y + varY*1), 6));

    desenhaFundoLogo(x+(varX*3) - 5, y+varY*1 - 5)
    img8Placar = new Image();
    img8Placar.src = "images/placar/galologo.png";
    img8Roupa = new Image();
    img8Roupa.src = "images/in-game/times/atletico.jpg";
    img8Placar.onload = function () {
        screenContext.drawImage(img8Placar, x+(varX*3), y + varY*1);
    };
    logos.push(new Logo(img8Placar, img8Roupa, new Coordenada(x+(varX*3), y + varY*1), 7));

    desenhaFundoLogo(x+(varX*0) - 5, y+varY*2 - 5)
    img9Placar = new Image();
    img9Placar.src = "images/placar/interlogo.png";
    img9Roupa = new Image();
    img9Roupa.src = "images/in-game/times/inter.jpg";
    img9Placar.onload = function () {
        screenContext.drawImage(img9Placar, x, y + varY*2);
    };
    logos.push(new Logo(img9Placar, img9Roupa, new Coordenada(x, y + varY*2), 8));

    desenhaFundoLogo(x+(varX*1) - 5, y+varY*2 - 5)
    img10Placar = new Image();
    img10Placar.src = "images/placar/olimpialogo.png";
    img10Roupa = new Image();
    img10Roupa.src = "images/in-game/times/olimpia.jpg";
    img10Placar.onload = function () {
        screenContext.drawImage(img10Placar, x+(varX*1), y + varY*2);
    };
    logos.push(new Logo(img10Placar, img10Roupa, new Coordenada(x+(varX*1), y + varY*2), 9));

    desenhaFundoLogo(x+(varX*2) - 5, y+varY*2 - 5)
    img11Placar = new Image();
    img11Placar.src = "images/placar/pallogo.png";
    img11Roupa = new Image();
    img11Roupa.src = "images/in-game/times/palmeiras.jpg";
    img11Placar.onload = function () {
        screenContext.drawImage(img11Placar, x+(varX*2), y + varY*2);
    };
    logos.push(new Logo(img11Placar, img11Roupa, new Coordenada(x+(varX*2), y + varY*2), 10));

    desenhaFundoLogo(x+(varX*3) - 5, y+varY*2 - 5)
    img12Placar = new Image();
    img12Placar.src = "images/placar/racinglogo.png";
    img12Roupa = new Image();
    img12Roupa.src = "images/in-game/times/racing.jpg";
    img12Placar.onload = function () {
        screenContext.drawImage(img12Placar, x+(varX*3), y + varY*2);
    };
    logos.push(new Logo(img12Placar, img12Roupa, new Coordenada(x+(varX*3), y + varY*2), 11));

    desenhaFundoLogo(x+(varX*0) - 5, y+varY*3 - 5)
    img13Placar = new Image();
    img13Placar.src = "images/placar/riverlogo.png";
    img13Roupa = new Image();
    img13Roupa.src = "images/in-game/times/river.jpg";
    img13Placar.onload = function () {
        screenContext.drawImage(img13Placar, x, y + varY*3);
    };
    logos.push(new Logo(img13Placar, img13Roupa, new Coordenada(x, y + varY*3), 12));

    desenhaFundoLogo(x+(varX*1) - 5, y+varY*3 - 5)
    img14Placar = new Image();
    img14Placar.src = "images/placar/splogo.png";
    img14Roupa = new Image();
    img14Roupa.src = "images/in-game/times/saopaulo.jpg";
    img14Placar.onload = function () {
        screenContext.drawImage(img14Placar, x+243.3, y + varY*3);
    };
    logos.push(new Logo(img14Placar, img14Roupa, new Coordenada(x+243.3, y + varY*3), 13));

    desenhaFundoLogo(x+(varX*2) - 5, y+varY*3 - 5)
    img15Placar = new Image();
    img15Placar.src = "images/placar/unilogo.png";
    img15Roupa = new Image();
    img15Roupa.src = "images/in-game/times/universidade.jpg";
    img15Placar.onload = function () {
        screenContext.drawImage(img15Placar, x+486.6, y + varY*3);
    };
    logos.push(new Logo(img15Placar, img15Roupa, new Coordenada(x+486.6, y + varY*3), 14));

    desenhaFundoLogo(x+(varX*3) - 5, y+varY*3 - 5)
    img16Placar = new Image();
    img16Placar.src = "images/placar/velezlogo.png";
    img16Roupa = new Image();
    img16Roupa.src = "images/in-game/times/velez.jpg";
    img16Placar.onload = function () {
        screenContext.drawImage(img16Placar, x+729.9, y + varY*3);
    };
    logos.push(new Logo(img16Placar, img16Roupa, new Coordenada(x+729.9, y + varY*3), 15));
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

function desenhaTelaSelecao(modalidade){
    LimpaTela();
    atualizarPlanoDeFundo('url("images/bg/bgchoose.jpg")');

    if(modalidade === 0) mostraEscolhaSingleplayer();
    else if(modalidade === 1) mostraEscolhaMultiplayer();

    screen.addEventListener("click", function(e){
        pos = new Coordenada(e.offsetX, e.offsetY);

        let indiceBotao = botaoClicado(pos);
        if(indiceBotao != -1){
            console.log("teste");
            //screen.removeEventListener("click");
            inicializaJogo(logos[indiceBotao]);
        }
    });

    desenhaLogos();
}