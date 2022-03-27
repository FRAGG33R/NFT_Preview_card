const container = document.querySelector(".card");
const card = document.querySelector(".card");
const title = document.querySelector(".nft_title");
const image = document.querySelector(".nft_image");
const price = document.querySelector(".price");
const time = document.querySelector(".time");
const collection = document.querySelector(".collection");

container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	title.style.transform = "translateZ(150px)";
	time.style.transform = "translateZ(125px)";
	collection.style.transform = "translateZ(100px)";
	price.style.transform = "translateZ(75px)";
  });
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	title.style.transform = "translateZ(0px)";
	image.style.transform = "translateZ(0px) rotateZ(0deg)";
	time.style.transform = "translateZ(0px)";
	collection.style.transform = "translateZ(0px)";
	price.style.transform = "translateZ(0px)";
});
