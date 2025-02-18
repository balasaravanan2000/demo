function updateClock() {
    const d = new Date();

    // Get date in readable format (e.g., "February 13, 2025")
    const date = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Get time in 12-hour format (e.g., "10:45:30 AM")
    const time = d.toLocaleTimeString();

    // Display both date and time
    document.getElementById("clock").innerHTML = date + " | " + time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call once to avoid initial delay
updateClock();