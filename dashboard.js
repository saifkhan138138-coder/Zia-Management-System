function saveRecord() {

    const today = new Date().toLocaleDateString();

    localStorage.setItem("zmsRecord", today);

    alert("Record Saved Successfully!");
}
