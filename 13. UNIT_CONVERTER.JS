/* Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenhdit before displaying
it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help the weather station to provide temperature readings that are easily understandable to a wider audience. */

function tempConverter(Celsius){
    let Fahrenheit = (9/5 * Celsius) + 32;
    return Fahrenheit;
}


console.log(`The Conversion in Fahrenheit is: ${tempConverter(45)}`);