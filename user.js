// const toggleButton = document.getElementsByClassName('bx bx-menu')[0]
//     const navbarLinks = document.getElementsByClassName('sidebar')[0]
   
//     toggleButton.addEventListener('click', () => {
//         navbarLinks.classList.toggle('active')
//     }) 

var MenuItem = document.getElementById("sidebar");

MenuItem.style.display = "none";

function menutoggle() {
  if (MenuItem.style.display == "none")
   MenuItem.style.display = "block";
  else {
    MenuItem.style.display = "none";
  }
}
