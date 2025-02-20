document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("leaveForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let fromDate = new Date(document.getElementById("fromDate").value);
        let toDate = new Date(document.getElementById("toDate").value);
        let contactNumber = document.getElementById("contactNumber").value;

        // Emergency Contact Number Validation (Exactly 10 Digits)
        if (contactNumber.length !== 10) {
            alert("Emergency contact number must be exactly 10 digits.");
            return;
        }

        // Date Validation: From Date should not be greater than To Date
        if (fromDate > toDate) {
            alert("Leave start date cannot be after leave end date.");
            return;
        }

        // Success Message
        document.getElementById("successMessage").textContent = "Leave application submitted successfully!";
        document.getElementById("successMessage").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("successMessage").classList.add("hidden");
            document.getElementById("leaveForm").reset();
            document.getElementById("totalDays").value = ""; // Reset total days
        }, 3000);
    });

    // Function to calculate total number of days
    document.getElementById("fromDate").addEventListener("change", calculateDays);
    document.getElementById("toDate").addEventListener("change", calculateDays);

    function calculateDays() {
        let fromDate = new Date(document.getElementById("fromDate").value);
        let toDate = new Date(document.getElementById("toDate").value);

        if (fromDate && toDate) {
            if (fromDate > toDate) {
                document.getElementById("totalDays").value = "Invalid Date Range";
            } else {
                let timeDifference = toDate - fromDate;
                let dayDifference = timeDifference / (1000 * 60 * 60 * 24) + 1; // Including start date
                document.getElementById("totalDays").value = dayDifference;
            }
        } else {
            document.getElementById("totalDays").value = "";
        }
    }
});
