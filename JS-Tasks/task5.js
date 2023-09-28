function f1() {
  var x = document.getElementById("name").value;
  if (x.length === 0) {
    document.getElementById(
      "nm"
    ).innerHTML = `<span style="color:red;">&nbsp&nbsp&nbspThis field is required</span>`;
    document.getElementById("name").style.borderColor = "red";
  } else {
    document.getElementById("nm").innerHTML = ``;
    document.getElementById("name").style.borderColor = "black";
  }
}
function f2() {
  let x = document.getElementById("mail").value;
  if (x.length === 0) {
    document.getElementById(
      "ml"
    ).innerHTML = `<span style="color:red;">&nbsp&nbsp&nbspThis field is required</span>`;
    document.getElementById("mail").style.borderColor = "red";
  } else {
    document.getElementById("ml").innerHTML = ``;
    document.getElementById("mail").style.borderColor = "black";
  }
}
function f3() {
  let x = document.getElementById("url").value;
  if (x.length === 0) {
    document.getElementById(
      "rl"
    ).innerHTML = `<span style="color:red;">&nbsp&nbsp&nbspThis field is required</span>`;
    document.getElementById("url").style.borderColor = "red";
  } else {
    document.getElementById("rl").innerHTML = ``;
    document.getElementById("url").style.borderColor = "black";
  }
}

function f4() {
  let x = document.getElementById("msg").value;
  if (x.length === 0) {
    document.getElementById(
      "mg"
    ).innerHTML = `<span style="color:red;">&nbsp&nbsp&nbspThis field is required</span>`;
    document.getElementById("msg").style.borderColor = "red";
  } else {
    document.getElementById("mg").innerHTML = ``;
    document.getElementById("msg").style.borderColor = "black";
  }
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  f1();
  f2();
  f3();
  f4();
});
