// C H A L L E N G E   1   - reverse a string 

// 1. First split the string to individual letters using split() method
// 2. reverse the individual letters using reverse() method 
// 3. jping the revetsed lettters back together into one word

function reverseString(str) {

    return str.split('').reverse().join('');
    
    }
    console.log(reverseString("Hello, Phiwokuhle"));
    console.log(reverseString('Enjoy your day Phiwo!'));
    console.log(reverseString("Melsoft"));

//  C H A L L E N G E   2    -  count vowels 

// Write a program that takes a string as input and prints the number of vowels in the string.

function countVowels(string) {
    
    let vowels = [];                                             // Create an empty array to store the vowels.
    for (let i = 0; i < string.length; i++) {                   // Iterate through the string, adding each vowel to the vowels array.
      let character = string[i];
      if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
        vowels.push(character);
      }
    }
  
    // Return the length of the vowels array.
    return vowels.length;
  }
//   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    // Prompt the user to enter a string.
    var string = prompt("Enter a string: ");

    // Count the number of vowels in the string and print it to the console.
    var numberOfVowels = countVowels(string);
    console.log("The number of vowels in the string is: " + numberOfVowels);

  console.log(countVowels('Teboho'));

  