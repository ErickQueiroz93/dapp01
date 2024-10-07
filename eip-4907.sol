// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IERC4907 {
    // Interface ERC4907 para compatibilidade com o padrão
    event UpdateUser(uint256 indexed tokenId, address indexed user, uint64 expires);

    function setUser(uint256 tokenId, address user, uint64 expires) external;

    function userOf(uint256 tokenId) external view returns (address);

    function userExpires(uint256 tokenId) external view returns (uint64);
}

contract ERC4907 is ERC721, IERC4907 {
    struct UserInfo {
        address user; // endereço do usuário
        uint64 expires; // data de expiração
    }

    mapping(uint256 => UserInfo) private _users;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    // Função que permite definir o usuário e o tempo de expiração do uso
    function setUser(uint256 tokenId, address user, uint64 expires) public override {
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    // Retorna o usuário do tokenId se o tempo de uso ainda não tiver expirado
    function userOf(uint256 tokenId) public view override returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        } else {
            return address(0);
        }
    }

    // Retorna a data de expiração do uso do tokenId
    function userExpires(uint256 tokenId) public view override returns (uint64) {
        return _users[tokenId].expires;
    }
}
