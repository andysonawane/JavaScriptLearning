console.log("*******************************************");
console.log("******************* 01*********************");

var square = function(num){
    console.log("square of num:",num,"=" ,num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log("*******************************************");
console.log("*******************02**********************")
console.log("typeof variable=", typeof square);
console.log("*******************************************");
console.log("*******************03**********************")
var reactuangul=function(num1,num2){
    console.log("the area of rectangal is", num1*num2);
} 
reactuangul(499,917)
console.log("*******************************************");
console.log("*******************04**********************")
function swapvalues(val1,val2){
    console.log("before swapping:", val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("after swapping:",val1,val2);
}
swapvalues("virat","Anushka");
swapvalues(1000,2000);

console.log("*******************************************");
console.log("*******************05**********************");
var  Name="JS the most popular language"

console.log( Name);
console.log("Total character in the string is",Name.length);
console.log("character at index 6", Name.charAt(6));
console.log("character at index 11", Name.charAt(11));
var square = function(num){
    console.log("square of num:",num,"=" ,num*num);
}
square(28);