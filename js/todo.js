/* 

function 안에 function 결과 값을 불러올 수도 있구나! 함수 handletodosubmit 에 함수 painttodo 함수를 넣은 것처럼(painttodo();)!!!!

createelement로 html 안에 태그를 추가할 수 있다. (이 부분이 좀 헷갈림)
createelement() -> () 안에는 html 태그가 들어간다.

li.appendChild(span) -> appendChild 를 사용해서 li 안에 span 태그를 넣을 수 있다.

crateElement 와 appendChild 를 잘 사용하면 Javascript 에서 HTML에 원하는 태그를 넣어줄 수 있다.

버튼을 눌렀을 때 해당항목이 삭제되길 원한다면, delete를 사용한다.
일단 해당하는 태그를 찾아주고 const li = event.target.parentElement;
해당하는 태그를 잡아줬으면, 그에 대해 .remove(); 하면
해당하는 태그를 잡아 remove해준다.

toDos.push(newToDo); 해서 toDos 라는 array에 newToDo (사용자가 input에 입력하는 텍스트)을 새로 추가(update) 하는 것. - array 를 업데이트 하기 위해서 .push를 쓰기 때문에-

JSON.stringify(ㅇㅇㅇ); 는 object 를 sting 으로 바꿔주는 역할을 한다.
localStorage에 저장할 때, array 는 저장할 수 없다. value는 string만 받기 때문에 JSON 하기 전에 상태는 value 가 array 로 받아주는 상태다. 이 array 들을 string으로 변환하기 위해서 JSON.stringify를 사용하는 것.

function은 hoisting 때문에 항상 위로 올라가도록 작성해야 한다.

JSON.stringify(); 는 array를 단순한 string으로 변환해준다.
JSON.parse(); 는 단순한 string을 object로 변환해준다.
.foreach( item => b ); 는 각각의 item 들을 실행시킨다.


preventDefault() << 새로고침 방지
-------------------------------------------

function sayHellow(itme) {
    console.log('이 아이템이랑 연결됨',item);
}

(item) => console.log('이 아이템이랑 연결됨',item);


*/

const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

let todos = [];
const TODOS_KEY = 'todos';

function save1todos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    save1todos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText="❌";
    button.addEventListener("click", deleteTodo)

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoobj = {
        text:newTodo,
        id:Date.now(),
    };
    todos.push(newTodoobj);
    paintTodo(newTodoobj);
    save1todos();
}

todoForm.addEventListener('submit',handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parsedTodos = JSON.parse(saveTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

