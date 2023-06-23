const fullName = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('message');

const dataStored = {};

fullName.addEventListener('input', () => {
  dataStored.name = fullName.value;
  localStorage.setItem('name', JSON.stringify(dataStored));
});

email.addEventListener('input', () => {
  dataStored.email = email.value;
  localStorage.setItem('email', JSON.stringify(dataStored));
});

msg.addEventListener('input', () => {
  dataStored.message = msg.value;
  localStorage.setItem('message', JSON.stringify(dataStored));
});

document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('name');
  if (storedName) {
    const parsedData = JSON.parse(storedName);
    fullName.value = parsedData.name;
  }

  const storedEmail = localStorage.getItem('email');
  if (storedEmail) {
    const parsedData = JSON.parse(storedEmail);
    email.value = parsedData.email;
  }

  const storedMessage = localStorage.getItem('message');
  if (storedMessage) {
    const parsedData = JSON.parse(storedMessage);
    msg.value = parsedData.message;
  }
});