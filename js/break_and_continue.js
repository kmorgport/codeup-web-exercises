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
