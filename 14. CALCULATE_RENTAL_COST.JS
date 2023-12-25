/* "A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost.

 The total cost would be the rental cost multiplied by the number of days rented. The rental costs are:
 Economy: Rs. 4000/- per day
 Midsize: Rs. 15000/- per day
 Luxury: Rs. 20000/- per day." */

function rentalData(carType, noOfDays){
    let totalCost = 0;
    if(carType === "economy"){
        totalCost = 4000 * noOfDays;
    } else if(carType === "midsize"){
        totalCost = 15000 * noOfDays;
    } else if (carType === "luxury"){
        totalCost = 20000 * noOfDays;
    } else{
        console.log("wrong Input");
    }
    return totalCost;
}


console.log(rentalData("economy",5));
console.log(rentalData("midsize",5));
console.log(rentalData("luxury",5));