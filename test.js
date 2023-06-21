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