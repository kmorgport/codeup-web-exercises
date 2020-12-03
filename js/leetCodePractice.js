function findMaxWealth(arr){
    var newArr=[];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].reduce((a,b)=> a+b,0))
    }
    console.log(Math.max(...newArr));
}

findMaxWealth([[1,5],[7,3],[3,5]])