function sum(a,b){
    return a+b;
}

let resultSum = sum(3,7);
console.log(resultSum);

/*-------*/

function toUpperCaseString(str){
    return str.toUpperCase();
}

let result = toUpperCaseString('Hello Yurii');
console.log(result);

/*-------*/

function squareArray(numbers){
    return numbers.map(number => number * number);
}

const originalArray = [2, 4, 6, 8];
const squaredArray = squareArray(originalArray);
console.log(squaredArray);