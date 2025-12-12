/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

document.addEventListener("DOMContentLoaded", () => {
  const dayButtons = document.querySelectorAll(".day-selector li");
  const clearButton = document.getElementById("clear-button");
  const halfButton = document.getElementById("half");
  const fullButton = document.getElementById("full");
  const costDisplay = document.getElementById("calculated-cost");
  const title = document.querySelector(".nav-title");

  let dailyRate = 35; 
  let selectedDays = new Set(); // track unique days

  /********* colour change days of week *********/
  // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
  // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
  dayButtons.forEach((day) => {
    day.addEventListener("click", () => {
      if (!day.classList.contains("clicked")) {
        day.classList.add("clicked");
        selectedDays.add(day.id);
      } else {
        day.classList.remove("clicked");
        selectedDays.delete(day.id);
      }
      calculateCost();
    });
  });

  /********* clear days *********/
  // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
  clearButton.addEventListener("click", () => {
    dayButtons.forEach((day) => day.classList.remove("clicked"));
    selectedDays.clear();
    costDisplay.textContent = "0";
  });

  /********* change rate *********/
  // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
  halfButton.addEventListener("click", () => {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculateCost();
  });

  // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
  fullButton.addEventListener("click", () => {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculateCost();
  });

  /********* calculate *********/
  // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
  function calculateCost() {
    const totalCost = selectedDays.size * dailyRate;
    costDisplay.textContent = totalCost;
  }

  /********* Nav-Title Home link *********/
  if (title) {
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      window.location.href = "../index.html"; // path back to home
    });
  }
});