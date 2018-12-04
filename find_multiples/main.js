function findMultiples(integer, limit) {
    var array = []
  for(var i = 1; i <= limit; i++){
    if(i % integer === 0){
      array.push(i)
    }
  }
  return array

  // for (var i = 1, ar = []; int * i <= limit; i++) ar.push(int * i); return ar;
  }