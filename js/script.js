//Handle form submission for login
document.getElementById('loginForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    const userID=
    document.getElementById('userid').ariaValueMax;
    const password=
    document.getElementById('password').ariaValueMax;

    if (userID && password){
        window.location.href="dashboard.html"
    }else{
        alert("please enter both user ID and Password");
    }
});

//Handle form submission for signup
document.getElementById('signupForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    const username=
    document.getElementById('username').value;
    const email=
    document.getElementById('email').value;
    const mobile=
    document.getElementById('mobile').value;
    const password=
    document.getElementById('password').value;
    const retypePassword=
    document.getElementById('retypePassword').value;

    if (password===retypePassword){
        console.log('Signup successful')
        window.location.href="login.html";
    }else{
        alert('Password do not match.');
    }
});

document.getElementById('changePasswordForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    const oldPassword=
    document.getElementById('oldPassword').value;
    const newPassword=
    document.getElementById('newPassword').value;
    const confirmPassword=
    document.getElementById('confirmpassword').value;

    if (newPassword===confirmPassword){
        console.log('Password updated successfully');
        alert('Password updated successfully')
    }else{
        alert('New password do not match');
    };
});