function getInputValue() {
  let inputValue = document.getElementById("inputValue").value;
  console.log(inputValue);
  let item = createListItem(inputValue);
  let list = document.getElementById("list");
  list.appendChild(item);


}

function createListItem(value) {
  let item = document.createElement("li");
  let node = document.createTextNode(value);
  item.appendChild(node);

  return item;
}
