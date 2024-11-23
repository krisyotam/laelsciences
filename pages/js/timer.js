// Set the date of the International Geological Congress (IGC)
const igcDate = new Date("August 12, 2028 00:00:00").getTime();

// Function to update the countdown timer
function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = igcDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the results in the respective HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".timer h3").innerHTML = "THE IGC HAS BEGUN!";
        document.querySelector(".timer-values").style.display = "none"; // Hide the timer
    }
}

// Update the timer every second
const countdownInterval = setInterval(updateTimer, 1000);

// Initial call to display the timer right away
updateTimer();
