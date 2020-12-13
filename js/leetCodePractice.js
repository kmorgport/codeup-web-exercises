// function findMaxWealth(arr){
//     var newArr=[];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(arr[i].reduce((a,b)=> a+b,0))
//     }
//     console.log(Math.max(...newArr));
// }
//
// findMaxWealth([[1,5],[7,3],[3,5]])

function zipperArray(arr){
    const half = Math.ceil(arr.length/2);
    const firstHalf = arr.splice(0,half);
    const secondHalf = arr.splice(-half)
    var c = firstHalf.map((e,i)=>[e,secondHalf[i]])
    console.log(c.flat())
}

zipperArray([1,1,2,2]);