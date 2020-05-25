const addButton = document.getElementById('addButton');
const list = document.getElementById('list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('checkbox')) {
    const item = event.target;
    toggleCheck(item);
  }
  else if (event.target.classList.contains('remove')) {
    const item = event.target;
    removeItem(item);
  }
  else if (event.target.classList.contains('fa')) {
    const item = event.target.parentElement;
    removeItem(item);
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
    document.getElementById('inputValue').value = '';

  }


}

function createListItem(value) {
  let removeIcon = document.createElement('i');
  removeIcon.classList.add('fa', 'fa-trash', 'fa-2x');

  let removeButton = document.createElement('button');
  removeButton.className = 'remove';
  removeButton.appendChild(removeIcon);

  let node = document.createTextNode(value);

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  let buttons = document.createElement('div');
  buttons.className = 'buttons';
  buttons.appendChild(checkbox);
  buttons.appendChild(removeButton)

  let item = document.createElement('li');
  item.appendChild(node);
  item.appendChild(buttons);

  return item;
}

function toggleCheck(listItem) {
  listItem.checked ?
    listItem.parentElement.parentElement.classList.add('checked') :
    listItem.parentElement.parentElement.classList.remove('checked');

}

function removeItem(listItem) {
  let parent = listItem.parentNode.parentNode.parentNode;
  parent.removeChild(listItem.parentNode.parentNode);
}
