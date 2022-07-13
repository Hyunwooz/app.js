const loginform = document.querySelector('#login-form');
const logininput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')

const HIDDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'

function onLoginSubmit (event) {
    event.preventDefault()
    loginform.classList.add(HIDDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,logininput.value)
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginform.classList.remove(HIDDDEN_CLASSNAME);
    loginform.addEventListener('submit',onLoginSubmit)
} else {
    paintGreetings();
}