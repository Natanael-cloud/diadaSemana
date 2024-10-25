let dia = parseInt(prompt("Digite um dia do ano:"));

let resto = (dia%7);

switch(resto){
  case 1 : 
  alert("Terça-Feira");
  break;

  case 2 : 
  alert("Quarta-Feira");
  break;

  case 3 : 
  alert("Quinta-Feira");
  break;

  case 4 : 
  alert("Sexta-Feira");
  break;

  case 5 : 
  alert("Sábado");
  break;

  case 6 : 
  alert("Domingo");
  break;

  case 0 : 
  alert("Segunda-Feira");
  break;

}