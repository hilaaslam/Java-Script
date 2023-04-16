//TASK 1

// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// // "Your zakat value is xxx".
 
//   var YourAmount = +prompt("Enter Your Amount");
//   var zakatPercentage = 0.025;
//   console.log(zakatPercentage = 0.025)
//   var result = zakatPercentage * YourAmount ;
//   console.log(zakatPercentage * YourAmount)
//   alert("Your Zakat Value is " + result);
//   console.log("Your Zakat Value is " + result);

//TASK 2
 
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// alert("Fitrah Calculation");
// var familyMembers = prompt("Number Of Members In Your Family");
// var method = prompt("Choose Method Of Paying Fitrah :Wheat,Hunger,Dates,Raisin");
   
// if (method == "Wheat" || method == "wheat") {
//    var price = 250*familyMembers;
//    alert("Your Fitrah Amount Is" +price);
//    }
//    else if (method == "Hunger" || method == "hunger") {
//       var price = 450*familyMembers;
//       alert("Your Fitrah Amount Is" +price);
//    }
//    else if (method == "Dates" || method == "dates") {
//       var price = 2100*familyMembers
//       alert("Your Fitrah Amount Is" +price);
//    }
//    else if (method == "Raisin" || method == "raisin") 
//    {
//       var price = 2800*familyMembers
//       alert("Your Fitrah Amount Is" +price);
//    }
//    else{
//    alert("You Did Not Make Any Choise!");
//    }

 //Task 3:

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// alert ("Secret Number")
// var secretNumber = 7;
// var user = prompt("Enter Any Number Between 1 to 10 :");
//  if (secretNumber ==  user)
//  {
//     alert("Congratulation! Your Guess Is Correct");
//  }
//  else if (secretNumber > user)
//  {
//     alert("You Are Close To Secret Number! Try Again");
//  }
//  else if (secretNumber < askUser)
//  {
//     alert("You Are Close To Secret Number! Try Again");
//  }
// else{
//     alert("Your Number Is Greater Than 10")
// }


//Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// alert("User Name")
// var userName = prompt("Enter Your Name:");
// var firstAlphabet = userName.slice(0,1);
// var Otherwise = userName.slice(1);
// console.log(firstAlphabet.toUpperCase()+Otherwise.toLowerCase());
// alert(firstAlphabet.toUpperCase()+Otherwise.toLowerCase())


// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity

// alert("Contact Numbers And Contact Names")
// var contactNumbers = [];
// var contactNames = [];
// for( var i=0;i<3;i++)
// {
//     var userInput = prompt("Enter Contact Numbers:");
//     var userName = prompt("Enter Contact Names:");
//     contactNumbers.push(userInput);
//     contactNames.push(userName);
// }
// console.log(contactNames,contactNumbers);


// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// alert("Products Wanted")
// alert("Biscuits,Chips,Juices,Chocolates,Jellies")
// var products =["Biscuits,Chips,Juices,Chocolates,Jellies"];
// var position = +prompt("Enter the Position of Product which you want to buy :");
// console.log(products[position]+" is removed from the list");
// products.splice(position,1);
// console.log("Remaining products in the List" +products);
// console.log("Number of products" +products.length);
// alert("Remaining products in the List" +products)


// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// var nationality=prompt("Enter Your Nationality:");
// var gender=prompt("Enter Your Gender:");
// var age= +prompt("Enter Your Age:");
// if(nationality=="Pakistani" || nationality=="pakistani" || nationality=="Indian" || nationality=="indian")
// {
//     if(age<18)
// {
//     alert("You are UnderAge");
//     console.log("You are UnderAge")
// }
//  if(gender=="Male"|| gender=="male" && age>=18)
// {
//     alert("You are eligible to vote, Go to voting site!");
//     console.log("You are eligible to vote, Go to voting site!")
// }
// else if(gender=="Female"|| gender=="female" && age>=18)
// {
//     alert("You are eligible to vote, Go to voting site!");
//     console.log("You are eligible to vote, Go to voting site!")
// }
// }


// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// var worldCupSquad = [ "Babar Azam", "Shadab Khan", "Asif Ali"," Haider Ali", "Haris Rauf", "Iftikhar Ahmed", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz"," Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood", "Usman Qadir"];
// var finalTeamPlayers = worldCupSquad.slice(1,12);
// console.log(worldCupSquad);
// console.log(finalTeamPlayers);

