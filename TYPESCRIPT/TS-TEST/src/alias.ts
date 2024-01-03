// 타입 별칭 (Alias)

type TypeA = string
type TypeB = string | number | boolean
type MyUser = {
    name: string
    age: number
    isValid: boolean
} | [string, number, boolean]

const myUserA: MyUser = {
    name: 'Neo',
    age: 85,
    isValid: true
}
const myUserB: MyUser = ['Evan', 36, false]

function someFunc(param: TypeB): TypeA {
    switch (typeof param) {
        case 'string':
            return param.toUpperCase()
        case 'number':
            return param.toFixed(2) // 소수점 2자리까지 남겨놓은 문제 데이터 반환
        default:
            return 'true'
    } 
}

type TypeUser = {
    name: string
    age: number
    isValid: boolean
}
interface InterfaceUser {
    name: string
    age: NamedCurve
    isValid: boolean
}

const heropy6: TypeUser = {
    name: 'Heropy',
    age: 85,
    isValid: true
}