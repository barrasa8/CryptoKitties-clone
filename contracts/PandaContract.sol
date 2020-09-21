pragma solidity ^0.5.12;

import "./IERC721.sol";
//import './Safemath.sol';

contract PandaContract is IERC721{

    //using SafeMath for uint256;

    struct Panda{
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Panda[] pandas;

    //private variables
    mapping (address => uint256) private _OwnerAnimalCount;
    address[]  private _PandaOwner;
    address ContractAddress;
    uint256 private _TotalSupply;
    string  private _TokenName;
    string private _TokenSymbol;
    
    constructor() public{
        ContractAddress = msg.sender;
        _TokenName= "CryptoPanda";
        _TokenSymbol = "CP";
    }

    /**
     * @dev Emitted when `tokenId` token is transfered from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance){
        return _OwnerAnimalCount[owner];
    }

    /*
     * @dev Returns the total number of tokens in circulation.
     */
    function totalSupply() external view returns (uint256 total){
        return _TotalSupply;
    }

    /*
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory tokenName){
        return _TokenName;
    }

    /*
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory tokenSymbol){
        return _TokenSymbol;
    }

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 _tokenId) external view returns (address owner){
        require(_PandaOwner.length > _tokenId);
        return _PandaOwner[_tokenId];
    }


     /* @dev Transfers `tokenId` token from `msg.sender` to `to`.
     *
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `to` can not be the contract address.
     * - `tokenId` token must be owned by `msg.sender`.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address _to, uint256 _tokenId) external{
        require( _to != address(0));
        require( _to != ContractAddress);
        require(_PandaOwner[_tokenId] == msg.sender);

        uint256 toAnimalCount = _OwnerAnimalCount[_to];
        _OwnerAnimalCount[_to] = toAnimalCount +1;
        _PandaOwner[_tokenId]=_to;
        _OwnerAnimalCount[msg.sender]= _OwnerAnimalCount[msg.sender]-1;

        assert(_PandaOwner[_tokenId]==_to && _OwnerAnimalCount[_to] == toAnimalCount+1);

        emit Transfer(msg.sender, _to,  _tokenId);
    }
}

