alert("Seja bem vindo ao jogo Acerte o Número! Nesse jogo você deve acertar um numero de 1 a 10 que o programa vai gerar automaticamente. Boa sorte!");


do {
    var aleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(aleatorio);
    var numero = prompt("Escreva um numero de 1 a 10:");

    if (aleatorio > numero) {
        alert("Seu chute foi menor, tente novamente!");
    }
    else if (aleatorio < numero) {
        alert("Seu chute foi maior, tente novamente!");
    }
    else if (aleatorio == numero) {
        alert("Parabens! Você acertou o numero " + aleatorio + ".");
        break;
    }
    else {
        alert("houve um erro. Tente novamente.");
    }


} while (aleatorio !== numero);

