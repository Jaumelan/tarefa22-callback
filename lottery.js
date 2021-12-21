//constantes
const placeResult = document.getElementById("result");
let vezes = 0;
let numerosJogados = [];
let timer;

//função para gerar números
function gerador() {
    if (vezes < 6) {
        let jogada = Math.floor(Math.random()*60) + 1;
        while (numerosJogados.indexOf(jogada) != -1) {
            jogada = Math.floor(Math.random()*60) + 1;
        }
        numerosJogados.push(jogada);
        vezes++
        let resultadoNumero = document.createElement("span");
        resultadoNumero.setAttribute('class', 'cadaNumero');
        resultadoNumero.textContent = jogada;
        placeResult.appendChild(resultadoNumero);
    }
    if (vezes == 6) {
        clearInterval(timer);
    }
}

//função para limpar os números apresentados
function limpar() {
    if (document.getElementsByClassName('cadaNumero').length) {
        const removeElements = (elms) => elms.forEach(el => el.remove());
        removeElements( document.querySelectorAll(".cadaNumero") );
    }
}

function rodar() {
    limpar();
    timer = setInterval(gerador, 1000);
    numerosJogados = [];
    vezes = 0;
}
