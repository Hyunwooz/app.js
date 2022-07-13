/*
const loginform = document.querySelector('#login-form');
const logininput = loginform.querySelector('input');
const loginbutton = loginform.querySelector('button');

const logininput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');

loginForm.addEventListener('submit', onLoginSubmit); 에서 submit이 발생하면 이 함수의 성격대로 login input을 누르자마자 새로고침이 실행된다. 이때 onLoginSubmit 함수에서 preventDefault 를 실행시키면, 새로고침 되는 것을 막아준다.
이때 매개변수(parameter) 에 'event' 라고 넣고 함수 내용에 event에 대한preventDefault 를 해주면 해당하는 event에 대하여 submit의 기본동작을 멈추게 된다.
그 내용 아래 console.log(loginInput.value); 를 작성하면 input에 적었던 value(이름) 이 나온다.
이렇게, 버튼을 클릭하는 즉시 submit 되어 새로고침 (정보 증발)되는 것을 막고 유저의 이름을 저장(?)하기 위해서 preventDefault 가 사용된다.

const HIDDEN_CLASSNAME = 'hidden';
관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

'hello!' + username + nice to meet you!; 는
`hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.

HTML의 어느 한 부분을 잡고 거기에 class 를 추가하거나 빼고 싶을 때는
classList.add.('classname')
classList.remove.('classname') 를 사용한다. 

ocal storage는 browser에서 제공하는 DB로 key:value로 데이터를 저장한다.
-code
localStorage.setItem("key","value")로 값을 저장
localStorage.getItem("key")로 값을 불러옴
localStorage.removeItem("key")로 데이터를 삭제

-활용
추후 local storage에 저장된 값이 있다면, login form을 다시 보여주지 않고 바로 greeting 문구를 띄운다. 
만약 local storage에 username이 저장되어있지 않다면 login form을 보여주어 username을 입력받아 값을 저장한다

*/
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