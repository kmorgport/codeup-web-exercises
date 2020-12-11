function bignumSum(arr){
    const sum = arr.reduce((x,y)=>{
        return x+y;
    },0);
    console.log(sum)
}
bignumSum([1000000001,1000000002,1000000003,1000000004,1000000005,])

function diagDiff(arr){
    const diag = arr[0][0]+arr[1][1]+arr[2][2];
    const revdiag = arr[0][2]+arr[1][1]+arr[2][0];
    const sum = diag - revdiag;
    console.log(Math.abs(sum))
}
diagDiff([[11,2,4],[4,5,6],[10,8,-12]])