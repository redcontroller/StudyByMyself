// 제네릭(Generic)
/// 클래스

class User5<P> {
    // public payload: P
    // constructor(payload: P) {
    //     this.payload = payload
    // }
    constructor(public payload: P) {}
    getPayload() {
        return this.payload
    }
}

interface UserAType {
    name: string
    age: number
    isValid: boolean
}
interface UserBType {
    name: string
    age: number
    emails: string[]
}
const heropy7 = new User5<UserAType>({
    name: 'Heropy',
    age: 85,
    isValid: true,
    // emails: []
})
const neo3 = new User5<UserBType>({
    name: 'Neo',
    age: 102,
    emails: ['neo@gmail.com']
})