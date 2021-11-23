let coffeeOrder = [
    "Alex - Flat White",
    "Ben - Hazelnut Latte",
    "Charlie - Hot Chocolate"
];
console.log(coffeeOrder)
console.log(coffeeOrder[2])

//replacing within an array:
coffeeOrder[1] = "Ann - Mocha";

//can use properties with arrays, e.g. how many items are in the array 
console.log(coffeeOrder.length);

//add something to the end of an array 
coffeeOrder.push("Donna - Espresso")
console.log(coffeeOrder)

//remove the last item from array
coffeeOrder.pop();

//
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard)

//loop to cylce through array
let favFilms = [
    "Big Fish",
    "A Clockwork Orange",
    "Ghostbusters",
    "Frankenweenie"]
favFilms.push("The Exorcist", "Lord of the Rings")
console.log(favFilms)
let currentFilm = "Big Fish";
while (currentFilm != "A Clockwork Orange"){
    console.log(currentFilm);
    currentFilm = favFilms[Math.floor(Math.random()*5)];
}
console.log(currentFilm)

//6 random numbers between 1-50
function ranNums(){
    for (let i = 0; i < 6; i++){
        console.log(Math.floor(Math.random()*50))+1;
    }
}
ranNums()

//count up to 9
let i = 0 
while (i < 10){
    console.log(i);
    i++;
}
//count down from 9
for (let i = 9; i>=0; i--){
console.log(i)}

//check if 3rd movie is ghostbusters 
favFilms.slice(-2)
for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}
if (favFilms[2] == "Ghostbusters"){
    console.log("Yay it's Ghostbusters")
} 
else {
    console.log("Boo! We want Ghostbusters!")
}

// //ran num generator that checks if ran num is divisible by 7
let num = Math.floor(Math.random() * 30)
for (let i = 0; i < 6; i++){
  console.log(num)};
  if (num % 7 == 0);
  {console.log(` ----- ${num} is divisble by 7!`)};
  num = Math.floor(Math.random() * 30)

// //compares followers list using nested loop 
let bobsFollowers = [
    "Caz",
    "Jack",
    "Annie",
    "Billy"
];
let hannahsFollowers = [
    "Dan",
    "Caz",
    "Emma",
    "Annie"
];
for (i in bobsFollowers) {
    if (hannahsFollowers.indexOf(bobsFollowers[i]) > -1) {
        console.log(`${bobsFollowers[i]} is a follower of both bob and hannah`)
    }
};
