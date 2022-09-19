console.log("**** app.js *******");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul"); //! yeni elaman oluşturur. () içi oluşturacak elemanın türü "" içinde yazılır
dilSection.appendChild(ul); //! appendChild bir text düğümünü elemana bağlar

//? SELECTORS
//************************************************* */
console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

//! closest => ilk container class ı içerisindeki btn class'ına ait olan elementleri arar.
const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);
//************************************************* */

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("Lütfen bir dil giriniz");
  } else {
    ul.innerHTML += ` <li>${dilInput.value}</li>`;
    dilInput.value = "";
    javascriptKontrol();
  }
};

const javascriptKontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukHarf = dil.textContent.toLowerCase();
    if (kucukHarf === "javascript") {
      // dil.className = "purple";
      //?Alternatif yöntem
      dil.setAttribute("class", "red");
    }
  });
};

silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("Silinecek dil kalmadi");
};

dilInput.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 13) {
    ekleBtn.onclick();
  }
  // if (e.code === "Enter") {
  //   ekleBtn.onclick();
  // }
  if (e.code === "Delete") {
    silBtn.onclick();
  }
});

window.onload = () => {
  javascriptKontrol();
  dilInput.focus();
};
