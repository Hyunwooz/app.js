const quotes = [
    {
        quote :"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author :"톰 모나건",
    },
    {
        quote :"자신감 있는 표정을 지으면 자신감이 생긴다",
        author :"찰스다윈",
    }
    ,
    {
        quote :"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
        author :"제임스 딘",
    }
    ,
    {
        quote :"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
        author :"간디",
    }
    ,
    {
        quote :"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author :"괴테",
    }
    ,
    {
        quote :"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author :"이소룡",
    }
    ,
    {
        quote :"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author :"괴테",
    }
    ,
    {
        quote :"해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다. ",
        author :"톨스토이",
    }
    ,
    {
        quote :"사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다",
        author :"생떽쥐베리",
    }
    ,
    {
        quote :"작은 기회로 부터 종종 위대한 업적이 시작된다",
        author :"데모스테네스",
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const daysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = daysQuote.quote;
author.innerText = daysQuote.author;