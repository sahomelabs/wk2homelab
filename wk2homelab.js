// Write an if/else statement for the following requirements

// function graderesult(grade) {
//   if (grade >= 80) {
//     console.log("You did a good job");
//   } else if (grade >= 70) {
//     console.log("Keep trying");
//   } else if (grade >= 60) {
//     console.log("ehhhh");
//   } else if (grade >= 55) {
//     console.log("Not too good") ;
//   } else {
//     console.log("Bad Grade But You'll Get Em Next Time");
//   }
// }
// graderesult(57);



// //2. Write function that prints out mutiple of 10 up to a given input (argument)
// function printmutiplesoften(numbers) {
//     for (let i = 10; i <= numbers; i += 10) {
//         console.log(i);

//     }
// }
// printmutiplesoften(50);

 


// 3. Write a function that takes bill amount and item price and says how many quarters they'd get in return
// function countQuarters(billAmount, itemPrice) {
//     if (billAmount < itemPrice) {
//         return 'Add Bill Accepted Bills $5, $10, $20, $50 or Quarter';
//     }
//     const changeDue = billAmount - itemPrice;
//     const quarters = Math.floor(changeDue / 0.25);
//     return quarters;
// }
// const billAmount = 10.00;
// const itemPrice = 9.00;
// const quarters = countQuarters(billAmount, itemPrice);
// console.log(`Thank you for shopping with us your change is ${quarters} quarters.`);



//4. Write a function that prints out how many bills you would recieve in change after paying a certain amount. Return in as large denominations as possible. Parameters should be amount paind and amount cost

// function countBillChange(amountPaid, amountCost) {
//     if (amountPaid < amountCost) {
//         return 'Bills Only Accepted $5, $10, $20, $50, $100 ';
//     }
//     const changeDue = amountPaid - amountCost;
//     const billsinChange = Math.floor(changeDue);
//     return billsinChange;
// }
// const amountPaid = 200;
// const amountCost = 100;
// const billsinChange = countBillChange(amountPaid, amountCost);
// console.log(`Thank you for shopping with us your change is ${billsinChange} Dollars.`);
  


// 5. Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//  for (let i = 1; i <= 100; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     }else {
//         console.log(i);
//     }
//  }


