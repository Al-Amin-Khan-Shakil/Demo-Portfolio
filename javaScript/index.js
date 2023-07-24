const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuLink1 = document.getElementById("menu-link1");
const menuLink2 = document.getElementById("menu-link2");
const menuLink3 = document.getElementById("menu-link3");
const navBar = document.getElementById("navbar");

function checkDisplayWidth() {
  openMenu.onclick = revelMenu;
  closeMenu.onclick = removeMenu;

  if (window.innerWidth < 768) {
    function revelMenu() {
      navBar.style.left = "0";
    }
    
    function removeMenu() {
      navBar.style.left = "100%";
    }
    
    document.onclick = function moveMenu(event) {
      switch (event.target) {
        case menuLink1:
        case menuLink2:
        case menuLink3:
          navBar.style.left = "100%";
          break;
        default:
      }
    }
  }
}