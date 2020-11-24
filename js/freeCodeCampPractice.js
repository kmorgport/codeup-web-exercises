// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
//create a function that updates nested objects
function updateRecords(object, id, prop, value) {
    //if the property enters is NOT 'tracks' AND the value is not an empty string
    if(prop !== 'tracks' && value !== ''){
        //update value to the objects property
        object[id][prop] = value;
    }else if(prop === 'tracks' && !object[id].hasOwnProperty('tracks')){
        object[id][prop]=[value];
    }else if(prop === 'tracks'&& value !==''){
        object[id][prop].push(value);
    }else if(value === ''){
        delete object[id][prop]
    }
    return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');