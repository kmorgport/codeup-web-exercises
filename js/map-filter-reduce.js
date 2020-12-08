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

for(let user of users){
    var threeUsers = users.filter(user=> user.languages.length >= 3)
}
console.log(threeUsers)

for(let user of users){
    var email = users.map(user=>user.email)
}
console.log(email);

for(let user of users){
    var exp = users.map(user=>user.yearsOfExperience)
    const sum = exp.reduce((accumulation, currentNumber)=>{
        return accumulation + currentNumber;
    },0)
    var avg = sum/users.length
}
console.log(avg)

for(let user of users){
    var email = users.map(user=>user.email)
    var strSplit = email.sort()
}
console.log(strSplit[0])

for(let user of users){
    var names = users.map(user=>user.name)
    var namestr = "Your instructors are: "+ names.join(', ')+'.';
}
console.log(namestr)