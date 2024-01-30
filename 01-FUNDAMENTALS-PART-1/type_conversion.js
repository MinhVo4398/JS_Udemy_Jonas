// type conversion
const inputYear = '1991';
console.log(Number(inputYear)); // convert strign to number -1991(number)
console.log(inputYear + 18); //199118 (string)
console.log(Number(inputYear) + 18); //2009 (number)

console.log(Number('Jonas')); //NaN (means invalid number)
console.log(typeof NaN); //number

console.log(String(23)); //string

//type coercion
console.log('I am ' + 23 + ' years old'); ///type coercion
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' -3); //10 (number)
console.log('23' + '10' + 3); //23103 (string)
console.log('23' * '2') ; //46 (number)

let n = '1' + 1; //'11' (string)
n = n -1; //10 (convert to number)
console.log(n); //10

console.log(2+3+4+'5'); //'95' (string)