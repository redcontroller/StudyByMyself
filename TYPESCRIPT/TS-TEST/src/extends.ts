// 인터페이스(Interface)
// 확장(Extends) 또는 상속

interface UserC {
    name: string
    age: number
}
interface UserD extends UserC {
    isValid: boolean
}

const heropy5: UserC = {
    name: 'Heropy',
    age: 85,
    // isValid: true
}
const neo1: UserD = {
    name: 'Neo',
    age: 102,
    isValid: true
}

// 새로운 예제

interface FullName {
    firstName: string
    lastName: string
}
interface FullName {
    middleName: string
    lastName: string
}

const fullName: FullName = {
    firstName: 'Tomas',
    middleName: 'Sean',
    lastName: 'Connery'
}