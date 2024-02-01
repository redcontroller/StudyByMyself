// 인터페이스(Interface)
// 함수 타입 - 호출 시그니처(Call Signature)

// interface GetName {
//     (message: string): string
// }
interface GetName {
    (param: string): string
    // (param: string, two: string): string
}

interface User2 {
    name: string
    age : number
    getName: GetName
}
const heropy2: User2 = {
    name: 'Heropy',
    age: 85,
    getName(message: string) { // 매개변수 이름이 달라도 괜찮지만, 개수는 일치해야 한다.
        console.log(message)
        return this.name
    }
}
heropy2.getName('Hello~')