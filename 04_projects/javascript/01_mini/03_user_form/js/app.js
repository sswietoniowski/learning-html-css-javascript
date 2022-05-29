// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[A-Z][a-zA-Z]+$/;
  if (re.test(name.value)) {
    name.classList.remove('is-invalid');
  } else {
    name.classList.add('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zipcode');
  const re = /^[0-9]{2}-[0-9]{3}$/;
  if (re.test(zip.value)) {
    zip.classList.remove('is-invalid');
  } else {
    zip.classList.add('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    email.classList.remove('is-invalid');
  } else {
    email.classList.add('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\d{3}-\d{3}-\d{4}$/;
  if (re.test(phone.value)) {
    phone.classList.remove('is-invalid');
  } else {
    phone.classList.add('is-invalid');
  }
}
