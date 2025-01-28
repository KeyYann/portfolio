function formatDateTime(date) {
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true, 
        timeZoneName: 'short' 
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Extracting the time part and the timezone separately
    const timePart = formattedDate.slice(0, 11);
    const timezonePart = formattedDate.slice(11);

    // Get the date part
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${month}/${day}/${year} ${timePart}${timezonePart}`;
}

function updateDateTime() {
    // Get the current date and time in the Philippine time zone
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' });
    
    // Convert the string representation to a Date object
    const dateInManila = new Date(now);
    
    // Format the date and time
    const formattedDateTime = formatDateTime(dateInManila);
    
    // Update the HTML element
    document.getElementById('datetime-container').textContent = formattedDateTime;
}

// Update the date and time immediately on load
updateDateTime();

// Optionally, update the time every second
setInterval(updateDateTime, 1000);
