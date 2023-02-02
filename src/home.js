export default function createHomePage() {
  const element = document.createElement('div');
  element.classList.add('home-content')

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to';
  welcome.classList.add('welcome');
  element.appendChild(welcome);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Come experience the best';
  p.classList.add('menu-blurb');
  element.appendChild(p);

  return element
}