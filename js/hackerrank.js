function bignumSum(arr){
    const sum = arr.reduce((x,y)=>{
        return x+y;
    },0);
    console.log(sum)
}
bignumSum([1000000001,1000000002,1000000003,1000000004,1000000005,])