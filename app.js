"usestrict";

// get the rating 1-5
function getRating() {
  // convert the form to formData
  const form = document.querySelector("rating-form");
  const formData = new FormData(form);
  const rating = formData.get("rating");
  console.log(`Rating captured: ${rating}`);
  return rating;
}

// insert rating into outer text of elemtent with class .score
function insertRating(rating) {
  const score = document.querySelector(".score");
  score.outerText = rating;
  console.log(`Rating inserted: ${rating}`);
}

// add event listener to submit event of form which then calls both functions
const formSubmit = document.querySelector(".rating-form");
formSubmit.addEventListener("submit", (e) => {
  console.log(e);
  const rating = getRating();
  insertRating(rating);
});
