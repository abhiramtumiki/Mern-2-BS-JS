function date1() {
  const dt1 = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const x =
    dt1.getDate() + "/" + month[dt1.getMonth()] + "/" + dt1.getFullYear();
  document.getElementById("date2").innerHTML = x;
}

function time1() {
  const tm1 = new Date();
  var res = tm1.toDateString() + " " + tm1.toTimeString();
  document.getElementById("time2").innerHTML = res;
}

document.getElementById("date1").addEventListener("click", function (e) {
  e.preventDefault();
  date1();
});
document.getElementById("time1").addEventListener("click", function (e) {
  e.preventDefault();
  time1();
});
