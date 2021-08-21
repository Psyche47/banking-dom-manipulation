document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newdepositText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositText);
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
    depositInput.value = "";
  });

//Withdraw Event Handler

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    const withDrawTotal = document.getElementById("total-withdraw");
    const previousWithDrawText = withDrawTotal.innerText;
    const previousWithDraw = parseFloat(previousWithDrawText);
    const newWithDrawTotal = previousWithDraw + withdrawAmount;
    withDrawTotal.innerText = newWithDrawTotal;
    withdrawInput.value = "";

    // Update Balance
    const balanceTotal = document.getElementById("total-balance");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - withdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
  });
