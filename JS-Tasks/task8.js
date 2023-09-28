var cnt = 0;

function fname() {
  let x = document.getElementById("fName").value;
  if (x.length > 0) {
    document.getElementById("fname").innerHTML = "OK";
  } else {
    document.getElementById("fname").innerHTML = "POOR";
  }
}
function lname() {
  let x = document.getElementById("lName").value;
  if (x.length > 0) {
    document.getElementById("lname").innerHTML = "OK";
  } else {
    document.getElementById("lname").innerHTML = "POOR";
  }
}
function mail() {
  let x = document.getElementById("email").value;
  if (x.includes("@gmail.com") === true) {
    document.getElementById("mail").innerHTML = "OK";
  } else {
    document.getElementById("mail").innerHTML = "Should have @gmail.com";
  }
}

function pass() {
  let x = document.getElementById("password").value;
  if (
    x.length > 6 &&
    (x.includes("!") ||
      x.includes("@") ||
      x.includes("#") ||
      x.includes("$") ||
      x.includes("%") ||
      x.includes("^") ||
      x.includes("&") ||
      x.includes("*"))
  ) {
    document.getElementById("pass").innerHTML = "STRONG ";
  } else if (x.length <= 6) {
    document.getElementById("pass").innerHTML =
      "POOR and Length should be more than 6 letters";
  } else if (
    !x.includes("!") ||
    !x.includes("@") ||
    !x.includes("#") ||
    !x.includes("$") ||
    !x.includes("%") ||
    !x.includes("^") ||
    !x.includes("&") ||
    !x.includes("*")
  ) {
    document.getElementById("pass").innerHTML = "Should contain symbol";
  }
}

function check() {
  let x = document.getElementById("rePassword").value;
  let r = document.getElementById("password").value;
  if (x === r) {
    document.getElementById("re").innerHTML = "MATCHED";
  } else {
    document.getElementById("re").innerHTML = "MISMATCHED";
  }
}

function gen() {
  if (document.getElementById("male").checked) {
    document.getElementById("gen").innerHTML = "OK";
  } else if (document.getElementById("female").checked) {
    document.getElementById("gen").innerHTML = "OK";
  } else {
    document.getElementById("gen").innerHTML = "select your gender";
  }
}

function agee() {
  if (document.getElementById("age").value >= 18) {
    document.getElementById("ag").innerHTML = "You are eligible";
  } else {
    document.getElementById("ag").innerHTML = "You should be 18+";
  }
}

function num() {
  let x = document.getElementById("phNumber").value;
  if (x.length === 10) {
    document.getElementById("num").innerHTML = "OK";
  } else {
    document.getElementById("num").innerHTML =
      "Phone number should be 10 digits only";
  }
}

function addd() {
  let x = document.getElementById("add").value;
  if (x.length > 1) {
    document.getElementById("ad").innerHTML = "OK";
  } else {
    document.getElementById("ad").innerHTML = "POOR";
  }
}

function st() {
  if (document.getElementById("State").value.length > 1) {
    document.getElementById("st").innerHTML = "OK";
  } else {
    document.getElementById("st").innerHTML = "POOR";
  }
}

function cfname() {
  let x = document.getElementById("fName").value;
  if (x.length > 0) {
    cnt++;
    document.getElementById("fname").innerHTML = "OK";
  } else {
    document.getElementById("fname").innerHTML = "POOR";
  }
}
function clname() {
  let x = document.getElementById("lName").value;
  if (x.length > 0) {
    cnt++;
    document.getElementById("lname").innerHTML = "OK";
  } else {
    document.getElementById("lname").innerHTML = "POOR";
  }
}
function cmail() {
  let x = document.getElementById("email").value;
  if (x.includes("@gmail.com") === true) {
    cnt++;
    document.getElementById("mail").innerHTML = "OK";
  } else {
    document.getElementById("mail").innerHTML = "Should have @gmail.com";
  }
}

function cpass() {
  let x = document.getElementById("password").value;
  if (
    x.length > 6 &&
    (x.includes("!") ||
      x.includes("@") ||
      x.includes("#") ||
      x.includes("$") ||
      x.includes("%") ||
      x.includes("^") ||
      x.includes("&") ||
      x.includes("*"))
  ) {
    cnt++;
    document.getElementById("pass").innerHTML = "STRONG ";
  } else if (x.length <= 6) {
    document.getElementById("pass").innerHTML =
      "POOR and Length should be more than 6 letters";
  } else if (
    !x.includes("!") ||
    !x.includes("@") ||
    !x.includes("#") ||
    !x.includes("$") ||
    !x.includes("%") ||
    !x.includes("^") ||
    !x.includes("&") ||
    !x.includes("*")
  ) {
    document.getElementById("pass").innerHTML = "Should contain symbol";
  }
}

function ccheck() {
  let x = document.getElementById("rePassword").value;
  let r = document.getElementById("password").value;
  if (x === r) {
    cnt++;
    document.getElementById("re").innerHTML = "MATCHED";
  } else {
    document.getElementById("re").innerHTML = "MISMATCHED";
  }
}

function cgen() {
  if (document.getElementById("male").checked) {
    cnt++;
    document.getElementById("gen").innerHTML = "OK";
  } else if (document.getElementById("female").checked) {
    cnt++;
    document.getElementById("gen").innerHTML = "OK";
  } else {
    document.getElementById("gen").innerHTML = "select your gender";
  }
}

function cagee() {
  if (document.getElementById("age").value >= 18) {
    cnt++;
    document.getElementById("ag").innerHTML = "You are eligible";
  } else {
    document.getElementById("ag").innerHTML = "You should be 18+";
  }
}

function cnum() {
  let x = document.getElementById("phNumber").value;
  if (x.length === 10) {
    cnt++;
    document.getElementById("num").innerHTML = "OK";
  } else {
    document.getElementById("num").innerHTML =
      "Phone number should be 10 digits only";
  }
}

function caddd() {
  let x = document.getElementById("add").value;
  if (x.length > 1) {
    document.getElementById("ad").innerHTML = "OK";
    cnt++;
  } else {
    document.getElementById("ad").innerHTML = "POOR";
  }
}

function cst() {
  if (document.getElementById("State").value.length > 1) {
    cnt++;
    document.getElementById("st").innerHTML = "OK";
  } else {
    document.getElementById("st").innerHTML = "POOR";
  }
}

function chk() {
  cfname();
  clname();
  cmail();
  cpass();
  ccheck();
  cgen();
  cagee();
  cnum();
  caddd();
  cst();
  if (cnt >= 10) {
    return true;
  } else {
    cnt = 0;
    document.getElementById(
      "p"
    ).innerHTML = `<p style="color:black;border:1px solid black;margin:0px 150px;background-color:red">Fill the form Correctly</p>`;
    return false;
  }
}
