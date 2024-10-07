// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyNFT1155 is ERC1155 {
    // Mapeamento que armazena os URIs dos tokens
    mapping(uint256 => string) private _tokenURIs;

    // Construtor que define a URI base para os metadados
    constructor() 
        ERC1155("https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmNUJ2L6YmHCKZpGv1dsMmPUAvy9jGu5cpnskSS5bcr2rj") 
    {}

    // Função para criar novos tokens
    function mint(address account, uint256 id, uint256 amount, string memory uri) public {
        _mint(account, id, amount, "");
        _setTokenURI(id, uri); // Armazena a URI do token
    }

    // Função para definir a URI do token
    function _setTokenURI(uint256 tokenId, string memory uri) internal {
        _tokenURIs[tokenId] = uri;
    }

    // Função para retornar a URI do token
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return _tokenURIs[tokenId];
    }

    // Função para consultar o saldo de tokens de um endereço
    function getBalance(address account, uint256 id) public view returns (uint256) {
        return balanceOf(account, id);
    }

    // Função para transferir tokens de um endereço para outro
    function transferTokens(address from, address to, uint256 id, uint256 amount) public {
        safeTransferFrom(from, to, id, amount, "");
    }

    // Função para que o proprietário do contrato possa queimar tokens
    function burn(address account, uint256 id, uint256 amount) public {
        _burn(account, id, amount);
    }
}
