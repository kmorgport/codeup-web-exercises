function targetElements(arr,n){
    let storageHash = {}
    let nums = []
    for(let i in arr){
        let addend = n-arr[i]
        if(addend in storageHash){
            nums.push([addend, arr[i]])
        }
        storageHash[arr[i]] = i
    }

    return nums
}

console.log(targetElements([ 1, 4, 8, 12 ],20))