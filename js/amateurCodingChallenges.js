//find English

function findEnglish(str){
    var check = str.toLowerCase();
    if(check.match(/english/)){
        return true
    }else{
        return false
    }
}

console.log(findEnglish("FaagdnglishAGG"));;
console.log(findEnglish("SMFENgliSHasnD"));;