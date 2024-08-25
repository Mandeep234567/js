function calculateCartPrice(val1,val2, ...num1){
    return num1

}
// console.log(calculateCartPrice(200,400,500,2000,345678));

const user = {
    username: "mandeep",
    prices : 123
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 345
})

const myNewArray = [200,300,400]
function returnSecondValue(getArray){
    return  getArray[1]
}
console.log(returnSecondValue(myNewArray));
