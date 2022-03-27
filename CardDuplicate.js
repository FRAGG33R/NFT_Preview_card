function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.swiper-slide'), 2, true);

var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});

for (var i = 0; i < 10; i++)
{
	fetch(`https://api.nftport.xyz/v0/nfts/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${i}?chain=ethereum`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "f636f122-48b6-45ec-942e-1415d9eda95b"
		}
	})
	.then(res => res.json())
	.then((out) => {
		console.log('Output: ', out);
	}).catch(err => console.error(err));
}