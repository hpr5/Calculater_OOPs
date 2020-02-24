const add = require('./add');
const subtract = require('./subtract.js');
const multiply = require('./multiply.js');
const divide = require('./divide.js');
const square = require('./square.js');
const squareroot = require('./squareroot.js');
const sumArray = require('./sumArray');

class MathOperations{
    static addition(a,b) {
        return add(a,b);
    }
    static addArrays(a){
        return sumArray(a);
    }
    static multiplication (a,b){
        return multiply(a,b);
    }
    static division (a,b){
        return divide(a,b);
    }
    static subtraction(a,b){
        return subtract(a,b);
    }
    static squared(a,b){
        return square(a,b);
    }
    static squarerooted(a){
        return squareroot(a);
    }
}
module.exports = MathOperations;