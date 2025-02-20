// Ensure JavaScript runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!"); // Debugging message

    // ✅ Generate Random Captcha
    function generateCaptcha() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        document.getElementById("captchaText").textContent = captcha;
    }

    // ✅ Toggle Password Visibility
    document.querySelector(".toggle-password").addEventListener("click", function () {
        let passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }
    });

    // ✅ Validate Login Form
    function validateLogin(event) {
        event.preventDefault(); // Prevent form from submitting

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let captchaInput = document.getElementById("captchaInput").value;
        let captchaText = document.getElementById("captchaText").textContent;
        let passwordError = document.getElementById("passwordError");

        if (username === "" || password === "") {
            alert("Username and Password are required!");
            return false;
        }

        // Validate Password Length (8 characters minimum)
        if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters!";
            return false;
        } else {
            passwordError.textContent = "";
        }

        // Validate Captcha
        if (captchaInput !== captchaText) {
            alert("Incorrect Captcha! Try Again.");
            generateCaptcha();
            document.getElementById("captchaInput").value = "";
            return false;
        }

        alert("Login Successful!");
        return true;
    }

    // ✅ Forgot Password Functionality
    document.getElementById("forgotPassword").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Forgot Password Clicked! Redirecting..."); // Debugging message
        window.location.href = "http://127.0.0.1:5501/1stpage/otp/otp.html"; // Redirects to OTP page
    });

    // ✅ Attach Event Listeners
    document.getElementById("loginForm").addEventListener("submit", validateLogin);
    document.querySelector(".change-captcha").addEventListener("click", generateCaptcha);

    // ✅ Generate captcha on page load
    generateCaptcha();
});
