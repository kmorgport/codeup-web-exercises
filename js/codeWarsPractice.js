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