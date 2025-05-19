alert('Boas vindas ao jogo do número secreto!');

var numeroMaximo = prompt('Escolha o número máximo: ');
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

var chute;
var tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    };
};

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);