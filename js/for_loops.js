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

function numPyramid(){
    for (let i = 1; i<10; i++){
        var arr =[];
        for(j=1; j<=i; j++){
            arr.push(i);
        }
        console.log(arr);

    }
};
numPyramid();

function correctPyr(){
    for (let i = 1; i<10; i++){
        var str ="";
        for(j=1; j<=i; j++){
            str+=i;
        }
        console.log(str);

    }
}
correctPyr()

function decByFive(){
    for (let i=100; i>=5; i-=5 ){
        console.log(i);
    }
};
decByFive();