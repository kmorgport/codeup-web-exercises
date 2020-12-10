//
// function find2020(arr){
//     var arr2020= []
//     for(let i=0; i<arr.length; i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]+arr[j] === 1822){
//                arr2020.push(arr[i]);
//                arr2020.push(arr[j]);
//             }
//         }
//     }
//     console.log(arr2020)
//     var sum = arr2020[0]*arr2020[1];
//     console.log(sum)
// }
// find2020([1721,979,366,299,675,1456])

// var str = "1-3 a: abcde";
// var split = str.split(': ');
// var codeCheck = split[1];//
// console.log(codeCheck)
// var nums = split[0];
// var newnums = nums.split('')
// console.log(newnums)
// var firstNum = newnums[0];//1
// var lastNum = newnums[2]//3
// var letter = newnums[newnums.length-1]//a
//
// function char_count(str, letter){
//     var letter_count = 0;
//     for(let pos =0; pos<str.length; pos++){
//         if(str.charAt(pos)===letter)
//         {
//             letter_count += 1;
//         }
//     }
//     return letter_count;
// }
//
// var letterCount = char_count(codeCheck,letter);
// if(letterCount>=firstNum && letterCount<=lastNum){
//     console.log(true)
// }else{
//     console.log(false)
// }
var str = "1-3 a: abcde";
function passwordChecker(str){
    var split = str.split(': ');
    var codeCheck = split[1];//
    var nums = split[0];
    var newnums = nums.split('')
    var firstNum = newnums[0];//1
    var lastNum = newnums[2]//3
    var letter = newnums[newnums.length-1]//a

    function char_count(str, letter){
        var letter_count = 0;
        for(let pos =0; pos<str.length; pos++){
            if(str.charAt(pos)===letter)
            {
                letter_count += 1;
            }
        }
        return letter_count;
    }

    var letterCount = char_count(codeCheck,letter);
    if(letterCount>=firstNum && letterCount<=lastNum){
        return true
    }else{
        return false
    }

}
console.log(passwordChecker('2-5 z: zzztvz'))
console.log(passwordChecker('2-9 c: ccccccccc'))