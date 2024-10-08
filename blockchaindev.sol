// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BlockchainDevs is ERC721URIStorage {
    uint256 public tokenCounter; // Contador de NFT criados
    string public contractURI = "https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmdBmEEaYsBG5xYzTcgFwmMF9gbUmiHSPMkPG8bXu8evYn";  // Variável para armazenar o URI do contrato
    string public nftTokenURI = "https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmTTbWynR8eW7dRKjyiUmY91L8WidjjvKcDYEgT2eCJPCj";
    uint16 public supply = 200;


    constructor() ERC721("BlockchainDEVs", "BCD") {
        tokenCounter = 0;
    }

    function createNFT(address to) public {
        if (tokenCounter <= supply) {
            tokenCounter += 1;
            uint256 newTokenId = tokenCounter;
            _safeMint(to, newTokenId);
            _setTokenURI(newTokenId, nftTokenURI);
        }
    }

    // Função para atualizar o contractURI se necessário
    function setContractURI(string memory _contractURI) public {
        contractURI = _contractURI;
    }
}
