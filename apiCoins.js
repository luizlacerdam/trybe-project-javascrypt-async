// const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  // try { 
  //   const request = await fetch(url);
  //   const data = await request.json();
  //   console.log(data.data);
  // } catch (error) {
  //   console.log('Algo deu errado: ', error);
  // }

  const request = fetch(url);
  return request.then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(`Error! Algo deu errado: ${error}`));
};
// return array
function filtroTenFirsts() {
  return fetchCoins().then((data) => data.filter((element) => element.rank <= 10));
}
function createHTML(data) {
  const { symbol, name, priceUsd, explorer } = data;
  const ul = document.getElementById('coins-list');
  const element = document.createElement('li');
  element.innerHTML = `<section class="cartao">
                      <img src="./img/${symbol}.png">
                      <h3 class="simbolo">${symbol}</h3>
                      <h4 class="nome">${name}</h4>
                      <h4 class="price">${parseFloat(priceUsd).toFixed(2)}<h4>
                      
                      </section>`;
  ul.appendChild(element);
}

function makeData() {
  filtroTenFirsts().then((data) => data.forEach((element) => 
    createHTML(element)));
}
makeData();