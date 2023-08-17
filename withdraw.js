document.querySelector("#withdraw-btn").addEventListener("click", function () {
  const newWithdrawValue = getInputFieldValueById("withdraw-field");
  if (isNaN(newWithdrawValue)) {
    alert("Please Provide me number");
    return;
  }
  const withdrawElementValue = getElementValueById("withdraw-total");
  const balanceElementValue = getElementValueById("balance-total");
  if (newWithdrawValue > balanceElementValue) {
    alert("Tomar Baap er bank e oto taka nai");
    return;
  }
  const withdrawTotal = withdrawElementValue + newWithdrawValue;
  setTotalElementValueById("withdraw-total", withdrawTotal);
  const balanceTotal = balanceElementValue - newWithdrawValue;
  setTotalElementValueById("balance-total", balanceTotal);
});
