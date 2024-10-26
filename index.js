// Solicita ao usuário para digitar um dia do ano (como um número) e converte o valor inserido em um número inteiro.
let dia = parseInt(prompt("Digite um dia do ano:"));

// Calcula o resto da divisão do número do dia pelo número de dias da semana (7).
// Esse resto indica o dia da semana considerando que o primeiro dia do ano é uma segunda-feira.
let resto = (dia % 7);

// Usa uma estrutura switch para associar o valor do resto ao dia da semana correspondente.
switch(resto) {
  case 1: 
    // Se o resto for 1, exibe "Terça-Feira" em um alerta.
    alert("Terça-Feira");
    break;
  
  case 2: 
    // Se o resto for 2, exibe "Quarta-Feira" em um alerta.
    alert("Quarta-Feira");
    break;

  case 3: 
    // Se o resto for 3, exibe "Quinta-Feira" em um alerta.
    alert("Quinta-Feira");
    break;

  case 4: 
    // Se o resto for 4, exibe "Sexta-Feira" em um alerta.
    alert("Sexta-Feira");
    break;

  case 5: 
    // Se o resto for 5, exibe "Sábado" em um alerta.
    alert("Sábado");
    break;

  case 6: 
    // Se o resto for 6, exibe "Domingo" em um alerta.
    alert("Domingo");
    break;

  case 0: 
    // Se o resto for 0, exibe "Segunda-Feira" em um alerta.
    alert("Segunda-Feira");
    break;
}
