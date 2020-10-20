pragma solidity ^0.5.12;

import "./Ownable.sol";
import "./IERC721.sol";
import "./PandaStorage.sol";

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract PandaToken is Initializable, IERC721, Ownable, PandaStorage{

    function initialize(string memory _tName, string memory _tSymbol) public initializer{
        Ownable.initialize();
        _TokenName= _tName;
        _TokenSymbol = _tSymbol;
    }

    /**
     * @dev Emitted when `tokenId` token is transfered from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

   /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) public view returns (uint256 balance){
        return _OwnerAnimalCount[owner];
    }

    /*
     * @dev Returns the total number of tokens in circulation.
     */
    function totalSupply() public view returns (uint256 total){
        return _pandas.length;
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
        return _PandaOwner[_tokenId];
    }


     /* @dev Transfers `tokenId` token from `msg.sender` to `to`.   */
    function transfer(address _to, uint256 _tokenId) external{
        require( _to != address(0));
        require( _to != owner);
        require(_PandaOwner[_tokenId] == msg.sender);

        _transfer(msg.sender,_to,_tokenId);
    }

    function _transfer(address _from,address _to, uint256 _tokenId) internal {
        _OwnerAnimalCount[_to]++;
        _PandaOwner[_tokenId]=_to;

        if(_from != address(0) ){
            _OwnerAnimalCount[_from]--;
        }

        assert(_PandaOwner[_tokenId]==_to);

        emit Transfer(_from, _to,  _tokenId);
    }
}