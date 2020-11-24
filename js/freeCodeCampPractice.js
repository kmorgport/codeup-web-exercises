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
function sum(arr, n){
    if(n<=0){
        return 0
    }else {
        return sum(arr, n-1)+ arr[n-1]
    }
}