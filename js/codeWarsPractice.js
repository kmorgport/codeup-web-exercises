// function uniqueChar(iterable){
//     let conversion = iterable;
//     let uniques = [];
//     while(typeof(conversion)=="string"){
//         conversion = iterable.split('');
//     }
//     conversion.forEach((c)=>{
//         if(!uniques.includes(c)){
//             uniques.push(c)
//         }
//     })
//     return uniques;
// }
//
//
// function uniqueInOrder(iterable){
//     var result = [];
//     for(let i = 0; i<iterable.length; i++){
//         result.push(iterable[i]);
//         if(result[result.length-2]==result[result.length-1]){
//             result.pop();
//         }
//     }
//     return result;
// }
//
// function addBinary(a,b){
//    var res = a+b;
//    return parseInt(res,10).toString(2);
// }
//
// function validatePIN(pin) {
//     if(typeof(parseInt(pin))!="number"){
//         return false
//     }else if(pin.match(/[^0-9]/)){
//         return false
//     }else if(pin.length==4||pin.length==6){
//         return true
//     }else{
//         return false
//     }
// }
//
//
// // function findEvenIndex(arr)
// // {
// //     var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
// //     for(var i = 0; i < arr.length; i++) {
// //         if(i > 0) left += arr[i-1];
// //         right -= arr[i];
// //
// //         if(left == right) return i;
// //     }
// //
// //     return -1;
// // }
// function pigIt(str){
//     var regex=/[!,.?]/g;
//     //trim any empty bits
//     var trimmed = str.trim();
//     //peels off punctuation
//     var purged = trimmed.replace(regex,'');
//     var purgeTrim = purged.trim();
//     //turns string into an array where each element is a word
//     let piggy = purgeTrim.split(' ');
//     //sets up next array we will use
//     let longer = [];
//     //possible punctuation holder
//     var punc='';
//     //turns your array of words into an arry of arrays where each sub-array is an array of individual letters
//     for(let i= 0; i<piggy.length;i++){
//         longer.push(piggy[i].split(''));
//     }
//     //create array for edited sentence
//     var sentence = [];
//     //iterates over the sub-arrays to piglatinify them
//     for(let i=0; i<longer.length; i++) {
//         var a;
//         a = longer[i].shift();
//         longer[i].push(a + 'ay');
//         //rejoins each sub element array back into word and moves the newly fused array back up one level
//         sentence.push(longer[i].join(''))
//     }
//     //fuses the one dimensional array back into sentence
//     var newSent = sentence.join(' ');
//     //checks original string for punctuation to add it back to the PLified string
//     if(str.includes("!")){
//         punc=" !";
//     }else if(str.includes(".")){
//         punc=".";
//     }else if(str.includes("?")){
//         punc = " ?"
//     }
//     newSent+=punc
// return newSent;
// }
// pigIt('Pig latin is cool !')
//
// /* elegant solution
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
//  */
//
// // function countTime(num){
// //     var start = Date.now();
// //     console.log("Counting from 1 to "+num);
// //     for (var i = 0; i<num;i++){}
// //     var end = Date.now();
// //     console.log("done!");
// //     console.log("it took "+ (end-start)+" milliseconds");
// // }
//
// // function punctuationPrac(str){
// //     var regex=/[!,.]/g;
// //     var purged = str.replace(regex,'');
// //     console.log(purged)
// // }
// // punctuationPrac('Pig latin is cool!')
// /*how many times will the person in the window see the ball bounce if the 'bounce' represents how much the height degrades each time */
// //bouncingBall(3.0, 0.66, 1.5), 3
// function bouncingBall(h, bounce, window){
//     if(h>0 && ((bounce>0)&&(bounce<1)) && window<h){
//     let counter = 0;
//     while(h>window){
//         counter++
//         h *= bounce;
//         if(h>window){
//             counter++;
//         }
//     }
//     console.log(counter);
// }else{
//         counter = -1
//     console.log(counter)
// }}
// bouncingBall(1.0,0.66,1.5);
//
// function rgb(r, g, b){
//     //checks to see if argument is between 0 and 255
//     function componentToHex(c){
//         if(c>255){
//             c = 255
//         }else if(c < 0){
//             c = 0
//         }
//         //changes number into a hex code
//         let hex = c.toString(16);
//         //if the hex length is one, it adds a 0, otherwise, just
//         return hex.length == 1 ? "0" + hex : hex;
//     }
//     let color = componentToHex(r).toUpperCase()+ componentToHex(g).toUpperCase() + componentToHex(b).toUpperCase();
//     let cured = color.slice(0,6);
//     return cured;
// }
//
//
// //Finds the difference between two arrays
// function arrayDiff(a,b) {
//     let difference = a.filter(x => !b.includes(x));
//     //a.filter sets the function that a's elements will be filtered thru
//     //!b.includes makes it return all elements of a that b does not contain
//     return difference;
// }

// //finds intersection of two arrays
// function arrayIntersect(a,b){
//     let intersection = a.filter(x=>b.includes(x));
//     return intersection
// }
//
// //find symmetric difference
// function arraySymmetry(a,b){
//     let difference = a.filter(x=>!b.includes(x)).concat(b.filter(x=>!a.includes(x)))
// }

function threeMostCommonWords(sent){
    const words = sent.split(' ');
    const wordCountObject = words.reduce((wordCounts, word)=>typeof wordCounts[word]=='undefined'?wordCounts[word]=1:wordCounts[word]+=1,{});
    return wordCountObject;
}

console.log(threeMostCommonWords('Mary had a little lamb little lamb little lamb'));