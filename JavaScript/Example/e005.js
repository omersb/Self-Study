// JS-CC-012 : Vowels in a string
// Create a function that'll return an integer of the number of vowels found in a string.
const input = document.querySelector(".input");
const display = document.querySelector(".display");
document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    countVovels(input.value);
  }
});
let x = 0;
const countVovels = (kelime) => {
  let len = 0;
  len = kelime
    .split("")
    .filter(
      (e) => e == "a" || e == "e" || e == "o" || e == "u" || e == "i"
    ).length;
  render(len);
};
const render = (word) => {
  display.innerHTML = `There are ${word} vovels in ${input.value}`;
};
