const prev = document.querySelector('.prev')
const sig = document.querySelector('.sig')
const slider = document.querySelector('.slider-pizzas')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 900
})
sig.addEventListener('click', () => {
    slider.scrollLeft += 900
})