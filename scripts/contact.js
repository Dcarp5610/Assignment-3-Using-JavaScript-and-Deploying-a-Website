// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById("submit-button");
  var contactPage = document.getElementById("contact-page");
  var emailInput = document.getElementById("user-email");
  var title = document.querySelector(".nav-title");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var emailValue = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var existingError = document.getElementById("email-error");
    if (existingError) {
      existingError.remove();
    }

    if (!emailPattern.test(emailValue)) {
      var errorMessage = document.createElement("p");
      errorMessage.id = "email-error";
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "16px";
      emailInput.insertAdjacentElement("afterend", errorMessage);
      return;
    }

    // Replace page contents with thank-you message
    contactPage.innerHTML = "";
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message";
    thankYouMessage.style.fontSize = "24px";
    contactPage.appendChild(thankYouMessage);

    // Add Back to Home button
    var homeButton = document.createElement("button");
    homeButton.textContent = "Back to Home";
    homeButton.classList.add("fake-button"); 
    homeButton.style.marginTop = "16px";

    homeButton.addEventListener("click", function() {
      window.location.href = "../index.html";
    });

    contactPage.appendChild(homeButton);
  });

  // Nav-title home link
  if (title) {
    title.style.cursor = "pointer";
    title.addEventListener("click", function() {
      window.location.href = "../index.html";
    });
  }
});