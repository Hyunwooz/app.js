/*

*/
const h1 = document.querySelector('.hello h1');

function handletitleclick() {
    const goodcolor = h1.style.color;
    let newcolor;
    if (goodcolor === "blue") {
        newcolor='tomato';
    }
    else {
        newcolor='blue';
    }
    h1.style.color = newcolor;
}

h1.addEventListener("click", handletitleclick);
