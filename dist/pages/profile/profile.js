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
