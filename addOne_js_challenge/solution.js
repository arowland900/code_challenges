function addOne(arr){

    for(var i = arr.length -1 ; i >= 0; i--){
      if(arr[i] === 9){
        arr[i] = 0
      }
      else {
        arr[i] += 1
        break
      }
    }
    if(arr[0] === 0){
      arr.unshift(1)
    }
    return arr
}
  
addOne([9,9,4,5,9])