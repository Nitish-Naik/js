// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser  = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Nitish",
        lastName: "naik"
    }
}
// console.log(regularUser.fullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "c", 4:"d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

console.log(Object.assign(obj1, obj2))