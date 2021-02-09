function toggleMenu() {
  let menu = document.querySelector("#navbar-mobile");
  let body = document.querySelector("body");
  menu.classList.toggle("d-none");
  body.classList.toggle("overflow-hidden");
}
