export default function createNavBar() {
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  navBar.appendChild(ul);

  const home = document.createElement('li');
  home.textContent = 'home'
  ul.appendChild(home);

  const menu = document.createElement('li')
  ul.appendChild(menu);
  menu.textContent = 'menu'

  const about = document.createElement('li');
  ul.appendChild(about);
  about.textContent = 'about';

  return navBar
}