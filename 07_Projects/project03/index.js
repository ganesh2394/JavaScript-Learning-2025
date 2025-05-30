function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; 
  hours = hours.toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
