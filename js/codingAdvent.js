
function find2020(arr){
    var arr2020= []
    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j] === 2020){
               arr2020.push(arr[i]);
               arr2020.push(arr[j]);
            }
        }
    }
    var sum = arr2020[0]*arr2020[1];
    console.log(sum)
}
find2020([1721,979,366,299,675,1456])