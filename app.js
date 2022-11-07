"usestrict";

const form = document.querySelector(".rating-form");
console.log(form);
const score = document.querySelector(".score");
console.log(score);

function updateScore(rating) {
  score.textContent = rating;
}

form.addEventListener("submit", (e) => {
  // e.preventDefault();
  const rating = form.rating.value;
  console.log(rating);
  updateScore(rating);
});
