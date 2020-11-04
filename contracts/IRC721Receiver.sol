pragma solidity ^0.5.12;

interface IRC721Receiver{
    function onERC721Received(address operator, address from , uint256 tokenId, bytes calldata data) external returns (bytes4);
}