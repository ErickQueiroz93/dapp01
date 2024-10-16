// Importando Ether.js
const { ethers } = require("ethers");

// URL de conexão Infura ou Alchemy (substituir com sua chave)
const INFURA_PROJECT_ID = 'sua chave infura';  // Infura
const ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY';      // Alchemy

// Criando uma conexão com Ethereum usando Infura
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${INFURA_PROJECT_ID}`);

// Ou utilizando Alchemy
//const provider = new ethers.providers.AlchemyProvider("mainnet", ALCHEMY_API_KEY);

const getBlockNumber = provider.getBlockNumber().then(console.log).catch(console.error);

console.log("Conectado à Ethereum Mainnet", getBlockNumber);