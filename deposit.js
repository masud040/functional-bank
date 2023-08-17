document.querySelector("#deposit-btn").addEventListener("click", function () {
  const newDepositValue = getInputFieldValueById("deposit-field");
  if (isNaN(newDepositValue)) {
    alert("Please Provide me number");
    return;
  }
  const depositElementValue = getElementValueById("deposit-total");
  const balanceElementValue = getElementValueById("balance-total");
  const depositTotal = depositElementValue + newDepositValue;
  setTotalElementValueById("deposit-total", depositTotal);
  const balanceTotal = balanceElementValue + newDepositValue;
  setTotalElementValueById("balance-total", balanceTotal);
});
