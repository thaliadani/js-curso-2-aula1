function exibirTextoNaTela(tag, texto){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");

exibirTextoNaTela("p", "Tente adivinhar o número secreto entre 1 e 10.");

function verificarChute(){
    
}