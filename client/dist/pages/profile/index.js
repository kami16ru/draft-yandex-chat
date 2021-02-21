let navCollapsed = true;

(function fillFormWithTestData() {
    const profileData = {
        email: 'example@example.com',
        login: 'examplelogin',
        fname: 'Иван',
        sname: 'Иванов',
        nickname: 'superhero',
        phone: '89099999999'
    };

    for (const prop in profileData) {
        if (document.getElementById(prop))
            document.getElementById(prop).value = profileData[prop];
    }

    document.querySelector(".navigation-drawer").style.width = "64px";
})();

function openNav() {
    document.querySelector(".navigation-drawer").style.width = "250px";
    document.querySelector(".close-nav").style.marginLeft = "75%";

    setTimeout(function () {
        for (const elem of document.getElementsByClassName("nav-menu-title")) {
            elem.removeAttribute('hidden');
        }
    }, 500);
    navCollapsed = false;
}

function closeNav() {
    document.querySelector(".navigation-drawer").style.width = "64px";
    document.querySelector(".close-nav").style.marginLeft = "0.1em";

    console.log(document.getElementsByClassName("nav-menu-title"))
    for (const elem of document.getElementsByClassName("nav-menu-title")) {
        elem.setAttribute('hidden','true');
    }

    navCollapsed = true;
}

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