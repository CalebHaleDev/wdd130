// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "120px";
    document.getElementById("logo").style.width = "75px";
    document.getElementById("navbar-right").getElementsByClassName("nav-link").style.padding = "20px 40px";
   /* document.getElementById("navbar-right").getElementsByClassName("nav-link").setAttribute("style", "20px 40px"); didn't work*/
  } else {
    document.getElementById("navbar").style.height = "160px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("navbar-right").getElementsByClassName("nav-link").style.padding = "40px 40px";
  }
}