function addListItem() {
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue !== '') {
    let item = createListItem(inputValue);
    let list = document.getElementById("list");
    list.appendChild(item);
  }


}

function createListItem(value) {
  let item = document.createElement("li");
  let node = document.createTextNode(value);
  item.appendChild(node);

  return item;
}
