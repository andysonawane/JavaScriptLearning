// Higher Order Function --
function anotherFunction(){
    console.log("I am inside another function....");
}

function show(myNumber){ // myNumber is an argument
    myNumber();
}
show(anotherFunction);