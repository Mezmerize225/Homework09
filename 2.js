const arr = [1, 1, 2, 3, 3, 4];

function uniqueValues (arr) {

    const newArray = [];

    for (i = 0; i < arr.length; i++) {

        const item = arr[i];

        if(newArray == 0) {

            newArray.push(item);

            continue;

        }

        const isNewArray = newArray.some(

            function(element)  { 

                return element == item;  

            })   

        if (!isNewArray) {

            newArray.push(item);
        }

    }

    return newArray;
}

console.log(
    uniqueValues(arr)
);