const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

module.exports = handleLogout;
