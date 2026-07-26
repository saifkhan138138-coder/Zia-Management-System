function saveRecord(){

let sale = Number(document.getElementById("sale").value) || 0;
let due = Number(document.getElementById("due").value) || 0;
let food = Number(document.getElementById("food").value) || 0;
let maintenance = Number(document.getElementById("maintenance").value) || 0;
let fuel = Number(document.getElementById("fuel").value) || 0;
let cash = Number(document.getElementById("cash").value) || 0;

let expense = food + maintenance + fuel;

document.getElementById("saleCard").innerHTML = "Rs. " + sale;
document.getElementById("expenseCard").innerHTML = "Rs. " + expense;
document.getElementById("cashCard").innerHTML = "Rs. " + cash;

let customer = document.getElementById("customer").value;

if(customer.trim() !== ""){
    document.getElementById("customerCard").innerHTML = "1";
}else{
    document.getElementById("customerCard").innerHTML = "0";
}

alert("Record Saved Successfully!");

}
