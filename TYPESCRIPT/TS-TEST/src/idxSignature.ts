// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
interface Fruits {
    [item: number]: string
}
const fruits1: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits1[1])

// 객체
interface User3 {
    [key: string]: unknown
    name: string
    age: number
}
const heropy3: User3 = {
    name: 'Heropy',
    age: 85
}
heropy3['isValid'] = true
heropy3['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
console.log(heropy3)

// 새로운 예제
interface Payload {
    [key: string]: unknown
}
function logValues(payload: Payload) {
    for (const key in payload) {
        console.log(payload[key])
    }
}

interface User4 {
    [key: string]: unknown
    name: string
    age: number
    isValid: boolean
}
const heropy4: User4 = {
    name: 'Heropy',
    age: 85,
    isValid: true
}
logValues(heropy4)