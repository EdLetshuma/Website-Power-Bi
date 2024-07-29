function showReport() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send the login request to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login successful') {
            document.querySelector('.iframe-container').style.display = 'block';
            document.querySelector('.login-form').style.display = 'none';
        } else {
            alert('Invalid login credentials');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging in');
    });

    return false; // Prevent the form from submitting the traditional way
}
