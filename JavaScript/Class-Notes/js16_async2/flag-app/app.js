//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountry = async (name) => {
	// const url = `https://restcountries.com/v3.1/name/${name}`;
	const urlAll = `https://restcountries.com/v3.1/all`;
	try {
		const res = await fetch(urlAll);
		if (!res.ok) {
			renderError(`Something went wrong:${res.status}`);
			throw new Error();
		}
		const data = await res.json();
		getAllCountry(data);
		renderCountry(data);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

const renderError = (err) => {
	const countriesDiv = document.querySelector(".countries");
	countriesDiv.innerHTML = `
     <h1 class="text-danger">${err}</h1>
     <img src="./img/404.png" alt="" />
    `;
};

const getAllCountry = (country) => {
	const countriesSelect = document.querySelector(".input");
	// const {
	// 	name: { common },
	// } = country;
	console.log(country);
	countriesSelect.innerHTML += `
	<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  ${country.map(
		(data) => `
  	  <option value="1">${data.name.common}</option>
  `
	)}	  
	</select>`;
};

const renderCountry = (country) => {
	const countriesDiv = document.querySelector(".countries");

	//!destr
	// const {
	// 	capital,
	// 	name: { common },
	// 	region,
	// 	flags: { svg },
	// 	languages,
	// 	currencies,
	// } = country;

	// console.log(capital, common, region, svg);
	// console.log(Object.values(languages));
	// console.log(Object.values(currencies)[0].name);
	// console.log(Object.values(currencies)[0].symbol);

	// countriesDiv.innerHTML += `

	// <div class="card shadow-lg" style="width: 18rem;">
	//   <img src="${svg}" class="card-img-top" alt="...">
	//   <div class="card-body">
	//     <h5 class="card-title">${common}</h5>
	//     <p class="card-text">${region}</p>
	//   </div>
	//   <ul class="list-group list-group-flush">
	//     <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${capital}</li>
	//     <li class="list-group-item"> <i class="fas fa-lg fa-comments"></i> ${Object.values(
	// 			languages
	// 		)}</li>

	//     <li class="list-group-item"> <i class="fas fa-lg fa-money-bill-wave"></i> ${
	// 			Object.values(currencies)[0].name
	// 		}, ${Object.values(currencies)[0].symbol} </li>

	//   </ul>
	// </div>

	// `;
};

fetchCountry("turkey");
// fetchCountry("usa");
// fetchCountry("belgium");
// fetchCountry("south africa");
