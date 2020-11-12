function skipUserOdd(){
    var numChoice = eval(prompt("Please pick an odd number between 1 and 50"));
    if(typeof(numChoice)=="undefined"||typeof(numChoice)!="number"||numChoice>50||numChoice<3||numChoice%2==0){
        do{numChoice=eval(prompt("Please pick an odd number between 1 and 50"))}
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
}}

function doubleByTwo(){
    var i = 2;
    do{
        console.log(i);
        i*=2;
    } while (i <=65536)
};

function iceCreamCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
        do {
            var customer = Math.floor(Math.random() * 5) + 1;
            console.log(customer + " cones sold...");
            if (allCones-customer < 0 ) {
                console.log("Cannot sell you " + customer + " ice cream cones. I only have " + allCones + ".");
                continue;

            }
            allCones -= customer;

        } while (allCones>0);
        if(allCones==0) {
            console.log("Yay! I sold them all!")
        }}
iceCreamCones();