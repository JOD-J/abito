var swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 6,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
});

const btnElem = document.querySelector('.menu-button');
const navbarPaneleElem = document.querySelector('.navbar-panele');
const closeMenuElem = document.querySelector('.close-menu');

btnElem.addEventListener('click', () => {
	navbarPaneleElem.classList.toggle('is-open')
});
closeMenuElem.addEventListener('click', () => {
	navbarPaneleElem.classList.toggle('is-open')
});