pragma solidity ^0.5.12;

import "./IPandaMarketPlace.sol";
import "./PandaMarketPlaceStorage.sol";

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract PandaMarketPlace is  Initializable, IPandaMarketPlace , PandaMarketPlaceStorage {

    function initialize(address pandaContractAddress) public onlyOwner initializer{
        Ownable.initialize();
        setPandaContract(pandaContractAddress);
    }

    /***************************************************
    Events
     **************************************************/
    event MarketTransaction(string TxType, address owner, uint256 tokenId);

    /**
    * Set the current PandaContract address and initialize the instance of PandaContract.
    * Requirement: Only the contract owner can call.
     */
    function setPandaContract(address _pandaContractAddress) onlyOwner public {
        _pandaContract =  PandaContract(_pandaContractAddress) ;
    }

    /**
    * Get the details about a offer for _tokenId. Throws an error if there is no active offer for _tokenId.
     */
    function getOffer(uint256 _tokenId) external view returns ( address seller, uint256 price, uint256 index, uint256 tokenId, bool active){
        
        require (tokenIdToOffer[_tokenId].tokenId > 0 && tokenIdToOffer[_tokenId].active == true);
        
        seller  = tokenIdToOffer[tokenId].seller;
        price   = tokenIdToOffer[tokenId].price;
        index   = tokenIdToOffer[tokenId].index;
        tokenId = tokenIdToOffer[tokenId].tokenId;
        active  = tokenIdToOffer[tokenId].active;

        return (seller,price,index,tokenId,active);
    }

    /**
    * Get all tokenId's that are currently for sale. Returns an empty arror if none exist.
     */
    function getAllTokenOnSale() external view  returns(uint256[] memory listOfOffers);

    /**
    * Creates a new offer for _tokenId for the price _price.
    * Emits the MarketTransaction event with txType "Create offer"
    * Requirement: Only the owner of _tokenId can create an offer.
    * Requirement: There can only be one active offer for a token at a time.
    * Requirement: Marketplace contract (this) needs to be an approved operator when the offer is created.
     */
    function setOffer(uint256 _price, uint256 _tokenId) external;

    /**
    * Removes an existing offer.
    * Emits the MarketTransaction event with txType "Remove offer"
    * Requirement: Only the seller of _tokenId can remove an offer.
     */
    function removeOffer(uint256 _tokenId) external;

    /**
    * Executes the purchase of _tokenId.
    * Sends the funds to the seller and transfers the token using transferFrom in PandaContract.
    * Emits the MarketTransaction event with txType "Buy".
    * Requirement: The msg.value needs to equal the price of _tokenId
    * Requirement: There must be an active offer for _tokenId
     */
    function buyPanda(uint256 _tokenId) external payable;
}