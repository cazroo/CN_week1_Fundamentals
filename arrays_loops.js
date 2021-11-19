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

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard)

//activity 1 
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

//activity 2
function ranNums(){
    for (let i = 0; i < 6; i++){
        console.log(Math.floor(Math.random()*50))+1;
    }
}
ranNums()

//activity 3
let i = 0 
while (i < 10){
    console.log(i);
    i++;
}

//activity 4
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

//activity 5


//activity 6

