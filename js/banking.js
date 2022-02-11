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

document.getElementById('deposit-btn').
    addEventListener('click', function () {
        const depositInput = document.getElementById('deposit-input');
        const depositInputText = depositInput.value;
        const newDepositAmount = parseFloat(depositInputText);
        console.log(newDepositAmount);

    });