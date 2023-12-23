/* 5. Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and returns the modified string. Otherwise, it returns the original string without any changes*/


function capitalizeName(name) {
    
    const modifiedName =
      name.charAt(0).toUpperCase() + name.slice(1); 
  
    return modifiedName;
  }
  
  const userInput = "devraj";
  const capitalizedUserInput = capitalizeName(userInput);
  
  console.log(`Original Name: ${userInput}`);
  console.log(`Capitalized Name: ${capitalizedUserInput}`);
  