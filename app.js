//! I wrote the complete code for the slider 😎😎

"use strict";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imageHolder = document.querySelector(".image-holder");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");

let dotArray = [dot1, dot2, dot3, dot4, dot5];

let i = 0;

let arraay = [
	"img/img1.jpg",
	"img/img2.jpg",
	"img/img3.jpg",
	"img/img4.jpg",
	"img/img5.jpg",
];

next.addEventListener("click", function () {
	i++;
	if (i == 0) {
		imageHolder.src = arraay[0];
	} else if (i < arraay.length) {
		imageHolder.src = arraay[i];
	} else if (i == arraay.length) {
		imageHolder.src = arraay[0];
		i = 0;
	}

	if (i > 0) {
		if (dotArray[i - 1].classList.contains("active")) {
			dotArray[i - 1].classList.remove("active");
			dotArray[i].classList.add("active");
		}
	} else if ((i = arraay.length - 1)) {
		dotArray[i].classList.remove("active");
		i = 0;
		dotArray[i].classList.add("active");
	}
});

prev.addEventListener("click", function () {
	if (i > 0) {
		if (dotArray[i].classList.contains("active")) {
			dotArray[i].classList.remove("active");
			dotArray[i - 1].classList.add("active");
		}
		i--;
		imageHolder.src = arraay[i];
	} else if (i == 0) {
		dotArray[i].classList.remove("active");
		imageHolder.src = arraay[arraay.length - 1];
		i = arraay.length - 1;
		dotArray[i].classList.add("active");
	}
});
