document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", () => {
        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        if (username === "" || password === "") {
            alert("Please enter Username and Password.");
            return;
        }

        // Temporary Login
        alert("Login Successful!");

        // بعد میں یہاں Firebase Login آئے گا
        window.location.href = "dashboard.html";
    });
});
