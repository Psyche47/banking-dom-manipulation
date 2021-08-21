function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmount = parseFloat(inputAmountText);
  inputField.value = "";
  return inputAmount;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newdepositAmount = getInputValue("deposit-input");
    const currentDeposit = document.getElementById("total-deposit");
    const previousDepositedText = currentDeposit.innerText;
    const previousDepositedAmount = parseFloat(previousDepositedText);
    const newDepositTotal = previousDepositedAmount + newdepositAmount;

    currentDeposit.innerText = newDepositTotal;

    //Update Account Balance

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceAmount + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;
  });

//Withdraw Event Handler

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const withDrawTotal = document.getElementById("total-withdraw");
    const previousWithDrawText = withDrawTotal.innerText;
    const previousWithDraw = parseFloat(previousWithDrawText);
    const newWithDrawTotal = previousWithDraw + withdrawAmount;
    withDrawTotal.innerText = newWithDrawTotal;

    // Update Balance
    const balanceTotal = document.getElementById("total-balance");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - withdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
  });
