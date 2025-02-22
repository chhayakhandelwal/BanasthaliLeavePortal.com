// Function to handle sidebar selection highlight
function handleClick(option) {
    let menuItems = document.querySelectorAll(".sidebar ul li");
    menuItems.forEach(item => item.classList.remove("active"));

    let selectedItem = Array.from(menuItems).find(item => item.innerText.includes(option));
    if (selectedItem) selectedItem.classList.add("active");
}

// Function to show the leave request options
function openLeaveRequest() {
    let leaveRequest = document.getElementById("leaveRequest");
    let leaveFrame = document.getElementById("leaveFrame");
    let welcomeText = document.querySelector(".h1");
    let disclaimer = document.getElementById("disclaimer");

    // Show Leave Request section
    leaveRequest.classList.remove("hidden");
    leaveFrame.classList.add("hidden"); // Hide iframe

    // Show welcome text & disclaimer
    welcomeText.classList.remove("hidden");
    disclaimer.classList.remove("hidden");

    // Highlight "Leave Request" in sidebar
    handleClick("Leave Request");
}

// Function to handle applying for leave
function applyLeave(leaveType) {
    let leaveFrame = document.getElementById("leaveFrame");
    let leaveRequest = document.getElementById("leaveRequest");
    let welcomeText = document.querySelector(".h1");
    let disclaimer = document.getElementById("disclaimer");

    if (leaveType === "Casual Leave") {
        leaveFrame.src = 'casual.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Earned Leave") {
        leaveFrame.src = 'earned.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    }else if(leaveType === "Special Casual Leave / Academic Leave") {
        leaveFrame.src = 'academin.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Medical Leave") {
        leaveFrame.src = 'medical.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Half Pay Leave") {
        leaveFrame.src = 'halfpay.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Leave Without Pay") {
        leaveFrame.src = 'l.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Maternity/Paternity Leave") {
        leaveFrame.src = 'm.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
    else if(leaveType === "Duty Leave") {
        leaveFrame.src = 'duty.html';
        leaveFrame.classList.remove("hidden");

        // Hide elements when Casual Leave is opened
        leaveRequest.classList.add("hidden");
        welcomeText.classList.add("hidden");
        disclaimer.classList.add("hidden");
    } 
     else {
        alert(`You have applied for ${leaveType}`);
    }
}

// Show Leave Request section when page loads
document.addEventListener("DOMContentLoaded", openLeaveRequest);
