"usestrict";

const form = document.querySelector(".rating-form");
console.log(form);
const score = document.querySelector(".score");
console.log(score);

function updateScore(rating) {
  console.log(`Rating passed to updateScore function: ${rating}`);
  score.innerHTML = rating;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  console.log(`Rating from form: ${rating}`);
  updateScore(rating);
});
