function saveRecord(){

let sale = Number(document.getElementById("sale").value) || 0;
let due = Number(document.getElementById("due").value) || 0;
let food = Number(document.getElementById("food").value) || 0;
let maintenance = Number(document.getElementById("maintenance").value) || 0;
let fuel = Number(document.getElementById("fuel").value) || 0;
let electricity = Number(document.getElementById("electricity").value) || 0;
let salary = Number(document.getElementById("salary").value) || 0;
let rent = Number(document.getElementById("rent").value) || 0;
let other = Number(document.getElementById("other").value) || 0;
let cash = Number(document.getElementById("cash").value) || 0;

let expense =
food +
maintenance +
fuel +
electricity +
salary +
rent +
other;

document.getElementById("saleCard").innerHTML = "Rs. " + sale;
document.getElementById("expenseCard").innerHTML = "Rs. " + expense;
document.getElementById("cashCard").innerHTML = "Rs. " + cash;

let customer = document.getElementById("customer").value.trim();

if(customer==""){
document.getElementById("customerCard").innerHTML="0";
}else{
document.getElementById("customerCard").innerHTML="1";
}

document.getElementById("summaryDate").innerHTML =
document.getElementById("date").value;

document.getElementById("summarySale").innerHTML =
"Rs. "+sale;

document.getElementById("summaryExpense").innerHTML =
"Rs. "+expense;

document.getElementById("summaryCash").innerHTML =
"Rs. "+cash;

document.getElementById("summaryCustomer").innerHTML =
customer=="" ? "0" : "1";

let data={

date:document.getElementById("date").value,
staff:document.getElementById("staff").value,
timeIn:document.getElementById("timeIn").value,
timeOut:document.getElementById("timeOut").value,
sale:sale,
customer:customer,
due:due,
food:food,
maintenance:maintenance,
fuel:fuel,
electricity:electricity,
salary:salary,
rent:rent,
other:other,
cash:cash

};

localStorage.setItem("zmsDailyRecord",JSON.stringify(data));

alert("Record Saved Successfully");

}

function clearForm(){

document.getElementById("date").value="";
document.getElementById("staff").value="";
document.getElementById("timeIn").value="";
document.getElementById("timeOut").value="";
document.getElementById("sale").value="";
document.getElementById("customer").value="";
document.getElementById("due").value="";
document.getElementById("food").value="";
document.getElementById("maintenance").value="";
document.getElementById("fuel").value="";
document.getElementById("electricity").value="";
document.getElementById("salary").value="";
document.getElementById("rent").value="";
document.getElementById("other").value="";
document.getElementById("cash").value="";

alert("Form Cleared");

}
