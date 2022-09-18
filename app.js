"usestrict";
const ratingStateBtn = document.querySelector(".rating-state-btn");
const ratingStateCard = document.querySelector(".rating-state-card");
const thankYouState = document.querySelector(".thank-you-state-card");
const ratingBtns = document.querySelectorAll(".rating");
const score = document.querySelector(".score");
let ratingScore = 3;

ratingStateBtn.addEventListener("click", onSubmit);

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  ratingStateCard.classList.add("hidden");
  score.textContent = ratingScore;
  thankYouState.classList.remove("hidden");
}

function handleRatingBtnClick(event) {
  ratingScore = event.target.textContent;
  console.log(ratingScore);
}
