const results = [
  '3:1', '2:2', '0:1', '4:0', '1:1',
  '2:0', '3:3', '0:2', '1:0', '2:1'
];

let score = 0;

function calculatePoints() {
  
  for ( i = 0; i < results.length; i++) {
    // let newR = results.toString().split(':');
    // console.log('a', newR, {a, b}, i);
    // console.log(results[i], i);
    let newResults = results[i];
    // console.log(newResults.toString().split(':'));
    const everyMatch = newResults.toString().split(':');
    // console.log(everyMatch);
    if ( everyMatch[0] > everyMatch[1] ) {
      // console.log(3);
      score += 3;

      } else if ( everyMatch[0] === everyMatch[1] ) {
        score += 1;

      } else {
        score += 0;
      }
 
    }

  // console.log(score);
  return score;
  
}

console.log(calculatePoints(results));