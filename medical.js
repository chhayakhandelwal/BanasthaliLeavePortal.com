document.addEventListener("DOMContentLoaded", function () {
    const leaveForm = document.getElementById("leaveForm");
    const leaveStartInput = document.getElementById("leaveStart");
    const leaveEndInput = document.getElementById("leaveEnd");
    const totalDaysInput = document.getElementById("totalDays");
    const emergencyContactInput = document.getElementById("emergencyContact");
    const medicalDocInput = document.getElementById("medicalDoc");

    // ✅ Function to calculate total leave days
    function calculateDays() {
        let leaveStart = new Date(leaveStartInput.value);
        let leaveEnd = new Date(leaveEndInput.value);

        if (leaveStartInput.value && leaveEndInput.value) {
            if (leaveStart > leaveEnd) {
                totalDaysInput.value = "Invalid Date Range";
            } else {
                let dayDifference = Math.floor((leaveEnd - leaveStart) / (1000 * 60 * 60 * 24)) + 1;
                totalDaysInput.value = dayDifference;
            }
        } else {
            totalDaysInput.value = "";
        }
    }

    // ✅ Automatically calculate days when date fields change
    leaveStartInput.addEventListener("change", calculateDays);
    leaveEndInput.addEventListener("change", calculateDays);

    // ✅ Form Submission
    leaveForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let name = document.getElementById("name").value.trim();
        let designation = document.getElementById("designation").value.trim();
        let department = document.getElementById("department").value.trim();
        let leaveStart = new Date(leaveStartInput.value);
        let leaveEnd = new Date(leaveEndInput.value);
        let reason = document.getElementById("reason").value.trim();
        let address = document.getElementById("address").value.trim();
        let emergencyContact = emergencyContactInput.value.trim();
        let medicalDoc = medicalDocInput.files[0];

        // ✅ Emergency Contact Validation (10 digits)
        if (!/^\d{10}$/.test(emergencyContact)) {
            alert("Emergency Contact must be exactly 10 digits.");
            return;
        }

        // ✅ Ensure Medical Document is Uploaded
        if (!medicalDoc) {
            alert("Please upload a valid medical document.");
            return;
        }

        // ✅ File Size Limit (Max 2MB)
        let maxSize = 2 * 1024 * 1024; // 2MB in bytes
        if (medicalDoc.size > maxSize) {
            alert("File size must be less than 2MB.");
            return;
        }

        // ✅ Date Validation: Start Date should not be greater than End Date
        if (leaveStart > leaveEnd) {
            alert("Leave start date cannot be after leave end date.");
            return;
        }

        // ✅ Final Total Days Calculation Before Submission
        calculateDays();

        alert("Medical Leave Application Submitted Successfully!");

        // ✅ Redirect to Confirmation Page
        window.location.href = "http://127.0.0.1:5501/confirmation.html";
    });
});
