import _ from "lodash";

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
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name,
//     this.wheel = wheel
//   }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }

// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)

/** JS 데이터 */
// 문자
// const str = '   Hello world  '
// console.log(str.trim())

// 숫자와 수학
// const pi = 3.1415924654654623242
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(typeof integer, integer)
// console.log(typeof float, float)

// console.log('절대값 -> Math.abs(-12): ', Math.abs(-12))
// console.log('최소값 -> Math.min(2, 8): ', Math.min(2, 8))
// console.log('최대값 -> Math.max(2, 8): ', Math.max(2, 8))
// console.log('올림 -> Math.ceil(3.14): ', Math.ceil(3.14))
// console.log('내림 -> Math.floor(3.53): ', Math.floor(3.53))
// console.log('반올림 -> Math.round(3.53): ', Math.round(3.53))
// console.log('임의값(난수) -> Math.random(): ', Math.random())

// 배열
// .length
const number = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "cherry"];

// console.log(number.length);
// console.log(fruits.length);
// console.log([1, 2].length);
// console.log([].length);

// .concat()
// console.log(number.concat(fruits))
// console.log(number)
// console.log(fruits)

// .forEach()
const f = fruits.forEach((fruits, idx) => console.log(`${fruits}-${idx}`));
const m = fruits.map((fruits, idx) => `${fruits}-${idx}`);
const o = fruits.map((fruits, idx) => ({
  id: idx,
  name: fruits,
}));

console.log(f);
console.log(m);
console.log(o);
