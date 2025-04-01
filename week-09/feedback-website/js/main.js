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

  function clearError(input, errorElement) {
    input.removeAttribute('aria-invalid', 'true');
    errorElement.textContent = '';
    errorElement.hidden = true;
  }

  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
      clearError(nameInput, nameError);
    }
  });
});
