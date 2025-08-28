const arr = [1, 1, 2, 3, 3, 4];
const newArray = [];

function uniqueValues (arr) {
    for (i = 0; i < arr.length; i++) {
        console.log('a');
        if ( newArray.some(function(element)  { 
            console.log('b');
            return arr[i] != element; 
        } ) )

        { newArray.push(arr[i]);}
    }
}

uniqueValues(arr);
console.log(newArray);