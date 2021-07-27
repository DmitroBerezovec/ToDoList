//Variables
const todoInput = document.querySelector(".text-input");
const todoButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const checkButton = document.querySelector(".check-button");
const deleteButton = document.querySelector(".del-button");
//Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
checkButton.addEventListener("click", checkingTodo);
deleteButton.addEventListener("click", deleteTodo);

//Functions
function addTodo(event) {
    event.preventDefault();
//div creating
    if(todoInput.value !== ""){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
//check/complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '&#10003';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//li/text
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
//delete button     
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '&#10006';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
//adding div to ul
    todoList.appendChild(todoDiv);
//refresh input
    todoInput.value = "";
    }
}
//buttons functions
function deleteCheck(e){
    const item = e.target;
//del/remove button
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
        todo.remove();
        });
    }
//check/complete button
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
//filter function
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "All": 
                todo.style.display = "flex";
                break;
            case "Done":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "Not done":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
//check/complete all
function checkingTodo(event){
    event.preventDefault();
    const todos = todoList.childNodes;
    const array = [todoList.childNodes];
    todos.forEach(function(todo){    
        if(!todo.classList.contains("completed")){
            todo.classList.toggle("completed");           
        } 
    });  
}
//del/remove all
function deleteTodo(event){
    event.preventDefault();
    if(confirm("You wont to delete all comleted?")){
        const todos = todoList.childNodes;
        todos.forEach(function(todo){
     if(todo.classList.contains("completed")){
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
});
}
}