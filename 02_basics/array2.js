const marvelHero =[ "thor", "hulk"]
const dcHero = ["superman", "batman"]

//marvelHero.push(dcHero)
//console.log(marvelHero);
//console.log(marvelHero[2]);


// const allheros = marvelHero.concat(dcHero)
// console.log(allheros);


const allNewheros = [...marvelHero, ...dcHero]
console.log(allNewheros);

const anotherArr = [1,2,3, [ 4,5,6],7,[6,7,[4,5,]]]
const realanotherArr = anotherArr.flat(Infinity)
console.log(realanotherArr);


console.log(Array.isArray("mandeep"));

console.log(Array.from("mandeep"));
console.log(Array.from({name: "mandeep"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

