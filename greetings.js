const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting")
const HIDDEN_CLASSNAME="hidden";
const USER_KEY="username";

function loginSubmit(event){
	event.preventDefault();
	const username=loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);	
	localStorage.setItem(USER_KEY,username);
	paintGreetings(username);
}
function paintGreetings(username){
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText=`Hello, ${username}!`;
}

loginForm.addEventListener("submit",loginSubmit);

const savedName = localStorage.getItem(USER_KEY);
if(savedName===null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
	paintGreetings(savedName);
}