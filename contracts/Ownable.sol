pragma solidity 0.5.12;

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract Ownable is Initializable{
    address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner,"error: onlyOwner!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _; //Continue execution
    }

    function initialize() public  initializer {
        owner = msg.sender;
    }
}