/* Mario Tonatiuh Zamarron | tonatiuh@ciencias.unam.mx */

/*---- Hamburger icon Responsive JS Navbar -Start--- */
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
});
/*---- Hamburger icon Responsive JS Navbar -End--- */


/*---- JS Auto Hide on Scroll Header/Navbar with Offset -Start--- */

// Couple variables to keep track of scroll position and an offset to set how far to scroll before header disappears
let verticalDistance = 0;
let offset = 70;

const header = document.querySelector("header");
let prev = window.pageYOffset;

window.addEventListener("scroll", function () {
    let current = window.pageYOffset;
  
  if (prev < current) {
      // If you scrolled down more than an offset value, add hide class
    if (current > verticalDistance + offset) {
        header.classList.add("hide");
    }
} else {
    header.classList.remove("hide");
    
    // If you're scrolling up, update verticalDistance variable, note that it's not changing when scrolling down.
    verticalDistance = window.pageYOffset;
}

// Check out the console to the right to see how the values change ->
console.log(current, verticalDistance);

prev = current;
});
/*---- JS Auto Hide on Scroll Header/Navbar with Offset -End--- */
