/* 
js는 document object를 통해 html과 상호작용 할 수 있음.

console.dir(document) 오브젝트 확인

document html 확인

document.title = "JS"; 타이틀 변경

const title = document.getElementById("title");

title.innerText='Change';

queryselector는 오직 첫 번째인 하나의 element를 return한다.
css방식으로 사용할 수 있으며
document.queryselector(".classname h1")로 사용함 +(h1:first-child같이 사용 가능)

조건에 부합하는 selector안의 element들을 가져오고 싶으면 queryselecetorall를 사용하면 됨

*/

const test = document.querySelector('.hello h1');

function handletitleclick() {
    test.style.color='blue';
}

function enter() {
    test.innerText = "마우스 올라옴";
}

function leave() {
    test.innerText = "마우스 사라짐";
}

function handlewinresize() {
    document.body.style.backgroundColor = "tomato";
}

function handlewincopy() {
    alert('복사금지');
}

test.addEventListener("click", handletitleclick);
test.addEventListener("mouseenter", enter);
test.addEventListener("mouseleave", leave);

window.addEventListener('resize', handlewinresize);
window.addEventListener('copy', handlewincopy);