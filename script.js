const textInput = document.getElementById("textInput");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("output");

convertButton.addEventListener("click", function () {
  const originalText = textInput.value;
  const kebabCaseText = originalText
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  output.textContent = kebabCaseText;
});
