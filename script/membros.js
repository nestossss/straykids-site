var num, membroSelecionado, i;

var membrosTotal = document.getElementsByClassName("membro-selecionado");

function membros(num){

    for(i = 1; i <= membrosTotal.length; i++){

        membroSelecionado = document.getElementById("membro-selecionado"+i);

        if(i != num)
        {
                membroSelecionado.classList.add("escondido");
                membroSelecionado.classList.remove("aparecido");
        }
        else
        {
            membroSelecionado.classList.remove("escondido");
            membroSelecionado.classList.add("aparecido");
            membroSelecionado.scrollIntoView({block: "center",  behavior: "smooth" });
        }

       
    }
    
}
