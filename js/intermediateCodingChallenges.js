// function targetElements(arr,n){
//     let storageHash = {}
//     let nums = []
//     for(let i in arr){
//         //for every iteration subtracts value from integer to create 'addend'
//         let addend = n-arr[i]
//         //creates key-value pair in hashtable object
//         storageHash[arr[i]] = i
//         //so I can visually see my hash table
//         console.log(storageHash)
//         //if your addend value exists as a key in your hashtable
//         if(addend in storageHash){
//             //push an array that is your addEnd plus whichever iteration value is creating a valid addend in your hashtable
//             nums.push([addend, arr[i]])
//         }
//         // storageHash[arr[i]] = i
//     }
//
//     return nums
// }
//
// console.log(targetElements([ 1, 4, 8, 12 ],20))


function sortString(str){
    //create hashmap object
    const freq = {};
    //iterate over string
    for (let i in str){
        //if there is a character that already exists in the object, add to value count in the key-value pair
        //if not, create the first count at the instance of new character
        freq[str.charAt(i)]?freq[str.charAt(i)]++:freq[str.charAt(i)]=1;
    }
    console.log(freq)
    //creates arrays of the Objects K-V pairs, note
    let entry = Object.entries(freq);
    console.log(entry)
    //sorts by value of the 1 index(the char count)
    let sorted = entry.sort((a,b)=>b[1]-a[1]);
    //creates an empty string
    let result = "";
    //iterats over sorted arrays of array
    for(let i in sorted){
        //adds character from [0] index, then repeats that character the amount of times specified by the quantity at [1] index
        result += sorted[i][0].repeat(sorted[i][1])
    }
    return result
}

console.log(sortString('bee'))
// console.log(sortString('Abaaacdb'))