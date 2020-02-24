const MathOperations = require('./MathOperations');

class Calculator{
    Add(a,b){
        if(Array.isArray(a)){
        var Result = MathOperations.addArrays(a);
        }
        else{
        var Result = MathOperations.addition(a,b);
        }
        return Result;
    }
    Subtract(a,b){
        var Result = MathOperations.subtraction(a,b);
        return Result;
    }
    Multiply(a,b){
        var Result = MathOperations.multiplication(a,b);
        return Result;
    }
    Divide(a,b){
        var Result = MathOperations.division(a,b);
        return Result;
    }
    Square(a,b){
        var Result = MathOperations.squared(a,b);
        return Result;
    }
    SquareRoot(a,b){
        var Result = MathOperations.squarerooted(a,b);
        return Result;
    }
}
module.exports = Calculator;