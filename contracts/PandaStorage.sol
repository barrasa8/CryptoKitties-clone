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

    uint8 gen0Counter;

    bytes4 internal constant MAGIC_ERC721_RECEIVER  = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

     /*
     *     bytes4(keccak256('balanceOf(address)')) == 0x70a08231
     *     bytes4(keccak256('ownerOf(uint256)')) == 0x6352211e
     *     bytes4(keccak256('approve(address,uint256)')) == 0x095ea7b3
     *     bytes4(keccak256('getApproved(uint256)')) == 0x081812fc
     *     bytes4(keccak256('setApprovalForAll(address,bool)')) == 0xa22cb465
     *     bytes4(keccak256('isApprovedForAll(address,address)')) == 0xe985e9c5
     *     bytes4(keccak256('transferFrom(address,address,uint256)')) == 0x23b872dd
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256)')) == 0x42842e0e
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) == 0xb88d4fde
     *
     *     => 0x70a08231 ^ 0x6352211e ^ 0x095ea7b3 ^ 0x081812fc ^
     *        0xa22cb465 ^ 0xe985e9c5 ^ 0x23b872dd ^ 0x42842e0e ^ 0xb88d4fde == 0x80ac58cd
     */
    bytes4 internal constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
    /*
     * bytes4(keccak256('supportsInterface(bytes4)')) == 0x01ffc9a7
     */
    bytes4 internal constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
    

    //private variables
    mapping (address => uint256) internal _OwnerAnimalCount;
    mapping(uint256 => address) internal _PandaOwner;
    mapping(uint256 => address) internal _PandaIndexToApproved;
    mapping(address => mapping(address => bool)) internal _operatorApproval;

    string  internal _TokenName ;
    string internal _TokenSymbol;

    uint8 internal  CREATION_GEN_LIMIT = 10 ;
    
}