function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = task;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', () => li.remove());
    div.appendChild(button);
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
    taskInput.value = '';
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

function removeLine() {
  const line = document.getElementById('taskList').querySelector('li:nth-child(2)');
  line.remove();
}