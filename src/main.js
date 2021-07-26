const itemsList = document.querySelector('#items-list');

const addToListBtn = document.getElementById('add-to-list-btn');

addToListBtn.addEventListener('click', () => {
  addItem('Item');
});

function addItem(itemName) {
  const item = document.createElement('li');
  item.textContent = itemName;
  itemsList.appendChild(item);
  setTimeout(() => {
    item.classList.add('show');
  }, 10);
}