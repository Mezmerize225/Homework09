// # longestWord ფუნქცია

// დაწერეთ ფუნქცია `longestWord(text)`, რომელიც იღებს სტრინგს და აბრუნებს სტრინგში არსებულ ყველაზე გრძელ სიტყვას.


// გამოყენების მაგალითი:
// ```js
// longestWord("I love JavaScript programming"); // programming

// longestWord("Hello world from Georgia"); // "Georgia"
// ```

function longestWord(text) {
    const items = text.split(' ');
    console.log(items);
    let longestword = '';
    items.forEach( (element) => { 
        if ( element.length > longestword.length ) {
            longestword = element
        }
     } ) 

    // items[i]
    console.log(longestword);

}

longestWord('I programming love JavaScript');