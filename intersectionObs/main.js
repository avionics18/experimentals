let header = document.querySelector("header");
let navLinks = document.querySelectorAll("header .nav .nav-link.text-light");
let mainSection = document.querySelector("main");

let options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};
let observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    // console.log(entry);
    if(entry.isIntersecting){
      header.classList.remove("bg-dark", "py-3");
      header.classList.add("bg-light", "py-2");
      navLinks.forEach(item => {
        item.classList.remove("text-light");
        item.classList.add("text-secondary");
      });
    } else {
      header.classList.remove("bg-light", "py-2");
      header.classList.add("bg-dark", "py-3");
      navLinks.forEach(item => {
        item.classList.remove("text-secondary");
        item.classList.add("text-light");
      });
    }
  });
}, options);

observer.observe(mainSection);



// header.classList.remove("bg-dark");
// header.classList.add("bg-light");

// navLinks.forEach(item => {
//   item.classList.remove("text-light");
//   item.classList.add("text-secondary");
// });