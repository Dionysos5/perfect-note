const addButton = document.getElementById('addButton');
const list = document.getElementById('list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('checkbox')) {
    const item = event.target;
    toggleCheck(item);
  }
})
addButton.addEventListener('click', event => { addListItem(); });

function addListItem() {
  //Use an object to store data about the item
  let inputValue = document.getElementById('inputValue').value.trim();

  if (inputValue !== '') {
    let item = createListItem(inputValue);
    let list = document.getElementById('list');
    list.appendChild(item);

  }


}

function createListItem(value) {
  let item = document.createElement('li');
  let node = document.createTextNode(value);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  item.appendChild(checkbox);
  item.appendChild(node);

  return item;
}

function toggleCheck(listItem) {
  listItem.checked ?
    listItem.parentElement.classList.add('checked') :
    listItem.parentElement.classList.remove('checked');
}
