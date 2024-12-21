/*-------------------- hamburgeer icon ---------------------*/ 
function toggleHamburgerIcon(toggleHamburger) {
  toggleHamburger.classList.toggle("change");
}


/*-------------------- hamburgeer icon show mobile navbar ---------------------*/ 
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


/*-------------------- close mobile navbar if width > 672 ---------------------*/ 
function handleResize() {
  const width = window.innerWidth;

  if (width > 672) {
    let mobilenav = document.getElementById("mobilenav");
    mobilenav.style.display = 'none'; // ธีมสำหรับหน้าจอเล็ก
  }
}

window.addEventListener('resize', handleResize);

// เรียกฟังก์ชันครั้งแรกเพื่อกำหนดธีมตอนโหลด
handleResize();

//totop
let backtotop = document.getElementById("backtotop");
function scrollfunction(){
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
    backtotop.style.display = "block";
  }else{
    backtotop.style.display = "none";
  }
}

function totop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollfunction();
}