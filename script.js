let currentRole = null;

function login() {
  currentRole = document.getElementById("role").value;
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";

  if (currentRole !== "admin") {
    document.getElementById("usersBtn").style.display = "none";
  }
  if (currentRole === "viewer") {
    document.getElementById("settingsBtn").style.display = "none";
  }
}

function logout() {
  location.reload();
}

function show(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}
