/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("head").style.top = "0";
    document.getElementById("head").classList.add('nav-on-scroll');
  } else {
    document.getElementById("head").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
  if (window.pageYOffset == 0) {
    document.getElementById("head").classList.remove('nav-on-scroll');
  }
}