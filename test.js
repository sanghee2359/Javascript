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


const 조건 = e => e.height >= 180
const 친구들 = [
    {"name" : "박종선", "height" : 173},
    {"name" : "연제호", "height" : 180},
    {"name" : "박종선", "height" : 190},
    {"name" : "박종선", "height" : 175}
]
const 키180이상친구 = 친구들.find(조건) // 조건에 해당하는 첫번째 요소만 출력
console.log(키180이상친구) // 연제호 - 190인 친구는 출력 x
const 키180이상인덱스 = 친구들.findIndex(조건)
console.log(키180이상인덱스) // 인덱스 0부터 시작

const h = [1,2,3,4,5]
console.log(h.includes(3)) // ES7문법, ES5의 indexOf보다 고성능

// indexOf를 쓸 때
// 배열 안에 어떤 요소를 찾고, 그 인덱스를 반환하는 경우
const i = [1,2,3,4,5]
const ret = i.indexOf(4)
const ret2 = i.findIndex(e => e==4) // findIndex은 조건 파라미터를 가짐
console.log(ret, ret2)

// 템플릿 문자열 
// 백틱 문자열 안에 값을 넣어서 문자열 완성하기
const name = "상희"
const s = `솔직히 알수록 ${name}은 바보인 것 같아` 
console.log(s) 

const person = {
    "age" : 25,
    "height" : 167
}
const tag = `<p>나의 나이는 ${person.age} 입니다.</p>`
const tag2 = `<p>키는 ${person.height}cm 입니다.</p>`
console.log(tag, tag2)

// Syntax omitted
const age = 25
const job = "프로그래머"
const data_used_ES6 = {name, age, job}
const data_not_used_ES6 = {"name" : name, "age" :age, "job" :job}
console.log(data_not_used_ES6)
console.log(data_used_ES6)

// spread operater( ... )
// 1. rest parameter 
const j = (b, ...rest) =>{  //함수의 매개변수를 담는 용도
    console.log(rest)
}
j(1,2,3)
const k = [1, 2, 3]
const j2 = (a, b, c) => console.log(a, b, c) // 배열을 분해해서 각각 a,b,c로 담기
j2(...k)

const j3 = [1,2,3,4,5]
const[head, ...rest] = j3
console.log(head, rest) // rest는 head를 제외한 나머지 값들이 들어감

// 2. Array Integration
const l = [1,2,3]
const m = [4,5,6]
const n = [...l, ...m]  // l과 m 배열이 통합된 n 배열
console.log(n)

// 3. Math
const o = [1,2,3,4]
console.log(Math.max(...o)) // 배열의 Max값 구할 때 spread 연산자가 필요

// 4. Object duplication
const p = {"name": "정상희", "age": 25}
const q = {...p, "height": 167}
console.log(q)
