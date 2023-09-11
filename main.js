function addTask() {
    // Get the input value
    var task = document.getElementById("taskInput").value;
    if (task == "") {
      alert("Please, enter a value in the input box!");
    } else {

    // Create a new list item
    var li = document.createElement("li");
    var text = document.createTextNode(task);
    li.appendChild(text);

    // Add the list item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    document.getElementById("taskInput").value = "";

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", removeTask);
    li.appendChild(removeButton);
}
}

function removeLastLine() {
  const list = document.getElementById('taskList');
  const lastLine = list.lastElementChild;
  list.removeChild(lastLine);
}

function removeAllTasks() {
  var ul = document.getElementById("taskList");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}