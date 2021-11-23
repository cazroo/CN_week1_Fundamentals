// prints str "Hello" - then also in capitals
console.log("Hello");
console.log("hello".toLocaleUpperCase())

//provides a random number between 0 and 1
console.log(Math.random());

//*10 gives random number between 0 and 10, i.e. if it were *50 it woould be between 0 and 50 
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10));

//make a grid with simple array
var grid = `  
              |   |   
              |   |   
              |   |   
            ----------
              |   |   
              |   |   
              |   |   
            ----------
              |   |   
              |   |   
              |   |   `

console.log(grid)

console.log(`Caroline Rooney
26 years old, almost 27
capricorn`)

//make grid with formatted array
var col = `   |   |   `;
var row = `-----------`;
console.log(`${col}\n${row}\n${col}\n${row}\n${col}`);

//make grid with loop function
function grid(){
    for (let i = 0; i < 4; i++) {
        console.log("  |     |");}
              };
      grid()
      console.log("-----------");
      grid()
      console.log("-----------");
      grid()

//grid with nested loop
//this will loop code between here and * 3 times
for ( let i = 0 ; i < 3; i++) {
//this will loop code between here and **3 times    
    for (let j = 0; j < 2; j++) {
        console.log("   |   |   ")
//this will print out twice because of the loop above      
    }
    if (i !== 2) {
        console.log("-----------")
    }
  }