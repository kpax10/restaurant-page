import './style.css';
import createNavBar from './navbar';
import createHomePage from './home';
import createFooter from './footer';

function createBackground() {
  const body = document.querySelector('body');
  body.classList.add('bg-gradient');

  return body
}

createBackground()
content.appendChild(createNavBar());
content.appendChild(createHomePage());
content.appendChild(createFooter());