// Ye ensure karega ki JavaScript tabhi chale jab pura page load ho chuka ho
document.addEventListener("DOMContentLoaded", function () {

    // Saare Register buttons ko select karna
    const registerButtons = document.querySelectorAll('.register');

    // Har button par click event lagana
    registerButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Directly Register page pe redirect karna
            window.location.href = 'register.html';
        });
    });

const loginButtons = document.querySelectorAll('.login');
    loginButtons.forEach(button => {
        button.addEventListener('click', function () {
            const role = this.getAttribute('data-role');
            // Redirect to respective role's login page
            window.location.href = 'login.html';
        });
    });
});
