export default function createAbout() {
  const element = document.createElement('div');
  element.classList.add('about-content');

  const aboutUs = document.createElement('p');
  aboutUs.textContent = 'About Us';
  aboutUs.classList.add('about-us');
  element.appendChild(aboutUs);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = `We like to think of Odin's Lounge as more than just a wonderful place to eat or be entertained. We make it our responsibility to make sure your experiences with us are memorable ones. Our promise to you is that we will always strive to reach and surpass your dining and entertainment expectations, and leave you with wonderful memories of the important days you decide to share with us. Welcome to Odin's Lounge.`;
  element.appendChild(p);

  return element;
}