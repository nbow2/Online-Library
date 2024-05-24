function validateAndRedirect() {
    // Get the start and end dates from the input fields
    var StartDay = document.getElementById('startDate').value;
    var EndDay = document.getElementById('endDate').value;

    // Validate if both start and end dates are selected
    if (!StartDay || !EndDay) {
        alert('Please select a start and end date');
        return false; // Prevent form submission
    }

    let today = new Date();
    var StartDate = new Date(StartDay);
    var EndDate = new Date(EndDay);

    // Check if the start date is before the end date
    if (StartDate >= EndDate) {
        alert('Please select the start date before the end date');
        return false; // Prevent form submission
    }

    // Check if both dates are after today's date
    if (StartDate < today || EndDate < today) {
        alert('Please select start date and end date after today');
        return false; // Prevent form submission
    }

    // Store the reservation start and end dates in localStorage
    localStorage.setItem('reservationStartDate', StartDate);
    localStorage.setItem('reservationEndDate', EndDate);
    return true;
}
