// forEach

const coding = ['js', 'ruby', 'java', 'python']
// coding.forEach(element => {
//     console.log(element)
// });


// function printMe(item) {
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const person = [
{
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    },
    phoneNumbers: [
      {
        type: "home",
        number: "555-555-5555"
      },
      {
        type: "work",
        number: "555-555-5556"
      }
    ],
    isActive: true,
    greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
}]

person.forEach( (item) => {
    console.log(item.address.city)
})






// forin

// loop for objects
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}

// for (const key in myObject) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
        
//     // }
//     // console.log(`${key} shortcut for ${myObject[key]}`)
// }



// forOf
// const arr = [{name: "abc"}, {greet : 'hello'}]
// const arr1 = [1, 2, 3, 4, 5]
// for (const i of arr1) {
//     console.log(i);
// }

// const greetings = "Hello World!"

// for (const i of greetings) {
//     console.log(`Each char is ${i}`)
// }

// Maps

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('Fr', 'France')
map.set('IN', 'INDIA')
// console.log(map)



// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const myObject = {
//     'game1' : 'NFS', 
//     'game2' : 'Spiderman'
// }

// for doesnot works for object type
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }



