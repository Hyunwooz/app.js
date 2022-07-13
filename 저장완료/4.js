/*
const age = prompt("몇살이냐?"); 하나의 창이 뜸, 입력폼 생김

consolo.log (typeof Value) -> value의 타입 확인가능 (str , int 등등)
 
parseInt(value) -> value값을 int형태로 바꾸기

if문

if (condition) {
}

else if 여러 조건 사용시

&& => and 조건 모두 충족 시 true
|| => or 조건 하나만 충족시 true
=== < 동일한 값일 경우


*/

const age = parseInt(prompt("몇살이냐?"));


if (isNaN(age) || age<0) {
    console.log('양수를 입력하세요.');

} else if (age < 18) {
    console.log('미성년자');
} else if(age >= 18 && age <= 50) {
    console.log('성인');
} else if(age > 50) {
    console.log('어르신');
}
