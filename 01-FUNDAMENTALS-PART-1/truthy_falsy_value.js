// falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true (truthy value)
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if(money) { //0  (falsy value) is convert to false so that else block is executed
    console.log("Don't spend it at all");
}
else {
    console.log('You should get a job!')
}

let height;
if(height) { //undefined (falsy value) ==> else block will be executed
    console.log('YAY! Height is defined '); 
}
else {
    console.log('Height is UNDEFINED');  //Height is UNDEFINED
}