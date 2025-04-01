document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.getElementById('introduction');
  const userInfoSection = document.getElementById('user-info');
  const announcer = document.getElementById('announcer');

  const introContinueButton = document.getElementById('intro-continue');

  introContinueButton.addEventListener('click', () => {
    introSection.hidden = true;
    userInfoSection.hidden = false;
    window.location.hash = '#user-info';
    document.getElementById('name').focus();
    announcer.textContent = 'Moved to user information section';
  });

  const userInfoForm = document.getElementById('user-info-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  let userName = '';

  function clearError(input, errorElement) {
    input.removeAttribute('aria-invalid');
    errorElement.textContent = '';
    errorElement.hidden = true;
  }

  function showError(input, errorElement, message) {
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
    errorElement.hidden = false;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      clearError(nameInput, nameError);
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim()) {
      if (isValidEmail(emailInput.value)) {
        clearError(emailInput, emailError);
      }
    }
  });

  userInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, 'Please enter your name');
      isValid = false;
      nameInput.focus();
    } else {
      clearError(nameInput, nameError);
    }

    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, 'Please enter your email address');
      isValid = false;
      if (!nameError.textContent) {
        emailInput.focus();
      }
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address');
      isValid = false;
      if (!nameError.textContent) {
        emailInput.focus();
      }
    } else {
      clearError(emailInput, emailError);
    }

    if (isValid) {
      userName = nameInput.value.trim();
      userInfoSection.hidden = true;

      announcer.textContent = 'Moved to feedback form section';
    }
  });
});
