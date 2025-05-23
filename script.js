document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').innerText = "Name is required.";
        valid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Confirm password match
    if (confirmPassword !== password || confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    // If all validations passed
    if (valid) {
        document.getElementById('previewName').innerText = name;
        document.getElementById('previewEmail').innerText = email;
        document.getElementById('successMessage').style.display = 'block';

        // Delay form reset so user can see the message
        setTimeout(() => {
            document.getElementById('userForm').reset();
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }
});

// Toggle visibility of password
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}
