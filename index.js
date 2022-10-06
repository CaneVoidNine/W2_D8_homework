/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
const firstArray = [0, 2, 4, 6, 8];
console.log(firstArray);
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const user = {
  name: "Damian",
  surname: "Olszewski",
  email: "damianolszewski26@gmail.com",
  age: 27,
};
console.log(user);
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
user.drivingLicense = true;
console.log(user);
/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete user.age;
console.log(user);
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const user1 = {
  name1: "Cane",
  surname1: "Voidnine",
  email1: "canevoidnine@gmail.com",
  age1: 18,
};
console.log(user.email === user.email1);
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let cartPrice = 30;
let shippingCost = 10;
let totalShoppingCart;
totalShoppingCart = cartPrice > 50 ? cartPrice : cartPrice + shippingCost;

console.log("\nYour total is : " + totalShoppingCart);
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("\nYour total is : " + totalShoppingCart * 0.8);
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
  brand: "Honda",
  model: "Accord",
  licensePlate: "SAMPLE",
};
const car1 = Object.assign({}, car);
car1.licensePlate = "SIMPLE";

const car2 = Object.assign({}, car);
car2.licensePlate = "SOMPLE";

const car3 = Object.assign({}, car);
car3.licensePlate = "SHOOPS";

const car4 = Object.assign({}, car);
car4.licensePlate = "SHRIMP";

const car5 = Object.assign({}, car);
car5.licensePlate = "SKUNKS";

console.log("Fifth card plate: " + car5.licensePlate);
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("-----------------ex9---------------------");
let carsForRent = ["car", "car1", "car2", "car3", "car4", "car5"];

console.log(carsForRent);
console.log("----------------ex10----------------------");
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
let carsRemoved = carsForRent;
carsRemoved.pop();
carsRemoved.shift();
console.log(carsRemoved);
/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("---------------ex11-----------------------");
carsForRent = [car, car1, car2, car3, car4, car5];
console.log(carsForRent);
/* EXERCISE 12;
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("---------------ex12-----------------------");
let carsForSale = [];
carsForSale.push(car, car1, car2);
console.log(carsForSale);
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log("All cars for sale in shop: ", carsForSale[i]);
}

//not done yet!
