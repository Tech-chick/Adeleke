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

  const scriptURL = '  https://script.google.com/macros/s/AKfycbzazhc4QcsuRtaVb6v1FNSoWXkAFmR3Syo9hFc7whdkHwby2ur2MAClYu2CHCLS6gpi/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>  {
          msg.innerHTML = 'message sent successfully!'
          setTimeout(function(){
              msg.innerHTML = ''
          },5000)
      } )
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
 