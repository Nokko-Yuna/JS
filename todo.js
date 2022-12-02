const todoForm=document.getElementById("inputTodo");
const todoInput=document.querySelector("#inputTodo input");
const todoList=document.querySelector(".todoList");
let todos=[];

todoForm.addEventListener("submit",addTodo);

function addTodo(event){	
	event.preventDefault();
	const val=todoInput.value;
	todoInput.value="";	
	
	const newTodoObj={
		text:val,
		id:Date.now()
	};
	paintTodo(newTodoObj);
	todos.push(newTodoObj);	
	saveTodo(newTodoObj);
}

function paintTodo(newTodoObj){
	
	const li=document.createElement("li");
	const span=document.createElement("span");
	const button=document.createElement("button");	
	span.innerText=newTodoObj.text;	
	
	button.innerText="✔"
	button.addEventListener("click",removeTodo);	
	li.appendChild(span);
	li.appendChild(button);
	li.setAttribute("id",newTodoObj.id);
	todoList.appendChild(li);
}

function removeTodo(event){
	const li = event.target.parentElement;
	todos=todos.filter(toDo=>toDo.id!==parseInt(li.id));
	li.remove();
	saveTodo();
} 

function saveTodo(newTodoObj){
	
	localStorage.setItem("todo",JSON.stringify(todos));	
}

const savedTodo=localStorage.getItem("todo");
if(savedTodo!==null){
	const parsedTodo=JSON.parse(savedTodo);
	todos=Array.from(parsedTodo);
	todos.forEach(paintTodo)
}

function deleteTodo(li){
	const newtodos=todos.filter(item=>item.id!==li.getAttribute("id"));
	console.log(newtodos);
}