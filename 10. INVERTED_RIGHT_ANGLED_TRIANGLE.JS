/* Inverted right-angled triangle pattern with asterisks
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks
with i rows. */

  function invertedTriangle(star){
    for(let i = 1; i <= star; i++){
        for (let j = 1; j <= star - i + 1 ; j++ ){
            process.stdout.write("*");
        }
        console.log();
    }
  }

  invertedTriangle(7)
 
    


