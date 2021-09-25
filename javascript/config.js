const MaxVelX = 10 //define a velocidade maxima da bola no eixo x
const MaxVelY = 10 //define a velocidade maxima da bola no eixo y

const ballsize = 15 //define o tamanho da bolinha
const ballBaseSpeed = 5 //define a velocidade base da bola

const movelen = 50 //quantidade de movimento em um click
const enterlength = 40 //quantidade que o jogador é capaz de ultrapassar o campo

let maxGols = 3; //quantidade de gols para terminar o jogo

const teclado = 1;
const mouse = 2;

let comando = mouse;

const p1_posX = 40 //define a posição do player 1 em relaçao as laterais
const p2_posX = largura - 40 //define a posicao do player 2 em relacao as laterais
const p_posY = altura/2 //define a altura inicial dos 2 players

//dificuldades do jogo
const muitofacil = 0.8
const facil = 0.6
const medio = 0.3
const dificil = 0.1
const impossivel = 0.01

let dificuldade = medio

//Taxa de atualizaçao
const framehate = 50

//COMANDOS
const p1_UP = 38    //define a tecla de movimentacao para cima do P1 (padrão 38 = "W")
const p1_DOWN = 40  //define a tecla de movimentacao para baixo do P1(padrão 40 = "S")

const p2_UP = 87    //define a tecla de movimentacao para cima do P2 (padrão 87 = "UpArrow")
const p2_DOWN = 83  //define a tecla de movimentacao para baixo do P2(padrão 83 = "DownArrow")

//Caminhos para Imagens


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

// Cores possiveis 
let Cores = {
    "branco": "#FFF",
}

//Caminhos para os simbolos dos clubes 
//Utilizado na selecao dos times e placar
let listaLogos = {
    "atletico" : "images/placar/galologo.png",
    "argentinos" : "images/placar/argenlogo.png",
    "barcelona" : "images/placar/barcelogo.png",
    "boca" : "images/placar/bocalogo.png",
    "cerro" : "images/placar/cerrologo.png",
    "defensa" : "images/placar/dyjlogo.png",
    "flamengo" : "images/placar/flalogo.png",
    "fluminense" : "images/placar/flulogo.png",
    "internacional" : "images/placar/interlogo.png",
    "olimpia" : "images/placar/olimpialogo.png",
    "palmeiras" : "images/placar/pallogo.png",
    "racing" : "images/placar/racinglogo.png",
    "river" : "images/placar/riverlogo.png",
    "saopaulo" : "images/placar/splogo.png",
    "universidad" : "images/placar/unilogo.png",
    "velez" : "images/placar/velezlogo.png",
}

//Caminhos para as camisas dos times
let listaCamisas = {
    "atletico" : "images/in-game/times/atletico.jpg",
    "argentinos" : "images/in-game/times/argentinos.jpg",
    "barcelona" : "images/in-game/times/barcelona.jpg",
    "boca" : "images/in-game/times/boca.jpg",
    "cerro" : "images/in-game/times/cerro.jpg",
    "defensa" : "images/in-game/times/defensa.jpg",
    "flamengo" : "images/in-game/times/flamengo.jpg",
    "fluminense" : "images/in-game/times/fluminense.jpg",
    "internacional" : "images/in-game/times/inter.jpg",
    "olimpia" : "images/in-game/times/olimpia.jpg",
    "palmeiras" : "images/in-game/times/palmeiras.jpg",
    "racing" : "images/in-game/times/racing.jpg",
    "river" : "images/in-game/times/river.jpg",
    "saopaulo" : "images/in-game/times/saopaulo.jpg",
    "universidad" : "images/in-game/times/universidade.jpg",
    "velez" : "images/in-game/times/velez.jpg",
}