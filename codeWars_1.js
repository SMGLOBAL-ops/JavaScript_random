

// Code wars challenge - Without Map function

function openOrSenior(data){
    // ...
    var categories = [];
    for (let i in data){
      if (data[i][0] >= 55 && data[i][1] > 7){
        categories.push('Senior');
      } 
      else {
          categories.push('Open');
        }
      }
    return categories;
    }

// With Map function

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
