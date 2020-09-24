pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./Ownable.sol";
//import './Safemath.sol';

contract PandaContract is IERC721, Ownable{

    //using SafeMath for uint256;

    uint8 public constant CREATION_GEN_LIMIT = 0 ;

    struct Panda{
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Panda[] pandas;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event Birth(address _owner,uint256 PandaId, uint256 mumId, uint256 dadId, uint256 genes); 

    //private variables
    mapping (address => uint256) private _OwnerAnimalCount;
    mapping(uint256 => address) private _PandaOwner;
    string  private _TokenName;
    string private _TokenSymbol;
    
    constructor() public{
        _TokenName= "CryptoPanda";
        _TokenSymbol = "CP";
    }

    uint8 gen0Counter= 0;

    function createPandaGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require( gen0Counter < CREATION_GEN_LIMIT);
        gen0Counter++;
        return _CreatePanda(0,0,_genes,0,owner);
    }

    function _CreatePanda(uint256 _mumId,uint256 _dadId,uint256 _genes,uint256 _generation,address _owner) private returns (uint256){
        Panda memory _panda = Panda({
            genes: _genes,
            birthTime:uint64(now),
            mumId:uint32(_mumId),
            dadId:uint32(_dadId),
            generation:uint16(_generation)
        });

        uint256 newPandaId = pandas.push(_panda)-1;

        _transfer(address(0), _owner, newPandaId);

        emit Birth(_owner, newPandaId, _mumId, _dadId, _genes);

        return newPandaId;
    }

    function getPandaArray (address PandaOwnerAddress) public view returns (uint256[] memory ){
        uint256[] memory _pandaArray;
        uint256 numberOfPandasOwned = _OwnerAnimalCount[PandaOwnerAddress];
        uint256 pandasFoundCount=0;

        for(uint256 i=0; i< pandas.length || pandasFoundCount == numberOfPandasOwned; i++){
          if(_PandaOwner[i]==msg.sender){
            _pandaArray[pandasFoundCount]=i;
            pandasFoundCount++;
          }
        }

        return _pandaArray;
    }

    function getPanda(uint256 tokenId) public view returns(uint256 genes,uint64 birthTime,uint32 mumId,uint32 dadId,uint16 generation) 
    {
        require(pandas.length > tokenId);

        genes       =pandas[tokenId].genes;
        birthTime   =pandas[tokenId].birthTime;
        mumId       =pandas[tokenId].mumId;
        dadId       =pandas[tokenId].dadId;
        generation  =pandas[tokenId].generation;

        return (genes,birthTime,mumId,dadId,generation);
    }

    

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
        return pandas.length;
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

