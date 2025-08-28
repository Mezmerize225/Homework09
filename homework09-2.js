const arr = [1, 1, 2, 3, 3, 4];
const newArray = [];

for (i = 0; i < arr.length; i++) {
    // აქ ცარიელზე შევამოწმებ და დავამატებ
    arr.some(uniqueValues); // აქ რომ some წავშალო მხოლოდ
    if (true) {
        newArray.push(arr[i]);
    }  
}

console.log(newArray);

function uniqueValues(arr) {
    if ( 
        // !false
        // newArray.some() == arr    - ასე? some-ს შიგნით ხო ფუნქცია უნდა და რანაირად
        newArray[i] != arr) {
        return true;
    } else {
        return false;
    }
}

