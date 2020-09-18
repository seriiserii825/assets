document.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth > 576) {
		let tl = gsap.timeline();
		tl.from(".home-intro__img", {
			opacity: 0,
			duration: 1,
			ease: "power4.inOut"
		});
		tl.from('.main-header .logo svg', {
			scale: 40,
			x: 800,
			y: 900,
			opacity: 0,
			duration: 1.4,
			ease: "power2.inOut"
		}, "-=0.4");
		tl.from(".home-intro__logo", {
			opacity: 0,
			y: 80,
			duration: 1,
			ease: "power2.inOut"
		});
		tl.from(".home-intro__title", {
			opacity: 0,
			y: -80,
			duration: 1,
			ease: "power2.inOut"
		}, "-=1");

		let pageIntroTl = gsap.timeline();

		pageIntroTl.from(".page-intro img", {
			opacity: 0,
			duration: 1,
			ease: "power2.inOut"
		});
		pageIntroTl.from(".page-intro svg", {
			opacity: 0,
			y: -60,
			duration: 1,
			ease: "power2.inOut"
		}, "+1");
		pageIntroTl.from(".page-intro__title", {
			opacity: 0,
			y: 100,
			duration: 1,
			ease: "power2.out"
		}, "+1.6");
		pageIntroTl.from(".page-intro__content p", {
			opacity: 0,
			y: 100,
			duration: 1,
			ease: "power2.out"
		}, "-=0.6");

		gsap.registerPlugin(ScrollTrigger);
		gsap.from(".negozi-block__item", {
			scrollTrigger: {
				start: "top: 100%",
				trigger: ".negozi-block__item",
			},
			opacity: 0,
			y: 80,
			duration: 0.4,
			stagger: 0.4
		});
		gsap.to(".come-funziona img", {
			scrollTrigger: {
				start: "top: 40%",
				trigger: ".come-funziona img",
				scrub: 2,
				// markers: true
			},
			xPercent: -30,
		});
		gsap.from(".sponsors a", {
			scrollTrigger: {
				start: "top: 80%",
				trigger: ".sponsors a",
			},
			opacity: 0,
			x: 80,
			duration: 0.3,
			stagger: 0.3
		});

		gsap.from(".address li:nth-of-type(odd)", {
			scrollTrigger: {
				start: "top: 80%",
				trigger: ".address li:nth-of-type(odd)",
			},
			opacity: 0,
			x: 80,
			duration: 0.5,
			stagger: 0.5
		});

		gsap.from(".address li:nth-of-type(even)", {
			scrollTrigger: {
				start: "top: 80%",
				trigger: ".address li:nth-of-type(even)",
			},
			opacity: 0,
			x: -80,
			duration: 0.5,
			stagger: 0.5
		});

		gsap.from(".form", {
			scrollTrigger: {
				start: "top: 80%",
				trigger: ".form",
			},
			opacity: 0,
			x: 180,
			duration: 2,
		});
	}
});
jQuery(document).ready(function ($) {
	let closeMenu = function () {
		const mainMenu = $('#js-main-menu');
		$('#js-sandwitch-wrap').on('click', function () {
			if (mainMenu.is(':visible')) {
				mainMenu.css('transform', 'translateX(100%)');
				const removeActive = setTimeout(function () {
					mainMenu.removeClass('active');
					clearTimeout(removeActive);
				}, 600);
			} else {
				mainMenu.addClass('active');
				const addActive = setTimeout(function () {
					mainMenu.css('transform', 'translateX(0)');
					clearTimeout(addActive);
				}, 100);
			}

			$(this).toggleClass('sandwitch--active');
			$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
		});
	};
	closeMenu();

	const svgIcons = $('.negozi-block__item');

	const svgIconsAnimate = svgIcons.find('svg').drawsvg({duration: 400});

	if ($('.negozi-block').length > 0) {
		const negoziBlockOffset = $('.negozi-block').offset().top - 900;
		let flag = true;

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > negoziBlockOffset && flag) {
				svgIconsAnimate.drawsvg('animate');
				flag = false;
				const timeoutAnimate = setTimeout(function () {
					$('.negozi-block__item svg').addClass('colored');
					clearTimeout(timeoutAnimate);
				}, 1800);
			}
		});
	}

	if ($('.cerca-form').length > 0) {
		$('.cerca-form input[type="text"], .cerca-form select').styler();
	}

	let activeMenuItem = function () {
		let siteUrl = location.pathname;
		const mainMenuli = document.querySelectorAll('.main-menu li');

		mainMenuli.forEach((item) => {
			const link = item.querySelector('a');
			const href = link.getAttribute('href');
			if (siteUrl === '/' + href) {
				link.classList.add('active');
			} else if (siteUrl === '/') {
				mainMenuli.forEach((elem, index) => {
					if(index === 0){
						elem.querySelector('a').classList.add('active');
					}
				});
			}
		});
	};
	activeMenuItem();

	window.addEventListener('scroll', function () {
		if(document.documentElement.scrollTop > 500) {
			document.querySelector('#js-to-up').classList.add('fade');
			document.querySelector('#js-to-up').classList.remove('hide');
		}else{
			document.querySelector('#js-to-up').classList.add('hide');
			document.querySelector('#js-to-up').classList.remove('fade');
		}
	});


	document.querySelector('#js-to-up').addEventListener('click', function () {
		window.scrollTo({top: 0, behavior: 'smooth'});
	});
});