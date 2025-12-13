/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

document.addEventListener("DOMContentLoaded", function() {
  var dayButtons = document.querySelectorAll(".day-selector li");
  var clearButton = document.getElementById("clear-button");
  var halfButton = document.getElementById("half");
  var fullButton = document.getElementById("full");
  var costDisplay = document.getElementById("calculated-cost");
  var title = document.querySelector(".nav-title");

  var dailyRate = 35; 
  var selectedDays = new Set(); // track unique days

  /********* colour change days of week *********/
  // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
  // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
  dayButtons.forEach(function(day) {
    day.addEventListener("click", function() {
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
  clearButton.addEventListener("click", function() {
    dayButtons.forEach(function(day) {
      day.classList.remove("clicked");
    });
    selectedDays.clear();
    costDisplay.textContent = "0";
  });

  /********* change rate *********/
  // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
  halfButton.addEventListener("click", function() {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculateCost();
  });

  // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
  fullButton.addEventListener("click", function() {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculateCost();
  });

  /********* calculate *********/
  // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
  function calculateCost() {
    var totalCost = selectedDays.size * dailyRate;
    costDisplay.textContent = totalCost;
  }

  /********* Nav-Title Home link *********/
  if (title) {
    title.style.cursor = "pointer";
    title.addEventListener("click", function() {
      window.location.href = "../index.html"; // path back to home
    });
  }
});