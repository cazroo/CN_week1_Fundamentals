//
let factorial = n => {
    if ((n===0)||(n===1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33))

//
let orderCount = 0;
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("sundried tomato", "buffalo mozzarella");

//
class BankCustomer {
    constructor(name, balance, pin) {
        this.name = name;
        this.balance = balance;
        this.pin = pin
    }

    name() {
        return this.name;
    }

    pin() {
        return this.pin;
    }

    balance() {
        return this.balance;
        
    }

    withdraw(amount) {
        return this.balance -= amount;
    }

    add(amount) {
        return this.balance += amount;
    }
};

let Caroline = new BankCustomer('Caroline', '3000', 1234);

const pinCheck = (user, pin, withdrawal, deposit) => {
    if (pin === user.pin) {
        console.log(`Your pin is correct.`)
        console.log(`Your balance is £${user.balance}.`);
        if (user.balance > 0) {
            console.log(`You may withdraw up to £${user.balance}.`)
        } else if( user.balance === 0) {
            console.log(`Your balance is £0. You may not withdraw funds. `)
        }
    } else {
        console.log('Your entry is not valid. Please enter your pin again.')
    }

    if (withdrawal > 0 && withdrawal <= user.balance) {
        user.withdraw(withdrawal);
        console.log(`You have withdrawn £${withdrawal}.`);
        console.log(`Your balance is £${user.balance}`)
    } else if (withdrawal > 0 && user.balance === 0) {
        console.log(`You have insufficient funds to make a withdrawal.`);
    } else {
        console.log(`You have not made a withdrawl. Your balance is still £${user.balance}.`)
    }

    if (deposit > 0) {
        user.add(deposit);
        console.log(`Thank you for depositing £${deposit}. Your balance is now £${user.balance}.`)
    } else {
        console.log(`You have not made a deposit. Your balance is £${user.balance}.`)
    }
};


pinCheck(Caroline, 1234, 600, 100);

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


//
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

coffeeShop = {
    branch: "London",
    drinksAndPrices: [
            [espresso, 2.20],
            [americano, 2.80],
            [cortado, 3.00],
            [cappuccino, 3.00],
            [latte, 3.00],
            [mocha, 3.50],
            [tea, 2.80] 
    ],
    foodAndPrices: [
        [fry, 10.00],
        [veggieFry, 9.00],
        [tunaMelt, 5.00],
        [caesarSalad, 5.00],
        [spaghettiBolognese, 9.00]
    ],
    receipt(menu, order) {
        let bill = [];
        let total = 0;
        if(menu == "food"){
            menu = this.foodAndPrices
        } 
        else if(menu == "drink") {
            menu = this.drinksAndPrices
        } 
        else {
            None
            return;
        }
    }
};
