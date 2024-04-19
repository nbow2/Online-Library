function calculateBookedDays() {
    // Get the start and end dates from the input fields
    var StartDay = document.getElementById('startDate').value;
    var EndDay = document.getElementById('endDate').value;

    // Validate if both start and end dates are selected
    if (!StartDay || !EndDay) {
        alert('Please select a start and end date');
        return false;
    }
    let today = new Date();
    if(StartDate < today || EndDate <= today){
        alter('Please select start date and end date after Today');
    }

    // Convert start and end dates to Date objects
    var StartDate = new Date(StartDay);
    var EndDate = new Date(EndDay);

    // Check if the start date is before the end date
    if (StartDate >= EndDate) {
        alert('Please select the start date before the end date');
        return false;
    }

    // Calculate the difference in time and convert it to days
    var Difference_In_Time = EndDate.getTime() - StartDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // Display the result message
    var bookingResult = document.getElementById('result');
    var message = 'You have booked the book for ' + Difference_In_Days + ' day(s).';
    document.getElementById('result').innerHTML = message;
}
