function desenhaLogos(){
    pos = new Coordenada(100, 20);

    imgL1 = new Image();
    imgL1.src = "images/placar/argenlogo.png";
    imgL1.onload = function () {
        screenContext.drawImage(imgL1, pos.x, pos.y);
    };

    imgL2 = new Image();
    imgL2.src = "images/placar/barcelogo.png";
    imgL2.onload = function () {
        screenContext.drawImage(imgL2, pos.x+130, pos.y);
    };

    imgL3 = new Image();
    imgL3.src = "images/placar/bocalogo.png";
    imgL3.onload = function () {
        screenContext.drawImage(imgL3, pos.x+130, pos.y);
    };

    imgL4 = new Image();
    imgL4.src = "images/placar/cerrologo.png";
    imgL4.onload = function () {
        screenContext.drawImage(imgL4, pos.x+200, pos.y);
    };

    imgL5 = new Image();
    imgL5.src = "images/placar/dyjlogo.png";
    imgL5.onload = function () {
        screenContext.drawImage(imgL5, pos.x+80, pos.y);
    };

    imgL6 = new Image();
    imgL6.src = "images/placar/flalogo.png";
    imgL6.onload = function () {
        screenContext.drawImage(imgL6, pos.x+100, pos.y);
    };

    imgL7 = new Image();
    imgL7.src = "images/placar/flulogo.png";
    imgL7.onload = function () {
        screenContext.drawImage(imgL7, pos.x+120, pos.y);
    };

    imgL8 = new Image();
    imgL8.src = "images/placar/galologo.png";
    imgL8.onload = function () {
        screenContext.drawImage(imgL8, pos.x+140, pos.y);
    };

    imgL9 = new Image();
    imgL9.src = "images/placar/interlogo.png";
    imgL9.onload = function () {
        screenContext.drawImage(imgL9, pos.x+160, pos.y);
    };

    imgL10 = new Image();
    imgL10.src = "images/placar/olimpialogo.png";
    imgL10.onload = function () {
        screenContext.drawImage(imgL10, pos.x+180, pos.y);
    };

    imgL11 = new Image();
    imgL11.src = "images/placar/pallogo.png";
    imgL11.onload = function () {
        screenContext.drawImage(imgL11, pos.x+200, pos.y);
    };

    imgL12 = new Image();
    imgL12.src = "images/placar/racinglogo.png";
    imgL12.onload = function () {
        screenContext.drawImage(imgL12, pos.x+220, pos.y);
    };

    imgL13 = new Image();
    imgL13.src = "images/placar/riverlogo.png";
    imgL13.onload = function () {
        screenContext.drawImage(img13, pos.x+240, pos.y);
    };

    imgL14 = new Image();
    imgL14.src = "images/placar/splogo.png";
    imgL14.onload = function () {
        screenContext.drawImage(imgL14, pos.x+260, pos.y);
    };

    imgL15 = new Image();
    imgL15.src = "images/placar/unilogo.png";
    imgL15.onload = function () {
        screenContext.drawImage(imgL15, pos.x+280, pos.y);
    };

    imgL16 = new Image();
    imgL16.src = "images/placar/velezlogo.png";
    imgL16.onload = function () {
        screenContext.drawImage(imgL16, pos.x+300, pos.y);
    };
}

function desenhaTelaSelecao(modalidade){
    LimpaTela();
    atualizarPlanoDeFundo("#f5f5f5");

    desenhaLogos();
}