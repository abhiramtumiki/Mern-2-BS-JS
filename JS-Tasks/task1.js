function reverse() {
  var x = document.getElementById("num").value;
  var res = 0;
  while (x > 0) {
    var s = x % 10;
    res = res * 10 + s;
    x = Math.floor(x / 10);
  }
  document.getElementById("res").innerHTML = res;
}

document.getElementById("fom").addEventListener("submit", function (e) {
  e.preventDefault();
  reverse();
});
