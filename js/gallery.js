var slideIndex = 1;

function plusSlides(n, elementClassName) {
  showSlides(slideIndex += n, elementClassName);
}

function currentSlide(n, elementClassName) {
  showSlides(slideIndex = n, elementClassName);
}

function showSlides(n, elementClassName) {
  var i;
  var slides = document.getElementsByClassName(elementClassName);
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}