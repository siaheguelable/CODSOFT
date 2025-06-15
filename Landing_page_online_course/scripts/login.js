// Fake user database (demo only)
const users = [
  { email: "admin@gmail.com", password: "1234" },
  { email: "curtis@gmail.com", password: "pass123" }
];

const loginForm = document.getElementById("loginForm");
const errorEl = document.getElementById("error");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "main_dashbord.html"; // Redirect to the dashboard
    console.log(`<h1>Welcome, ${user.email}</h1>`);
  } else {
    errorEl.textContent = "❌ Invalid email or password!";
  }
});

const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}