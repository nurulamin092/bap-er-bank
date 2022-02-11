/* document.getElementById('deposit-btn').
    addEventListener('click', function () {
        //  console.log('clicked');
        const depositInput = document.getElementById('deposit-input');
        const depositInputText = depositInput.value;
        const newDepositAmount = parseFloat(depositInputText);

        const depositTotal = document.getElementById('deposit-total');
        const previousDepositText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepositTotal = newDepositAmount + previousDepositAmount;
        depositTotal.innerText = newDepositTotal;
        depositInput.value = '';
        // console.log(newDepositAmount);

    }); */
/*
document.getElementById('deposit-btn').
    addEventListener('click', function () {
        const depositInput = document.getElementById('deposit-input');
        const depositInputText = depositInput.value;
        const newDepositAmount = parseFloat(depositInputText);
        //set banalnec
        const depositTotal = document.getElementById('deposit-total');
        const previousDepositText = depositTotal.innerText;
        const previousDepositTotalAmount = parseFloat(previousDepositText)
        const newDepositTotalAmount = newDepositAmount + previousDepositTotalAmount;

        depositTotal.innerText = newDepositTotalAmount;
        depositInput.value = '';
        //console.log(newDepositAmount);

    }); */


document.getElementById('deposit-btn').
    addEventListener('click', function () {
        console.log("Bismillah Heer Rahmair R-him");
        const depositInputAmount = document.getElementById('deposit-input');
        const newDepositInputText = depositInputAmount.value;
        const newDepositInputAmount = parseFloat(newDepositInputText)
        const depositTotal = document.getElementById('deposit-total');
        const previousTotalAmountText = depositTotal.innerText;
        const previousDepositTotalAmount = parseFloat(previousTotalAmountText);
        const previousDepositTotal = previousDepositTotalAmount + newDepositInputAmount;
        depositTotal.innerText = previousDepositTotal;
        depositInputAmount.value = '';
        //Balance total 

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalaBalanceAmount = parseFloat(balanceTotalText);
        const totalBalance = totalaBalanceAmount + newDepositInputAmount;
        balanceTotal.innerText = totalBalance;
        // console.log(depositTotal);
    });

//withdraw 

document.getElementById('withdraw-btn').
    addEventListener('click', function () {
        console.log('Bilsmillah hir Rahmanir R-him');

        //console.log(newWithdrawInputAmount);


    });