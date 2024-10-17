// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DogsNFT is ERC721URIStorage {
    uint256 public tokenCounter; // Contador de NFT criados
    string public contractURI = "https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmTTArHhST7athiEUMA8Wjaz9kT6FquuJSggv29seWqVgq";   // URI do contrato
    string public nftTokenURI = "https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmRvDHZMQsS6SVWRa7uuQHLnGhsKkmPbU3DVK8iHSRScx9";   // URI do token

    // Evento para emitir o nome do usuario e o endereco da wallet
    event UserMinted(address indexed userAddress, string userName);

    constructor() ERC721("DogsNFT", "dNFT") {
        tokenCounter = 0;
    }

    // Funcao para mintar um NFT
    function mintNFT() public {
        tokenCounter += 1;
        uint256 newTokenId = tokenCounter;
        _safeMint(_msgSender(), newTokenId);
        _setTokenURI(newTokenId, nftTokenURI);
    }

    // Funcao separada para adicionar o nome do usuario e emitir o evento
    function addUserName(string memory userName) public {
        // Emitir o evento com o nome do usuario e o endereco
        emit UserMinted(_msgSender(), userName);
    }
}
