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
    const count = words.filter(w=>w.split('').every(l=>allowSet.has(l))).length;
    console.log(count)
}
hasAllowed('ab',["ad","bd","aaab","baa","badab"]);

// function goalParser(str){
//     var goalarr = [];
//     for(let i=0; i<str.length;i++){
//         if(str[i]=='G'){
//             goalarr.push(str[i])
//         }else if(str[i]=='(' &&str[i+1]==')'){
//             goalarr.push('o')
//         }else if(str[i]=='a'){
//             goalarr.push('al')
//         }
//     }
//         console.log(goalarr.join(''))
// }
//
// goalParser("(al)G(al)()()G")
// goalParser("G()()()()(al)")

// function flatten(arr){
//     console.log(arr.flat())
// }
// flatten([[1, 2], [3, 4], [5, 6]])

const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]
function bookslength(obj){
    console.log(obj.length)
}
bookslength(books)

function sumtot(obj){
    const sum = obj.reduce((total, book)=>{
        return total + book.price;
    },0)
    console.log(sum/books.length)
}

sumtot(books)

// function highestPrice(obj){
//     let maxPrice = obj.reduce((max, book)=> max.price > book.price ? max : book);
//     console.log(maxPrice)
// }
// highestPrice(books)

const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}

console.log(shoppingCart.items.length)
// function totalItems(obj){
//     var newArray = obj.items
//     const total = newArray.map(item=>item.price*item.quantity).reduce((a,b)=>{
//         return a+b;
//     },0)
//     const quantity = newArray.reduce((max, item)=>{
//         return max + item.quantity
//     },0)
//     console.log(total/quantity)
// }
//
// function highestPriceQuantity(obj){
//     const newArray = obj.items;
//     const highest = newArray.reduce((max, item)=> (max.price*max.quantity) > (item.price*item.quantity) ? max : item)
//     console.log(highest)
// }
// highestPriceQuantity(shoppingCart)
//
//
//
// function totalItems(obj){
//     var newArray = obj.items
//     const total = newArray.map(item=>item.price*item.quantity).reduce((a,b)=>{
//         return a+b;
//     },0)
//     const quantity = newArray.reduce((max, item)=>{
//         return max + item.quantity
//     },0)
//     console.log(total/quantity)
// }
//
// function elementsTimesTwo(arr){
//     const timesTwo = arr.map(e=>e*2)
//     console.log(timesTwo)
// }
//
// function elementsTimesTwo(arr){
//     const timesTwo = arr.map(function(e){
//         return e*2
//     })
//     console.log(timesTwo)
// }
//
// elementsTimesTwo([1, 2, 3])
//
// function isOdd(arr){
//     const odd = arr.has(e=>e%2)
//     console.log(odd)
// }


// const books = [
//     {
//         title: "Genetic Algorithms and Machine Learning for Programmers",
//         price: 36.99,
//         author: "Frances Buontempo"
//     },
//     {
//         title: "The Visual Display of Quantitative Information",
//         price: 38.0,
//         author: "Edward Tufte"
//     },
//     {
//         title: "Practical Object-Oriented Design",
//         author: "Sandi Metz",
//         price: 30.47
//     },
//     {
//         title: "Weapons of Math Destruction",
//         author: "Cathy O'Neil",
//         price: 17.44
//     }
// ];



// function highestPriceBook(books){
//     books.sort((a,b)=>(a.price > b.price)? 1 : -1);
//     console.log(books[books.length - 1]);
// }
//
// function high(arr){
//     arr.sort(function(a,b){
//         return a.price-b.price
//     });
//     console.log(arr[arr.length-1])
// }
//
// high(books)
//
// function highest(books){
//     const high = books.reduce((max, book)=>(max.price)>(book.price)? max:book)
//     console.log(high)
// }
// highest(books)
//
//
// function wordyhigh(arr){
//     const high = arr.reduce(function(max,book){
//         if(max.price>book.price){
//             return max
//         }else{
//             return book
//         }
//     })
//     console.log(high)
//     console.log(arr)
// }
// wordyhigh(books)

// function pyramid(n){
//     for(let i =1; i<=n; i++){
//         document.write('')
//         for(var j = 1; j<=(2*n-1);j++){
//             document.write('');
//             (j>=n+1-i && j<=n-1+i)? document.write('*'):document.write(' ');
//         }
//         document.write('<br/>');
//     }
// }
// function jspyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log("#".repeat(i).padStart(n));
//     }
// }
// pyramid(5)
// jspyramid(5)


function smallerNumbersThanCurrent(arr){
    //sort changes og array, use spread to leave arr untouched, sort by smallest to largest
    const sorted = [...arr].sort((a,b)=>a-b);
    console.log(sorted)
    //map to apply sorted.indexOf on each element
    //sorted.indexOf(num) shows what element num is inside sorted array
    //since num is sorted in increased value, indexOf will show what that index is of each number, hence how many numbers it is larger than
    //for duplicates, it will only read the first instance of index
    const quant = arr.map(num=>sorted.indexOf(num));
    console.log(quant)

}
smallerNumbersThanCurrent([8,1,2,2,3])

function getUniqueValues(x){
    var unique = x.filter((v,i,a)=> a.indexOf(v)===i);
    return unique;
}

function howManyMatches(n) {
    var teams = n;
    var matchCount = 0;
    while(teams !==1){
        if(teams%2===0){
            matchCount += teams/2
            teams = teams/2
        }else if(teams%2===1) {
            matchCount += (teams - 1) / 2
            teams = ((teams - 1) / 2) + 1;
        }
    }
    console.log(matchCount)
}
howManyMatches(16)

