const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
]

//0, 1, ....,4
// 4, 3,....0
for (let i = jonas.length -1; i>=0; i--) {
    console.log(i, jonas[i])
}

for(let exercise = 1; exercise <4;  exercise++) {
    console.log(`----------Starting ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`)
    }
}



