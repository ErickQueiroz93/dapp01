// Importando a biblioteca Ether.js
const { ethers } = require("ethers");

// Chave privada (substitua pela sua chave privada real com cuidado)
const privateKey = "";

// Infura project ID
const infuraProjectId = 'sua chave infura';

// Usando o provider da Infura para a rede Polygon
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Criando a wallet com a chave privada e conectando ao provider
const wallet = new ethers.Wallet(privateKey, provider);

// Criando e enviando uma transação
async function sendTransaction() {
  // Obtenção dos dados de taxa da rede (inclui maxFeePerGas e maxPriorityFeePerGas no EIP-1559)
  const feeData = await provider.getFeeData();

  const tx = {
    to: "0x04feB01C4597f81368e23882fA14387678474e02",  // Endereço do destinatário
    value: ethers.parseEther("1.0"),  // Quantidade de ETH a enviar (1 ETH)
    gasLimit: 21000,  // Limite de gás padrão para envio de ETH
    maxFeePerGas: feeData.maxFeePerGas,  // Taxa máxima por unidade de gás
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas  // Taxa de prioridade
  };

  // Assinando e enviando a transação
  try {
    const transactionResponse = await wallet.sendTransaction(tx);
    console.log("Transação enviada! Hash:", transactionResponse.hash);

    // Esperando a confirmação da transação
    const receipt = await transactionResponse.wait();
    console.log("Transação confirmada com sucesso! Hash:", receipt.transactionHash);
  } catch (error) {
    console.error("Erro ao enviar a transação:", error);
  }
}

// Executando a transação
sendTransaction();
