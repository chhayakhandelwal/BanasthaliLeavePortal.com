function togglePassword(passwordId, toggleIconId) {
    let passwordInput = document.getElementById(passwordId);
    let toggleIcon = document.getElementById(toggleIconId);

    // Toggle the type attribute
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorText = document.getElementById("errorText");

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        errorText.innerText = "Password must be at least 8 characters long!";
        errorText.style.display = "block";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorText.innerText = "Passwords do not match!";
        errorText.style.display = "block";
    } else {
        errorText.style.display = "none";
        window.location.href = "http://127.0.0.1:5501/1stpage/login/login.html";
    }
}
