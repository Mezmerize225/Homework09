const products = [
  { product: "milk", price: 3.2 },
  { product: "bread", price: 1.5 },
  { product: "eggs", price: 4.0 },
  { product: "cheese", price: 6.3 },
  { product: "apples", price: 2.1 }
]

// let totalSumIs = 0;

// function sum() {

//   for (i = 0; i < products.length; i++) {

//     totalSumIs += products[i].price ;
//   }

// }

// sum(products);
// console.log(totalSumIs);


const before = 0;
const sum = products.reduce((a, {price}) => a + price, before);

console.log(sum);