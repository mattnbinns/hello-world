let usersName = prompt("What is your name?");
console.log(usersName);
document.write("Hello " + usersName + " welcome to my page!");
let movieQuestion = prompt("Do you like movies?");
console.log(movieQuestion);
if (movieQuestion == "Yes") {
    alert("That's awesome! " + " Well, " + usersName + " since you like movies, you should check out our Moive Catalog!")
}
else if(movieQuestion == "yes"){
    alert("That's awesome! " + " Well, " + usersName + " since you like movies, you should check out our Moive Catalog!")
}
else if(movieQuestion == "YES"){
    alert("That's awesome! " + " Well, " + usersName + " since you like movies, you should check out our Moive Catalog!")
}
else if(movieQuestion == "Maybe"){
    alert("That's awesome! " + " Well, " + usersName + " you should check out our Moive Catalog, maybe you'll find something you may like!")
}
else if(movieQuestion == "maybe"){
    alert("That's awesome! " + " Well, " + usersName + " you should check out our Moive Catalog, maybe you'll find something you may like!")
}
else if(movieQuestion == "MAYBE"){
    alert("That's awesome! " + " Well, " + usersName + " you should check out our Moive Catalog, maybe you'll find something you may like!")
}
else { alert("Sorry to hear that.") }
