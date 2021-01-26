pragma solidity ^0.5.12;

import "./PandaToken.sol";

contract PandaContract is Initializable , PandaToken {

    event Approval(address indexed owner, address indexed approved, uint256 indexed PandaId);
    event Birth(address _owner,uint256 PandaId, uint32 mumId, uint32 dadId, uint256 genes,uint16 generation); 


    function initialize() public initializer{
        PandaToken.initialize("CryptoPanda","CP");
        gen0Counter= 0;
        _CreatePanda(0,0,7259267741713121,0,address(this));
    }

    function createPandaGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require( gen0Counter < CREATION_GEN_LIMIT,"Gen 0 Limit reached (10 pandas limit)");
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

        emit Birth(_owner, newPandaId, _mumId, _dadId, _genes,_generation);

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

    
    /// @dev Throws unless `msg.sender` is the current owner of both NFT
    /// @param _dadId The Dad NFT Id
    /// @param _mumId The Mum NFT Id
    function breed(uint32 _dadId, uint32 _mumId) external returns (uint256){
        //Require that msg.sender owns both NFT
        require(_PandaOwner[_dadId] == msg.sender && _PandaOwner[_mumId] == msg.sender);

        return _breed(msg.sender, _dadId, _mumId);
      
    }

    function _breed(address _owner, uint32 _dadId, uint32 _mumId) internal returns (uint256){

        uint256 dadGenes = _pandas[_dadId].genes;
        uint256 mumGenes = _pandas[_mumId].genes;
        uint256 newGenes =  _mixDna_Advanced(dadGenes, mumGenes);

        //calculate generation
        uint16 DadGeneration =  _pandas[_dadId].generation;
        uint16 MumGeneration =  _pandas[_mumId].generation; 
        uint16 NewGeneration;

        if (DadGeneration==MumGeneration){
            NewGeneration = DadGeneration+1;
        }else if(DadGeneration<MumGeneration){
            NewGeneration = MumGeneration;
        }else{
            NewGeneration = DadGeneration;
        }

        return _CreatePanda(_mumId, _dadId, newGenes, NewGeneration,_owner);        
    }

    function _mixDna(uint256 _dadDna, uint256 _mumDna) internal pure returns (uint256){
        uint256 firsthalf = _dadDna /100000000;
        uint256 secondhalf = _mumDna % 100000000;

        return ((firsthalf *100000000 ) + secondhalf);
    }

    function _mixDna_Advanced(uint256 _dadDna, uint256 _mumDna) internal view returns (uint256){
        uint256 [8] memory geneArray;
        uint8 random = uint8 (now % 255);
        uint8 randomGenePosition = uint8 (now % 8);
        uint8 randomGene = uint8( now % 100);
        uint8 index =7;
        uint256 i = 1;
        uint256 newGene;

        if(randomGenePosition<=3 || (randomGenePosition>=5 && randomGenePosition <=6)){
            if(randomGene > 98){
                randomGene=98;
            }else if(randomGene<10){
                randomGene = 10;
            }
        }else if(randomGenePosition==4){
            if(randomGene > 44){
                randomGene=44;
            }else if(randomGene<11){
                randomGene = 11;
            }
        }
        else if(randomGenePosition==7){
            if(randomGene > 69){
                randomGene=69;
            }else if(randomGene<11){
                randomGene = 11;
            }
        }

        for (i=1 ; i<=128 ; i=i*2){
            if(index==randomGenePosition){
                geneArray[index]= randomGene;
            }else if(random & i != 0 ){
                geneArray[index]  = _mumDna %  100;
            }else{
                geneArray[index]  = _dadDna %  100;
            }

            _mumDna = _mumDna/100;
            _dadDna = _dadDna/100;

            index--;
        }

        for ( i=0 ; i<8;i++){
            newGene =newGene +geneArray[i];
            if(i != 7){
                newGene = newGene * 100;
            }            
        }

        return newGene;
    }    
}

