/* document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    const totalDeposit = document.getElementById('deposit-total');
    totalDeposit.innerHTML = depositAmount;

}); */

document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    // const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    //update account balance 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    //clear field
    depositInput.value = '';
});

// handle withdraw event handelar

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);
    // set withdraw total
    const withdrawTotat = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotat.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotat.innerText = newWithdrawTotal;

    withdrawInput.value = '';


    //update balance
    const balanceTota = document.getElementById('balance-total');
    const previousBalanceText = balanceTota.innerHTML;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTota.innerText = newBalanceTotal;
});