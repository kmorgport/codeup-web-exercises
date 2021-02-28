"use strict"

function anagram(str1,str2){
if(str1.length !== str2.length){
    return false;
}
let anagram1 = {};
let anagram2 = {};
for (let val of str1){
    anagram1[val] = (anagram1[val] || 0) + 1;
}
for(let val of str2) {
    anagram2[val] = (anagram2[val] || 0) + 1;
}
    // console.log(anagram1)
    // console.log(anagram2)
for(let key in anagram1){
    if(!(key in anagram2)){
        return false;
    }
    if(anagram2[key]!== anagram1[key]){
        return false;
        }
    }
return true;

}
function sameFrequency(num1, num2){
    let obj1 = {};
    let obj2 = {};
    for(let val of num1.toString()){
        obj1[val] = (obj1[val]||0)+1;
    }
    for(let val of num2.toString()){
        obj2[val] = (obj2[val]||0)+1;
    }
    for(let key in obj1){
        if(!(key in obj2)){
            return false;
        }
        if(obj2[key]!== obj1[key] ){
            return false;
        }
        return true;
    }
    // good luck. Add any arguments you deem necessary.
}

function areThereDuplicates(...args){
    if([...args].length === 0) return false;
    let i = 0;
    let arr = [...args];
    for(let j = 1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
        }else{
            return true;
        }
        return false;
    }

}

function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum>0){
            right --;
        }else{
            left++;
        }
    }
}

//inquire on time complexity
function naiveSearch(long, short){
    let count = 0;
    let test;
        for(let i = short.length, j=0; i<=long.length; i++,j++){
            test = long.slice(j,i)
            console.log(test)
            if(test === short )count++
        }
        return count;
}
console.log(naiveSearch("abcddd", "dd"))
// console.log(naiveSearch("quick brown fox jumped over the lazy dog", "ju"))

// console.log(anagram("aaz", "zza"));
// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("awesome","awesom"));
// console.log(anagram("rat","tar"))

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(22, 222));

// console.log(areThereDuplicates(1, 2,2,3));
// console.log(areThereDuplicates(1, 2, 3, 4, 5));
// console.log(areThereDuplicates('a', 'b'));