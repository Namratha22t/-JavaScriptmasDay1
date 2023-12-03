const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    const date=new Date();
    const todayDate=date.getDate();
    const remainingDays=christmas-todayDate;
    countdownDisplay.innerHTML=remainingDays
     // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.