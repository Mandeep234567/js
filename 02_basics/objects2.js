// const tinderUser = new Object()
const tinderUser = {}
//console.log(tinderUser);


tinderUser.id = "1234asdfg"
tinderUser.name = "navi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: " navi@gamil.com",
    Fullname: {
        userfullname: {
            firstname: "mandeep",
            lastname: "navi"
        }
    }
}

// console.log(regularUser.Fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {   obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "mandeep@gmail.com"
    },
    {
        id: 2,
        email: "navi@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
