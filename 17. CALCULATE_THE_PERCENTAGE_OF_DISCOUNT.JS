/* Calculate the percentage of the discount

A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */

const amount = (costPrice,sellingPrice)=>{
 const discountPrice = costPrice - sellingPrice ;
 let discountPercentage =   (discountPrice / costPrice) * 100;
 const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;
 console.log(`The Discounted Price was Rs ${discountPrice}`);
 return roundedDiscountPercentage;
}

let costPrice = 1250; 
let sellingPrice = 960; 

const totalDiscount = amount(costPrice,sellingPrice);
console.log(`The Total Discount Given to you is ${totalDiscount} %`);

  