const hasDriverLisence = true;  // A
const hasGoodVision = false; //B


console.log(hasDriverLisence && hasGoodVision); //false
console.log(hasDriverLisence || hasGoodVision); // true
console.log(!hasDriverLisence); //false


if(hasDriverLisence && hasGoodVision) {
    console.log('Sarah is able to drive!');
}
else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriverLisence & hasGoodVision || isTired);
