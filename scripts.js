function showDay(dayId) {
    const days = document.querySelectorAll('.day');
    days.forEach(day => day.style.display = 'none');
    const selectedDay = document.getElementById(dayId);
    selectedDay.style.display = 'block';
}
