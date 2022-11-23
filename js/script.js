function myFunction() {
  var x = document.querySelector(".header_mobile");
  if (x.style.display === "block") {
    x.style.color = "green";
  } else {
    x.style.display = "block";
  }
}
