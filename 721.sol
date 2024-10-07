// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
    uint256 public tokenCounter; // Contador de NFT criados
    string public contractURI;  // Variável para armazenar o URI do contrato

    constructor(string memory _contractURI) ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
        contractURI = _contractURI;  // Definir o URI do contrato no construtor
    }

    function createNFT(address to, string memory _tokenURI) public {
        tokenCounter += 1;
        uint256 newTokenId = tokenCounter;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
    }

    // Função para atualizar o contractURI se necessário
    function setContractURI(string memory _contractURI) public {
        contractURI = _contractURI;
    }

    // Função para retornar o contractURI
    function getContractURI() public view returns (string memory) {
        return contractURI;
    }
}