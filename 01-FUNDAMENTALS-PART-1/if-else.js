const age = 15;
const isOldEnough = age >=18;

if(isOldEnough) {
    console.log('Sarah can start driving lisence');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1998;
let centry;

if(birthYear <=2000) {
     centry = 20;
}
else {
     centry = 21;
}
console.log(centry)