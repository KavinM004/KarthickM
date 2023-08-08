// const loadCountryAPI = () =>{
//   // fetch url of rest country from website
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => displayCountries(data))
// }

// // displaying all countries
// const displayCountries = countries =>{
//   // console.log(countries);
//   const countriesHTML = countries.map(country => getCountry(country));
//   // displaying div to html
//   const container = document.getElementById('countries');
//   container.innerHTML = countriesHTML.join(' ');
// }

// // get data and set it to html
// const getCountry = (country) =>{
//   console.log(country)
//   return `
//       <div class="country-div">
//       <h2 style="text-align:center;font-style:italic;
//       background: #000;
//       color: white;
//       text-align: center;
//       padding: 15px;border:1px solid white">${country.name.common}</h2>
//       <img src="${country.flags.png}">
//       <hr>
//       <h4 style="text-align:center;font-style:">Population : ${country.population}</h4>
//       <h4 style="text-align:center;font-style:">Regoin : ${country.region}</h4>
//       <h4 style="text-align:center;font-style:">Country Code : ${country.cca2}</h4>
//       <button onclick="">click to view weather</button>
//       </div>
//   `
// }
// // call the funtion to get output in console
// loadCountryAPI()

