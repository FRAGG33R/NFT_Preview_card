fetch("/exported.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
	function multiplyNode(node, count, deep) {
		for (var i = 0, copy; i < count - 1; i++) {
			copy = node.cloneNode(deep);
			copy.innerHTML = `
			<div class="card">
			<div class="card_content">
			<img class="nft_image" src="${jsondata[i].img_link}">
			<div class="nft_title"><h2>${jsondata[i].prject.name} #${jsondata[i].token_id}</h2></div>
			<div class="collection"></h2>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain</h2></div>
			<div class="price_time">
			<div class="price">
			<svg width="19" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
			</h3>88.727 ETH</h3>
			</div>
			<div class="time">
			<svg width="20" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
			</h4>3 days left</h4>
			</div>
			</div>
			<div class="owner_container">
			<div class="owner"></h4>Owned by <a href="https://opensea.io/BetOnline_ag" target="_blank" >BetOnline_ag</a></h4></div> <!-- link_name -->
			<img class="owenr_image" src="images/image-avatar.png">
			</div>
			</div>
			</div>
			`;
			node.parentNode.insertBefore(copy, node);
		}
	}
	multiplyNode(document.querySelector('.swiper-slide'), 100, true);
});
var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
});
