function toggleMenu(status) {
  console.log(status);
  let nav = document.getElementById("main-nav");
  if (status === 1) {
    nav.style.left = "0%";
  } else {
    nav.style.left = "-100%";
  }
}
