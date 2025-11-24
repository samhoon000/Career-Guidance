const BASE_URL = "http://localhost:5000/api/auth";

// SIGNUP FUNCTION
async function signup() {
    const username = document.getElementById("username").value;
    const email    = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (res.ok) {
        alert("Signup successful! Please login.");
    } else {
        alert(data.message || "Signup failed");
    }
}

// LOGIN FUNCTION
async function login() {
    const emailOrUsername = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrUsername, password })
    });

    const data = await res.json();

    if (res.ok) {
        // Save JWT token for authentication
        localStorage.setItem("token", data.token);

        // Save username to show on homepage
        localStorage.setItem("username", data.username);

        window.location.href = "home.html"; // redirect
    } else {
        alert(data.message || "Login failed");
    }
}
