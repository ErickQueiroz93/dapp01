// Importando a biblioteca Ether.js
const { ethers } = require("ethers");

// Gerando uma nova carteira
const wallet = ethers.Wallet.createRandom();

// Exibindo o endereço da carteira e a chave privada
console.log("Endereço da Carteira:", wallet.address);
console.log("Chave Privada:", wallet.privateKey);