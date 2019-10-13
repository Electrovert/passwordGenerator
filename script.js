function generatePassword() {

    // Allows user to select length of password.
    var userInput = prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
    //  Using parseInt to convert user's string to turn it into a number.
    var numberOfChar = parseInt(userInput);

    // Verifying user input a number between 8 - 128.
    if (numberOfChar < 8 || numberOfChar > 128) {
        alert("Please enter a number between 8 and 128 to continue.");
        prompt("Please enter a number between 8 and 128 to determine the number of characters in your password.");
        parseInt(userInput);
    }

    // Asking user to confirm which options they would like to include in their password.
    var confirmLowerCase = confirm("Would you like to include lowercase letters?");
    var confirmUpperCase = confirm("Would you like to include uppercase letters?");
    var confirmSpecialChar = confirm("Would you like to include special characters?");
    var confirmNumbers = confirm("Would you like to include numbers?");

    // Verifying the user has selected at least one type of necessary character.
    if (confirmLowerCase == false && confirmUpperCase == false && confirmSpecialChar == false && confirmNumbers == false) {
        alert("Please select at least one type of character for your password.");
        confirmLowerCase = confirm("Would you like your password to include lowercase letters?");
        confirmUpperCase = confirm("Would you like your password to include uppercase letters?");
        confirmSpecialChar = confirm("Would you like your password to include special characters?");
        confirmNumbers = confirm("Would you like your password to include numbers?");
    }

    // Possible variables password can/will consist of.
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "!\"#$%&'()*+,";

    // Set the password and characters variables to empty strings.
    var password = "";
    var characters = "";

    // Adds a lowercase letter at random, if desired by the user.
    if (confirmLowerCase == true) {
        password = password + (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
        // Subtract 1 from the number of characters the user selected, as we are adding a random character to the string above
        numberOfChar--;
        // Concatenating the variables
        characters = characters + lowerCase;
    }

    if (confirmUpperCase == true) {
        password = password + (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
        numberOfChar--;
        characters = characters + upperCase;
    }

    if (confirmSpecialChar == true) {
        password = password + (specialChar.charAt(Math.floor(Math.random() * specialChar.length)));
        numberOfChar--;
        characters = characters + specialChar;
    }

    if (confirmNumbers == true) {
        password = password + (numbers.charAt(Math.floor(Math.random() * numbers.length)));
        numberOfChar--;
        characters = characters + numbers;
    }

    // For loop adds aditional random characters until the desired number of characters is reached.
    for (var i = 0; i < numberOfChar; i++) {
        password = password + (characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    // Return is what gives us the password itself.
    return password;
}

// When the user clicks the generate button, the generate function runs.
document.querySelector("#generate").addEventListener("click", function(){
    password = generatePassword();
    document.getElementById("output").value = password;
});


// Setting the copy button as a variable to use in below function.
var copyButton = document.querySelector("#copy");

//Created function to copy the password to the user's clipboard.
function copyToClipboard(){
    // define a variable for the copied password as the output to the text area
    var copiedPassword = document.getElementById("passwordDisplay");
    // select the variable
    copiedPassword.select();
    // Copies password to user's clipboard 
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
    document.execCommand("copy");
    //Advises user their password has been copied, and advises of location.
    alert("Your password has been copied to the clipboard");
}

//Added event to listen for a click on the copy button, and run the copy to clipboard function when selected.
copyButton.addEventListener("click", function(){
    copyToClipboard();
});