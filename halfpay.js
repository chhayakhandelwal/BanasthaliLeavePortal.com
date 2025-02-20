// Function to calculate number of days
function calculateDays() {
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate = new Date(document.getElementById('toDate').value);
    
    if (fromDate && toDate && toDate >= fromDate) {
        const timeDiff = toDate - fromDate;
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24) + 1; // Including the last day
        document.getElementById('numDays').value = daysDiff;
    } else {
        document.getElementById('numDays').value = '';
    }
}

// Event listeners for date changes
document.getElementById('fromDate').addEventListener('change', calculateDays);
document.getElementById('toDate').addEventListener('change', calculateDays);

document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const numDays = document.getElementById('numDays').value;
    const reason = document.getElementById('reason').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    alert(`Leave Application Submitted!\n
        Name: ${name}\n
        From Date: ${fromDate}\n
        To Date: ${toDate}\n
        Number of Days: ${numDays}\n
        Reason: ${reason}\n
        Address: ${address}\n
        Emergency Contact: ${contact}`);
});
