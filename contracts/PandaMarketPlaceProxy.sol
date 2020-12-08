pragma solidity ^0.5.12;
import "./PandaMarketPlaceStorage.sol";
//import "./Ownable.sol";

contract PandaMarketPlaceProxy is Ownable,PandaMarketPlaceStorage{

  address currentAddress;

  constructor(address _currentAddress) public {
    currentAddress = _currentAddress;
    //Ownable.initialize();
     owner = msg.sender;
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