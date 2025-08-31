const arr = [1, 1, 2, 3, 3, 4];

function uniqueValues(arr) {
    const newArray = [];

    for (i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (!i) {
            newArray.push(item);
            continue;
        }
        
        const isExisting = newArray.some(
            function (arrItem) {
                return arrItem == item;
            }
        )

        if(!isExisting) {
            newArray.push(item);
        }
    }
    return newArray;
}

console.log(
    uniqueValues(arr)
)