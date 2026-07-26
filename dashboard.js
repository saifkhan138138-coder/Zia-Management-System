function saveRecord() {

    const today = new Date().toLocaleDateString();

    localStorage.setItem("zmsRecord", today);

    document.getElementById("savedRecord").innerHTML =
        "Last Saved Record: " + today;

    alert("Record Saved Successfully!");
}

window.onload = function () {

    let record = localStorage.getItem("zmsRecord");

    if(record){
        document.getElementById("savedRecord").innerHTML =
            "Last Saved Record: " + record;
    }

}
