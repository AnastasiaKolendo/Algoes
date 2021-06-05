function tournamentWinner(competitions, results) {
  const winners = {};

  for(let i = 0; i < competitions.length; i++){
    let result = results[i];
    if(result === 1){
      if(winners[competitions[i][0]]){
        winners[competitions[i][0]] += 3
      } else{
        winners[competitions[i][0]] = 3
      }
    } else {
      if(winners[competitions[i][1]]){
        winners[competitions[i][1]] += 3
      } else{
        winners[competitions[i][1]] = 3
      }
    }
  }

  let max = 0;
  let name = '';
  for(let key in winners){
    if(winners[key] > max){
      max = winners[key] 
      name = key;
    }
  }
  return name;
}