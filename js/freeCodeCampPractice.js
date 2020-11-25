// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
//create a function that updates nested objects
// function updateRecords(object, id, prop, value) {
//     //if the property enters is NOT 'tracks' AND the value is not an empty string
//     if(prop !== 'tracks' && value !== ''){
//         //update value to the objects property
//         object[id][prop] = value;
//     }else if(prop === 'tracks' && !object[id].hasOwnProperty('tracks')){
//         object[id][prop]=[value];
//     }else if(prop === 'tracks'&& value !==''){
//         object[id][prop].push(value);
//     }else if(value === ''){
//         delete object[id][prop]
//     }
//     return object;
// }
//
// updateRecords(collection, 5439, 'artist', 'ABBA');

// var myArr = [ 2,3,4,5,6]
// var total = 0;
// for(var i=0; i<myArr.length; i++){
//     total += myArr[i];
// }
//
// //use nested loops to multiply all elements of nested arrays
// function multiplyAll(arr){
//     var product = 0;
//     for(var i =0; i<arr.length; i++){
//         for(var j=0; j<arr[i].length;j++){
//             product *=arr[i][j]
//         }
//     }
// }

// //push only 10 to array and stop loop when i= 11
// var myArray = [];
// var i = 10;
// do{
//     myArray.push(i);
//     i++
// }while(i<=10)

//attempt your first recursive code
// function sum(arr, n){
//     if(n<=0){
//         return 0
//     }else {
//         return sum(arr, n-1)+ arr[n-1]
//     }
// }

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// function lookUpProfile(name, prop) {
// // Only change code below this line
//     //run thru each object
//     for (let i = 0; i < contacts.length; i++) {
//         //check if name is in firstname property of object
//         if (contacts[i].firstName === name) {
//             //check if property is within the named object
//             if (prop in contacts[i]) {
//                 return contacts[i][prop];
//                 //if not return no such property
//             } else return "No such property";
//             //if loop runs with no conditional being triggered, return this statement
//         }else return "No such contact"
//     }
// }
// lookUpProfile("Akira", "likes");

// //working with Math.random()
// //Math.random returns a random decimal, multiply it against the integer for the non-inclusive range you want then Math.floor it
// Math.floor(Math.random()*20)

//creating your own range of numbers
// function myOwnRandomNum(myMax,myMin) {
//     //the max and min are the boundaries of your range;
//     //multiplying the difference of said range plus 1 creates an inclusive bottom, adding myMin creates an inclusive top range
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

//parseInt can also be used to parse non-decimal numbers (binary, hex, etc)
// parseInt("11", 2)
// function checkSign(num){
//     return(num>0)?"positive"
//         :(num<0)?"negative"
//             :"zero";
// }
// //multiple ternaries
//Using recursion to create countdown
// function countup(n){
//     if(n<1){
//         return [];
//     }else{
//         //works down the tree (creates 5,4,3,2,1)
//         const countArray = countup(n-1);
//         //pushes back up in reverse order (1,2,3,4,5)
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countup(5))//[1,2,3,4,5]
function countDown(n){
    if(n<1){
        return [];
    }else{
        //works down tree (5,4,3,2,1)
        const countArray = countDown(n-1);
        //works back up tree(1,2,3,4,5) however, is unshifting to beginning of stack so numbers are pushed right (final array [5,4,3,2,1]
        countArray.unshift(n);
        return countArray;
    }
}
function rangeOfNumbers(startNum, endNum){
    if(startNum-endNum === 0){
        return[startNum];
    }else{
        const nums = rangeOfNumbers(startNum+1, endNum);
        //when the recursion is additive(startNum '+') you need to use unshift to create an increasing array
        nums.unshift(startNum);
        return nums;
    }
}
console.log(rangeOfNumbers(1,5))