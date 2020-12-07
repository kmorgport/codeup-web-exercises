// //find English
//
// function findEnglish(str){
//     var check = str.toLowerCase();
//     if(check.match(/english/)){
//         return true
//     }else{
//         return false
//     }
// }
//
// console.log(findEnglish("FaagdnglishAGG"));
// console.log(findEnglish("SMFENgliSHasnD"));
//
// //count poz and negatives
// function arrayTally(arr){
//     let pozCount = 0;
//     let negCount = 0;
//     let ansArr = []
//     if(arr === null || typeof(arr) === "undefined") {
//         return ansArr;
//     }else{
//         for (let i=0; i<arr.length; i++){
//         if(arr[i]>=0){
//             pozCount++;
//         }else if(arr[i]<0){
//             negCount+= arr[i];
//         }
//     }
//         ansArr.push(pozCount);
//         ansArr.push(negCount);
//         return ansArr
//     }
// }
// console.log(arrayTally([1, -6, 5, 4, 3, -7, -10, 201, -3]))
// console.log(arrayTally([-3,11,-45,64, 8, -47]))
//
// function swapvals(str, char){
//     var arr = []
//     for(var i = 0; i<str.length; i++){
//         var count = 0
//         for(var j=0; j<str.length; j++){
//             if(str[i]==str[j]){
//                 count++
//             }
//         }arr.push(count)
//     }
//     console.log(arr);
//     console.log(arr.join(char))
//
// }
// swapvals("hello world","-");
//
// function phoneBookSorter(str){
//     var newarr = str.split(';');
//     var arr2 =[];
//     for(let i=0 ; i<newarr.length; i++){
//         arr2.push(newarr[i].split(':'));
//     }
//     for (let i=0; i<arr2.length; i++){
//         [arr2[i][0], arr2[i][1]] = [arr2[i][1], arr2[i][0]]
//     }
//     arr2.sort()
//     var arrFinal = arr2.join(")(");
//     var final = "("+arrFinal+")"
//     console.log(final.toUpperCase())
// }
// phoneBookSorter("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer")

// function birthdate(dob){
//     //turn string into array
//     var yourdate = dob.split('/').reverse();
//     //convert array object into a Date object(takes year, day, month
//     var birthday = new Date(yourdate[0],yourdate[1],yourdate[2]);
//     /*subtracts the difference between the current day(represented in seconds
//     from standard time and the birthdate relevant to the .getTime method
//      */
//     var diff_ms = Date.now() - birthday.getTime();
//     //creates new date object derived from transferring those seconds back into a date
//     var age_dt = new Date(diff_ms);
//     //returns the full seconds but subtracts 1970 to derive year, rounds up
//     console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
//
// }
// birthdate('11/03/1981')

// function strToArr(str){
//     var newarr = str.split(' ');
//     console.log(newarr)
// }
// strToArr("Trick or Treat")

function countOccur(sent, word){
    sent += '';
    word += '';

    if(word.length <= 0){
        return word.length +1;
    }

    var wordTest = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (sent.match(new RegExp(wordTest, 'gi'))|| []).length;
}

console.log(countOccur("The pumpkin rolled down the hill and under someone’s car.", "the"));

//timetravel planner
function tellmeDay(year){
    if(year<1917){
        if(year%4){
            console.log('01.09.'+year.toString())
        }else{
            console.log('31.08.'+year.toString())
        }
    }else if(year%4){
        console.log('13.09.'+year.toString())
    }else{
        console.log('12.09.'+year.toString())
    }
};
tellmeDay(2016)
tellmeDay(2020)
tellmeDay(1800)
tellmeDay(1984)
tellmeDay(2017)