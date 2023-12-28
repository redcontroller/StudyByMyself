// 01. 환경 설정
// let hello: string = 'Hello world!'
// hello = 'Hello~'
// console.log(hello);

// 02. 타입의 종류

/// 문자
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string  = `My color is ${red}.`
let yourColor: string = 'Your color is' + green

/// 숫자
let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

/// 불린
let isBoolean: boolean
let isDone: boolean = false

/// Null / Undefined
let nul: null
let und: undefined
nul = null
num = 123
console.log(nul)
console.log(und)
console.log(num)

/// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3]

/// 객체
// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () {}

// const userA: {
//     name: string
//     age: number
//     isValid: boolean
// } = {
//     name: 'Heropy',
//     age: 85,
//     isValid: true
// }

interface User {
    name: string
    age: number
    isValid: boolean
}

const userA: User = {
    name: 'Heropy',
    age: 85,
    isValid: true
}

const userB: User = {
    name: 'Neo',
    age: 22,
    isValid: false
}

/// 함수
const add1: (x: number, y: number) => number = function (x,y) {
    return x + y
}
const a: number = add1(1,2)

const hello1: () => void = function () {
    console.log('Hello world ~')
}
const h: void = hello1()

const add2 = function (x: number,y: number): number {
    return x + y
}

const hello2 = function (): void {
    console.log('Hello world ~')
}


/// Any
let hello: any = 'Hello world'
hello = 123
hello = false
hello = null
hello = {}
hello = []
hello = function () {}


/// Unknown
const anything: any = 123
const u: unknown = 123

const any: any = anything
const bool: boolean = anything
const numb: number = anything
const arr1: string[] = anything
const obj1: {x: string, y: number} = anything

/// Tuple
const tuple: [string, number, boolean] = ['a', 1, false]
const users: [number, string, boolean] [] = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]]

/// Void
function hello3(msg: string): void {
    console.log(`hello ${msg}`)
}
const hi: void = hello3('world')

/// Never
const nev: [] = []
// nev.push(3)

/// Union
let union1: string | number | boolean
union1 = 'Hello type!'
union1 = 123
union1 = false

/// Intersection
interface User {
    name: string,
    age: number
}

interface Validation {
    isValid: boolean
}

const heropy: User & Validation = {
    name: 'Neo',
    age: 85,
    isValid: true
}

