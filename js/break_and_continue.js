
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