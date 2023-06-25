const toggleButton = document.getElementsByClassName('bx bx-menu')[0]
    const navbarLinks = document.getElementsByClassName('sidebar')[0]
   
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    }) 