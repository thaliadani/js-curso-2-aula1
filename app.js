function exibirTextoNaTela(tag, texto) {
  let campoTexto = document.querySelector(tag);
  campoTexto.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");

exibirTextoNaTela(
  "p",
  "Tente adivinhar o número secreto entre 1 e 10. Você tem 3 tentativas."
);

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute < numeroSecreto) {
    exibirTextoNaTela("h1", "Errou! O número secreto é maior.");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("h1", "Errou! O número secreto é menor.");
  } else if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parábens!");
    let mensagemTentativas = tentativas == 1 ? "tentativa" : "tentativas";
    exibirTextoNaTela(
      "p",
      `Voce acertou em ${tentativas} ${mensagemTentativas}.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chutar").setAttribute("disabled", true);

  } else {
    exibirTextoNaTela("h1", "Valor inválido!");
  }
  tentativas++;
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function novoJogo() {
  window.location.reload();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
