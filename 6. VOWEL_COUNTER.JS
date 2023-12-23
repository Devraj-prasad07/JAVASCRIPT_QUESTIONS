/* 6. Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted */

function vowelsInName(name) {
  name = name.toLowerCase(); // Changing the name format to lowercase if it is in uppercase.
  let vowelCount = 0;
  for (let i = 0; i < name.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(name[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

let result = vowelsInName("Devraj");
console.log(`The Number of vowels in the name is ${result}`);
