"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return `I'am ${this.name}`;
    }
    tellMyAge() {
        return `I'am ${this.age} old`;
    }
}
const person1 = new Person('Paul', 40);
const person2 = new Person('Mary', 35);
console.log(person1.tellMyName());
