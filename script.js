// Use the prompt() function to get user input
let userName = prompt("Please enter your name:");

// Check if the user entered something or cancelled the prompt
if (userName !== null && userName !== "") {
    // Display the input on the HTML page
    document.getElementById("output").textContent = "Hello, " + userName + "!";
} else {
    document.getElementById("output").textContent = "You did not enter a name.";
}

// You can now use the 'userName' variable in other parts of your script
console.log("The user's name is: " + userName);