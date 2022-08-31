alert("Seja bem vindo ao jogo Acerte o Número! Nesse jogo você deve acertar um numero aleatório de 1 a 100. Boa sorte!");

let aleatorio = Number(Math.floor(Math.random() * 100) + 1);
console.log(aleatorio);

let textH1 = document.getElementById("h1");

do {
    var numero = Number(prompt("Digite um numero de 1 a 100:"));

    if (aleatorio > numero) {
        alert("Seu chute foi menor, tente novamente!");
    }
    else if (aleatorio < numero) {
        alert("Seu chute foi maior, tente novamente!");
    }
    else if (aleatorio === numero){}
    else {
        alert("houve um erro. Tente novamente.");
    }
} while (aleatorio !== numero);

textH1.innerHTML = `Parabens voce acertou!! O número sorteado foi ${aleatorio}.`;

