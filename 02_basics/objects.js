// singleton

// objects literals
//Object.create

const mysym = Symbol("key1")

const Jsuser = {
    age : 21,
    [mysym]: "mykey1",
    "full name" : "mandeep singh pathania",
    name: "mandeep",
    loaction: "pathankot",
    email: "mandeep@gamil.com",
    isLoggedIN : false,
    lastLoginDate: ["monday", "tueday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);
Jsuser.email = "navi1234567@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "navi@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


