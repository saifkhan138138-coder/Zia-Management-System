// Grand Total Calculation

const opening = document.getElementById("opening");
const sales = document.getElementById("sales");
const expenses = document.getElementById("expenses");
const grandTotal = document.getElementById("grandTotal");
const saveBtn = document.getElementById("saveBtn");

function updateTotal() {
    const open = Number(opening.value) || 0;
    const sale = Number(sales.value) || 0;
    const expense = Number(expenses.value) || 0;

    const total = open + sale - expense;

    grandTotal.innerText = "Rs. " + total.toLocaleString();
}

opening.addEventListener("input", updateTotal);
sales.addEventListener("input", updateTotal);
expenses.addEventListener("input", updateTotal);

// Save Record
saveBtn.addEventListener("click", () => {

    const record = {
        date: new Date().toLocaleDateString(),
        opening: opening.value,
        sales: sales.value,
        expenses: expenses.value,
        total: grandTotal.innerText
    };

    localStorage.setItem("todayRecord", JSON.stringify(record));

    alert("Record Saved Successfully ✅");

});
