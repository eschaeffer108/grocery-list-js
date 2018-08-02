// Meets Expectations
let bestieGroceryItems = [new GroceryItem("apples", 0.50, 5),
new GroceryItem("avocados", 2.00, 2),
new GroceryItem("beer", 2.50, 4),
new GroceryItem("kale", 2.00)];

let summary = (list) => {
  let totalSum = 0;

  console.log('Dear bestie' + ',\n\n' + 'I bought you: \n');
  list.forEach((item) => {

    let itemSum = 0;
    let itemPrice = item.returnPrice();
    let itemQuantity = item.returnQuantity();

    itemSum = itemPrice * itemQuantity;
    totalSum += itemSum; // running sum of grocery list total

    console.log(itemQuantity + ' ' + item.returnName() + ' - ' + ' $' + (itemSum.toFixed(2)));
  });
  console.log('\nYou owe me ' + ' $' + (totalSum.toFixed(2)) + '.');
};

console.log(summary(bestieGroceryItems));
// Exceeds Expectations
let inventoryNearMe = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 3,
  avocado: 1,
  milk: 5
};

let inventoryNearBestie = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 6,
  avocado: 10,
  milk: 5
};
