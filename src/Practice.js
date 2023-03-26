// const filename = 'xyz.pdf';
// function download () {
//    //downlogic 
//    // const filename = 'xyz.pdf';
//    console.log(filename)
// }

// download();
// console.log(filename)


// function Triarea (width , height) {
//    height = height === undefined ? 5 : height
//    var area = width*height
//    return area
// }    
//  var area =  Triarea(2)
//  ++area
// console.log(area)


// if not set default value in parameters
// function calculateArea(width , height = 10) {
//    var area = width*height
//    return area
// }

// var area = calculateArea(1, 15) 
// // area += 10;
// console.log(area)

// function upperCase( str ) {
// //    console.log(str.toUpperCase())
//    return str.toUpperCase()
// }

// const name1 = upperCase("Ali")

// console.log(name1)



// function login(username, identifier) {
//     //code 
//     console.log(`${username}, the great`)
// } 

// login("ali", 123);  


// export default login
 


// function login() {
//     //code  
//     console.log("Rizvi")
// } 

// // login(); 


// export default login


//functon decleration and function expression

// function decleration
// function login() {

// }


// function expression 
//anonymous function

// const login = function () {
//    console.log('logged In')
// }
// login()


//callback hell

// function formatText(text, formatcb) {
//    return typeof formatcb === 'function' ? formatcb(text) : text.toUpperCase()
//    // return text.toUpperCase();
// }

// const text = formatText('ali', function(text) {
//       return text.charAt(0).toUpperCase() + text.slice(1);
// })
// console.log(text)


// IIFE ( immediately invoked function expressiojn )

// //in this we dont have to call function seperately it will call automatically when created

// (function setup() {
//    console.log('setup')
// }) ();


//Arrow functions

// const login = () => {
//    console.log('logged In')
// }

// login();


// const sum = (num1, num2) => {
//    return num1 + num2
// }
// const result = sum()

// console.log(result)



//Good practices

//1 function name start with verb

//-2- one fn one action


//-3- fn name should be descriptive



























