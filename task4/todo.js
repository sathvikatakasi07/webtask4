function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    };
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

window.onload = loadTasks;