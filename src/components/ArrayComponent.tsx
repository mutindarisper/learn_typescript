import React from 'react'
import './ArrayComponent.css'

type Props = {}

const ArrayComponent = (props: Props) => {


//.forEach executes a function for each element in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console each number to the console
numbers.forEach((item, index) => console.log(`number ${item} is index ${index}` ))

//also use foreach to calculate the sum of the elements in the array

let sum = 0
numbers.forEach((item) =>
sum += item


)
console.log(`sum is ${sum}`)

//keep track of the total number of occurrences for each element in an array
const letters = ['a', 'b', 'a', 'd', 'b', 'c', 'a', 'd', 'g']

const count = {}

letters.forEach((letter) => {
   if(count[letter]){
    count[letter] ++
   } else{
    count[letter] = 1
   }
})
console.log(count)


//map, just like foreach, performs a function for each element but returns a new array
//multiply all numbers by 2
const doubled = numbers.map((number) => number * 2)
console.log(doubled)


const products = [
    {
      name: 'Product 1',
      count: 10,
      price: 20.99
    },
    {
      name: 'Product 2',
      count: 5,
      price: 15.49
    },
    {
      name: 'Product 3',
      count: 20,
      price: 8.75
    }
  ];

  //create a new array with the total price
  const totals = products.map((product) => {
    return product.count * product.price
  })

  console.log(totals)

  //convert an array of string numbers to an array of numbers
  const stringNumbers = ['1', '2', '3', '4', '5']
  const convertToNumbers = stringNumbers.map((number) => {
    return Number(number)

  } )
  console.log(convertToNumbers)


  //.filter creates a new array that satisfies the condition and removes elements that do not meet the condition
   //return a new array with even numbers only

   const evenNumbers = numbers.filter((number) => {
   return number % 2 === 0
   })

   console.log(evenNumbers)
   //return odd numbers only
   const oddNumbers = numbers.filter((number) =>{
    return number % 2 !== 0

   })
   console.log(oddNumbers)

   const primeNumbers = numbers.filter((number) => {
    return number % 1  === 0

   })

   console.log(primeNumbers)

   //remove duplicates

   const noDupes = letters.filter((letter, index, arr) => {
    return arr.indexOf(letter) === index
   })

   console.log(noDupes)

   //reduce method, which returns a single value from an array of elements  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const totalssss = numbers.reduce((sum, number) => {
    return sum + number 
   })

   console.log(totalssss)

   //get the maximum number
   const maxNumber = Math.max(...numbers)
//    .reduce((value) => {
//     return Math.max(value)

//    })
   console.log(maxNumber)

   const numbers2 = [5, 10, 2, 8, 15];

const maxNumber2 = numbers2.reduce((max, current) => (current > max ? current : max), numbers2[0]);
console.log(maxNumber2)

//check the total value of products
const totalProductValue = products.reduce( (acc, product) => 
 acc + product.price * product.count , 0
)
console.log(totalProductValue)


//.slice returns a shallow copy of a portion of an aray, will NOR MODIFY the original array
//takes the first and last index, where the last index is not included. first index is set to zero by default

let numbersToBeSliced =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//if we waant to get from  4 to 10,
 let sliced = numbersToBeSliced.slice(3, numbersToBeSliced.length )
 console.log(sliced)

 //to verify that the original array wasnt modified
 console.log(numbersToBeSliced)

 //to get the last items from the array

 let lastNumbers = numbersToBeSliced.slice(-5)
 console.log(lastNumbers)
 
 //to get all elements starting from a particular index
 const newnumbers = numbersToBeSliced.slice(2)
 console.log(newnumbers)

  return (
    <div>
      <div className="parent">
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
         amet eum sed, velit, perspiciatis nesciunt repellat omnis neque eos vel quos vero perferendis. Aspernatur tempore aperiam rerum sunt impedit nesciunt. */}
        {/* <div className="child">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facere expedita, esse, provident voluptate mollitia praesentium, 
        quam voluptates earum excepturi libero quibusdam numquam? Voluptatibus voluptates, soluta dignissimos ad fuga exercitationem.
          
        </div> */}
        
      </div>

      <div className="container">
        <div className="intro-content">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde rerum, deleniti ea obcaecati sint hic
                odit dicta tenetur qui ut dolorum provident sit, atque, reprehenderit nulla voluptate! Officiis,
                consectetur?</p>
            <p>Iste ipsa enim delectus porro, ullam repellendus maiores quis rem debitis cum, necessitatibus architecto
                dolor? Velit, ad quaerat blanditiis veritatis expedita totam vel voluptatem officiis officia ab modi
                voluptatibus obcaecati.</p>
            <p>Accusantium minima iusto nobis fuga hic explicabo unde illum, perferendis et animi aperiam quaerat, eaque
                deleniti alias blanditiis exercitationem commodi repudiandae ullam consequatur incidunt reiciendis
                repellat officia laboriosam. Esse, modi.</p>
            <p>Expedita cupiditate iure odit, delectus placeat optio magnam assumenda mollitia aspernatur at saepe nisi
                commodi natus excepturi voluptate. Recusandae nisi dolorem, necessitatibus optio aliquam repellat.
                Adipisci, incidunt. Consequuntur, natus nulla.</p>
        </div>
    </div>

    </div>
  )
}

export default ArrayComponent