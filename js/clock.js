/* 
setInterval 은 5초마다 무언갈 반복적으로 실행하는 함수다.
setInterval(a,b); -> setInterval(sayHello, 5000);
a에는 반복되길 원하는 함수를 써주고, b에는 그 함수가 반복될 초를 입력하면 된다.

setInterval(sayHello, 5000);

*/

const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);