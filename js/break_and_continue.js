
function doubleByTwo(){
    var i = 2;
    do{
        console.log(i);
        i*=2;
    } while (i <=65536)
};

function iceCreamCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    if(allCones==0){
        console.log("Yay! I sold them all!")
    }else {
        do {
            var customer = Math.floor(Math.random() * 5) + 1;
            console.log(customer + " cones sold...");
            allCones -= customer;
            if (customer > allCones) {
                console.log("Cannot sell you " + customer + " ice cream cones. I only have " + allCones + ".");
                continue;

            }

        } while (allCones >0);
    }};
