function skippitySkip(){
    var numChoice = chooseNumber();
    if(typeof(numChoice)=="undefined"||typeof(numChoice)!=="number"||numChoice>50||numChoice<3||numChoice%2==0){
        do{numChoice=parseInt(prompt("Please pick an odd number between 1 and 50"))}
        while(typeof(numChoice)!="number"||numChoice>50||numChoice<3||numChoice%2==0)
        for(i=1; i<50; i+=2){
            if (i==numChoice){
                console.log("Yikes! Skipping number: "+ i)
                continue
            }
            console.log("Here is an odd number: "+i)
        }
    }else{

        for(i=1; i<50; i+=2){
            if (i==numChoice){
                console.log("Yikes! Skipping number: "+ i)
                continue
            }
            console.log("Here is an odd number: "+i)
        }
    }};

function chooseNumber(){
    var choice = prompt("Please pick an odd number between 1 and 50");
    choice.toString();
    parseInt(choice);
    return choice;
};


