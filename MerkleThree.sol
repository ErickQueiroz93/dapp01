// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MerkleProof {
    // Verifica se uma folha faz parte da Merkle Tree
    function verify(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf
    ) public pure returns (bool) {
        bytes32 computedHash = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (computedHash <= proofElement) {
                computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
            } else {
                computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
            }
        }

        // Verifica se o hash calculado corresponde à raiz fornecida
        return computedHash == root;
    }
}
