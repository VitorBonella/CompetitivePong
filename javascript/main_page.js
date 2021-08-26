const caixaCabecalho = document.getElementById("caixaCabecalho");
const caixaPlacar = document.getElementById("caixaPlacar");

function mostraPlacar(){
  caixaCabecalho.style.display = "none";
  caixaPlacar.style.display = "flex";
}

function mostraPong(){
  caixaCabecalho.style.display = "initial";
  caixaPlacar.style.display = "none";
}

desenhaMenu();