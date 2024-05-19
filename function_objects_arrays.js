function calcCartPrice(val1, val2, ...num1) {
    let price = 0;
    num1.forEach(element => {
        price += element;
    });
    console.log(val1, val2);
    return price;
}

// console.log((calcCartPrice(2, 3, 4, 500)))


const user = {
    username : "nitish",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)


const myNewArray = [200, 300, 400, 100]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 10, 29]));

