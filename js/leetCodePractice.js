// function findMaxWealth(arr){
//     var newArr=[];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(arr[i].reduce((a,b)=> a+b,0))
//     }
//     console.log(Math.max(...newArr));
// }
//
// findMaxWealth([[1,5],[7,3],[3,5]])

// function zipperArray(arr){
//     const half = Math.ceil(arr.length/2);
//     const firstHalf = arr.splice(0,half);
//     const secondHalf = arr.splice(-half)
//     var c = firstHalf.map((e,i)=>[e,secondHalf[i]])
//     console.log(c.flat())
// }

// zipperArray([1,1,2,2]);

//defang an IP address
// function defangIP(str){
//     const a = str.split('.')
//     console.log(a.join('[.]'))
// }
//
// defangIP("255.100.50.0")
// defangIP('1.1.1.1')

// function goodpair(arr){
//     let count = 0
//     for(let i=0; i<arr.length;i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]==arr[j]){
//                 count+=1
//             }
//         }
//     }
//     console.log(count)
//
// }
// goodpair([1,1,1,1])

function hasAllowed(allowed, words){
    //creates a new Set from allowed string
    const allowSet = new Set(allowed.split(''));
    //first filters words array
    //each element is split into temporary subarray
    //subarray is run with .every to determine if subelements of array (l) '.has'
    //the same elements as allowSet
    //cycles back to filter where only the true returns of the .every are filtered back into the array
    //.length gives you count
    const count = words.filter(w=>w.split('').every(l=>allowSet.has(l)));
    console.log(count)
}

hasAllowed('ab',["ad","bd","aaab","baa","badab"])