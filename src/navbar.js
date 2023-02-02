export default function createNavBar() {
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  navBar.appendChild(ul);

  const home = document.createElement('li');
  home.textContent = 'home';
  home.id = 'home';
  home.classList.add('navTabs');
  ul.appendChild(home);

  const menu = document.createElement('li')
  menu.textContent = 'menu';
  menu.id = 'menu';
  menu.classList.add('navTabs');
  ul.appendChild(menu);

  const about = document.createElement('li');
  about.textContent = 'about';
  about.id = 'about';
  about.classList.add('navTabs');
  ul.appendChild(about);

  return navBar
}