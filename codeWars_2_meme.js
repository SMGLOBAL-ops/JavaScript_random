// You:

function filter_list(l) {
    let list = []; 
    
    for(let i of l) {
        if (Number.isInteger(i)) {
          list.push(i); 
        }
        else {
            continue; 
          
        }
      }
      return list; 
    }

console.log(filter_list([1,2,'a','b']));

// The guy she told you not to worry about:

function filter_list(l){
  return l.filter(i => typeof(i)  === 'number'); 
}

console.log(filter_list([1,2,'a','b'])); 
