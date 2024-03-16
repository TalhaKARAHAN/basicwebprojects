document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('task');
  const addButton = document.getElementById('liveToastBtn');
  const taskList = document.getElementById('list');

  loadTasks();

  addButton.addEventListener('click', function () {
    addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      showToast('Listeye boş ekleme yapamazsınız!', 'error');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('checked');
      saveTasks();
    });

    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close';
    closeButton.addEventListener('click', function () {
      taskItem.remove();
      saveTasks();
    });

    taskItem.appendChild(closeButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';

    saveTasks();
    showToast('Listeye eklendi.', 'success');
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
      const taskItem = document.createElement('li');
      taskItem.innerText = taskText;
      taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('checked');
        saveTasks();
      });

      const closeButton = document.createElement('span');
      closeButton.innerHTML = '&times;';
      closeButton.className = 'close';
      closeButton.addEventListener('click', function () {
        taskItem.remove();
        saveTasks();
      });

      taskItem.appendChild(closeButton);
      taskList.appendChild(taskItem);
    });
  }

  function saveTasks() {
    const taskItems = taskList.querySelectorAll('li');
    const tasks = [];
    taskItems.forEach(task => {
      tasks.push(task.innerText);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function showToast(message, type) {
    const toast = document.querySelector(`.toast.${type}`);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  }
});