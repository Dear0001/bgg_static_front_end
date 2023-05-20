// let subMenu = document.getElementById("subMenu");

// function toggleMenu() {
//   subMenu.classList.toggle("open-menu");
// }
var timeOutValue = 8400; // SET TIMEOUT (IN MILISECONDS).
var setTimeToHide_ID, myItem;

function showmenu(obj) {
  if (myItem) myItem.style.display = "none";

  myItem = document.getElementById(obj);
  myItem.style.display = "block";
}
// SET TIME TO HIDE MENU LIST.
function setTimeToHide() {
  setTimeToHide_ID = window.setTimeout(HideMenu, timeOutValue);
}

function HideMenu() {
  if (myItem) myItem.style.display = "none";
} // HIDE THE MENU LIST AFTER A SPECIFIED TIME.

function ReSetTimer() {
  if (setTimeToHide_ID) {
    window.clearTimeout(setTimeToHide_ID);
    setTimeToHide_ID = 0;
  }
}
