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

window.onload = function() {
  let image = document.getElementById("main-img");
  let thumbs = document.getElementsByClassName("image-thumb");
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", function() {
      let img = `url('${this.src}')`;
      image.style.backgroundImage = img;
    });
  }
  // Init Gallery Zoom //
  image.addEventListener(
    "mouseenter",
    function(e) {
      this.style.backgroundSize = "250%";
    },
    false
  );
  image.addEventListener(
    "mousemove",
    function(e) {
      var dimentions = this.getBoundingClientRect();
      var x = e.clientX - dimentions.left;
      var y = e.clientY - dimentions.top;
      var xpercent = Math.round(100 / (dimentions.width / x));
      var ypercent = Math.round(100 / (dimentions.height / y));
      this.style.backgroundPosition = xpercent + "% " + ypercent + "%";
    },
    false
  );
  image.addEventListener("mouseleave", function(e) {
    this.style.backgroundSize = "cover";
    this.style.backgroundPosition = "center";
  });
};
