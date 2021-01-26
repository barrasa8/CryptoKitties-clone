pragma solidity ^0.5.12;

import "./IPandaMarketPlace.sol";
import "./PandaMarketPlaceStorage.sol";

contract PandaMarketPlace is Initializable,IPandaMarketPlace, Ownable,PandaMarketPlaceStorage {
   

    function initialize(address _pandaContractAddress) public  initializer{
        setPandaContract(_pandaContractAddress);        
    }

    /***************************************************
    Events
     **************************************************/
    event MarketTransaction(string TxType, address owner, uint256 tokenId);

    /**
    * Set the current PandaContract address and initialize the instance of PandaContract.
    * Requirement: Only the contract owner can call.
     */
    function setPandaContract(address _pandaContractAddress)  public  {
        _pandaContract =  PandaContract(_pandaContractAddress) ;
    }

    /**
    * Get the details about a offer for _tokenId. Throws an error if there is no active offer for _tokenId.
     */
    function getOffer(uint256 _tokenId) external view returns ( address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        
        require (tokenIdToOffer[_tokenId].tokenId > 0 && tokenIdToOffer[_tokenId].active == true,"No active offer for the tokenID");
        
        seller  = tokenIdToOffer[_tokenId].seller;
        price   = tokenIdToOffer[_tokenId].price;
        index   = tokenIdToOffer[_tokenId].index;
        tokenId = tokenIdToOffer[_tokenId].tokenId;
        active  = tokenIdToOffer[_tokenId].active;

        return (seller,price,index,tokenId,active);
    }

    /**
    * Get all tokenId's that are currently for sale. Returns an empty error if none exist.
     */
    function getAllTokenOnSale() external view  returns(uint256[] memory listOfOffers){
        require(Offers.length > 0 && _activeOfferCount > 0,"No Offers");
        return _getAllActiveTokens();
    }

    function _getAllActiveTokens() internal view  returns(uint256[] memory listOfOffers){
        uint256 i = 0;
        uint256 index=0;
        
        uint256[] memory result = new uint256[](_activeOfferCount);
        
        for ( i=0 ; i< Offers.length && index < _activeOfferCount  ; i++){
            
            if(Offers[i].active == true){
                result[index]=Offers[i].tokenId;
                index++;
            }           
        }

        return result;
    }

    /**
    * Creates a new offer for _tokenId for the price _price.
    * Emits the MarketTransaction event with txType "Create offer"
    * Requirement: Only the owner of _tokenId can create an offer.
    * Requirement: There can only be one active offer for a token at a time.
    * Requirement: Marketplace contract (this) needs to be an approved operator when the offer is created.
     */
    function setOffer(uint256 _price, uint256 _tokenId) external{
        require(_pandaContract.ownerOf(_tokenId) == msg.sender,"Not the owner of the token");
        require(tokenIdToOffer[_tokenId].active==false,"Already an offer exist");
        require(_pandaContract.isApprovedForAll(msg.sender,address(this)),"Not an operator for the tokenId");

        if(tokenIdToOffer[_tokenId].tokenId==_tokenId){
            uint256 index = tokenIdToOffer[_tokenId].index;

            Offers[index].seller =  msg.sender;
            Offers[index].price= _price;
            Offers[index].active= true;

            tokenIdToOffer[_tokenId].seller = msg.sender;
            tokenIdToOffer[_tokenId].price = _price;
            tokenIdToOffer[_tokenId].active = true;

        }else{
             Offer memory newOffer = Offer({
                seller: msg.sender,
                price: _price,
                index: Offers.length,
                tokenId: _tokenId,
                active: true
            });

            tokenIdToOffer[_tokenId] = newOffer;
            Offers.push(newOffer);            
        }

        _activeOfferCount++;

        emit MarketTransaction("Create offer", msg.sender,  _tokenId);
    }

    /**
    * Removes an existing offer.
    * Emits the MarketTransaction event with txType "Remove offer"
    * Requirement: Only the seller of _tokenId can remove an offer.
     */
    function removeOffer(uint256 _tokenId) external{
        require(tokenIdToOffer[_tokenId].seller == msg.sender,"Only seller of the token can remove the offer");

        tokenIdToOffer[_tokenId].active = false;
        Offers[tokenIdToOffer[_tokenId].index].active =  false;
        _activeOfferCount--;

        emit MarketTransaction("Remove offer", msg.sender,  _tokenId);
    }

    /**
    * Executes the purchase of _tokenId.
    * Sends the funds to the seller and transfers the token using transferFrom in PandaContract.
    * Emits the MarketTransaction event with txType "Buy".
    * Requirement: The msg.value needs to equal the price of _tokenId
    * Requirement: There must be an active offer for _tokenId
     */
    function buyPanda(uint256 _tokenId) external payable{
        Offer memory offer = tokenIdToOffer[_tokenId];
        require(tokenIdToOffer[_tokenId].price == msg.value,"Transaction value does not match the price of the token");
        require(offer.active == true);

        // Important: remove offer before paying, to avoid reentry attack
        tokenIdToOffer[_tokenId].active=false;
        Offers[tokenIdToOffer[_tokenId].index].active = false;

        //transfer funds to the seller
        if(offer.price>0){
            offer.seller.transfer(offer.price);
        }

        //Transfer ownership of the token
        _pandaContract.safeTransferFrom(offer.seller,msg.sender, _tokenId);

        emit MarketTransaction("Buy", msg.sender,  _tokenId);
    }

    /**
    * Get the count of active offers
     */
    function getActiveOfferCount() external view returns (uint256 activeOfferCount){
        return _activeOfferCount;
    }

}