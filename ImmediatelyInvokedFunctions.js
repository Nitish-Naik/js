// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log('DB CONNECTED')
})();

// ()()

(  (name) => {
    // UNNAMED IIFE
    console.log(`DB CONNECTED 2 ${name}`);
})("nitish")