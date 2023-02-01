export default function createFooter() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = 'Developed with care by Kyle Paxton';
  footer.appendChild(p);

  return footer
}