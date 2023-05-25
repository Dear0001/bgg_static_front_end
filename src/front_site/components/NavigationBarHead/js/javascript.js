let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// toggle_menu_wrap
// $(document).ready(function () {
//   $("#nav-pro").mouseover(function () {
//     $("#toggleMenu").stop().slideDown("slow");
//   });
//   $("#nav-pro").mouseout(function () {
//     $("#toggleMenu").slideUp("slow");
//   });
// });

// $(document).ready(function () {
//   $("#help-nav-li").mouseover(function () {
//     $("#helpMenu").stop().slideDown("slow");
//   });
//   $("#help-nav-li").mouseout(function () {
//     $("#helpMenu").slideUp("slow");
//   });
// });

// $(document).ready(function () {
//   $("#login-nav-li").mouseover(function () {
//     $("#loginMenu").stop().slideDown("slow");
//   });
//   $("#login-nav-li").mouseout(function () {
//     $("#loginMenu").slideUp("slow");
//   });
// });

var timeOutValue = 8400; // SET TIMEOUT (IN MILISECONDS).
var setTimeToHide_ID, mItem;

function showmenu(obj) {
  if (mItem) mItem.style.display = "none";

  mItem = document.getElementById(obj);
  mItem.style.display = "block";
}
// SET TIME TO HIDE MENU LIST.
function setTimeToHide() {
  setTimeToHide_ID = window.setTimeout(HideMenu, timeOutValue);
}

function HideMenu() {
  if (mItem) mItem.style.display = "none";
} // HIDE THE MENU LIST AFTER A SPECIFIED TIME.

function ReSetTimer() {
  if (setTimeToHide_ID) {
    window.clearTimeout(setTimeToHide_ID);
    setTimeToHide_ID = 0;
  }
}

