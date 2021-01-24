
// Activate Menu through Hamberger Button
function activateMenu(){
	document.querySelector("#main-navbar .menu").classList.toggle("d-block");
}


// check if mobile viewport is matching and
// do the toggling of menus and submenus.
function myFunction(x) {
  if (x.matches) { // If media query matches
  	//Here is Where our all the navigation code goes.
  	var anchorElements = document.querySelectorAll("#main-navbar li > a");

  	for (var i = 0; i < anchorElements.length; i++) {
  		// Adding click event listener to all the 'a' tags
  		anchorElements[i].addEventListener("click", function(){

  			// check if the ul has children
  			if (this.parentNode.children.length == 2) {
  				// select the next element after a i.e. .sub-menu and toggle d-block
  				this.nextElementSibling.classList.toggle("d-block");
  			}
  		});
  	}

  }
}

var x = window.matchMedia("(max-width: 1199.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes