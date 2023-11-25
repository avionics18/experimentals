
// ### Activate Menu through Hamberger Button
function activateMenu(){
  // AIM :
  // Select the ul.menu and display it when clicked and if clicked again hide it but
  // also check if anyone inside is having d-block if yes remove them

  var ulMenu = document.querySelector("#main-navbar .menu");
  var navBtn = document.querySelector("#main-navbar-toggler > button");
  // STEP 2
  if(ulMenu.classList.contains("d-block")){
    navBtn.innerHTML = 'MENU <i class="fa fa-bars ml-1"></i>';
    var dBlocks = ulMenu.querySelectorAll(".d-block");
    dBlocks.forEach(item=>{
      item.classList.remove("d-block");
    });
    ulMenu.classList.toggle("d-block");
  }
  // STEP 1
  else {
    ulMenu.classList.toggle("d-block");
    navBtn.innerHTML = 'CLOSE <i class="fa fa-times ml-1"></i>';
  }
}


// check if mobile viewport is matching and
// do the toggling of menus and submenus.
function myFunction(x) {
  if (x.matches) { // If media query matches

    // Select all the anchor elements that will be clicked (here anchor are block elements, css)
  	var anchorElements = document.querySelectorAll("#main-navbar li > a");

  	for (var i = 0; i < anchorElements.length; i++) {
  		// Adding click event listener to all the 'a' tags
  		anchorElements[i].addEventListener("click", function(){

  			// check if the ul has children
  			if (this.parentNode.children.length == 2) {
  				// select the next element after anchor tag i.e. ul.sub-menu and toggle d-block if it is hidden
          // but if it already has d-block then check if it contains any children containing d-block
          // if it contains d-block remove it. So, what are we going to do here is check 
          // if current clicked anchor's parent is containing any element inside it with class d-block.
          // Remove It.
          if(!(this.nextElementSibling.classList.contains("d-block"))){
    				this.nextElementSibling.classList.add("d-block");
          }
          else{
            var insideElementsWithDBlock = this.nextElementSibling.querySelectorAll(".d-block");
            // if you want to see the elements
            // console.log(insideElementsWithDBlock);
            insideElementsWithDBlock.forEach(item => {
              item.classList.remove("d-block");
            });
            this.nextElementSibling.classList.remove("d-block");
          }
  			}
  		});
  	}

  }
}

var x = window.matchMedia("(max-width: 1199.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes