let icons = document.getElementsByClassName("icon-items");
let indiItems = document.getElementsByClassName("indi-items");
let contents = document.querySelectorAll(".content");
let imgHolder = document.querySelector("#imgHolder");

let i;
let go = 0;
let l = icons.length; //3

function changeState(index) {
  for (i = 0; i < icons.length; i++) {
    icons[i].classList.remove("active");
    indiItems[i].classList.remove("active");
    contents[i].classList.remove("active");
  }
  icons[index].classList.add("active");
  indiItems[index].classList.add("active");
  contents[index].classList.add("active");
  // sliding images up
  let scroll = document.querySelector(".img-items").scrollHeight * index;
  // imgHolder.style.transform = "translateY(-345px)";
  imgHolder.style.transform = "translateY(-" + scroll + "px)";
}

function prev() {
  if (icons[0].classList[1] == "active") {
    console.log("start");
    go = icons.length - 1;
    changeState(go);
  } else {
    --go;
    changeState(go);
  }
}

function next() {
  if (icons[l - 1].classList[1] == "active") {
    console.log("end");
    go = 0;
    changeState(go);
  } else {
    ++go;
    changeState(go);
  }
}
