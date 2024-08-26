const user = {
    username: " mandeep",
    price : 9876,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        

    }

}

// user.welcomeMessage()
// user.username = "navi"
// user.welcomeMessage()
//console.log(this);


/*function chai(){
    let username = "mandeep"
    console.log(this.username);
}
    chai()
*/

/*const chai = function (){
    let username = "mandeep"
    console.log(this.username);
    
}*/

/* const chai =  () => {
    let username = "mandeep"
    console.log(this)
}*/



// chai()

// const addtwo = (num1,num2) => num1 + num2
//const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => ({username: " mandeep"})
console.log(addtwo(3,4));



//const myArray = [2,3,4,5,6,7]
//myArray.forEach(() => {})