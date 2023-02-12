import _ from 'lodash';

console.log('Hello, world')
console.log(_.camelCase('Hello, world'))

/** ES6 Classes */
// function User(first, last) {
//   this.firstName = first,
//   this.lastName = last
// }

// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) {
    this.firstName = first,
    this. lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const hsi = new User('Seungil', 'Hwang')
console.log(hsi.getFullName())