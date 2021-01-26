pragma solidity ^0.5.12;
import "./PandaStorage.sol";

contract PandaProxy is Ownable , PandaStorage{

  address currentAddress;

  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

  constructor(address _currentAddress) public {
    currentAddress = _currentAddress;
    _TokenName= "CryptoPanda";
    _TokenSymbol = "CP";
  }
  function upgrade(address _newAddress) public onlyOwner {
    currentAddress = _newAddress;
  }

  //FALLBACK FUNCTION.
  function () payable external {
    address implementation = currentAddress;
    require(currentAddress != address(0));
    bytes memory data = msg.data;

    //DELEGATECALL EVERY FUNCTION CALL
    assembly {
      let result := delegatecall(gas, implementation, add(data, 0x20), mload(data), 0, 0)
      let size := returndatasize
      let ptr := mload(0x40)
      returndatacopy(ptr, 0, size)
      switch result
      case 0 {revert(ptr, size)}
      default {return(ptr, size)}
    }
  }
}