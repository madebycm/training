function showDay(dayId) {
    const days = document.querySelectorAll('.day');
    days.forEach(day => day.style.display = 'none');
    const selectedDay = document.getElementById(dayId);
    selectedDay.style.display = 'block';
}

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    });
  });
  