var myName = "Mohit";
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);

function multiply(num1,num2){
    var result = num1* num2;
    console.log(result);
    return result;
}
var result= multiply(7,7);
console.log(result);
    