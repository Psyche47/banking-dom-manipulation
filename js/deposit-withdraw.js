function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmount = parseFloat(inputAmountText);
  inputField.value = "";
  return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
  const totalField = document.getElementById(totalFieldId);
  const totalFieldText = totalField.innerText;
  const totalFieldAmount = parseFloat(totalFieldText);
  const newTotal = totalFieldAmount + amount;
  totalField.innerText = newTotal;
  return newTotal;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("total-balance");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceAmount = parseFloat(balanceTotalText);
  return previousBalanceAmount;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("total-balance");
  let newBalanceTotal = 0;
  const previousBalanceAmount = getCurrentBalance();
  if (isAdd == true) {
    newBalanceTotal = previousBalanceAmount + amount;
  } else {
    newBalanceTotal = previousBalanceAmount - amount;
  }
  balanceTotal.innerText = newBalanceTotal;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newdepositAmount = getInputValue("deposit-input");
    if (newdepositAmount > 0) {
      updateTotalField("total-deposit", newdepositAmount);
      updateBalance(newdepositAmount, true);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
      updateTotalField("total-withdraw", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
  });
