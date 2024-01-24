/* Count the occurrences.

You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.*/

const string = " In the quiet village, nestled between rolling hills, time seemed to slow. Residents shared stories of bygone days, the air filled with the aroma of freshly baked bread. A babbling brook meandered through, whispering secrets to ancient trees. Each sunrise painted the sky, weaving a tapestry of colors."

function countWord(string) {
  const words = string.split(" ");
  const map = new Map();

  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}

console.log(countWord(string));