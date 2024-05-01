const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function inputFunction() {
  const inputNameValue = inputName.value.trim();
  if (inputNameValue === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputNameValue;
  }
}

inputName.addEventListener("input", inputFunction);
