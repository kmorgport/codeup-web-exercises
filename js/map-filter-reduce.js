"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let threeUsers = users.filter(user=> user.languages.length >= 3)
console.log(threeUsers)


let email = users.map(user=>user.email)

console.log(email);


let exp = users.map(user=>user.yearsOfExperience)
const sum = exp.reduce((accumulation, currentNumber)=>{
    return accumulation + currentNumber;
    },0)
let avg = sum/users.length
console.log(sum)
console.log(avg)


// let strSplit = email.sort()
const longestEmail = users.reduce((total, user)=>
    ((total.email.length)>(user.email.length))? total:user,users[0])
console.log(longestEmail.email)


let names = users.map(user=>user.name)
let namestr = `Your instructors are: ${names.join(',')}.`

console.log(namestr)