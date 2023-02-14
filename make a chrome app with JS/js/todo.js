const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo){
    const li = document.createElement("li"); // li을 HTML에서가 아닌 js에서 만들고 싶음
    const span = document.createElement("span"); // span을 HTML에서가 아닌 js에서 만들고 싶음
    span.innerText = newToDo // span의 텍스트는 handleToDoSubmit에서 온 newToDo텍스트가 됨


function deleteToDo(){
   
}
    
    const button = document.createElement("button");// button을 HTML에서가 아닌 js에서 만들고 싶음
    button.innerText = "❌" ;
    button.addEventListener("click", deleteToDo)
    li.appendChild(span) // li는 span이라는 자식을 가지게 됨(span을 li 내부에 집어넣음)
    li.append(button);
 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const newToDo = toDoInput.value ; // input.value를 새로운 변수(newTodo)에 복사
    toDoInput.value = ""; // input.value를 비우기(비운다고 하더라도 nowToDo가 비워지는것이 아님
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit) 
