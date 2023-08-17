function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";

  return inputValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setTotalElementValueById(elementId, newBalance) {
  const element = document.getElementById(elementId);
  element.innerText = newBalance;
}
