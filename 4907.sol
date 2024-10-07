// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./eip-4907.sol";

contract RentableNFT is ERC4907 {
    constructor() ERC4907("RentableNFT", "RNFT") {}

    function setUserForNFT(uint256 tokenId, address user, uint64 expires) public {
        setUser(tokenId, user, expires);
    }
}







