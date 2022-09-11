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

function createHTML(nome, simbolo, preco) {
  const ul = document.getElementById('coins-list');
  const element = document.createElement('li');
  element.innerText = `${nome} (${simbolo}): ${preco}`;
  ul.appendChild(element);
}

function makeData() {
  fetchCoins().then((data) => data.forEach((element) => 
    createHTML(element.name, element.symbol, element.priceUsd)));
}
makeData();