
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedman',
    birthYear: 1991,
    job: 'teacher',
    friends:
        [
            'Micheal', 'Peter', 'Steven'
        ],
    hasDriverLicense: true,
    
    //Function expression
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function() {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037  - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} - year old ${jonas.job}, and he has ${this.hasDriverLicense ?'a' : 'no'} driver's license.`;
    }
}; 

console.log(jonas.calcAge()); //46
console.log(jonas.age); //46
console.log(jonas.getSummary()); //Jonas is a 46 - year old teacher, and he has a driver's license.
//console.log(jonas['calcAge'](1991)); //46