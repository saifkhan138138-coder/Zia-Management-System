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
