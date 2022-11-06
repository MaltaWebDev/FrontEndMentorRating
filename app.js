"usestrict";
// const submitBtn = document.querySelector(".submit-btn");
// const ratingStateCard = document.querySelector(".rating-state-card");
// const thankYouState = document.querySelector(".thank-you-state-card");
const ratingBtn = document.querySelectorAll(".rating-btn");

submitBtn.addEventListener("click", () => {
  const rating = document.querySelector(".rating-btn.active").value;
  console.log(rating);
});
