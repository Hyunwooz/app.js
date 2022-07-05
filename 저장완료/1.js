// 파이썬에서 변수만들때는  a=11 , 자바스크립트 변수만들때는 const a = 11;

/**
 * const 바뀔 수 없는 값
 * let 추후에 업데이트 가능한 값
 * 
 * 첫 변수 생성 let myName = "woohyun";
 * 추후에 변수 바꿀 때 let 빼고 작성
 * const a = 11;
const b = 4;

let myName = "woohyun";

console.log(a*b);
console.log(a+b);
console.log(a/b);

console.log("hello "+myName);

myName = "hyunwoo";

console.log("Nono My name is "+myName);
 * 
 * true: 참
    false: 거짓
    null: 아무 것도 없음. 자연적으로 발생 X 존재하지않음
    undefined: 존재하지만 값이 없음. = 속이 빈 껍데기
 
 # 데이터 정리(array)

정의 방법: 변수 정의와 같이 시작한 후 (지정 값)에는 []를 쓰고, 그 사이 데이터들은 ,로 구분한다.

array 속 n번째 값을 아는 방법: (array 이름[n-1])
=> 컴퓨터는 수를 0부터 센다.

array의 값을 추가하기: (array 이름).push()

array는 파이썬의 list

array에서 특정 위치에 있는 값 찾기 EX) array[3] < 어레이 4번째 값

array.push(추가할 값); array에 값 추가하기 마지막 위치에 추가됨.


    const list = ['aa','bb','cc','dd'];

    console.log(list[3]);

    list.push('ee');

    console.log(list);

 
    */


const player = {
    name:"hyun",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);

player.name = "woo"; // name 속성값 바꾸기
player.lastname = "kang" // player 에 속성값 추가하기

console.log(player);


