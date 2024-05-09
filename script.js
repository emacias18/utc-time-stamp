function formatUTCDate(date) {
    const year = date.getUTCFullYear();
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
    const day = ('0' + date.getUTCDate()).slice(-2);
    const hours = ('0' + date.getUTCHours()).slice(-2);
    const minutes = ('0' + date.getUTCMinutes()).slice(-2);
    const seconds = ('0' + date.getUTCSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
}


function handleButtonClick() {
    const timestampDisplay = document.getElementById('timestamp-display');
    const currentTimestamp = formatUTCDate(new Date());
    const timestamps = timestampDisplay.value.split('\n');
    
    // Limit to 5 timestamps
    if (timestamps.length >= 5) {
        timestamps.shift(); // Remove the first timestamp
    }

    // Add current timestamp
    timestamps.push(currentTimestamp);
    timestampDisplay.value = timestamps.join('\n');
}


const buttons = document.querySelectorAll('.timestamp-button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});