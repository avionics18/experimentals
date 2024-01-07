const feedback_content = document.getElementById("feedback");
const feedback_form = document.getElementById("feedback-form");
const ratings_list = feedback_form.querySelectorAll(
  ".rating-component__options button"
);
const submitBtn = feedback_form.querySelector(".rating-component__submit-btn");

const thanku_content = document.getElementById("thank-u");
const back_btn = document.getElementById("back-btn");
const rating_value = document.getElementById("rating-value");
let rate = -1;

// add click event listener to all the rating options
ratings_list.forEach(function (ratingBtn, ratingBtnIndex) {
  ratingBtn.addEventListener("click", function (e) {
    removeActiveAll(ratings_list);
    addActive(e.currentTarget);
    rate = ratingBtnIndex;
  });
});

// feedback form submission
feedback_form.addEventListener("submit", function (e) {
  e.preventDefault();
  feedback_content.classList.add("d-none");
  thanku_content.classList.remove("d-none");
  rating_value.innerText = rate + 1;
});

// back_btn onclick -> back to feedback_form
back_btn.addEventListener("click", function (e) {
  e.preventDefault();
  feedback_content.classList.remove("d-none");
  thanku_content.classList.add("d-none");
  removeActiveAll(ratings_list);
  rate = -1;
});

// === Utilities ===
// add active class to an HTML element
function addActive(ele) {
  ele.classList.add("active");
}
// remove active class from an HTML element
function removeActive(ele) {
  ele.classList.remove("active");
}
// remove active class from HTML collection list
function removeActiveAll(list) {
  list.forEach(function (item) {
    removeActive(item);
  });
}