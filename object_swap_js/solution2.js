function charNums(str){

    var myObj = {};
    var chars = str.split("");
  
    for (var i = 0; i < chars.length; i++) {
    	var letter = chars[i];
    	if (myObj[letter] === undefined) {
    		myObj[letter] = 1;
    	} else {
        	myObj[letter] += 1;
      	}
    }
    return myObj;
}
  
  charNums('pradeep');