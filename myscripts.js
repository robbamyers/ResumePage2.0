//HEADER
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var stickyHeader = document.getElementById("stickyHeader");

// Get the offset position of the navbar
var sticky = stickyHeader.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    stickyHeader.classList.add("sticky");
  } else {
    stickyHeader.classList.remove("sticky");
  }
}

//IFRAME



