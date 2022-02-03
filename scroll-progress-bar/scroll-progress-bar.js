// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}