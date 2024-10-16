// Importando Ether.js
const { ethers } = require("ethers");

// Infura project ID
const infuraProjectId = 'sua chave infura';

// Usando o provider (Infura ou Alchemy)
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

async function gasPrice() {
  try {
    const feeData = await provider.getFeeData();
    const gasPrice = feeData.gasPrice;
    console.log("Gas Price atual:", gasPrice);
    console.log(`Gas Price atual: ${ethers.formatUnits(gasPrice, "gwei")} Gwei`);
    return gasPrice;
  } catch (error) {
    console.error("Erro ao obter o gas price:", error);
  }
}

gasPrice();