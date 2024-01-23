/*  Random Number Generator with Delay and Progress Indication:

The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number. */


function generateRandomNo(delayInSeconds){
    let timeRemaining = delayInSeconds;
    const countdownInterval = setInterval(() =>{
        console.log(`Time remaining : ${timeRemaining} seconds`);

        timeRemaining--;

        if(timeRemaining === 0){
            clearInterval(countdownInterval);
            const randomNo = Math.floor(Math.random() * 100) + 1;
            console.log(`Random no generated : ${randomNo}`);
        }
    },1000); 
}

const delayInSeconds = 3;
generateRandomNo(delayInSeconds);


