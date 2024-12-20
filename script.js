function toggleHamburgerIcon(toggleHamburger) {
  toggleHamburger.classList.toggle("change");
}



let hamburgericon = document.getElementById("hamburgericon");

if (hamburgericon){
  hamburgericon.addEventListener("click", function() {
    let mobilenav = document.getElementById("mobilenav");
    if(mobilenav){
      if(mobilenav.style.display === "block"){
        mobilenav.style.display = "none"
      }
      else{ 
        mobilenav.style.display = "block"
      }
    }
  })
}