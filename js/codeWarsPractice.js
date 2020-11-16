function uniqueChar(iterable){
    let conversion = iterable;
    let uniques = [];
    while(typeof(conversion)=="string"){
        conversion = iterable.split('');
    }
    conversion.forEach((c)=>{
        if(!uniques.includes(c)){
            uniques.push(c)
        }
    })
    return uniques;
}


function uniqueInOrder(iterable){
    var result = [];
    for(let i = 0; i<iterable.length; i++){
        result.push(iterable[i]);
        if(result[result.length-2]==result[result.length-1]){
            result.pop();
        }
    }
    return result;
}

function addBinary(a,b){
   var res = a+b;
   return parseInt(res,10).toString(2);
}

function validatePIN(pin) {
    if(typeof(parseInt(pin))!="number"){
        return false
    }else if(pin.match(/[^0-9]/)){
        return false
    }else if(pin.length==4||pin.length==6){
        return true
    }else{
        return false
    }
}


// function findEvenIndex(arr)
// {
//     var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//     for(var i = 0; i < arr.length; i++) {
//         if(i > 0) left += arr[i-1];
//         right -= arr[i];
//
//         if(left == right) return i;
//     }
//
//     return -1;
// }
function pigIt(str){
    var regex=/[!,.?]/g;
    var purged = str.replace(regex,'');
    let piggy = purged.split(' ');
    let longer = [];
    var punc='';
    console.log(piggy)
    for(let i= 0; i<piggy.length;i++){
        longer.push(piggy[i].split(''));
    }
    var sentence = [];
    for(let i=0; i<longer.length; i++) {
        var a;
        a = longer[i].shift();
        longer[i].push(a + 'ay');
        sentence.push(longer[i].join(''))
    }
    var newSent = sentence.join(' ');
    if(str.includes("!")){
        punc="!";
    }else if(str.includes(".")){
        punc=".";
    }else if(str.includes("?")){
        punc = "?"
    }
    newSent+=punc
console.log(newSent);
}
pigIt('Pig latin is cool ')

// function countTime(num){
//     var start = Date.now();
//     console.log("Counting from 1 to "+num);
//     for (var i = 0; i<num;i++){}
//     var end = Date.now();
//     console.log("done!");
//     console.log("it took "+ (end-start)+" milliseconds");
// }

// function punctuationPrac(str){
//     var regex=/[!,.]/g;
//     var purged = str.replace(regex,'');
//     console.log(purged)
// }
// punctuationPrac('Pig latin is cool!')