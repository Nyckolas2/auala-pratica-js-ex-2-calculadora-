const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");

let resultado = document.querySelector("#resultado");



seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);
const operacao = seletor.value

function calcular() {

  if(campo1.value!='' && campo2.value != ''){
  
  const Valor1= parseInt(campo1.value);
  const Valor2= parseInt(campo2.value);
  const operacao= seletor.value;

  if(operacao==="somar")
  resultado.innerHTML = Valor1+Valor2 ;

  if(operacao==="subtrair")
  resultado.innerHTML = Valor1-Valor2 ;

  if(operacao==="multiplicar")
  resultado.innerHTML = Valor1*Valor2 ;

  if(operacao==="dividir")
  resultado.innerHTML = Valor1/Valor2 ;
}
}