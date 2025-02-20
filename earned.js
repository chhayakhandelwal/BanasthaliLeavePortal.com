document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const department = document.getElementById('department').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const totalDays = document.getElementById('totalDays').value;
    const reason = document.getElementById('reason').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    alert(`Leave Application Submitted!\n
        Name: ${name}\n
        Designation: ${designation}\n
        Department: ${department}\n
        From Date: ${fromDate}\n
        To Date: ${toDate}\n
        Total Days: ${totalDays}\n
        Reason: ${reason}\n
        Address: ${address}\n
        Emergency Contact: ${contact}`);
});

// Function to calculate total leave days
function calculateTotalDays() {
    const fromDate = new Date(document.getElementById('fromDate').value);
    const toDate = new Date(document.getElementById('toDate').value);
    
    if (!isNaN(fromDate) && !isNaN(toDate) && toDate >= fromDate) {
        const timeDiff = toDate.getTime() - fromDate.getTime();
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        document.getElementById('totalDays').value = dayDiff;
    } else {
        document.getElementById('totalDays').value = '';
    }
}

// Add event listeners to update total days on date change
document.getElementById('fromDate').addEventListener('change', calculateTotalDays);
document.getElementById('toDate').addEventListener('change', calculateTotalDays);
