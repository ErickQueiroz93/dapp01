// Importando as dependências necessárias
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const { ethers, parseEther, formatEther } = require("ethers");

// Verificar se a versão do ethers é compatível
console.log(`Versão do ethers: ${ethers.version}`);

// Carregar a chave privada e o ID do Infura do arquivo .env
const privateKey = process.env.PRIVATE_KEY;
const infuraProjectId = process.env.INFURA_PROJECT_ID;

// Conectando-se ao provedor Infura usando Ether.js
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Criar uma carteira utilizando a chave privada
const wallet = new ethers.Wallet(privateKey, provider);

// Função para estimar o gás e enviar a transação
async function estimateAndSendTransaction() {
  // Definindo os parâmetros da transação
  const tx = {
    to: "0x99FE35D6f51Eb382E61Bf80D43e8a45eB6c18532",  // Endereço do destinatário (substitua pelo correto)
    value: parseEther("0.01"),  // Quantidade de ETH a ser enviada (0.01 ETH) (substitua pelo correto)parseEther("0.01")  // Quantidade de ETH a enviar (0.01 ETH)
  };

  // Estimando o gás necessário
  try {
    const estimatedGas = await provider.estimateGas(tx);
    console.log(`Estimativa de Gás: ${estimatedGas.toString()} unidades`);

    // Incluindo a estimativa de gás na transação e enviando
    const transactionResponse = await wallet.sendTransaction({
      ...tx,
      gasLimit: estimatedGas // Usando a estimativa de gás
    });

    console.log("Transação enviada! Hash:", transactionResponse.hash);

    // Aguardando a confirmação da transação
    const receipt = await transactionResponse.wait();
    console.log("Transação confirmada com sucesso! Hash:", receipt.hash);
  } catch (error) {
    console.error("Erro ao estimar o gás ou enviar a transação:", error);
  }
}

//Função para buscar o saldo da carteira
async function getBalance() {
  const balance = await provider.getBalance(wallet.address);
  const balanceInEther = formatEther(balance);
  console.log(`Saldo da carteira: ${balanceInEther} ETH`);
}

// Executando a função
//estimateAndSendTransaction();
getBalance();