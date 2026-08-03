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
