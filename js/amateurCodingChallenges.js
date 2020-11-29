//find English

function findEnglish(str){
    var check = str.toLowerCase();
    if(check.match(/english/)){
        return true
    }else{
        return false
    }
}

console.log(findEnglish("FaagdnglishAGG"));
console.log(findEnglish("SMFENgliSHasnD"));

//count poz and negatives
function arrayTally(arr){
    let pozCount = 0;
    let negCount = 0;
    let ansArr = []
    if(arr === null || typeof(arr) === "undefined") {
        return ansArr;
    }else{
        for (let i=0; i<arr.length; i++){
        if(arr[i]>=0){
            pozCount++;
        }else if(arr[i]<0){
            negCount+= arr[i];
        }
    }
        ansArr.push(pozCount);
        ansArr.push(negCount);
        return ansArr
    }
}
console.log(arrayTally([1, -6, 5, 4, 3, -7, -10, 201, -3]))
console.log(arrayTally([-3,11,-45,64, 8, -47]))

function swapvals(str, char){
    var arr = []
    for(var i = 0; i<str.length; i++){
        var count = 0
        for(var j=0; j<str.length; j++){
            if(str[i]==str[j]){
                count++
            }
        }arr.push(count)
    }
    console.log(arr);
    console.log(arr.join(char))

}
swapvals("hello world","-")