const inputRequired = document.querySelector(".email");
const submitBtn = document.querySelector(".callback__btn");
const warning = document.querySelector(".callback__warning");

submitBtn.addEventListener("click", validateForm);
inputRequired.addEventListener("input", validateForm);

function validateForm() {
  if (inputRequired.value === "") {
    warning.style.display = "flex";
    submitBtn.disabled = true;
  } else if (inputRequired.value !== "") {
    warning.style.display = "none";
    submitBtn.disabled = false;
  }
}
