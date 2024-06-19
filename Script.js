function updateTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = currentTime;

    const alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime && currentTime === alarmTime + ":00") {
        document.getElementById('alarm-message').innerText = "Alarm ringing!";

    }
}

function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime) {
        document.getElementById('alarm-message').innerText = "Alarm set for this time " + alarmTime;
    } else {
        document.getElementById('alarm-message').innerText = "Please select a valid time.";
    }
}

setInterval(updateTime, 1000);
