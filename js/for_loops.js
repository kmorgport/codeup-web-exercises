function showMultiplicationTable(num){
    for(var i = 1; i<11; i++){
        console.log(num+"x"+i+" = "+num*i)
    }
}

var random = Math.floor(Math.random()*(200-20 +1)+20);

function isOddOrEven(){
    for(var i = 0; i<10; i++){
        var random = Math.floor(Math.random()*(200-20+1)+20);
        if(random%2==0){
            console.log(random+" is even.")
        }else{
            console.log(random+" is odd.")
        }
    }
};
isOddOrEven();