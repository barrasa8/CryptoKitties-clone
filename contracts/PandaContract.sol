pragma solidity ^0.5.12;

import "./PandaToken.sol";

//import './Safemath.sol';

contract PandaContract is PandaToken{

    //using SafeMath for uint256;

    uint8 public constant CREATION_GEN_LIMIT = 100 ;

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event Birth(address _owner,uint256 PandaId, uint256 mumId, uint256 dadId, uint256 genes); 


    uint8 gen0Counter= 0;

    function createPandaGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require( gen0Counter < CREATION_GEN_LIMIT,"Gen 0 Limit reached (10 pandas limit)");
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

    function getPandaArray (address PandaOwnerAddress) public view returns (uint256[] memory ){
        uint256[] memory _pandaArray;
        uint256 numberOfPandasOwned = _OwnerAnimalCount[PandaOwnerAddress];
        uint256 pandasFoundCount=0;

        // for(uint256 i=0; i< pandas.length || pandasFoundCount == numberOfPandasOwned; i++){
        //     if(_PandaOwner[i]==msg.sender){
        //     _pandaArray[pandasFoundCount]=i;
        //     pandasFoundCount++;
        //     }
        // }
        _pandaArray[0]=1;
        return _pandaArray;
    }
}

