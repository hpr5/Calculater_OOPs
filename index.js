const Calculator = require('./Calculator.js');


calculator = new Calculator();
sum = calculator.Add([1,2,3,4,5]) ;
div = calculator.Divide(4,2);
mult = calculator.Multiply(10,2);
subt = calculator.Subtract(15,6);
sqr = calculator.Square(10,3);
sqrt = calculator.SquareRoot(9);
console.log(sum);
console.log(div);
console.log(mult);
console.log(subt);
console.log(sqr);
console.log(sqrt);