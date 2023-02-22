const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;
  if (emaill.value === '' || password.value === '') {
    return alert(`All fields must be filled in!`);
  }

  const loginData = {
    email: email.value,
    password: password.value,
  };

  console.log(loginData);

  event.currentTarget.reset();
});
