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
window.onload = function () {

let data = localStorage.getItem("zmsDailyRecord");

if(data){

data = JSON.parse(data);

// Form Restore
document.getElementById("date").value = data.date || "";
document.getElementById("staff").value = data.staff || "";
document.getElementById("timeIn").value = data.timeIn || "";
document.getElementById("timeOut").value = data.timeOut || "";
document.getElementById("sale").value = data.sale || "";
document.getElementById("customer").value = data.customer || "";
document.getElementById("due").value = data.due || "";
document.getElementById("food").value = data.food || "";
document.getElementById("maintenance").value = data.maintenance || "";
document.getElementById("fuel").value = data.fuel || "";
document.getElementById("electricity").value = data.electricity || "";
document.getElementById("salary").value = data.salary || "";
document.getElementById("rent").value = data.rent || "";
document.getElementById("other").value = data.other || "";
document.getElementById("cash").value = data.cash || "";

// Cards Restore
let expense =
Number(data.food||0)+
Number(data.maintenance||0)+
Number(data.fuel||0)+
Number(data.electricity||0)+
Number(data.salary||0)+
Number(data.rent||0)+
Number(data.other||0);

document.getElementById("saleCard").innerHTML =
"Rs. " + data.sale;

document.getElementById("expenseCard").innerHTML =
"Rs. " + expense;

document.getElementById("cashCard").innerHTML =
"Rs. " + data.cash;

document.getElementById("customerCard").innerHTML =
data.customer ? "1" : "0";

// Summary Restore
document.getElementById("summaryDate").innerHTML =
data.date || "-";

document.getElementById("summarySale").innerHTML =
"Rs. " + data.sale;

document.getElementById("summaryExpense").innerHTML =
"Rs. " + expense;

document.getElementById("summaryCash").innerHTML =
"Rs. " + data.cash;

document.getElementById("summaryCustomer").innerHTML =
data.customer ? "1" : "0";

}

};
