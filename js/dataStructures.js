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
for(let val of str2){
    anagram2[val] = (anagram2[val] || 0) + 1;
}
for
}