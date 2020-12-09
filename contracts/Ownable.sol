pragma solidity 0.5.12;

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract Ownable {
    address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner,"error: onlyOwner!");
        _; //Continue execution
    }

    constructor() public {
        owner = msg.sender;
    }
}