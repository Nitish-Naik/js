// let a = 10;
// const b = 20;
// var c = 300;


if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}



function one() {
    const username = "nitish"
    
    function two() {
        const website = "youtube"
        console.log(username);
        console.log(website)
    }
    two()
}

// one()


if(true) {
    const username = "nitish"
    if(username === "nitish") {
        const website = "youtube"
        // console.log(username + " " +  website)
    }
    // console.log(website)
    // console.log(username)
}



// +++++++++++++++++++++ interesting +++++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num+1;
}


addTwo(5)
const addTwo = function(num) {
    return num+2;
}
