// Importando Ether.js
const { ethers } = require("ethers");

// Infura project ID
const infuraProjectId = 'sua chave infura';

// Usando o provider da Infura para a rede Polygon
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Hash da transação que deseja verificar
const txHash = "0xedbb415ddf3ec43312cc194d0be9aae18520ec9682acdec4251ff2beb8a209a7";

// Função para obter e verificar o estado de uma transação
async function getTransactionState(hash) {
  try {
    const transaction = await provider.getTransaction(hash);

    if (transaction) {
      console.log("Detalhes da transação:", transaction);
      
      // Verificar se a transação já foi confirmada
      if (transaction.blockNumber) {
        console.log(`Transação confirmada no bloco: ${transaction.blockNumber}`);
      } else {
        console.log("A transação ainda está pendente.");
      }
    } else {
      console.log("Transação não encontrada. Verifique o hash informado.");
    }
  } catch (error) {
    console.error("Erro ao buscar transação:", error);
  }
}

// Executando a função para verificar o estado da transação
getTransactionState(txHash);
