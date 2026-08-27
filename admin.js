// STORAGE
let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

// RENDER
function renderNotifications(){
  const list = document.getElementById("notifList");
  const count = document.getElementById("notifCount");

  list.innerHTML = "";

  notifications.forEach(n => {
    const div = document.createElement("div");
    div.className = "notif-item";
    div.innerText = n;
    list.appendChild(div);
  });

  count.innerText = notifications.length;
}

// TOGGLE DROPDOWN
function toggleNotif(){
  const box = document.getElementById("notifDropdown");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// ADD NOTIFICATION (USE ANYWHERE)
function addNotification(message){
  notifications.unshift(message);
  localStorage.setItem("notifications", JSON.stringify(notifications));
  renderNotifications();
}

// CLEAR
function clearNotifications(){
  notifications = [];
  localStorage.removeItem("notifications");
  renderNotifications();
}

// INIT
renderNotifications();

/* ================= TEST EVENTS ================= */
// Example triggers (simulate real system)
setTimeout(() => {
  addNotification("📂 New project uploaded");
}, 2000);

setTimeout(() => {
  addNotification("💬 New client message");
}, 5000);

setTimeout(() => {
  addNotification("💰 Payment received");
}, 8000);