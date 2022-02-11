/* document.getElementById('login-submit').addEventListener('click',
    function () {

        //User Email
        const userField = document.getElementById('user-email');
        const userEmail = userField.value;

        //user password
        const passwordField = document.getElementById('user-password');
        const userPass = passwordField.value;

        if (userEmail == 'sontan@baap.com' && userPass == 'secret') {
            window.location.href = 'banking.html';
        }

    }); */

/*
document.getElementById('login-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    if (userEmail == 'sontan@baap.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
});
 */



document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    //check email and pass
    if (userEmail == 'sontan@baap.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('User is not valied');
    }
});