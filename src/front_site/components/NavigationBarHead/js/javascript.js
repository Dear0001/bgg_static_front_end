let subMenu = document.getElementById("subMenu");

  function toggleMenu(){
    subMenu.classList.toggle("open-menu");  
  }

  //dropdown login-info
  let loginMenu = document.getElementById("loginMenu");
  function handleOnmouseOver(){
    loginMenu.classList.toggle("open-login");
  
  }
  function handleOnmouseOut(){
    loginMenu.classList.toggle("close-login");
  }
  
//dropdown help-info
let helpMenu = document.getElementById("helpMenu");
function handleOnmouseOverHelp(){
  helpMenu.classList.toggle("open-help");

}
function handleOnmouseOutHelp(){
  helpMenu.classList.toggle("close-help");
}