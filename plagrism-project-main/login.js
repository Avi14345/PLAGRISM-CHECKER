function login() {
    // Get input values
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    
    // Check if the username and password are correct
    if (username === 'admin' && password === 'pass') {
        // Redirect to the home page or any other page
        window.location.href ='index.html';
    } else {
        // document.getElementById('message').innerHTML = 'Invalid username or password.';
        alert("Invalid username or password.")
    }
}
