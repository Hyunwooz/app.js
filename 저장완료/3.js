/*
const age = 44;

function krage(a){
    a + 2;
    return "eee"
}

const krages = krage(1221);

console.log(krages);

return 은 javascript에서 종료 시점

*/

const cal = {
    add:function(a,b) {
        return a+b    },
    minus:function(a,b) {
        return a-b    },
    devide:function(a,b) {
        return a/b    },
    rr:function(a,b) {
        return a*b    },
    rx:function(a,b) {
        return a**b // 제곱
    }
}

console.log(cal.add(4,6));
console.log(cal.minus(10,1));
console.log(cal.devide(40,5));
console.log(cal.rr(4,6));
console.log(cal.rx(4,2));

const test = cal.add(4,1222);

console.log(test)