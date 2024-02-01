// 클래스

// 접근 제어자(Access Modifiers)
/// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클래스에서만 접근 가능

class User_A {
    public first: string = ''
    public last: string = ''
    public age: number = 0
    constructor(first: string, last: string, age: number) {
        this.first = first
        this.last = last
        this.age = age
    }
    public getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}
class User_B extends User_A {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}
class User_C extends User_B {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}

const neo2 = new User_A('Neo', 'Anderson', 102)
console.log(neo2.first)
console.log(neo2.last)
console.log(neo2.age)
neo2.getAge()