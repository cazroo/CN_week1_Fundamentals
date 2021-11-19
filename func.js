//activity 1 - changing into arrow function
// function factorial (n) {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

let factorial = n => {
    if ((n===0)||(n===1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33))

//activity 2
let orderCount = 0;
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("sundried tomato", "buffalo mozzarella");

//activity 3
// const cashWithdrawal = (amountWanted, pinEntered, accBalance) => {
//     let pin = 1234;
//     let accBalance = 250;
//     let availableNotes = [100, 50, 20, 10, 5];
//     result = [];
//     if (amountWanted < accBalance){
//         console.log("Sorry you do not have enough")
//     }
//     if (amountWanted && amountWanted > 0) {
//         while(amountWanted > 0) {
//             for (let i = 0; i < availableNotes.length; i++){
//                 let note = availableNotes[i];
//                 if (amountWanted - note >= 0) {
//                     amountWanted -= note;
//                     result.push(note);
//                     break;
//                 } else if ( i === availableNotes.length - 1 && amountWanted > 0) {
//                     console.log("Sorry this machine does not have enough cash available");
//                 }
//             }
//         } 
//     } else if (amountWanted <= 0) {
//         console.log("Sorry that amount is too low")
//     }
//     return result;
// }
// console.log(cashWithdrawal(200))

// let pin = 1234
// const pinCheck = () => {
//     let userInput 
//     userInput = prompt("Please enter you pin: ")
//     if (userInput == pin) {
//         console.log("Correct pin, please hold");
//     } else {
//         console.log("Incorrect pin, please try again")
//         pinCheck()
//     }
// }
// let accBalance = 250
// const cashWithdrawal = () => {
//     userInput = prompt("How much would you like to withdraw: ")
//     if (userInput <= accBalance);
//     accBalance - userInput
//     console.log(`Please take your cash, your new balance is ${accBalance}`)
// }
// cashWithdrawal()

///OBJECTS

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Latte",
        "Hot Chocolate",
        "Tea",
        "Americano"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with any sandwich",
    noOffer: "Sorry no offer",
    openCafe(){
        //this. references/engages with the current object - DOES NOT WORK WITH ARROW FUNCTIONS
        if(this.hasSpecialOffers){
            return "Time for a special offer!";
        }
    },
    closeCafe(){
        return "We are closed, come back tomorrow!";
    }
};
console.log(cafe.openCafe());

//can access object properties with dot notation
let off = "none";
let time = 1000;
if(time <1100){
    offer=cafe.breakfastOffer;
    console.log(offer);
} else if (time <1500){
    offer=cafe.lunchOffer;
    console.log(offer)
} else {
    offer = cafe.noOffer;
    console.log(offer)
}

const person ={
    name: "Caroline",
    age: 26,
    lovesCats: true,
    favCocktails: [
        "banana bread old fashioned",
        "french martini",
        "pina colada"
    ]
}
console.log(person.name)
console.log(person["age"])

//alarm clock object challenge
const alarmClock = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};
let day = "Monday";
if(day == "Saturday" || day == "Sunday"){
    console.log(alarmClock.weekendAlarm)
    } else {console.log(alarmClock.weekdayAlarm)};

//can add to object in this way
person.favSongs = ["Rose Golden","SPELL","FVN!","MHM"]
console.log(person.favSongs[2]) 


//activity 2
const pet = {
    name: "Abraham",
    typeOfPet: "cat",
    age: 3,
    colour: "black",
    doing: true,
    eating(){
        if(this.doing);
        return "He is always snacking";
    },
    drinking(){
        return "Finally getting some H20";
    }
};
console.log(pet.eating());
console.log(pet.drinking())



