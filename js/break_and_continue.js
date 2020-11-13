function skipOdd(){
    var numChoice = prompt("Pick an odd number between 1 and 50");
    parseInt(numChoice);
    if(isNaN(numChoice)==1||numChoice>50||numChoice<3||numChoice%2==0){
        do{numChoice = prompt("Pick an odd number between 1 and 50");
            parseInt(numChoice);}
        while(isNaN(numChoice)==1||numChoice>50||numChoice<3||numChoice%2==0)
        for(let i=1; i<50; i+=2){
            if (i==numChoice){
                console.log("Yikes! Skipping number: "+ i)
                continue
            }
            console.log("Here is an odd number: "+i)
        }
    }else {

        for(let i=1; i<50; i+=2){
            if (i==numChoice){
                console.log("Yikes! Skipping number: "+ i)
                continue
            }
            console.log("Here is an odd number: "+i)
        }
    }};

skipOdd();

function breakOddNum(){
    var chosenNum= prompt("Pick an odd number between 1-50");
    do{
        if(parseInt(chosenNum)>50){
            chosenNum = prompt("Your number is greater than 50, please pick an odd num between 1-50");
        }else if(parseInt(chosenNum)<1){
            chosenNum = prompt("Your number is less than 3, please pick an odd number between 1 and 50");
        }else if(parseInt(chosenNum)%2!=1){
            chosenNum = prompt("Your number is even, please pick an odd number between 1 and 50");
        }else if(isNaN(parseInt(chosenNum))){
            chosenNum = prompt("That is not a number, please pick an odd number between 1 and 50")
        }
        else{
            break
        }
    }while(isNaN(parseInt(chosenNum))||parseInt(chosenNum)%2!=1||parseInt(chosenNum)<1||parseInt(chosenNum)>50);
    for(let i=1; i<50; i+=2){
        if (i==chosenNum){
            console.log("Yikes! Skipping number: "+ i)
            continue
        }
        console.log("Here is an odd number: "+i)
    }
}