var players = [{
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
},{
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
},{
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}]

function findWeapon(obj){
    //forEach goes over each item (named player in this example)
    obj.forEach(player=>{
        //first creates a sent (use let instead of const, you cant add to constants
        //add in each player .name, .class property
        let sent = player.name +" is a "+player.class+" and they wield a ";
        //filter down the object into just arrays, we want the weapons but the weapons occupy different
        //indices in each inventory so boil down an object that is *just* weapons
        //The item is each item in the item type, .includes specifies only itemtypes that are 'weapon'
        const weapons = player.inventory.filter(item=>item.itemType.includes('Weapon'))
        console.log(weapons)
        //you now have an iterable object of weapons, so put the weapons thru a foreach so you can gain access to
        //each of their properties (we want itemName)
        weapons.forEach(weapon=>{
            //for each 'loop' of foreach it will add the itemName to the senteence. When the forEach loop restarts,
            //it will dump the previous contents of 'sent' and add the next index's name, class and itemName
            console.log(sent += weapon.itemName)
        })
    })
}

findWeapon(players)