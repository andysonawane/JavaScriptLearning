
// if ssc marks greater then equal to 35 then pass or fail

var sscMarks = 39;

var resultPassOrFail= sscMarks>=35 ?"pass" :"fail";
console.log(`Result is ${resultPassOrFail}`);

var sscResult = function(sscMarks){
    var resultPassOrFail = sscMarks>=35 ?"pass" :"fail";
    return resultPassOrFail;
}

console.log(`Result is ${sscResult(23)}`);
console.log(`Result is ${sscResult(45)}`);
console.log(`Result is ${sscResult(1200)}`);
console.log(`Result is ${sscResult("Ten")}`);
console.log(`Result is ${sscResult(-10)}`);


//For gender male check marriage eligibility with value age = 23
