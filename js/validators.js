const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('span.error');

form.addEventListener('submit', (e) => {
  const email = emailInput.value;
  const lowercaseEmail = email.toLowerCase();

  if (email !== lowercaseEmail) {
    errorMsg.textContent = 'please use lowercase only';
    errorMsg.style.backgroundColor = '#ef863a';
    errorMsg.classList.add('active');
    e.preventDefault();
  } else {
    errorMsg.textContent = 'Form successfully submitted';
    errorMsg.style.backgroundColor = '#4caf50';
    errorMsg.classList.add('active');
  }
});
