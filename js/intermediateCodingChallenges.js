function targetElements(arr,n){
    let storageHash = {}
    let nums = []
    for(let i in arr){
        //for every iteration subtracts value from integer to create 'addend'
        let addend = n-arr[i]
        //creates key-value pair in hashtable object
        storageHash[arr[i]] = i
        //so I can visually see my hash table
        console.log(storageHash)
        //if your addend value exists as a key in your hashtable
        if(addend in storageHash){
            //push an array that is your addEnd plus whichever iteration value is creating a valid addend in your hashtable
            nums.push([addend, arr[i]])
        }
         // storageHash[arr[i]] = i
    }
    let check = nums.flat();
    let answer =[];
    for(let i in check){
        answer.push(arr.indexOf(check[i]))
    }

    return answer
}

console.log(targetElements([ 1, 4, 8, 12 ],20))


// function sortString(str){
//     //create hashmap object
//     const freq = {};
//     //iterate over string
//     for (let i in str){
//         //if there is a character that already exists in the object, add to value count in the key-value pair
//         //if not, create the first count at the instance of new character
//         freq[str.charAt(i)]?freq[str.charAt(i)]++:freq[str.charAt(i)]=1;
//     }
//     console.log(freq)
//     //creates arrays of the Objects K-V pairs, note
//     let entry = Object.entries(freq);
//     console.log(entry)
//     //sorts by value of the 1 index(the char count)
//     let sorted = entry.sort((a,b)=>b[1]-a[1]);
//     //creates an empty string
//     let result = "";
//     //iterate over sorted arrays of array
//     for(let i in sorted){
//         //adds character from [0] index, then repeats that character the amount of times specified by the quantity at [1] index
//         result += sorted[i][0].repeat(sorted[i][1])
//     }
//     return result
// }

// console.log(sortString('bee'))
// console.log(sortString('Abaaacdb'))
//
// const studentArr = [
//     [58, "algebra"],
//     [58, "athletics"],
//     [63, "art"],
//     [88, "algebra"],
//     [72, "english"],
//     [77, "calculus"],
//     [69, "art"]
// ];
//
// function returnSubject(arr, subject){
//     const filtsub = subject
//     return arr.filter(e=>e[1].includes(filtsub))
//
// }
// console.log(returnSubject(studentArr, "algebra"))
// console.log(returnSubject(studentArr, "art"))
//
// console.log(returnSubject(studentArr, "calculus"))

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            wordCounts[word] = 1;
        } else {
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {});
    const entry = Object.entries(wordCountObject);
    console.log(entry)
    const cleaned = entry.filter(e=>e[0].match(/[a-zA-Z]/))
    console.log(cleaned)
    //sorts by value of the 1 index(the char count)
    let sorted = cleaned.sort((a,b)=>b[1]-a[1]);
    console.log(sorted)
    //creates an empty string
    const finalArray = [];
    for(let i in sorted){
        finalArray.push(sorted[i][0])
    }
    return finalArray.splice(0,3)
}

console.log(countWords("a a a  b  c c  d d d d  e e e e e"));