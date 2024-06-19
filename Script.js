function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    clock.textContent = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
}

let alarms = [];

function setAlarm() {
    const hours = document.getElementById('alarm-hours').value;
    const minutes = document.getElementById('alarm-minutes').value;
    const seconds = document.getElementById('alarm-seconds').value;
    const ampm = document.getElementById('alarm-ampm').value;

    if (hours === '' || minutes === '' || seconds === '') {
        alert("Please enter a valid time");
        return;
    }

    const alarmTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')} ${ampm}`;
    alarms.push(alarmTime);
    displayAlarms();

    document.getElementById('alarm-hours').value = '';
    document.getElementById('alarm-minutes').value = '';
    document.getElementById('alarm-seconds').value = '';
    document.getElementById('alarm-ampm').value = 'AM';
}

function displayAlarms() {
    const alarmsList = document.getElementById('alarms');
    alarmsList.innerHTML = '';

    alarms.forEach((alarm, index) => {
        const alarmItem = document.createElement('li');
        alarmItem.innerText = alarm;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-alarm');
        deleteButton.addEventListener('click', () => deleteAlarm(index));
        alarmItem.appendChild(deleteButton);
        alarmsList.appendChild(alarmItem);
    });
}

function deleteAlarm(index) {
    alarms.splice(index, 1);
    displayAlarms();
}

function checkAlarms() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const currentTime = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

    alarms.forEach((alarm, index) => {
        if (alarm === currentTime) {
            alert(`Alarm ringing: ${alarm}`);
            deleteAlarm(index);
        }
    });
}

document.getElementById('set-alarm').addEventListener('click', setAlarm);

setInterval(updateClock, 1000);
setInterval(checkAlarms, 1000);
updateClock();


