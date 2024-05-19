const user = {
    username: "nitish",
    price : 9999,
    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "rathod"
// user.welcomeMessage()


// console.log(this);


// function chai() {
//     let username = "nitish"
//     console.log(this.username)
// }
// chai()



// arrow functions
 
// const chai = function() {
//     let username = "nitish"
//     console.log(this.username)
// }
 
const chai = () => {
    let username = "nitish"
    console.log(this)
}

// chai();


// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// implicit return
// const addTwo = (num1, num2) => num1+num2; 
// const addTwo = (num1, num2) => ( num1+num2 ); 

const addTwo = (num1, num2) => ( {username: "nitish"} ); 
console.log(addTwo(3, 4))
