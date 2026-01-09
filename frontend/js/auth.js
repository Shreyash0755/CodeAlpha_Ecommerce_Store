function isLoggedIn() {
  return !!localStorage.getItem("token");
}

function getUser() {
  const u = localStorage.getItem("user");
  return u ? JSON.parse(u) : null;
}

function logout() {
  // Clear auth data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Detect current path and redirect correctly
  if (window.location.pathname.includes("/pages/")) {
    window.location.href = "login.html";
  } else {
    window.location.href = "pages/login.html";
  }
}



