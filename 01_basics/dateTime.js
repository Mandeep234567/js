// Dates

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);
*/

//let myCreatedDate = new Date(2024,7,13)
//let myCreatedDate = new Date(2024,7,13,5,3)
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());

// `${newDate.getMonth()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})






