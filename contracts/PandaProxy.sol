pragma solidity ^0.5.12;
// import "./PandaStorage.sol";
import "./Ownable.sol";

contract PandaProxy is Ownable{
     
    struct Panda{
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Panda[] internal _pandas;

    //private variables
    mapping (address => uint256) internal _OwnerAnimalCount;
    mapping(uint256 => address) internal _PandaOwner;
    string  internal _TokenName;
    string internal _TokenSymbol;

    uint8 internal constant CREATION_GEN_LIMIT =100; 
     
     
    address currentAddress;

  constructor(address _currentAddress) public {
    currentAddress = _currentAddress;
    Ownable.initialize();
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