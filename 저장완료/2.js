/*

function sayhello(nameOfperson, age) {
    console.log('Hello my name is '+nameOfperson + " and i'm "+age);
}

sayhello("kang",10);
sayhello("woo",20);
sayhello("hyun",30);



function plus(firstnumber,secondnumber) {
    console.log(firstnumber+secondnumber);
}

function devide(firstnumber,secondnumber) {
    console.log(firstnumber/secondnumber);
}

plus(1,2);
devide(6,2);

const player = {
    name: "hyun",
    sayhello : function(otherpersonname){
        console.log('hello '+otherpersonname)
    },
};

console.log(player.name);
player.sayhello('ltyn')

*/

const cal = {
    add:function(a,b) {
        console.log(a+b)
    },
    minus:function(a,b) {
        console.log(a-b)
    },
    devide:function(a,b) {
        console.log(a/b)
    },
    rr:function(a,b) {
        console.log(a*b)
    },
    rx:function(a,b) {
        console.log(a**b) // 제곱
    }
}

cal.add(4,6);
cal.minus(10,1);
cal.devide(40,5);
cal.rr(4,6);
cal.rx(4,2);