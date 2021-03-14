// function bignumSum(arr){
//     const sum = arr.reduce((x,y)=>{
//         return x+y;
//     },0);
//     console.log(sum)
// }
// bignumSum([1000000001,1000000002,1000000003,1000000004,1000000005,])

// function diagDiff(arr){
//     const diag = arr[0][0]+arr[1][1]+arr[2][2];
//     const revdiag = arr[0][2]+arr[1][1]+arr[2][0];
//     const sum = diag - revdiag;
//     console.log(Math.abs(sum))
// }
// diagDiff([[11,2,4],[4,5,6],[10,8,-12]])

// function ratios(arr){
//     let poz = 0;
//     let neg = 0;
//     let zero = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             poz+=1
//         }else if(arr[i]<0){
//             neg+=1;
//         }else if(arr[i]===0){
//             zero+=1
//         }
//     }
//     console.log((poz/arr.length).toFixed(6))
//     console.log((neg/arr.length).toFixed(6))
//     console.log((zero/arr.length).toFixed(6))
// }
//
// ratios([-4,3,-9,0,4,1])

// function partyList(str){
//     let list = str.toUpperCase().split(';')
//     let fix = list.map(e=>e.replace(':',', '))
//     let namearray = [];
//     for(let i=0; i<fix.length;i++){
//         let firstloc = fix[i].indexOf(',')
//         let lastloc = fix[i].indexOf(' ')
//         let firstslice = fix[i].slice(0,firstloc)
//         let lastslice = fix[i].slice(lastloc+1)
//         let name = lastslice+', '+firstslice;
//         namearray.push(name)
//     }
//     let namestr = namearray.sort().join(')(')
//     console.log('('+namestr+')')
// }
//
// partyList("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")
//
// function findRatios(arr){
//     let poz = 0;
//     let neg = 0;
//     let zero = 0;
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>0){
//             poz++;
//         }else if(arr[i]<0){
//             neg++;
//         }else{
//             zero++;
//         }
//     }
//     console.log((poz/arr.length).toFixed(6));
//     console.log((neg/arr.length).toFixed(6));
//     console.log((zero/arr.length).toFixed(6));
// }
// findRatios([1,1,0,-1,-1])

// function staircase(n){
//     let pound = "#";
//     for(let i = 1; i<=n;i++){
//         console.log(pound.repeat(i).padStart(n));
//     }
// }
// staircase(4)

// function minMaxSum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     if(arr[0]<0){
//         console.log(sum - arr[arr.length - 1], sum+arr[0]);
//     }else {
//         console.log(sum - arr[arr.length - 1],sum - arr[0]);
//     }
// }
//
// minMaxSum([1,3,5,7,9])

//one without using sort

// function changeTime(s){
//     let night = s.slice(s.length-2)
//     if(s.slice(0,2)==12&&s.slice(s.length-2)=="AM"){
//         console.log("00"+s.slice(2,s.length-2))
//     }else if(s.slice(0,2)==12&&s.slice(s.length-2)=="PM"){
//         console.log(s.slice(0,s.length-2))
//     }
//     else if(night=="PM"){
//         let hour = s.slice(0,2);
//         let fixed = (parseInt(hour)+12).toString()+s.slice(2,s.length-2)
//         console.log(fixed)
//     }else{
//         console.log(s.slice(0,s.length-2))
//     }
// }
//
// changeTime("07:05:45PM")
// changeTime("12:05:45PM")
// changeTime("12:05:45AM")
// &&((apples[i]+a)<t)
// &&((oranges[i]+a)<t)
// &&((oranges[i]+a)<t)
function countApplesAndOranges(s,t,a,b,apples,oranges){
    let appInRange = 0;
    let ornInRange = 0;
    for(let i = 0; i<apples.length; i++){
        if(((apples[i]+a)>=s&&(apples[i]+a)<=t)){
            appInRange+=1;
        }
    }
    console.log(appInRange)
    for(let i = 0; i<oranges.length;i++){
        if((((oranges[i]+b)>=s)&&(oranges[i]+b)<=t)){
            ornInRange+=1
        }
    }
    console.log(ornInRange)
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])