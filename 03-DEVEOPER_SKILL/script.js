'use strict';

const x = '25';
if (x === 23) console.log(23);

const calAge = birthYear => 2023 - birthYear;
console.log(calAge);

console.log(calAge(1950));

// PROBLEM 1
const calTempAmpLitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (temps[i] > max) {
      max = currTemp;
    }
    if (temps[i] < min) {
      min = currTemp;
    }
  }
  console.log(max, min);
};
calTempAmpLitude([3, 7, 4, 23]); //23 , 3

console.log("---------------------");

// PROBLEM 2: Function should receive 2 arrays of temps
const calTempAmpLitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calTempAmpLitudeNew([3, 5, 1], [9, 0, 5]);
calTempAmpLitudeNew(amplitudeNew);
