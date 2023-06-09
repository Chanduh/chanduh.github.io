const burgerIcon = document.getElementById('burger-icon')
const menu = document.querySelector('nav')
const links = document.querySelectorAll('li')
const header = document.getElementById('header')
const aboutMe = document.getElementById('about-me')

header.addEventListener('click', () => {
  scrollToElement(aboutMe)
})

links.forEach(li => {
  li.addEventListener('click',() => {
    menu.classList.toggle('closed-menu')

  })
})

burgerIcon.addEventListener('click', ()=>{
  menu.classList.toggle('closed-menu')
})

function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop
  });
}