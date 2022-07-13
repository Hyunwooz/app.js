/*
const loginform = document.querySelector('#login-form');
const logininput = loginform.querySelector('input');
const loginbutton = loginform.querySelector('button');

const logininput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');


*/

const logininput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');

function loginBtnClick () {
    const username = logininput.value;
    console.log(username);
}

loginbutton.addEventListener("click",loginBtnClick);