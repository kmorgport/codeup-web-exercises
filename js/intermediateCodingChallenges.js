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

    return nums
}

console.log(targetElements([ 1, 4, 8, 12 ],20))