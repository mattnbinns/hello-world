'use strict';
let usersName;
function greetUser() {
    usersName = prompt("What is your name?");
    if (usersName == "") {
        usersName = prompt("Please enter your name.");
    } 
    console.log(usersName);
    document.write("Hello " + usersName + " welcome to my page!");
    return usersName;
}
greetUser();

function triviaMessage() {
    let movieQuestion = prompt("Do you like movies?").toLowerCase();
    console.log(movieQuestion);
    if (movieQuestion == "yes" || movieQuestion == "maybe") {
        alert("That's awesome! Well, " + usersName + " lets see if you can answer this movie trivia question!");
    }
    else {
        alert("Sorry to hear that.");
    }
    let trivia = prompt("What did Zach Galifianakis call the baby in the movie The Hangover?").toLocaleLowerCase();
    if (trivia == "carlos") {
        alert("That's correct! Great job!");
    }
    else {
        alert("Sorry not quite. Would you like to try again?")
    }
}
triviaMessage();
