// 

// const coding = ['js', 'ruby', 'java', 'python']



// const values = coding.forEach( (item) => {
//     // console.log(item)
//     return item
// })

// console.log(values)





const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (n) => n > 5)
// or
// const newNums = nums.filter( (n) => {
//     return n > 5
// })
// console.log(newNums)


const books = [
    {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genre: "Fantasy",
        publishYear: 1950,
        pageCount: 767
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publishYear: 1954,
        pageCount: 1178
      }, {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        publishYear: 1851,
        pageCount: 624
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publishYear: 1937,
        pageCount: 310
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-age",
        publishYear: 1951,
        pageCount: 224
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publishYear: 1997,
        pageCount: 309
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publishYear: 1813,
        pageCount: 279
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publishYear: 1925,
        pageCount: 180
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publishYear: 1949,
        pageCount: 328
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        publishYear: 1960,
        pageCount: 281
      }
]

// const newBooks = books.filter( (bk) => bk.publishYear >= 1970)
// console.log(newBooks)




// reduce
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums1 = nums1.map( (n) => n + 10)
// method chaining
const newNums1 = nums1.map( (n) => n * 10).map( (n) => n+1).filter( (n) => n > 40)

console.log(newNums1)



// reduce

const sum = nums1.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

console.log(`sum :- ${sum}`)


const shoppingCart = [
    {
      id: 1,
      name: "T-shirt",
      price: 19.99,
      quantity: 2
    },
    {
      id: 2,
      name: "Jeans",
      price: 39.99,
      quantity: 1
    },
    {
      id: 3,
      name: "Sneakers",
      price: 59.99,
      quantity: 1
    }
  ]

console.log(shoppingCart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0))