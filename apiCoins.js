const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  // try { 
  //   const request = await fetch(url);
  //   const data = await request.json();
  //   console.log(data.data);
  // } catch (error) {
  //   console.log('Algo deu errado: ', error);
  // }
  const request = await fetch(url);
  request.then((response) => response.json())
  .then((data) => console.log(data.data))
  .catch((error) => console.log('Error! Algo deu errado', error));
};

fetchCoins();