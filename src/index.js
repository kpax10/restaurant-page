import './style.css';
import createNavBar from './navbar';
import createHomePage from './home';
import createFooter from './footer';
import createAbout from './about';

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

document.querySelector('.main-content').appendChild(createHomePage())
// content.appendChild(createHomePage());


// event listeners

// const home = document.querySelector('#home');
// const menu = document.querySelector('#menu');
// const about = document.querySelector('#about');


// home.addEventListener('click', () => {
//   const homeContent = document.querySelector('.home-content');
//   homeContent.remove();
// })




// Nav Event Listeners
const navTabs = document.querySelectorAll('.navTabs');

navTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const mainContent = document.querySelector('.main-content');
    mainContent.removeChild(mainContent.firstChild);

    if (e.target.id === 'home') {
      mainContent.appendChild(createHomePage());
    }

    // if (e.target.id === 'menu') {
    //   mainContent.appendChild(createMenu());
    // }

    if (e.target.id === 'about') {
      mainContent.appendChild(createAbout());
    }

    // document.querySelector('.main-content').appendChild(createAbout())

  })
})