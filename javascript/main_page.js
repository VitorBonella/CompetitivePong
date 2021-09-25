const caixaCabecalho = document.getElementById("caixaCabecalho");
const caixaPlacar = document.getElementById("caixaPlacar");
const caixaInformacoes = document.getElementById("caixaInformacoes");
const caixaBotaoHome = document.getElementById("caixaBotaoHome");

function mostraPlacar(){
  caixaCabecalho.style.display = "none";
  caixaPlacar.style.display = "flex";
}

function mostraPong(){
  caixaCabecalho.style.display = "initial";
  caixaPlacar.style.display = "none";
  caixaEscolhaSingleplayer.style.display = "none";
  caixaEscolhaMultiplayer.style.display = "none";
}

desenhaMenu();