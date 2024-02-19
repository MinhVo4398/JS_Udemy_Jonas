
const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKolas = calcAverage( 65, 54, 49);
console.log(scoreDolphins, scoreKolas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy ${avgDolphins} vs ${avgKoalas}`);
    }
    else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy ${avgKoalas} vs ${avgDolphins}`);
    }
    else {
        console.log('No team wins....');
    }
}

checkWinner(scoreDolphins, scoreKolas);
checkWinner(576, 111);

console.log("----------------------")

//Test 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKolas = calcAverage( 23, 34, 27);
 console.log(scoreDolphins, scoreKolas);
 checkWinner(scoreDolphins, scoreKolas);
