const loadingElement = document.querySelector('.loading');
const submitBtn = document.querySelector('.submit');

function submitProfileEditForm() {
  const form = document.getElementById('profile-edit-form');
  const formData = new FormData(form);
  const email = formData.get('email');
  const login = formData.get('login');
  const fname = formData.get('fname');
  const sname = formData.get('sname');
  const phone = formData.get('phone');
  const nickname = formData.get('nickname');

  const credentials = {
    email,
    login,
    fname,
    sname,
    phone,
    nickname
  };

  // Show loading spinner
  submitBtn.style.display = 'none';
  loadingElement.style.display = '';

  setTimeout(function () {
    submitBtn.style.display = '';
    loadingElement.style.display = 'none';
    console.log(credentials);
  }, 2000);
}
