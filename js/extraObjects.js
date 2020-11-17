var pokedex = [];
function createPokemon(name,type,color){
    this.name = name;
    this.type = type;
    this.color = color;
}

function addNewMon(mon){
    pokedex.push(mon);
}


var bulbasaur = new createPokemon("Bulbasaur", "grass", "green")
addNewMon(bulbasaur);
bulbasaur.secondType = "poison"
console.log(pokedex)