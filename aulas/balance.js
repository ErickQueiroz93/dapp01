// Importando Ether.js
const { ethers, formatEther } = require("ethers");

const infuraProjectId = 'sua chave infura';

// Usando o provider (Infura ou Alchemy)
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Definindo o endereço da carteira que você deseja verificar
const address = "0x1af944da8e3ca52ae5539a779fb76bafca4dbe5a";

async function getBalance() {
  const balance = await provider.getBalance(address);
  console.log("WEI", balance);
  const balanceInEther = formatEther(balance);
  console.log(`Saldo da carteira: ${balanceInEther}`);
}

getBalance();