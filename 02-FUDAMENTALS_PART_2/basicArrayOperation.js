// Add elements
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength =  friends.push('Jay');
console.log(friends);
console.log(newLength); //4


friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); // Last 
const popped = friends.pop();
console.log(popped); //Peter
console.log(friends);

friends.shift()
console.log(friends);

console.log(friends.indexOf('Steven')); //1 
console.log(friends.indexOf('Bob')); // -1

console.log(friends.includes('Steven')); //true
console.log(friends.includes('Bob')); //false

friends.push(23);
console.log(friends.includes('23')); //false because '23' is string
console.log(friends.includes(23)); // true because 23 is number

if(friends.includes('Steven')) {
    console.log('You have a friend called Peter'); 
}



