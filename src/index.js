import './style.css';

function createNavBar() {
  const nav = document.createElement('ul');

  const home = document.createElement('li');
  home.textContent = 'home'
  nav.appendChild(home);

  const menu = document.createElement('li')
  nav.appendChild(menu);
  menu.textContent = 'menu'

  const about = document.createElement('li')
  nav.appendChild(about);
  about.textContent = 'about'

  return nav
}

content.appendChild(createNavBar())