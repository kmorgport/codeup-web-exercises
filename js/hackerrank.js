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
// function countApplesAndOranges(s,t,a,b,apples,oranges){
//     let appInRange = 0;
//     let ornInRange = 0;
//     for(let i = 0; i<apples.length; i++){
//         if(((apples[i]+a)>=s&&(apples[i]+a)<=t)){
//             appInRange+=1;
//         }
//     }
//     console.log(appInRange)
//     for(let i = 0; i<oranges.length;i++){
//         if((((oranges[i]+b)>=s)&&(oranges[i]+b)<=t)){
//             ornInRange+=1
//         }
//     }
//     console.log(ornInRange)
// }
//
// countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])

// function compareTriplets(a,b){
//     let aResult = 0;
//     let bResult = 0;
//     let array = [];
//     for(let i = 0; i<a.length; i++){
//         if(a[i]>b[i])aResult++;
//         if(b[i]>a[i])bResult++;
//     }
//     array.push(aResult);
//     array.push(bResult);
//     return array;
// }
//
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// function sumtot(obj){
//     const sum = obj.reduce((total, book)=>{
//         return total + book.price;
//     },0)
//     console.log(sum/books.length)
// }

// function largestSum(n){
//     const sum = n.reduce((total, num)=>{
//         return total + num;
//     })
//     console.log(sum);
// }
//
// largestSum([1000000001,1000000002,1000000003, 1000000004,1000000005])

//count how many pairs of socks are in an array
// function sockMerchant(n,arr){
//     let sockObj = {};
//     let count = 0;
//     for(let sock of arr){
//         sockObj[sock] = (sockObj[sock]||0) + 1
//     }
//     for(let sock in sockObj){
//             count += Math.floor(sockObj[sock]/2)
//     }
//     return count
// }
//
// sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])
//
// function valley(arr){
//     let v = 0;
//     let lvl = 0;
//     //iterates over array
//     for(let i= 0; i<arr.length; i++){
//         //if goes up counts up
//         if(arr[i] ==="U") ++lvl;
//         //if down decreases
//         if(arr[i] === "D")-- lvl;
//         //if the level is zero and the direction is up
//         if(lvl === 0 && arr[i] ==="U")
//             //exited a valley
//             ++v;
//     }
//     return v
// }
//
// valley("UDDDUDUU");

// function cloudjumps(n, arr){
//     let count = 0;
//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]==0)i++;
//         count++
//     }
//     return count
// }
//
// cloudjumps([0,0,0,0,1,0])

// function countAs(s,n){
//     if(s==="a")return n;
//     let string =""
//     while(string.length<n){
//         string+=s
//     }
//     string = string.slice(0,n)
// let counter = {}
// for(let i = 0; i<string.length; i++){
//     counter[string[i]] = (counter[string[i]]||0)+1
// }
// for(let count in counter) {
//     if(count === "a")return(counter[count])
// }
// }


//counting infinites 
// function repeatedString(s, n) {
//     let fracNumber = Math.trunc(n / s.length);
//     let reminder = n % s.length;
//     let counter = 0;
//
//     for (let index = 0; index < s.length; index++) {
//         if (s[index] === 'a') {
//             counter++;
//         }
//     }
//     counter = counter * fracNumber;
//     for (let index = 0; index < reminder; index++) {
//         if (s[index] === 'a') {
//             counter++;
//         }
//     }
//     return counter;
// }

function roundingGrades(arr){
    let finalGrades = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>=38&&((arr[i]+2)%10)===0){
            finalGrades.push(Math.round(arr[i]/10)*10);
        }else if(arr[i]>=38&&((arr[i]+2)%5)===0){
            finalGrades.push((Math.round(arr[i]/10)*10)+5);
        }else{
            finalGrades.push(arr[i])
        }
    }
    return finalGrades
}
roundingGrades([73,67,38,33])