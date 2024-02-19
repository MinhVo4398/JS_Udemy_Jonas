const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

//const  years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Peter

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schemetann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length); //5


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // 47 70 19

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); //[ 47, 70, 19 ]
