// Importando a biblioteca Ether.js
const { ethers } = require("ethers");

// Infura project ID
const infuraProjectId = 'sua chave infura';

// Usando o provider da Infura para a rede Polygon
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Função para estimar o gás necessário para uma transação
async function estimateGasForTransaction() {
  // Definindo os parâmetros da transação
  const tx = {
    to: "0x2919771f951fd264445d4D4c682EE5D8326B93ec",  // Endereço do destinatário
    value: ethers.parseEther("0.01")  // Quantidade de ETH a ser enviada (0.01 ETH)
  };

  // Estimando o gás necessário para essa transação
  try {
    const estimatedGas = await provider.estimateGas(tx);
    console.log(`Estimativa de Gás: ${estimatedGas.toString()} unidades`);
  } catch (error) {
    console.error("Erro ao estimar o gás:", error);
  }
}

// Chamando a função de estimativa de gás
estimateGasForTransaction();
