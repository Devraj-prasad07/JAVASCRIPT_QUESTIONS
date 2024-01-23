/* Build a feature for Store's Inventory.

Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */

let inventory = {
    iphone : 699,
    ipad : 399,
    mackbook : 899,
};

function convertToRupees(inventory,exchangeRate){
    const convertedInventory = Object.keys(inventory).map((item) =>({
    [item]: inventory[item] * exchangeRate,
    }));
    return Object.assign({},...convertedInventory);
}

const exchangeRate = 80;
console.log(convertToRupees(inventory,exchangeRate));
  

