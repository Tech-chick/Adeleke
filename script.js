const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () =>{
 hamburger.classList.toggle("active");
 navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.
  addEventListener("click", () => {
      hamburger.classList.remove("active");
      navBar.classList.remove("active");
  }))



  