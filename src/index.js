import './style.css';
import createNavBar from './navbar';
import createHomePage from './home';
import createFooter from './footer';
import createAbout from './about';
import createMenu from './menu';

function createBackground() {
  const body = document.querySelector('body');
  body.classList.add('bg-gradient');

  return body
}

function createMainContent() {
  const mainContent = document.createElement('div')
  mainContent.classList.add('main-content');

  return mainContent;
}

createBackground()
content.appendChild(createNavBar());
content.appendChild(createMainContent());
content.appendChild(createFooter());

// Need to change back to Home Page
document.querySelector('.main-content').appendChild(createMenu())

// Nav Event Listeners
const navTabs = document.querySelectorAll('.navTabs');

navTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {

    const mainContent = document.querySelector('.main-content');
    mainContent.removeChild(mainContent.firstChild);

    if (e.target.id === 'home') {
      mainContent.appendChild(createHomePage());
    }
    if (e.target.id === 'menu') {
      mainContent.appendChild(createMenu());
    }
    if (e.target.id === 'about') {
      mainContent.appendChild(createAbout());
    }
  })
})