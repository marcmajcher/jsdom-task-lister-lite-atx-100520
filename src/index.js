document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.getElementById('create-task-form');
  document.addEventListener('submit', handleNewTaskSubmit);
});

function handleNewTaskSubmit(event) {
  event.preventDefault();

  const newTaskInput = event.target.newTask;
  const taskList = document.getElementById('tasks');

  const newTaskElement = document.createElement('li');
  newTaskElement.innerText = newTaskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  newTaskElement.append(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    taskList.removeChild(newTaskElement);
  });

  taskList.append(newTaskElement);
  newTaskInput.value = '';
}
