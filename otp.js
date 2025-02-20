function sendOTP() {
    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter your email ID.");
        return;
    }
    
    // Generate a random 6-digit OTP
    let otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("generatedOTP", otp);
    
    alert("OTP has been sent to your email: " + otp); // Replace this with actual email integration

    // Show OTP input field
    document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;
    let storedOTP = localStorage.getItem("generatedOTP");

    if (enteredOTP === storedOTP) {
        alert("OTP verified successfully!");
        window.location.href = "http://127.0.0.1:5501/forgotpassword/forgot.html";
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
function BackToLogin() {
    window.location.href = 'http://127.0.0.1:5501/1stpage/login/login.html';

}