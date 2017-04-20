var myVar;


function myFunction (param1, param2) { // zero or more parameters
    var inFunctionVar;
    param1 = inFunctionVar; // param1 will be assigned to undefined

    inFunctionVar = 'a string';
}

param1 = myVar; // won't work
myVar = inFunctionVar; // wont work

var myOtherVar;

myFunction('hi', 'hello');
myFunction(45, 56)
myFunction(function(){}, []);

function add(operand1, operand2) {
    var additonResult = operand1 + operand2;
    return additonResult;

}

var sum = function (operand1, operand2) {
    var additonResult = operand1 + operand2;
    return additonResult;
}


var result = add(1, 2);
var addFunction = add;

var otherResult = addFunction(1, 2);

var snack = 'apple';
var snackForLater = snack;

add(add, sum);




    var array = ['apple', 'cat', 'banana'];
    function reverseStrings(arrayOfStrings) {
        arrayOfStrings.forEach(function(string, index) {
            arrayOfStrings[index] =
        });

        function reverseSting(string) {
            var reversedString = '';
            for (var i = string.length -1; i >= 0; i--) {
                reversedString = reversedString + string[i];
            }
        }

    }



