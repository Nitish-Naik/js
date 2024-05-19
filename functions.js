// js functions
function sayName() {
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayName()


// function add(a, b) {
//     return a + b;
// }

function add(a, b) {
    let result = a + b;
    return result;
}

const result = add(3, 5)

// console.log("Result : " , result)

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}


// console.log(loginUserMessage("nitish"));
console.log(loginUserMessage("rathod"));