//1
var onMarsRightNow = false;
console.log(onMarsRightNow);
//2
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]
console.log(fruits);
//3
var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"];
console.log(vegetables);
//4
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
//5
fruits.push("tomato");
console.log(fruits[5]);
//6
vegetables.push("tomato");
console.log(vegetables[5]);
//7
numbers.reverse();
console.log(numbers);
//8
vegetables.sort();
console.log(vegetables);
//9
fruits.reverse();
console.log(fruits);
//10
var fruitsAndVeggies = fruits.concat(vegetables);
console.log(fruitsAndVeggies);

function randomPositiveEvenNumber(){
    var randomNumber = Math.ceil(Math.random()*100)+10;
    if(randomNumber % 2 !== 0){
        return randomPositiveEvenNumber();
    }
    return randomNumber;
}

function randomPositiveOddNumber(){
    var randomNumber = Math.ceil(Math.random()*100)+10;
    if(randomNumber % 2 === 0){
        return randomPositiveOddNumber();
    }
    return randomNumber;
}

function randomNegativeEvenNumber(){
    var randomNumber = Math.ceil(Math.random()* -100)-10;
    if(randomNumber % 2 === 0){
        return randomNumber;
    }
    return randomNegativeEvenNumber();
}

function randomNegativeOddNumber(){
    var randomNumber = Math.ceil(Math.random()*-100)-10;
    if(randomNumber % 2 === 0){
        return randomNegativeOddNumber();
    }
    return randomNumber;
}
var positiveEvenNumber =  randomPositiveEvenNumber();
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

//11
function addOne(num){
    return num + 1;
}
console.log(positiveEvenNumber);
console.log(addOne(positiveEvenNumber));
console.log(negativeOddNumber);
console.log(addOne(negativeOddNumber));

//12
function isPositive(num){
    return num>0;
}
console.log(isPositive(0.25));
console.log(isPositive(-.5));
console.log(positiveOddNumber);
console.log(isPositive(positiveOddNumber));
console.log(negativeEvenNumber);
console.log(isPositive(negativeEvenNumber));

//13
function isNegative(num){
    return num<0;
}
console.log(positiveOddNumber);
console.log(positiveEvenNumber);
console.log(negativeEvenNumber);
console.log(negativeOddNumber);
console.log(isNegative(positiveOddNumber));
console.log(isNegative(positiveEvenNumber));
console.log(isNegative(negativeEvenNumber));
console.log(isNegative(negativeOddNumber));

//14
function isOdd(num){
    return num%2 != 0;
}
console.log(positiveOddNumber);
console.log(positiveEvenNumber);
console.log(negativeEvenNumber);
console.log(negativeOddNumber);
console.log(isOdd(positiveOddNumber));
console.log(isOdd(positiveEvenNumber));
console.log(isOdd(negativeOddNumber));
console.log(isOdd(negativeEvenNumber));