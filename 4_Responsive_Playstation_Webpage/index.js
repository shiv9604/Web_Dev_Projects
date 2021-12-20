// javascript for the webpage
var menuList = document.getElementById("menuList");

var menuicon = document.getElementById('ham');

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } 
  else {
    menuList.style.maxHeight = "0px";
  }
}
