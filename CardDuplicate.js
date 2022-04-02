function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.swiper-slide'), 20, true);

var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});
