// 'use strict';

function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();

function fruitProcessor(apple, orange) {
    const juice = `Juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice =  fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0)); => just log the result, not store in a variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);