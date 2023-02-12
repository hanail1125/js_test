import _ from 'lodash';

// console.log('Hello, world')
// console.log(_.camelCase('Hello, world'))

/** ES6 Classes */
// function User(first, last) {
//   this.firstName = first,
//   this.lastName = last
// }

// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first,
//     this. lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const hsi = new User('Seungil', 'Hwang')
// console.log(hsi.getFullName())


/** 상속(확장) */
class Vehicle {
  constructor(name, wheel) {
    this.name = name,
    this.wheel = wheel
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughtersCar)