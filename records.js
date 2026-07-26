function loadRecords() {

let table = document.getElementById("recordsTable");

table.innerHTML = "";

let data = JSON.parse(localStorage.getItem("zmsRecords")) || [];

if(data.length===0){

table.innerHTML = `
<tr>
<td colspan="6" style="text-align:center;">
No Records Found
</td>
</tr>
`;

return;

}

data.forEach((record,index)=>{

let expense =
Number(record.food||0)+
Number(record.maintenance||0)+
Number(record.fuel||0)+
Number(record.electricity||0)+
Number(record.salary||0)+
Number(record.rent||0)+
Number(record.other||0);

table.innerHTML += `

<tr>

<td>${record.date}</td>

<td>${record.customer}</td>

<td>Rs. ${record.sale}</td>

<td>Rs. ${expense}</td>

<td>Rs. ${record.cash}</td>

<td>

<button class="save-btn"
onclick="viewRecord(${index})">

👁 View

</button>

<button class="save-btn"
onclick="editRecord(${index})">

✏ Edit

</button>

<button class="clear-btn"
onclick="deleteRecord(${index})">

🗑 Delete

</button>

</td>

</tr>

`;

});

}

function searchRecord(){

let searchDate =
document.getElementById("searchDate").value;

let customer =
document.getElementById("searchCustomer").value.toLowerCase();

let table =
document.getElementById("recordsTable");

table.innerHTML="";

let data =
JSON.parse(localStorage.getItem("zmsRecords")) || [];

let result =
data.filter(record=>{

return(

(searchDate=="" || record.date===searchDate)

&&

(customer=="" ||

record.customer.toLowerCase().includes(customer))

);

});

if(result.length===0){

table.innerHTML=`
<tr>
<td colspan="6" style="text-align:center;">
No Matching Record
</td>
</tr>
`;

return;

  }
result.forEach((record,index)=>{

let expense =
Number(record.food||0)+
Number(record.maintenance||0)+
Number(record.fuel||0)+
Number(record.electricity||0)+
Number(record.salary||0)+
Number(record.rent||0)+
Number(record.other||0);

table.innerHTML += `

<tr>

<td>${record.date}</td>

<td>${record.customer}</td>

<td>Rs. ${record.sale}</td>

<td>Rs. ${expense}</td>

<td>Rs. ${record.cash}</td>

<td>

<button class="save-btn"
onclick="viewRecord(${index})">
👁 View
</button>

<button class="save-btn"
onclick="editRecord(${index})">
✏ Edit
</button>

<button class="clear-btn"
onclick="deleteRecord(${index})">
🗑 Delete
</button>

</td>

</tr>

`;

});

}

function viewRecord(index){

let data =
JSON.parse(localStorage.getItem("zmsRecords")) || [];

let record = data[index];

alert(

"Date : " + record.date +

"\nCustomer : " + record.customer +

"\nSale : Rs. " + record.sale +

"\nCash : Rs. " + record.cash

);

}

function editRecord(index){

alert("Edit feature will be added in Version 2");

}

function deleteRecord(index){

let data =
JSON.parse(localStorage.getItem("zmsRecords")) || [];

if(confirm("Delete this record?")){

data.splice(index,1);

localStorage.setItem(
"zmsRecords",
JSON.stringify(data)
);

loadRecords();

}

}

window.onload=function(){

loadRecords();

};
