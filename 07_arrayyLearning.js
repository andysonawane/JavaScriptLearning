let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`);

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 7 --> ${indexOf10}`);

console.log(`Traversing array using for loop`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element =  arrayOfNumbers[index];
    console.log( element );
}

console.log(`Accessing only even indexed values`);
for (let index = 0; index < arrayOfNumbers.length; index++) { // index =0 1 2
    if (index%2==0) {
        const element = arrayOfNumbers[index];
        console.log(element);
        
    }  
    
}

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);


console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);
