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
                particleCount: 300,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    });
});

document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function (e) {
        const exerciseDiv = e.target.closest('.exercise');
        if (e.target.checked) {
            exerciseDiv.classList.add('done');
        } else {
            exerciseDiv.classList.remove('done');
        }
    });
});