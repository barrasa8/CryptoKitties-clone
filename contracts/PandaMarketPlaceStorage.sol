pragma solidity ^0.5.12;

import "./PandaContract.sol";
import "./Ownable.sol";

contract PandaMarketPlaceStorage is Ownable, PandaContract{
    PandaContract internal _pandaContract;

    struct Offer{
        address payable seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] internal Offers;

    mapping(uint256 => Offer) internal tokenIdToOffer;
}