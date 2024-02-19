// Arrow Function
const calcAge3 =  birdYear => 2037- birdYear;
const age3 = calcAge3(1991);
console.log(age3);


// Arrow Function with one param
const yearsUntilRetirement = birdYear => {
    const age = 2037 - birdYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// Arrow Function with multiple param
const yearsUntilRetirement1 = (birdYear, firstName) => {
    const age = 2037 - birdYear;
    const retirement = 65 - age;
    return `${firstName} retries in ${retirement} years`;
}
console.log(yearsUntilRetirement1(1991,'John'));