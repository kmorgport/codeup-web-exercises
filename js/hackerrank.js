function bignumSum(arr){
    const sum = arr.reduce((x,y)=>{
        return x+y;
    },0);
    console.log(sum)
}
bignumSum([1000000001,1000000002,1000000003,1000000004,1000000005,])

// function diagDiff(arr){
//     const diag = arr[0][0]+arr[1][1]+arr[2][2];
//     const revdiag = arr[0][2]+arr[1][1]+arr[2][0];
//     const sum = diag - revdiag;
//     console.log(Math.abs(sum))
// }
// diagDiff([[11,2,4],[4,5,6],[10,8,-12]])

function ratios(arr){
    let poz = 0;
    let neg = 0;
    let zero = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            poz+=1
        }else if(arr[i]<0){
            neg+=1;
        }else if(arr[i]===0){
            zero+=1
        }
    }
    console.log((poz/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}

ratios([-4,3,-9,0,4,1])