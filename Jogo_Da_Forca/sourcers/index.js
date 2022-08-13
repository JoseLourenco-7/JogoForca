// var letras = document.getElementById("letras");
var palavras = ["onepiece", "naruto", "dragonball", "onepunchman", "samuraix"];
var code;  // unicode gerado pelo evento keypress
var letra; // letra recebida pelo "String.fromCharCode()"
var arrayPalavra;

var bonecoForca = 6;
var erros = 0;
var addEspaco;
var addLetra

var play = document.getElementById("play")
play.addEventListener("click", jogar)

function jogar() {
    sortear();
}


//sotear palavra do jogo
var palavra;
function sortear() {
    var i = Number(Math.floor(Math.random() * palavras.length));
    palavra = palavras[i];
    console.log(palavra);
    arrayPalavra = palavra.split("");
    console.log(arrayPalavra);
    criarlinhas();

}

// Criar espaços para as letras
function criarlinhas() {

    addEspaco = document.getElementById("lista");

    for (let i = 0; i < arrayPalavra.length; i++) {

        var li = document.createElement("li");
        li.classList.add("linha");
        var espaco = document.createTextNode("___")
        li.appendChild(espaco);
        addEspaco.appendChild(li);

    }

}


var teclaDigitada = document.bo;
teclaDigitada.addEventListener("keypress", (event) => {
    // identificarLetras();
    code = event.keyCode;
    letra = String.fromCharCode(code);
    console.log(letra);
    verificarSeELetra()
    // adicionarLetraTela()
    gameOver()
});




// Verificar se o caracter digitado é uma letra minuscula
function verificarSeELetra() {
    let reg = /^[A-Z 0-9]+$/g;
    if (!reg.test(letra)) {
        identificarLetras();
    } else {
        alert("Digite apenas letras minusculas");
    }

}

//Identificar se a letra digitado está na palara segredo
function identificarLetras() {
    if (arrayPalavra.includes(letra)) {
        console.log("acertou");
    } else {
        console.log("errou");
        erros += 1
        console.log(erros)
    }
};

//Verifica quantos erros foram digitados
function gameOver() {
    if (erros > (arrayPalavra.length / 2)) {
        console.log("GAME OVER")
    }
}




// //Adicionar letra correta ao espaco 
// function adicionarLetraTela() {
//    addLetra.innerHTML = letra
// }



