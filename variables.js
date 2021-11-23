//variables 

//let = used for declaring a value that can be changed
//const = used for declaring a value that cannot be changed
//var = used for declaring a value that can be changed - however, it is considered a legacy language and not best practice to use 

//operating operators in code:
//** means multiplied to the power of a number

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

//x and o grid layout
horiz = `-----------------`
vert = `     |     |       `
grid = [
  `X`,
  `O`,
  'X',
  ' ',
  ' ',
  'X',
  ' ',
  `O`,
  `X`
]

console.log(
  `
${vert}  
  ${grid[0]}  |  ${grid[1]}  |  ${grid[2]}  
${vert}    
${horiz}
${vert}  
  ${grid[3]}  |  ${grid[4]}  |  ${grid[5]}    
${vert}  
${horiz}
${vert}  
  ${grid[6]}  |  ${grid[7]}  |  ${grid[8]}  
${vert}  
  `
);

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

//switch pizza topping
const topping = `salami`;
const favourites = [`cheese`, `tomato sauce`, `pepperoni`];
const excluded = [`ham`];

switch(true) {
  case favourites.indexOf(topping) >= 0:
    console.log(`${topping} is a classic for a reason`)
      break;
  case excluded.indexOf(topping) >= 0:
    console.log(` ${topping} on pizza is gross and i will vomit`)
      break;
  default:
    console.log(`i have no opinion on ${topping}`)
      break;
};

//
let password = `Caroline123`
const num = 30

if (password.length <= 8) {
  console.log(`the password is too short, try again.`)
} else {
  console.log(`password is ${password}`)
};     
if (num % 3 == 0 || num % 5 == 0) {
  console.log(`number is divisible by 3 or 5`)
} else {
  console.log(`number is not divisible by 3 or 5`)
};

//
let Num = 40;
let output = ``
switch(true) {
  case Num % 3 == 0 && num % 5 == 0:
    output = `fizzbuzz`;
      break;
  case Num % 3 == 0:
    output = `fizz`;
      break;
  case Num % 5 == 0:
    output = `buzz`;
      break;
  default:
    output = Num
}
console.log(output);

//
let time = 1000;
let placeOfWork = "city centre";
let townOfHome = "Liverpool";
switch(true) {
    case time < 0700 || time >= 1700:
        console.log(`i am currently home in ${townOfHome}`)
        break;
    case time >= 0700 && time < 1700:
        console.log(`i am working in ${placeOfWork}`)
        break;
};

//
let str = "kajhcoischoancoajcpoakcpaoalai";
const vowels = [
    "a",
    "e",
    "i",
    "o",
    "u"
];
let n = -1;
let strIndex;
for (i in vowels) {
    strIndex=str.length-str.split(``).reverse().indexOf(vowels[i])
    if (strIndex > n){
        n = strIndex
    }
};
console.log(n)

//
let word = "echo";
if (word.split(``)[0] == word.split(``).reverse()[0]) {
    console.log(`first letter of ${word} matches last`)
} else {
    console.log(`first letter of ${word} does not match last`)
};

//
let number1 = 66;
let number2 = 929;
if ((number1 + number2) % 2 == 0) {
    console.log(`${number1} + ${number2} = ${number1 + number2}`)
} else {
    console.log(`${number1} * ${number2} = ${number1 * number2}`)
};