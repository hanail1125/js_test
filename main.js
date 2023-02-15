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

/** 배열 */
// .length
// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// console.log(number.length);
// console.log(fruits.length);
// console.log([1, 2].length);
// console.log([].length);

// .concat()
// console.log(number.concat(fruits))
// console.log(number)
// console.log(fruits)

// .forEach()
// const f = fruits.forEach((fruits, idx) => console.log(`${fruits}-${idx}`));
// const m = fruits.map((fruits, idx) => `${fruits}-${idx}`);
// const o = fruits.map((fruits, idx) => ({
//   id: idx,
//   name: fruits,
// }));

// console.log(f);
// console.log(m);
// console.log(o);

// .filter()
// const a = numbers.map(number => numbers < 3)
// console.log(a)

// const b = numbers.filter(number => numbers < 3)
// console.log(b)
// console.log(numbers)

// .find() .findIndex()
// const f = fruits.find(fruit => /^C/.test(fruit))
// const fi = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(f)
// console.log(fi)

// .includes()
// const i = numbers.includes(3)
// console.log(i)

// const ic = fruits.includes('Melon')
// console.log(ic)

// .push() .unshift()
// 원본 수정됨 주의!
// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// .reverse()
// 원본 수정됨 주의!
// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)

// .splice()
// 원본 수정됨 주의!
// numbers.splice(5, 1, 999)
// console.log(numbers)

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)

/** Object */
// .assign()
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnTarget);

// const userAge = {
//   name: "Heropy",
//   age: 35,
// };
// const userEmail = {
//   name: "Heropy",
//   email: "thesecon@gmail.com",
// };

// const targetVal = Object.assign({}, userAge, userEmail);
// console.log(userAge);
// console.log(userEmail);
// console.log(targetVal);
// console.log(targetVal === userAge);

// const a = { k: 123 };
// const b = { k: 123 };
// console.log(a === b);

// const c = Object.assign(a, b);
// console.log(c);
// console.log(c === a);
// console.log(c === b);

// .keys()
// const user = {
//   name: 'HwangSeungil',
//   age: 53,
//   email: 'hanail1125@gmail.com',
// }

// const keys = Object.keys(user)
// console.log(keys)
// console.log(keys[0]) // 배열데이터의 인텍싱방법
// console.log(user['email']) // 객체데이터의 인텍싱방법

// const values = keys.map(key => user[key])
// console.log(values)

/** 구조 분해 할당(Destructuring assingnment) */
// 비구조화 할당
// const user = {
//   name: '하나일',
//   age: 55,
//   email: 'hanail1125@gmail.com',
//   address: 'USA'
// }
// const {name: Nikname, age, email, address='Korea'} = user

// console.log(`사용자의 이름은 ${Nikname}`)
// console.log(`${name}님의 나이는 ${age}세입니다.`)
// console.log(`${name}님의 이메일 주소는 ${email}입니다.`)
// console.log(address)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [, , b] = fruits
// console.log(b)

/** 전개 연산자(Spread) */
// const fruits = ["Apple", "Banana", "Cherry", "Orange"];
// console.log(fruits);
// console.log(...fruits);

// const toObject = (a, b, ...c) => ({ a, b, c })
// console.log(toObject(...fruits));

/** 데이터 불변성(Immutability) */
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, function
// let a = { k: 1 };
// let b = { k: 1 };
// console.log(a, b, a === b)
// a.k = 7
// b = a
// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a, b, c, a === c)

/** 얕은 복사(Shallow copy), 깊은 복사(Deep copy) */
// const user = {
//   name: "하나일",
//   age: 55,
//   email: ["hanail1125@gmail.com"],
// }
// console.log('user', user)

// // const copyUser = Object.assign({}, user) //얕은 복사
// // const copyUser = {...user} // 얕은 복사
// const copyUser = _.cloneDeep(user) // 깊은복사(lodash 활용)

// console.log(copyUser === user)

// user.age = 20
// console.log('user', user)
// console.log('copyUser', copyUser)

// user.email.push('hsi05200@gmail.com')
// console.log('user', user)
// console.log('copyUser', copyUser)
// console.log(user.email === copyUser.email)


import getType from "./getType";
import { random, user as hanail } from "./getRandom";
import * as R from './getRandom'


// console.log(_.camelCase("the hello world"));
// console.log(getType([1, 2, 3]));
// console.log(random(), random());
// console.log(R);

/** lodash 패키지 사용법 */
// import _ from 'lodash'

// const usersA = [
//   {userId: '1', name: 'HEROPY' },
//   {userId: '2', name: 'Neo'},
// ]
// const usersB = [
//   {userId: '1', name: 'HEROPY' },
//   {userId: '3', name: 'Amy'},
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

// const users = [
//   {userId: '1', name: 'HEROPY'},
//   {userId: '2', name: 'Neo'},
//   {userId: '3', name: 'Amy'},
//   {userId: '4', name: 'Evan'},
//   {userId: '5', name: 'Lewis'},
// ]

// const foundUser = _.find(users, {name: 'Amy'})
// const foundUserIndex = _.findIndex(users, {name: 'Amy'})
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {name: 'HEROPY'})
// console.log(users)

/** JSON */
// const user = {
//   name: 'Hwang Seungil',
//   age: 55,
//   email: [
//     'hanail1125@gmail.com',
//     'hsi05200@gmail.com'
//   ],
//   companyName: 'CNN'
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)


// localStorage.setItem('user', JSON.stringify(user))

// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 41

// document.write(obj.age, '세')

// localStorage.setItem('user', JSON.stringify(obj))

/** OMDb API 사용법 */
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen