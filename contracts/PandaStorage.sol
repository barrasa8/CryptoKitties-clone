pragma solidity ^0.5.12;

contract PandaStorage {
    
    struct Panda{
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Panda[] internal _pandas;

    bytes4 internal constant MAGIC_ERC721_RECEIVER  = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

    uint8 gen0Counter;
    

    //private variables
    mapping (address => uint256) internal _OwnerAnimalCount;
    mapping(uint256 => address) internal _PandaOwner;
    mapping(uint256 => address) internal _PandaIndexToApproved;
    mapping(address => mapping(address => bool)) internal _operatorApproval;

    string  internal _TokenName ;
    string internal _TokenSymbol;

    uint8 internal  CREATION_GEN_LIMIT = 10 ;
    
}