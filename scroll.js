document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  prevButton.addEventListener('click', function () {
    scrollSlider(-1.1);
  });
  nextButton.addEventListener('click', function () {
    scrollSlider(1.075);
  });
  function scrollSlider(direction) {
    const scrollAmount = slider.clientWidth;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
});



const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.opacity')
elements.forEach((element) => myObserver.observe(element))