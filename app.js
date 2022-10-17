'use strict';
let usersName;
function greetUser() {
    usersName = prompt("What is your name?");
    if (usersName == "") {
        usersName = prompt("Please enter your name.");
    }
    console.log("What is your name? " + usersName);
    document.write("Hello " + usersName + " welcome to my page!");
    return usersName;
}
greetUser();

function triviaMessage() {
    let movieQuestion = prompt("Do you like movies?").toLowerCase();
    console.log("Do you like movies? " + movieQuestion);
    if (movieQuestion == "yes" || movieQuestion == "maybe") {
        alert("That's awesome! Well, " + usersName + " lets see if you can answer this movie trivia question!");
    }
    else {
        alert("Sorry to hear that.");
    }
    let userGuess = prompt("What did Zach Galifianakis call the baby in the movie The Hangover?").toLowerCase();
    let correctAnswer = "carlos".toLowerCase();
    while (userGuess !== correctAnswer) {
        userGuess = prompt("Sorry not quite. Please try again.");
    }
    console.log(userGuess + " Out of loop");
}
triviaMessage();

function popcorn() {
    let popcornBags = prompt("How many bags of popcorn would you like?");
    console.log(popcornBags);

    for (let i = 0; i < popcornBags; i++) {
        console.log(i);
        document.write("<img class=popcorn src='https://media.istockphoto.com/photos/paper-cup-with-a-popcorn-on-white-picture-id1160441778?b=1&k=20&m=1160441778&s=612x612&w=0&h=7Lr5tmJz2UGufM-SwtLw2-Qynq9fKCnSXa8h-SbMLEY=' alt='popcorn picture' />");
    }
}
