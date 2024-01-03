// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User1 {
    name: string
    readonly age: number
    isValid?: boolean
}

const heropy1: User1 = {
    name: 'Heropy',
    age: 85,
    isValid: true
}
heropy1.isValid = false
// heropy1.age = 22

const neo: User1 = {
    name: 'Neo',
    age: 102
}