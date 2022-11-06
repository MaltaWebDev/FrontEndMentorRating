"usestrict";

// get rating 1-5 from form, log it and return it
function getRating() {
  const formValue = document.getElementsByClassName(".rating-form").rating;
  console.log(`Rating submitted: ${formValue}`);
  return formValue;
}

// insert rating into inner text of elemtent with class .score
function insertRating(rating) {
  const score = document.getElementsByClassName(".score");
  score.outerText = rating;
  console.log(`Rating inserted: ${rating}`);
}

// add event listener to submit button which calls both functions
const submitBtn = document.getElementsByClassName(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  const rating = getRating();
  insertRating(rating);
});
