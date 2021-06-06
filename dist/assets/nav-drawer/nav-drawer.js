let navCollapsed = false;

document.querySelector('.nav-drawer').style.width = '250px';

function openNav() {
  document.querySelector('.nav-drawer').style.width = '250px';
  document.querySelector('.nav-drawer_close').style.marginLeft = '75%';

  setTimeout(function () {
    for (const elem of document.getElementsByClassName('nav-menu-title')) {
      elem.removeAttribute('hidden');
    }
  }, 500);
  navCollapsed = false;
}

function closeNav() {
  document.querySelector('.nav-drawer').style.width = '64px';
  document.querySelector('.nav-drawer_close').style.marginLeft = '0.1em';

  for (const elem of document.getElementsByClassName('nav-menu-title')) {
    elem.setAttribute('hidden','true');
  }

  navCollapsed = true;
}
