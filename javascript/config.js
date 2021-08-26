const MaxVelX = 10 //define a velocidade maxima da bola no eixo x
const MaxVelY = 10 //define a velocidade maxima da bola no eixo y

const ballsize = 15 //define o tamanho da bolinha
const ballBaseSpeed = 5 //define a velocidade base da bola

const p1_posX = 40 //define a posição do player 1 em relaçao as laterais
const p2_posX = largura - 40 //define a posicao do player 2 em relacao as laterais
const p_posY = altura/2 //define a altura inicial dos 2 players

//COMANDOS

const p1_UP = 38    //define a tecla de movimentacao para cima do P1 (padrão 38 = "W")
const p1_DOWN = 40  //define a tecla de movimentacao para baixo do P1(padrão 40 = "S")

const p2_UP = 87    //define a tecla de movimentacao para cima do P2 (padrão 87 = "UpArrow")
const p2_DOWN = 83  //define a tecla de movimentacao para baixo do P2(padrão 83 = "DownArrow")

//CAMINHOS PADRÃO PARA IMAGENS DO PLACAR

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