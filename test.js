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