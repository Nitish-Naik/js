// for

let array = [1, 2, 3, 4, 5]
// for (let index = 0; index <array.length; index++) {
//     const element = array[index];
//     console.log(index,  " -> ", element)
    
// }


// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j < array.length; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)   
//     }
// }

// break and continue

for (let index = 0; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected ${index}`)
        // break;
        continue;
    }
    console.log(`Value of i is ${index}`)
}