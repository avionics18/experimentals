// Toggle the sidebar menu for mobile devices
const sidebar = document.querySelector("#sidebar");
const sideBtn = document.querySelector(".mobile-toc-toggle");
const sideBtn_icon = document.querySelector(".mobile-toc-toggle > i");
const sideBtn_title = document.querySelector(".mobile-toc-toggle > span");
function toggleSidebar() {
	sidebar.classList.toggle("left-0");

	// sideBtn bg-color change
	sideBtn.classList.toggle("btn-primary");
	sideBtn.classList.toggle("btn-danger");
	// sideBtn_icon change
	sideBtn_icon.classList.toggle("fa-outdent");
	sideBtn_icon.classList.toggle("fa-times");
	// sideBtn_title change
	if(sideBtn_icon.classList.contains("fa-times")){
		sideBtn_title.innerHTML = "CLOSE";
	} else {
		sideBtn_title.innerHTML = "TOC";
	}
}

