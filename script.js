document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("todaySale").innerText = "Rs. 0";
    document.getElementById("customers").innerText = "0";
    document.getElementById("expenses").innerText = "Rs. 0";
    document.getElementById("cash").innerText = "Rs. 0";

});
document.getElementById("saveBtn").addEventListener("click", function () {

    const record = {
        date: document.getElementById("date").value,
        staff: document.getElementById("staff").value,
        timeIn: document.getElementById("timeIn").value,
        timeOut: document.getElementById("timeOut").value,
        sale: document.getElementById("sale").value,
        customer: document.getElementById("customer").value,
        due: document.getElementById("due").value,
        food: document.getElementById("food").value,
        maintenance: document.getElementById("maintenance").value,
        fuel: document.getElementById("fuel").value,
        cashInHand: document.getElementById("cashInHand").value
    };

    localStorage.setItem("zmsRecord", JSON.stringify(record));

    alert("Record Saved Successfully!");
});
window.addEventListener("load", function () {

    const saved = localStorage.getItem("zmsRecord");

    if (!saved) return;

    const record = JSON.parse(saved);

    document.getElementById("date").value = record.date || "";
    document.getElementById("staff").value = record.staff || "";
    document.getElementById("timeIn").value = record.timeIn || "";
    document.getElementById("timeOut").value = record.timeOut || "";
    document.getElementById("sale").value = record.sale || "";
    document.getElementById("customer").value = record.customer || "";
    document.getElementById("due").value = record.due || "";
    document.getElementById("food").value = record.food || "";
    document.getElementById("maintenance").value = record.maintenance || "";
    document.getElementById("fuel").value = record.fuel || "";
    document.getElementById("cashInHand").value = record.cashInHand || "";

    document.getElementById("todaySale").innerText = "Rs. " + (record.sale || 0);

    const expenses =
        (Number(record.food) || 0) +
        (Number(record.maintenance) || 0) +
        (Number(record.fuel) || 0);

    document.getElementById("expenses").innerText = "Rs. " + expenses;
    document.getElementById("cash").innerText = "Rs. " + (record.cashInHand || 0);

});
document.getElementById("saveAttendance").addEventListener("click", function () {

    const attendance = {
        date: document.getElementById("attDate").value,
        staff: document.getElementById("attStaff").value,
        status: document.getElementById("attStatus").value
    };

    localStorage.setItem("attendanceRecord", JSON.stringify(attendance));

    alert("Attendance Saved Successfully!");

});
document.getElementById("saveSale").addEventListener("click", function () {

    const saleRecord = {
        date: document.getElementById("saleDate").value,
        customer: document.getElementById("saleCustomer").value,
        amount: document.getElementById("saleAmount").value,
        received: document.getElementById("saleReceived").value,
        due: document.getElementById("saleDue").value
    };

    localStorage.setItem("saleRecord", JSON.stringify(saleRecord));

    document.getElementById("todaySale").innerText =
        "Rs. " + (saleRecord.amount || 0);

    alert("Sale Saved Successfully!");

});
document.getElementById("saveExpense").addEventListener("click", function () {

    const expenseRecord = {
        date: document.getElementById("expenseDate").value,
        name: document.getElementById("expenseName").value,
        amount: document.getElementById("expenseAmount").value
    };

    localStorage.setItem("expenseRecord", JSON.stringify(expenseRecord));

    document.getElementById("expenses").innerText =
        "Rs. " + (expenseRecord.amount || 0);

    alert("Expense Saved Successfully!");

});
document.getElementById("saveProduct").addEventListener("click", function () {

    const product = {
        name: document.getElementById("productName").value,
        qty: document.getElementById("productQty").value,
        price: document.getElementById("productPrice").value
    };

    let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    inventory.push(product);

    localStorage.setItem("inventory", JSON.stringify(inventory));

    alert("Product Saved Successfully!");

    document.getElementById("productName").value = "";
    document.getElementById("productQty").value = "";
    document.getElementById("productPrice").value = "";

});
window.addEventListener("load", function () {

    let saleData = JSON.parse(localStorage.getItem("saleRecord"));
    let expenseData = JSON.parse(localStorage.getItem("expenseRecord"));

    let sale = 0;
    let expense = 0;

    if(saleData){
        sale = Number(saleData.amount) || 0;
    }

    if(expenseData){
        expense = Number(expenseData.amount) || 0;
    }

    let cashBalance = sale - expense;

    document.getElementById("reportSale").innerText =
        "Rs. " + sale;

    document.getElementById("reportExpense").innerText =
        "Rs. " + expense;

    document.getElementById("reportCash").innerText =
        "Rs. " + cashBalance;

});
window.addEventListener("load", function () {

    let saleData = JSON.parse(localStorage.getItem("saleRecord"));
    let expenseData = JSON.parse(localStorage.getItem("expenseRecord"));

    let totalSale = 0;
    let totalExpense = 0;

    if(saleData){
        totalSale = Number(saleData.amount) || 0;
    }

    if(expenseData){
        totalExpense = Number(expenseData.amount) || 0;
    }

    let balance = totalSale - totalExpense;

    document.getElementById("monthSale").innerText =
    "Total Sale: Rs. " + totalSale;

    document.getElementById("monthExpense").innerText =
    "Total Expense: Rs. " + totalExpense;

    document.getElementById("monthCash").innerText =
    "Balance: Rs. " + balance;

});
document.getElementById("saveSalary").addEventListener("click", function () {

    const salaryRecord = {

        staff: document.getElementById("salaryStaff").value,

        salary: document.getElementById("salaryAmount").value,

        paid: document.getElementById("salaryPaid").value,

        due: document.getElementById("salaryDue").value

    };


    localStorage.setItem(
        "salaryRecord",
        JSON.stringify(salaryRecord)
    );


    alert("Salary Saved Successfully!");

});
window.addEventListener("load", function () {

    let salaryData = JSON.parse(localStorage.getItem("salaryRecord"));

    let attendanceData = JSON.parse(localStorage.getItem("attendanceRecord"));


    if(salaryData){

        document.getElementById("staffNameReport").innerText =
        "Staff Name: " + (salaryData.staff || "-");


        document.getElementById("staffSalaryReport").innerText =
        "Salary: Rs. " + (salaryData.salary || 0);


        document.getElementById("staffDueReport").innerText =
        "Due: Rs. " + (salaryData.due || 0);

    }


    if(attendanceData){

        document.getElementById("staffAttendanceReport").innerText =
        "Attendance: " + (attendanceData.status || "-");

    }

});
document.getElementById("backupBtn").addEventListener("click", function(){

    let backupData = {

        dailyRecord: localStorage.getItem("zmsRecord"),

        attendance: localStorage.getItem("attendanceRecord"),

        sale: localStorage.getItem("saleRecord"),

        expense: localStorage.getItem("expenseRecord"),

        inventory: localStorage.getItem("inventory"),

        salary: localStorage.getItem("salaryRecord")

    };


    let file = new Blob(
        [JSON.stringify(backupData, null, 2)],
        {type:"application/json"}
    );


    let link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = "ZMS_Backup.json";

    link.click();


});
document.getElementById("restoreBtn").addEventListener("click", function(){

    let fileInput = document.getElementById("restoreFile");

    let file = fileInput.files[0];


    if(!file){

        alert("Please select backup file");

        return;

    }


    let reader = new FileReader();


    reader.onload = function(e){

        let data = JSON.parse(e.target.result);


        if(data.dailyRecord)
        localStorage.setItem("zmsRecord", data.dailyRecord);


        if(data.attendance)
        localStorage.setItem("attendanceRecord", data.attendance);


        if(data.sale)
        localStorage.setItem("saleRecord", data.sale);


        if(data.expense)
        localStorage.setItem("expenseRecord", data.expense);


        if(data.inventory)
        localStorage.setItem("inventory", data.inventory);


        if(data.salary)
        localStorage.setItem("salaryRecord", data.salary);


        alert("Backup Restored Successfully!");

        location.reload();

    };


    reader.readAsText(file);

});
if ("serviceWorker" in navigator) {

    window.addEventListener("load", function(){

        navigator.serviceWorker.register("service-worker.js")
        .then(function(){

            console.log("ZMS Service Worker Registered");

        })
        .catch(function(error){

            console.log("Service Worker Error:", error);

        });

    });

}
