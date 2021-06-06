function logout() {
    window.location.href = '/';
}

function showEditImg() {
    document.getElementById('avatar').setAttribute('hidden', 'true');
    document.getElementById('avatar-change').removeAttribute('hidden');
}

function hideEditImg() {
    document.getElementById('avatar-change').setAttribute('hidden', 'true');
    document.getElementById('avatar').removeAttribute('hidden');
}

function submitProfileEditPasswordForm() {
    const form = document.getElementById('profile-edit-password-form');
    const formData = new FormData(form);
    const password = formData.get('password');
    const newPwd = formData.get('new-password');
    const newPwdConfirm = formData.get('new-password-confirm');

    if (newPwd === newPwdConfirm) {
        const credentials = {
            password,
            newPwd,
            newPwdConfirm,
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
}
