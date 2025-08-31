const results = [
  '3:1', '2:2', '0:1', '4:0', '1:1',
  '2:0', '3:3', '0:2', '1:0', '2:1'
];

let score = 0;

function calculatePoints() {
  
  for ( i = 0; i < results.length; i++) {
    
    let newResults = results[i];
    
    const everyMatch = newResults.split(':');
    
    if ( everyMatch[0] > everyMatch[1] ) {
    
      score += 3;

      } else if ( everyMatch[0] === everyMatch[1] ) {
        score += 1;

      } else {
        score += 0;
      }
 
    }

  return score;
  
}

console.log(calculatePoints(results));