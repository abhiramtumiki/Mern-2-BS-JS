function multiply() {
  var a1 = document.getElementById("num1").value;
  var a2 = document.getElementById("num2").value;
  var res = a1 * a2;
  document.getElementById("res").innerHTML = res;
}

function divide() {
  var a1 = document.getElementById("num1").value;
  var a2 = document.getElementById("num2").value;
  var res = a1 / a2;
  document.getElementById("res").innerHTML = res;
}

document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  multiply();
});
document.getElementById("btn2").addEventListener("click", function (e) {
  e.preventDefault();
  divide();
});
