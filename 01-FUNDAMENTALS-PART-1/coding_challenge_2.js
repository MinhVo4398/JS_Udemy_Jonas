const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}
else {
    console.log("John's BMI is higher than Marks's")
}