function mostraCabecalhoConfiguracoes(){
    caixaCabecalho.style.display = "none";
    caixaConfiguracoes.style.display = "initial";
}

function mostraMsgConfiguracoes(){
    caixaInformacoes.children[0].style.display = "none";
    caixaInformacoes.children[3].style.display = "initial";
}

function desenharBaseConfig(){
    configura();
    desenhaGols(maxGols);
    desenhaComandos(comando);
    desenhaDificuldade(dificuldade);   
}

function desenhaGols(indice){ 
    let largConfig = 400
    let altConfig = 500
    let x = parseInt((largura*3/4 ) - (largConfig / 2));
    let y = parseInt((altura / 2) - (altConfig / 2) + 250);
    
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
    let y = parseInt((altura / 2) - (altConfig / 2) + 100);
    
    f = new Image();
    if(indice == facil) f.src = "images/config/facil1.png";
    else f.src = "images/config/facil0.png";
    f.onload = function(){
        screenContext.drawImage(f, x, y)
    }

    me = new Image();
    if(indice == medio) me.src = "images/config/medio1.png";
    else me.src = "images/config/medio0.png";
    me.onload = function(){
        screenContext.drawImage(me, x+133, y)
    }

    di = new Image();
    if(indice == dificil) di.src = "images/config/dificil1.png";
    else di.src = "images/config/dificil0.png";
    di.onload = function(){
        screenContext.drawImage(di, x+266, y)
    }


}

function desenhaTelaConfiguracoes(){
    LimpaTela();
    mostraCabecalhoConfiguracoes();
    mostraMsgConfiguracoes();
    atualizarPlanoDeFundo('url(images/bg/bgconfig.jpg)');
    desenharBaseConfig();
}

function configuraClick(e){
    var posX = e.offsetX;
    var posY = e.offsetY;
    desenhaTelaConfiguracoes();
    
    if(posX > 550 && posX < 950){
        if(posY > 390 && posY < 450){ // Configura Comando (teclado mouse)
            if(posX < 750){
                comando = mouse;
            }
            else{
                comando = teclado;
            }
            desenhaComandos(comando);
        }else if(posY > 300-60  && posY < 300){ //Configura numero de gols
            if(posX < 550+80){
                maxGols = 1;                
            }
            else if(posX > 550+80 && posX < 550+160){
                maxGols = 2;                
            }
            else if(posX > 550+160 && posX < 550+240){
                maxGols = 3;                
            }
            else if(posX > 550+240 && posX < 550+320){
                maxGols = 4;                
            }
            else if(posX > 550+320){
                maxGols = 5;
            }
            desenhaGols(maxGols);
        }

        else if(posY > 160-60  && posY < 160){
            if(posX < 550+133){
                dificuldade = facil;                
            }
            else if(posX > 550+133 && posX < 550+266){
                dificuldade = medio;             
            }
            else if(posX > 550+266){
                dificuldade = dificil;
            }
            desenhaDificuldade(dificuldade)
        }
    }
}

function configura(){

    screen.addEventListener('click',configuraClick);

}