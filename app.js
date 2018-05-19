function somar1() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var resultado = parseFloat(n1) + parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function subtrair1() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var resultado = parseFloat(n1) - parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function multiplicar1() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var resultado = parseFloat(n1) * parseFloat(n2);
  document.getElementById('result').textContent = resultado;

}
function dividir1() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var resultado;
  if (n2 == 0) {
    resultado = "Não é possível dividir um número por zero!";
  } else {
    resultado = parseFloat(n1) / parseFloat(n2);

  }
  document.getElementById('result').textContent = resultado;

}
function limpar(){
  document.getElementById("result").textContent = "";
}
