let foods = ["kimchi", "pizza", "calzones", "bulgogi", "sushi", "dorowat", "kebab"];
for(let i=0; i<foods.length; i++){
    console.log("I like eating " +foods[i]+".")
};

function sentenceBuilder(){
    let foods = ["kimchi", "pizza", "calzones", "bulgogi", "sushi", "dorowat", "kebab"];
    let sentBegin = "I like to eat "
    for(let i=0; i<foods.length; i++){
        if(i==foods.length-1){
            sentBegin += "and "+foods[i]+".";
        }else{
            sentBegin += foods[i]+", ";
        }
    }
    console.log(sentBegin);
}

sentenceBuilder();