/* A restaurant seeks to compute the overall bill for a table, considering the cost of each dish and the number of individuals sharing it. They need a function that accepts the cost of each dish and the number of people involved, returning an object containing the total bill and the individual contribution each person is responsible for.*/


function calculateBill(selectedDishes, numberOfPeople) {

    let totalBill = 0;

    for (const dish of selectedDishes) {
        totalBill = totalBill + menu[dish];
    }

    const individualContribution = totalBill * numberOfPeople;

    return {
        totalBill: individualContribution,
        individualContribution: individualContribution / numberOfPeople
    };
}

const menu = {
    "Biryani": 250,
    "Paneer Tikka": 180,
    "Butter Chicken": 220,
    "Vegetable Biryani": 200,
    "Masala Dosa": 120,
    "Chicken Curry": 240,
    "Chole Bhature": 150,
    "Veg Pulao": 180,
    "Samosa": 20,
    "Gulab Jamun": 30,
};

const selectedDishes = ["Biryani"];
const numberOfPeople = 4;

const totalAmt = calculateBill(selectedDishes, numberOfPeople);
console.log(totalAmt);



