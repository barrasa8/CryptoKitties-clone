pragma solidity ^0.5.12;

import "./PandaToken.sol";

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract PandaContract is Initializable , PandaToken {

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event Birth(address _owner,uint256 PandaId, uint256 mumId, uint256 dadId, uint256 genes); 


    

    constructor() public  {
        // PandaToken.initialize("CryptoPanda","CP");
        gen0Counter= 0;
    }

    

    function createPandaGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require( gen0Counter < CREATION_GEN_LIMIT,"Gen 0 Limit reached (10 _pandas limit)");
        gen0Counter++;
        return _CreatePanda(0,0,_genes,0,owner);
    }

    function _CreatePanda(uint32 _mumId,uint32 _dadId,uint256 _genes,uint16 _generation,address _owner) private returns (uint256){
        Panda memory _panda = Panda({
            genes: _genes,
            birthTime:uint64(now),
            mumId:uint32(_mumId),
            dadId:uint32(_dadId),
            generation:uint16(_generation)
        });

        uint256 newPandaId = _pandas.push(_panda)-1;

        _transfer(address(0), _owner, newPandaId);

        emit Birth(_owner, newPandaId, _mumId, _dadId, _genes);

        return newPandaId;
    }

    function getPanda(uint256 tokenId) public view returns(uint256 genes,uint64 birthTime,uint32 mumId,uint32 dadId,uint16 generation) 
    {
        require(_pandas.length > tokenId);

        genes       =_pandas[tokenId].genes;
        birthTime   =_pandas[tokenId].birthTime;
        mumId       =_pandas[tokenId].mumId;
        dadId       =_pandas[tokenId].dadId;
        generation  =_pandas[tokenId].generation;

        return (genes,birthTime,mumId,dadId,generation);
    }

    function _pandasOfOwner (address PandaOwnerAddress) public view returns (uint256[] memory ){
        uint256 numberOfPandasOwned = balanceOf(PandaOwnerAddress);

        if( numberOfPandasOwned == 0){
            return new uint256[](0);
        }else{
            uint256[] memory result =  new uint256[](numberOfPandasOwned);
            uint256 totalPandas = totalSupply();
            uint256 resultIndex = 0;

            uint256 pandaId;
            for(pandaId=1; pandaId<= totalPandas; pandaId++){  
                if(_PandaOwner[pandaId]==PandaOwnerAddress){
                    result[resultIndex] = pandaId;
                    resultIndex++;
                }
            }
            return result;
        }
    }
}

