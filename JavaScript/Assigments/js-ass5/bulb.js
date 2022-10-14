// const lamba = document.querySelector("img");
// lamba.addEventListener("click", () => {
// 	if (lamba.src.match("pic_bulboff")) {
// 		lamba.src = "./img/pic_bulbon.gif";
// 	} else {
// 		lamba.src = "./img/pic_bulboff.gif";
// 	}
// });

const acık = document.querySelector("#on");
const kapalı = document.querySelector("#off");
const lamba = document.querySelector("img");
acık.addEventListener("click", () => {
	lamba.src = "./img/pic_bulbon.gif";
	//   console.log(acık);
});

kapalı.addEventListener("click", () => {
	lamba.src = "./img/pic_bulboff.gif";
	//   console.log(kapalı);
});
