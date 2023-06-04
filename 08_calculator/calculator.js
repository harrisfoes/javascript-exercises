const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arrayNum) {
  let result = 0;
	for(i in arrayNum){
    result += arrayNum[i];
  }

  return result
};

const multiply = function(arrayNum) {
  let result = 1;
	for(i in arrayNum){
    result *= arrayNum[i];
  }

  return result
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
  let ans = num

  if(num == 0)
    return 1;

  for(i = num - 1; i > 0 ; i--){
   ans *= i; 
  }	
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
