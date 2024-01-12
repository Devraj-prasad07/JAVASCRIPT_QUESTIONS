/*  Build a banking application

A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.*/

const customer = {
  name: "Devraj Prasad",
  balance: 5000,
};

function displayBalance() {
  console.log(
    `Dear ${customer.name} your Account Balance is  Rs ${customer.balance}.`
  );
}

function deposit(amount) {
  if (typeof amount === "number" && amount >= 0) {
    customer.balance = customer.balance + amount;
    console.log(`Your A/C is Credited by INR ${amount}`);
    displayBalance();
  } else {
    console.log("You have Entered Wrong Input Please Try Again!!");
  }
}

function withdrawal(amount) {
  if (typeof amount === "number" && amount >= 0) {
    customer.balance = customer.balance - amount;
    console.log(`Your A/C is Debited by INR ${amount}`)
    displayBalance()
  } else {
    console.log("You have Entered Wrong Input Please Try Again!!");
  }
}


