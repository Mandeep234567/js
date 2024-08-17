const gameName =  new String('mandeep-si-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);



//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf('d'));

const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newString1 = "    mandeep     "
console.log(newString1.trim());

const url = "http://mandeep.com/mandeep%20pathania"
console.log(url.replace('%20' , '-'))

console.log(url.includes('mandeep'))


console.log(gameName.split('-'));

