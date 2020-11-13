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
