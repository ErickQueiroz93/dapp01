// Importando Ether.js
const { ethers } = require("ethers");

// Infura project ID
const infuraProjectId = 'sua chave infura';

// Usando o provider da Infura para a rede Polygon
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.infura.io/v3/${infuraProjectId}`);

// Endereço do contrato NFT (ERC-721)
const contractAddress = '0x3e8cf5c34489e458ffff7dbbb257164e9b6465dd';

// ABI mínima necessária para interagir com o método balanceOf do ERC-721
const abi = [
    "function balanceOf(address owner) view returns (uint256)"
];

// Criando uma instância do contrato
const contract = new ethers.Contract(contractAddress, abi, provider);

// Endereço do usuário que deseja consultar o saldo de NFTs
const walletAddress = '0x04feB01C4597f81368e23882fA14387678474e02';  // Substitua pelo endereço da carteira que deseja consultar

async function getNFTBalance() {
    try {
        // Consultando o saldo de NFTs
        const balance = await contract.balanceOf(walletAddress);
        console.log(`Saldo de NFTs para o endereço ${walletAddress}: ${balance.toString()}`);
        //Verifique se é maior que zero, faça um if informando que o usuário possui NFTs
        if (balance > 0) {
            console.log("O usuário possui NFTs, pode acessar o site!");
        } else {
            console.log("O usuário não possui NFTs, desculpe você não pode acessar.");
        }
    } catch (error) {
        console.error("Erro ao consultar o saldo de NFTs:", error);
    }
}

// Executando a função
getNFTBalance();
