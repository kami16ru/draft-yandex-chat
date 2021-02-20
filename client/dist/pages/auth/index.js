const loadingElement = document.querySelector('.loading');
const submitBtn = document.querySelector('.submit');

// Event.preventDefault() не работает ниже
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('hello2')
//
//
// });

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

function submitRegisterForm() {
    const form = document.getElementById('register-form');
    const formData = new FormData(form);
    const email = formData.get('email');
    const login = formData.get('login');
    const fname = formData.get('fname');
    const sname = formData.get('sname');
    const phone = formData.get('phone');
    const password = formData.get('password');

    const credentials = {
        email,
        login,
        fname,
        sname,
        phone,
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