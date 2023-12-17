

const menu = document.querySelector('.menu')
const nav =  document.querySelector('header nav')

const activeElements = document.querySelectorAll('.collapse-container');

activeElements.forEach(active => {
  active.addEventListener('click', () => {
    const collapseClick = active.closest('.collapse-container').querySelector('.collapse-click');
    const collapseContainer = active.closest('.collapse-container');
    
    collapseClick.classList.toggle('hidden');
    collapseContainer.classList.toggle('green');

  }); 
});


menu.addEventListener('click', () => {
  nav.classList.toggle('hidden')
  menu.classList.toggle('rotate')
  nav.classList.toggle('appear')
})

