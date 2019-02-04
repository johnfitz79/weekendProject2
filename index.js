let  readlineSync  =  require('readline-sync');
console.log( "Welcome to John's Burger Bar Online Ordering!" );
console.log( "What are you in the mood for, today? Last order you placed was for a Chicken Jr." );
let option = readlineSync.question( "Options: chicken, beef, snack, sides, or drinks? " );

switch(option) {
  case "chicken":
    console.log( "You should try the Crispy Chicken with Bacon and Cheese!" );
    let option_new = readlineSync.question("Try this: yes or no? ")
    switch(option_new){
    case "no":
    console.log("Please select another chicken entree!");
    break;
    case "yes":
    let option_c = readlineSync.question('small, medium, large or no meal? ');
    switch(option_c){
      case "small":
      console.log("Sounds good, your total is $6.37!")
      break;
      case "medium":
      console.log("Sounds good, your total is $7.37!");
      break;
      case "large":
      console.log("Sounds good, your total is $8.37!");
      break;
      case "no":
      console.log("Sounds good, your total is $5.37!");
      break;
      default:
        console.log( "Please scroll to the top and start again!" );
      }
}

}
switch(option){
  case "beef":
    console.log("Perfect! Our Whopper is the most popular burger!");
    let option_new = readlineSync.question("Try this: yes or no? ")
    switch (option_new){
      case "no":
      console.log("Please select another flame-grilled burger!");
      break;

    case "yes":
    let option_b = readlineSync.question('What size meal?: small, medium, large or no meal? ');
    switch(option_b){
      case "small":
      console.log("Sounds good, your total is $7.37!")
      break;
      case "medium":
      console.log("Sounds good, your total is $8.37!");
      break;
      case "large":
      console.log("Sounds good, your total is $9.37!");
      break;
      case "no":
      console.log("Sounds good, your total is $5.37!");
      break;
      default:
        console.log( "Please scroll to the top and start again!" );
}
}
}
switch(option){
  case "snack":
  console.log("Cashier: \"Funnel Cake fries are back!\"");
  let option_new = readlineSync.question("Try this: yes or no? ")
  switch (option_new){
  case "no":
  console.log("Please select another snack!");
  break;
  case "yes":
    let option_s = readlineSync.question("Would you like to try an apple pie for $1?: yes or no? ")
switch(option_s){
    case "yes":
    console.log("Sounds good, your total is $2.27!");
    break;
    case "no":
    console.log("Sounds good, your total is $2.07!");
    break;
    default:
      console.log( "Please scroll to the top and start again!" );
}
}

}
switch(option){
  case "sides":
  let option_side = readlineSync.question('french fries or onion rings? ');
  case "french fries":
  let option_size = readlineSync.question('small, medium or large? ')
  case "onion rings":
  switch(option_size){
  case "small":
  console.log("Sounds good, your total is $1.73.");
  break;
  case "medium":
  console.log("Sounds good, your total is $2.23.");
  break;
  case "large":
  console.log("Sounds good, your total is $3.49.");
  break;
  default:
    console.log( "Please scroll to the top and start again! ");

}
}

switch(option){
  case "drinks":
  let option_drink = readlineSync.question('Would you like coke, sprite, fanta or root beer ')
  case 'coke':
  case 'sprite':
  case 'fanta':
  case 'root beer':

  let option_size = readlineSync.question('small, medium or large? ')
  switch(option_size){
    case "small":
    console.log("Sounds good, your total is $1.73.");
    break;
    case "medium":
    console.log("Sounds good, your total is $2.23.");
    break;
    case "large":
    console.log("Sounds good, your total is $3.49.");
    break;

}
}

//  default:
// console.log("Try again: Please type a valid input");
