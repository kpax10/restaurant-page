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
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';
  element.appendChild(p);

  return element;
}