const emailInput = document.getElementById("email");
const errorText = document.querySelector(".notify__error-msg");
const submitBtn = document.querySelector(".notify__button");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!emailInput.value) {
    emailInput.style.borderColor = "";
    errorText.style.display = "none";
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.style.borderColor = "red";
    errorText.style.display = "block";
  } else {
    emailInput.style.borderColor = "";
    errorText.style.display = "none";
    // Submit the form here
    // e.g. document.querySelector("form").submit();
  }
});

function isValidEmail(email) {
  // Use a regular expression to validate email
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}