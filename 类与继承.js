"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Man extends Person {
    constructor(name, age, nice) {
        super(name, age);
        this.nice = nice;
        console.log(`子类中的---name:${name},age:${age},nice:${nice}`);
    }
}
let manp = new Man("狗子", 16, true);
