function desenharBaseConfig(){
    console.log("basemenu");
    configura();
    desenhaGols(3);
    desenhaComandos(mouse);
    desenhaDificuldade(medio);   
}

function desenhaGols(indice){ 
    let largConfig = 400
    let altConfig = 500
    let x = parseInt((largura*3/4 ) - (largConfig / 2));
    let y = parseInt((altura / 2) - (altConfig / 2) + 250);
    console.log(x,y)
    g1 = new Image();
    if(indice == 1) g1.src = "images/config/1g.png";
    else g1.src = "images/config/1p.png";
    g1.onload = function(){
        screenContext.drawImage(g1, x, y);
    }

    g2 = new Image();
    if(indice == 2) g2.src = "images/config/2g.png";
    else g2.src = "images/config/2p.png";
    g2.onload = function(){
        screenContext.drawImage(g2, x+80, y);
    }
    
    g3 = new Image();
    if(indice == 3) g3.src = "images/config/3g.png";
    else g3.src = "images/config/3p.png";
    g3.onload = function(){
        screenContext.drawImage(g3, x+160, y);
    }
    
    g4 = new Image();
    if(indice == 4) g4.src = "images/config/4g.png";
    else g4.src = "images/config/4p.png";
    g4.onload = function(){
        screenContext.drawImage(g4, x+240, y);
    }
    
    g5 = new Image();
    if(indice == 5) g5.src = "images/config/5g.png";
    else g5.src = "images/config/5p.png";
    g5.onload = function(){
        screenContext.drawImage(g5, x+320, y);
    }

}
function desenhaComandos(indice){
    let largConfig = 400
    let altConfig = 500
    let x = parseInt((largura*3/4 ) - (largConfig / 2));
    let y = parseInt((altura / 2) - (altConfig / 2) + 400);
    console.log(x,y)
    m = new Image();
    if(indice == mouse) m.src = "images/config/mouse1.png";
    else m.src = "images/config/mouse0.png";
    m.onload = function(){
        screenContext.drawImage(m, x, y)
    }

    t = new Image();
    if(indice == teclado) t.src = "images/config/teclado1.png";
    else t.src = "images/config/teclado0.png";
    t.onload = function(){
        screenContext.drawImage(t, x+200, y)
    }
}   

function desenhaDificuldade(indice){
    let largConfig = 400
    let altConfig = 500
    let x = parseInt((largura*3/4 ) - (largConfig / 2));
    let y = parseInt((altura / 2) - (altConfig / 2) + 400);

    f = new Image();
    if(indice == 1) f.src = "images/config/facil1.png";
    else f.src = "images/config/facil0.png";
    f.onload = function(){
        screenContext.drawImage(f, x, y)
    }

    m = new Image();
    if(indice == 2) m.src = "images/config/medio1.png";
    else m.src = "images/config/medio0.png";
    m.onload = function(){
        screenContext.drawImage(m, x+200, y)
    }

    d = new Image();
    if(indice == 3) d.src = "images/config/dificil1.png";
    else d.src = "images/config/dificil0.png";
    d.onload = function(){
        screenContext.drawImage(d, x+200, y)
    }


}

function desenhaTelaConfiguracoes(){
    LimpaTela();
    atualizarPlanoDeFundo('url(images/bg/bgconfig.jpg)');
    desenharBaseConfig();
}

function alteraComandos(indice){
    switch(indice){
        case 1: comando = teclado;
        case 2: comando = mouse;
    }
}

function alteraNumeroGols(indice){
    switch(indice){
        case 1: maxGols = 1;
                break;
        case 2: maxGols = 2;
                break;
        case 3: maxGols = 3;
                break;
        case 4: maxGols = 4;
                break;
        case 5: maxGols = 5;
                break;
        default: maxGols = 3;
                break;
    }
}

function alteraDificuldade(indice){
    switch(indice){
        case 1: dificuldade = muitofacil;
                break;
        case 2: dificuldade = facil;
                break;
        case 3: dificuldade = medio;
                break;
        case 4: dificuldade = dificil;
                break;
        case 5: dificuldade = impossivel;
                break;
    }
}

function configuraClick(e){
    var posX = e.offsetX;
    var posY = e.offsetY;
    console.log(posX,posY)
    if(posX > 550){
        //caso seja em controles
        if(posY > 390 && posY < 450){
            if(posX < 750){
                desenhaComandos(mouse);
            }
            if(posX > 750 && posX < 1000){
                desenhaComandos(teclado);
            }
            
        }

    }


}

function configura(){

    screen.addEventListener('click',configuraClick);

}