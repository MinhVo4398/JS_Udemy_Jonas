// Use Array for order data
const jonasArray = [
    'Jonas',
    'Schemedth'
];

// Use Object for un-structure data
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedman',
    age: 2037 - 1991,
    job: 'teacher',
    friends:
        [
            'Micheal', 'Peter', 'Steven'
        ]
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas[`first`+ nameKey]);
console.log(jonas['last' + nameKey]);
/*
const interestedIn  = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]); // parse job -> teacher, parse location -> undefined

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}
*/
jonas.location = 'Portugal';
jonas['twitter'] = '@jonaschemdman';
console.log(jonas)

