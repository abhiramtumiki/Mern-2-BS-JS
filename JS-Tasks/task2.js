function sort1() {
  var x = document.getElementById("str").value;
  var y = x.split("").sort().join("");
  console.log(y);
  document.getElementById("res").innerHTML = y;
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  sort1();
});
