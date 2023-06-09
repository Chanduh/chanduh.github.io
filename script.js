const burgerIcon = document.getElementById('burger-icon')
const menu = document.querySelector('nav')
const links = document.querySelectorAll('li')

links.forEach(li => {
  li.addEventListener('click',() => {
    menu.classList.toggle('closed-menu')

  })
})

burgerIcon.addEventListener('click', ()=>{
  menu.classList.toggle('closed-menu')
})