const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum + number,0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) => product * number,1);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
  let number = n;
  let numbers = [];
	if(n === 0) {
    return 1;
  }
  for(let i = 0; i < n; i++) {
    numbers.push(number);
    number --;
  }
  return numbers.reduce((acc,number) => acc * number,1);
};

factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
