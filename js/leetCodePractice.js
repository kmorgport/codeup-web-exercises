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

function highestPrice(obj){
    let maxPrice = obj.reduce((max, book)=> max.price > book.price ? max : book);
    console.log(maxPrice)
}
highestPrice(books)

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
