const addButton = document.getElementById('addButton');
const list = document.getElementById('list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('checkbox')) {
    const item = event.target;
    toggleCheck(item);
  }
  else if (event.target.classList.contains('remove')) {
    const item = event.target;
    console.log(item);
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
  let item = document.createElement('li');
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'remove';
  let node = document.createTextNode(value);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  item.appendChild(checkbox);
  item.appendChild(node);
  item.appendChild(removeButton);

  return item;
}

function toggleCheck(listItem) {
  listItem.checked ?
    listItem.parentElement.classList.add('checked') :
    listItem.parentElement.classList.remove('checked');
}

function removeItem(listItem) {
  let parent = listItem.parentNode.parentNode;
  parent.removeChild(listItem.parentNode);
}
