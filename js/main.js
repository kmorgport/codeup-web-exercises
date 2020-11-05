// use"use strict";
//
// console.log("Hello from the JS console");
// alert("Welcome to my website!");
//
// var color = prompt("What is your favorite color?");
// alert("Great! "+ color + " is my favorite color too!");
//
// var mermaid = 3;
// var brotherBear = 5;
// var hercules = 1;
// var total = (mermaid+brotherBear+hercules)*3;
// alert("Your movie total is $"+total+" dollars.");
//
// var google = 400;
// var amazon = 380;
// var facebook = 350;
// var sum = google*6+amazon*4+facebook*10;
// alert("You made a total of $"+sum+" this week.");
//
// var capacity = confirm("Is the classroom full?");
// var schedule = confirm("Is your schedule full?");
//
// if(!capacity && !schedule){
//     alert("You are able to take the class!");
// } else{
//     alert("I'm sorry, you cannot take the class at this time")
// }

var premium = confirm("Are you a premium member?");
var items = eval(prompt("How many items are you purchasing?"));
var coupon = confirm("Is the coupon valid?");

if(premium){
    if(coupon){
        alert("Our apologies, the coupon is expired");
    }else{
        alert("Please enjoy your purchase!")
    }
}else if(!premium){
    if(items<=2 && !coupon){
        alert("Our apologies, you must have an unexpired coupon and/or purchase more than two items.")
    } else{
        alert("Enjoy your purchase!")
    }
};
