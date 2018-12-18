var xorshift = require('./xorshift');

randomNumber = (n) => {
    if(!n) {
        throw 'n is undefinied';
    }
    if(n < 0) {
        throw 'n is less than 0';
    }
    if(n > 1000000) {
        throw 'n is higher than 1000000';
    }
    return Math.floor(xorshift.random() * n);    
}

let r1 = randomNumber(500);
let r2 = randomNumber(1);
let r3 = randomNumber(500);
// let r4 = randomNumber(1000001); throws error

console.log(r1);
console.log(r2);
console.log(r3);
// console.log(r4);
