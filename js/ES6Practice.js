// //constants cant be altered
// const s = [5, 7, 2];
// function editInPlace() {
//     'use strict';
//     //however values inside an array which is assigned to a constant are mutable
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7
//
// }

//Using Arrow Functions
//Turn this function into an arrow function
// var magic = function() {
//     "use strict";
//     return new Date();
// };

// //when the function only has a return value, you can forgo using the curly brackets entirely
// const magic = ()=> new Date();


// //arrow functions with parameters
// var myConcat = function(arr1, arr2) {
//     "use strict";
//     return arr1.concat(arr2);
// };
//if there is only parameter you do not need to use the parenthesis
const myConcat = (arr1, arr2) => arr1.concat(arr2);