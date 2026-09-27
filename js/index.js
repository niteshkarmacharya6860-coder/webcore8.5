const show_more = document.querySelector('.show__more');
const show_more_img = document.querySelector('.show__more img');
const show_more_text = document.querySelector('.show__more span');
const swiper_container = document.querySelector('.slider__contents');
const slides = document.querySelectorAll('.swiper-slide');

function initswiper() {
	swiper = new Swiper('.swiper', {
		slidesPerView: 1.2,
		spaceBetween: 15,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

function initSlides() {
	if (window.innerWidth < 1024 && window.innerWidth > 512) {
		slides.forEach((item, index) => { item.style.display = index < 6 ? 'block' : 'none'; });
	} else{
		slides.forEach((item, index) => { item.style.display = index < 8 ? 'block' : 'none'; });
	}
};

function toggleShowMore() {
	show_more_text.textContent = show_more_text.textContent === 'Show More' ? 'Hide' : 'Show More';
	show_more_img.style.transform = 'rotate(180deg)';
}

show_more.addEventListener('click', function (e) {
	e.preventDefault();
	toggleShowMore();

	slides.forEach((item, index) => {
		if (window.innerWidth < 1024 && window.innerWidth > 512) {
			if (index >= 6) {
				item.style.display = item.style.display === "none" ? "block" : "none";
			}
		} else{
			if (index >= 8) {
				item.style.display = item.style.display === "none" ? "block" : "none";
			}
		}
	});
});

if (window.innerWidth <= 512) {
	swiper_container.classList.add('swiper');
	initswiper();
} else {
	initSlides();
}