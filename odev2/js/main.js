"use strict"

const liveToastBtn = document.querySelector("#liveToastBtn");
const task = document.querySelector("#task");
const todoUlList = document.querySelector("#list");

let todolist = [];
getLoadingTodoList();
getRefreshList();

liveToastBtn.addEventListener('click', event => {
    let taskValue = task.value.trim();
    if(taskValue != '' && todolist.includes(taskValue) == false){
        todolist.push(taskValue);
        setTodoList();
        getRefreshList();
        $('#liveToastSuccess').toast('show');
    }
    else{
        $('#liveToastError').toast('show');
    }
});

function getLoadingTodoList(){
    let localTodo = localStorage.getItem('todoList');
    if(localTodo != null){
        let todolistControl = JSON.parse(localTodo);
        todolist = todolistControl.todo;
    }
}

function getRefreshList(){
    todoUlList.innerHTML = '';

    let nodes = todolist.map(todo => {
        console.log(todo);
        let li = document.createElement('li');
        li.textContent = todo;
        return li;
    });

    todoUlList.append(...nodes);
}

function setTodoList(){
    localStorage.setItem('todoList', JSON.stringify({todo:todolist}));
}