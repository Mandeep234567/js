function sayMyName(){
console.log("M");
console.log("A");
console.log("N");
console.log("D");
console.log("E");
console.log("E");
console.log("P");
}
// sayMyName()

/*function addTwoNumber(number1, number2){ // number1 , number2 are parameter

    console.log(number1 +number2);
}*/
function addTwoNumber(number1, number2){ // number1 , number2 are parameter
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumber(3,5) // 3 and 5 are arugment

// console.log( "Result: ", result);

function loginUserMessage(username = "mandeep"){
    if(!username){
            console.log("please enter a username");
            return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("mandeep"))
console.log(loginUserMessage("navi"))
