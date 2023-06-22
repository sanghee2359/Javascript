function b() {
    // var i =3;
    for(let i = 0; i<10; i++){}
    return i;
}
// console.log(b())

function a() {  // before - ES5
    return 1
}

const a_ES6 = () => 1 // after - ES6

console.log(a())
console.log(a_ES6())

const c = (b = 2) => { // parameters
    return b
}
console.log(c()) 

function arrow() {
    setTimeout(()=>{
        console.log(this) // 화살표함수에서의 this = arrow{} 
    }, 1000)
}
function not_arrow() {
    setTimeout(function() {
        console.log(this) // Node.js에서는 Timeout || browser에서는 Window 를 가리킴
    })
}

const p1 = new not_arrow();
const p2 = new arrow();

const func1 = (e, index) => {
    console.log(`${index}번째 요소는 ${e}입니다.`)
}
const func2 = (e, index) => e * 2
const func3 = (prev, curr, index) => prev + curr
const func4 = e => e % 2
const d = [1, 2, 3, 4, 5].forEach(func1)

/*
0번째 요소는 1입니다.
1번째 요소는 2입니다.
2번째 요소는 3입니다.
3번째 요소는 4입니다.
4번째 요소는 5입니다.
*/

console.log(d) // undefined
const e = [1,2,3,4,5].map(func2)
console.log(e)  // [2, 4, 6, 8, 10]
const f = [1,2,3,4,5].filter(func4)
console.log(f) // [1, 3, 5]
const g = [1,2,3,4,5].reduce(func3)
console.log(g)

const numbers = [1, 3, 5, 4]
const isAllOdd = numbers.every(e => e %2)
const isSomeOdd = numbers.some(e => e %2)
console.log(isAllOdd, isSomeOdd)
