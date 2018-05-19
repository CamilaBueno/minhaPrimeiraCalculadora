//criar 2 textbox que receberam 2 números
//botões de mais, menos, vezes e dividir
//imprimir resultado
function Somar1(){
  var n1 = document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado = parseFloat(n1) + parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function Subtrair1(){
  var n1 = document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado = parseFloat(n1) - parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function Multiplicar1(){
  var n1 = document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado = parseFloat(n1) * parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function Dividir1(){
  var n1 = document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado;
  if(n2==0){
    resultado = "Não é possível dividir um número por zero!";
  }else{
    resultado = parseFloat(n1) / parseFloat(n2);

  }
document.getElementById('result').textContent = resultado;

}
