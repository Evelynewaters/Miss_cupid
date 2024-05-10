// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation for contact form
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form fields
  const nameInput = contactForm.querySelector('input[name="name"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');
  const errorContainer = contactForm.querySelector(".error-message");

  // Reset previous error messages
  errorContainer.innerHTML = "";

  // Validation
  let isValid = true;

  if (!nameInput.value.trim()) {
    isValid = false;
    appendErrorMessage("Name is required.");
  }

  if (!emailInput.value.trim()) {
    isValid = false;
    appendErrorMessage("Email is required.");
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    appendErrorMessage("Please enter a valid email address.");
  }

  if (!messageInput.value.trim()) {
    isValid = false;
    appendErrorMessage("Message is required.");
  }

  // Submit the form if validation passes
  if (isValid) {
    contactForm.submit();
  }

  // Helper function to append error messages
  function appendErrorMessage(message) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
  }

  // Helper function to validate email format
  function isValidEmail(email) {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
