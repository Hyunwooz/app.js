/*

1)

const h1 = document.querySelector('.hello h1');

function handletitleclick() {
    const clickedGood = "active";
    if (h1.classList.contains(clickedGood)) {
        h1.classList.remove(clickedGood);
    } else {
        h1.classList.add(clickedGood);
    }
    
}

h1.addEventListener("click", handletitleclick);

2)

toggle =  classlist에 해당 class(사용자정의)가 있다면 클래스를 제거함. 
만약 없다면 toggle은 classlist에 class를 추가시키는 기능

위의 코드와 같은 기능을 함

*/

const h1 = document.querySelector('.hello h1');

function handletitleclick() {
    h1.classList.toggle("active")
}

h1.addEventListener("click", handletitleclick);

