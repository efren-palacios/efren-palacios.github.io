window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.height = "53px";
    document.getElementById("hamburger").style.top = "20px";
  } else {
    document.getElementById("nav").style.height = "93px";
    document.getElementById("hamburger").style.top = "40px";
  }
}
