const loadingElement = document.querySelector('.loading');
const submitBtn = document.querySelector('.submit');

function submitLoginForm() {
  const form = document.getElementById('login-form');
  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');

  const credentials = {
    email,
    password
  };

  // Show loading spinner
  submitBtn.style.display = 'none';
  loadingElement.style.display = '';

  setTimeout(function () {
    form.reset();

    submitBtn.style.display = '';
    loadingElement.style.display = 'none';
    console.log(credentials);
  }, 2000);
}
