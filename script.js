function showReport() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if ((username === 'admin' && password === 'password') ||
        (username === 'user1' && password === 'pass123') ||
        (username === 'user2' && password === 'mypassword')) {
        document.querySelector('.iframe-container').style.display = 'block';
        document.querySelector('.login-form').style.display = 'none';
    } else {
        alert('Invalid login credentials');
    }
    return false;
}
