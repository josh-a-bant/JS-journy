let listItems = [];

let item = document.querySelector("#list-items");
let date = document.querySelector("#date");

let btn = document.querySelector("#btn");
btn.addEventListener("click", addListToArray);

function addListToArray() {
  if (item.value === "") {
    return console.error("enter Task");
  }

  let items = {
    item: `${item.value}`,
    date: `${date.value}`,
  };

  listItems.push(items);

  item.value = "";
  date.value = "";

  displayTask();
}

function displayTask() {
  let displayTasks = document.querySelector(".display-tasks");

  let listItemsHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    listItemsHTML += `
    <div class="display-list-items">
      <p>${listItems[i].item}</p>
      <p>${listItems[i].date}</p>
      <button id="deleteTask" onclick="deleteList(${i})">delete</button>
    </div>`;
  }

  displayTasks.innerHTML = listItemsHTML;
}

function deleteList(item) {
  listItems.splice(item, 1);
  displayTask();
}
