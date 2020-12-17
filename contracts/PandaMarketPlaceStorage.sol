pragma solidity ^0.5.12;

import "./Ownable.sol";
import "./PandaContract.sol";

contract PandaMarketPlaceStorage {
    PandaContract internal _pandaContract;

    struct Offer{
        address payable seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] internal Offers;

    uint256 public _activeOfferCount = 0;

    mapping(uint256 => Offer) internal tokenIdToOffer;
}