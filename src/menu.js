export default function createMenu() {
  const element = document.createElement('div');
  element.classList.add('menu-content');

  const menu = document.createElement('p');
  menu.textContent = 'Menu';
  menu.classList.add('menu-heading');
  element.appendChild(menu);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const hr = document.createElement('hr');
  element.appendChild(hr);

  // const menuItem1 = document.createElement('h3');
  // menuItem1.classList.add('menu-item');
  // menuItem1.textContent = 'Pesto Shrimp Pasta';
  // element.appendChild(menuItem1);

  // const menuDescription1 = document.createElement('p');
  // menuDescription1.classList.add('menu-item-description');
  // menuDescription1.textContent = 'Linguine pasta with pesto cream sauce, sundried tomatoes, and mushrooms';
  // element.appendChild(menuDescription1);

  // const menuPrice1 = document.createElement('span');
  // menuPrice1.classList.add('menu-price');
  // menuPrice1.textContent = '$22.95';
  // element.appendChild(menuPrice1);

  // element.appendChild(document.createElement('hr'));

  const menuList = [
    {
      item: 'Pesto Shrimp Pasta',
      text: 'linguine pasta with pesto cream sauce, sundried tomatoes, and mushrooms',
      price: '$22.95',
    },
    {
      item: 'Ruby Rare Ahi',
      text: 'sesame seed crusted ahi, ginger, wasabi, soy beurre blanc, with sugar snap peas and ginger white rice',
      price: '$32.95',
    },
    {
      item: 'Seafood Cioppino',
      text: 'clam and tomato broth with mussels, clams, shrimp, fish, calamari & red chili flakes, with garlic cheese bread ',
      price: '$32.95',
    },
  ]

  // Loop over menu to create and populate DOM

  for (let i = 0; i < 3; i++) {
    let newItemTitle = document.createElement('h3');
    newItemTitle.textContent = menuList[i].item;
    newItemTitle.classList.add('menu-item');
    element.appendChild(newItemTitle);

    let newItemText = document.createElement('p');
    newItemText.textContent = menuList[i].text;
    newItemText.classList.add('menu-item-text');
    element.appendChild(newItemText);

    let newPrice = document.createElement('span');
    newPrice.textContent = menuList[i].price;
    newPrice.classList.add('menu-price');
    element.appendChild(newPrice);

    let newLineBreak = document.createElement('hr');
    element.appendChild(newLineBreak);
  }

  return element
}