function backMenu(){
    //LimpaTela()
    screen.removeEventListener('click', backMenu);
    desenhaMenu()
    
}

function ShowCredits(){
    //const screen = document.getElementById("screen");
    //const screenContext = screen.getContext("2d");
    //screenContext.clearRect(0, 0, canvas.width, canvas.height);
    //alert("OI");
    LimpaTela();
    atualizarPlanoDeFundo("#FFFF");

    screen.addEventListener('click', backMenu , false);
}

