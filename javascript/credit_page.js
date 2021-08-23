function backMenu(){
    //LimpaTela()
    screen.removeEventListener('click', backMenu);
    desenhaMenu();
    
}

function ShowCredits(){
    //const screen = document.getElementById("screen");
    //const screenContext = screen.getContext("2d");
    //screenContext.clearRect(0, 0, canvas.width, canvas.height);
    //alert("OI");
    LimpaTela();
    atualizarPlanoDeFundo("url('https://pbs.twimg.com/profile_images/703730312141008896/zFyv8sxi_400x400.jpg')");

    screen.addEventListener('click', backMenu , false);
}