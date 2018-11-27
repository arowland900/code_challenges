function swap(obj1){
    var obj2 = {};
    for(var key in obj1){
      console.log(obj1)
      obj2[obj1[key]] = key;
    }
    return obj2;
}
  
swap({
    "a": "b",
    "c": "d"
})