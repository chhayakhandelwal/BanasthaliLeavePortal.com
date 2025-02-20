// script.js
document.getElementById('leavePreference').addEventListener('change', function() {
    changeLeaveTypeHeading();
    calculateLeaveDates();
});

document.getElementById('fromDate').addEventListener('change', function() {
    calculateLeaveDates();
});

function changeLeaveTypeHeading() {
    const leavePreference = document.getElementById('leavePreference').value;
    const heading = document.getElementById('leaveTypeHeading');
    
    if (leavePreference === 'maternity') {
        heading.textContent = "Maternity Leave Application";
    } else if (leavePreference === 'paternity') {
        heading.textContent = "Paternity Leave Application";
    } else {
        heading.textContent = "Leave Application Form"; // Default text
    }
}

function calculateLeaveDates() {
    const leavePreference = document.getElementById('leavePreference').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDateField = document.getElementById('toDate');
    const numberOfDaysField = document.getElementById('numberOfDays');

    if (!leavePreference || !fromDate) return;

    let numberOfDays = 0;
    let toDate = '';

    // Calculate leave days based on the preference
    if (leavePreference === 'maternity') {
        numberOfDays = 180; // Default for maternity leave
        toDate = addDays(fromDate, numberOfDays);
    } else if (leavePreference === 'paternity') {
        numberOfDays = 15; // Default for paternity leave
        toDate = addDays(fromDate, numberOfDays);
    }

    // Set the values to the form fields
    numberOfDaysField.value = numberOfDays;
    toDateField.value = toDate;
}

// Function to add days to the start date
function addDays(startDate, daysToAdd) {
    const start = new Date(startDate);
    start.setDate(start.getDate() + daysToAdd);
    return start.toISOString().split('T')[0]; // Return the date in YYYY-MM-DD format
}