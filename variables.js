//variables 

//let = used for declaring a value that can be changed
//const = used for declaring a value that cannot be changed
//var = used for declaring a value that can be changed - however, it is considered a legacy language and not best practice to use 

//operating operators in code:
//** means multiplied to the power of a number
//% moduli

//assignment operators in code:
//= assigns value

let i = 10;
i = i +2;
console.log(i)

//dont have to put let for changing variable, e.g let name = caz / name = caroline
i = 33
//template literals allows you to dynamically inject variables into strings, e.g `my name is ${name}`

let breakfast = "pancakes"
let lunch = "caesar salad"
let dinner = "stew"
console.log(`Today I ate ${breakfast}, ${lunch} and ${dinner}`)
breakfast = "vegan fry"
lunch = "pasty"
dinner = "ramen"
console.log(`Tomorrow I will eat ${breakfast}, ${lunch} and ${dinner}`)

//days until birthday calculator
//
var days = 0;
var difference = 0;

birthday = new Date("December 29, 2021");

today = new Date();

difference = birthday - today;

days = Math.round(difference/(1000*60*60*24));
console.log(days)


//if statements 
let weather = "raining";
if (weather == "sunny") {
    console.log(`Grab your suncream boys and girls`)
} else if (weather == "raining") {
    console.log(`Make you have an umbrella, ella, ella`)
} else {
    console.log(`It could go either way`)
}

if (true) {
    console.log("You're innocent and telling the truth")
} else {
    console.log("You're guilty and lying")
}

//if it were 0 it would say "big no"
if (-3) {
    console.log("Little yes")
} else {
    console.log("Big no")
}

//== means equal, === means strict equal, != means not equal, !== means strict not equal 

let place = "Liverpool";
let Weather = "sunny";
if (place == "Liverpool" && Weather == "sunny") {
    console.log("sun shining on anfield")
} else if (place == "Liverpool" && Weather == "raining") {
    console.log("well, we're used to the rain anyway")
} else {
    console.log("typical weather being so moody")
}

//&& means and + || means or

const grade = 87;
switch (true) {
    case grade >=70:
        console.log("Distinction");
        break;
        case grade >= 60:
            console.log("Merit");
            break;
            case grade >=50:
                console.log("Pass");
                break;
                default:
                    console.log("Failed");
}

//if statement to serve based off age
let age = 26
if (age >= 17){
    console.log(`Yes I can serve you`)
}
    else {
    console.log(`You aren't old enough`)
    }
let country = "UK"
if (age >= 17 && country == "UK"){
    console.log(`Yes, I can serve you`)
}
else {
    console.log(`Sorry, I can't serve you`)
}

// let pizzaTopping = "salami"
// switch(pizzaTopping){
// case "onion":
// case "mushroom":
//     console.log("The best vegetables on pizza");
//     break;
//     case "pork sausage":
//         console.log("GET THAT AWAY FROM MY PIZZA NOW");
//         break;
//         case "chicken":
//         case "pepperoni":
//         case ""

