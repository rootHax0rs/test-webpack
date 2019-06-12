class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    console.log(this.name)
  }
  sayAge() {
    console.log(this.age)
  }
}

class Person2 extends Person {
  constructor(name, age) {
    super(name, age)
  }
}

module.exports = {
  Person,
  Person2
}
