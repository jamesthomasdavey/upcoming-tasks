const tasksInputEl = document.querySelector(`#tasks__input`);
const tasksListEl = document.querySelector(`.tasks__list`);

function addTask() {
  tasksInputEl.addEventListener(`keypress`, function(event) {
    if (event.keyCode === 13) {
      if (tasksInputEl.value !== ``) {
        tasksListEl.insertBefore(newTaskItem(), tasksListEl.firstElementChild);
        tasksInputEl.value = ``;
      }
    }
  })
}

function newTaskItem() {
  let myNewTaskItem = document.createElement(`li`);
  myNewTaskItem.classList.add(`tasks__item`);
  myNewTaskItem.innerHTML = tasksInputEl.value;
  let myFirstBar = document.createElement(`span`);
  myFirstBar.classList.add(`first-bar`);
  let mySecondBar = document.createElement(`span`);
  mySecondBar.classList.add(`second-bar`);
  let myNewXIcon = document.createElement(`div`);
  myNewXIcon.classList.add(`xIcon`);
  myNewXIcon.appendChild(myFirstBar);
  myNewXIcon.appendChild(mySecondBar);
  myNewTaskItem.appendChild(myNewXIcon);
  return myNewTaskItem;
}

function completeTask() {
  tasksListEl.addEventListener(`click`, function(e) {
    if (e.target.classList.contains(`tasks__item`)) {
      e.target.classList.toggle(`complete`);
    }
  });
}

function deleteTask() {
  tasksListEl.addEventListener(`dblclick`, function(e) {
    if (e.target.classList.contains(`tasks__item`)) {
      e.target.classList.add(`delete`);
    }
  });
  tasksListEl.addEventListener(`click`, function(e) {
    if (e.target.classList.contains(`xIcon`)) {
      e.target.parentNode.classList.add(`delete`);
    }
  });
}

addTask();
completeTask();
deleteTask();