pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./IRC721Receiver.sol";
import "./PandaStorage.sol";


contract PandaToken is IERC721, Ownable, PandaStorage, Initializable{

    function initialize(string memory _tName, string memory _tSymbol) public initializer{
        _TokenName= _tName;
        _TokenSymbol = _tSymbol;
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
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

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
        require( _to != owner);
        require(_PandaOwner[_tokenId] == msg.sender);

        _transfer(msg.sender,_to,_tokenId);
    }

    function _transfer(address _from,address _to, uint256 _tokenId) internal {
        _OwnerAnimalCount[_to]++;
        _PandaOwner[_tokenId]=_to;

        if(_from != address(0) ){
            _OwnerAnimalCount[_from]--;
            delete _PandaIndexToApproved[_tokenId];
        }

        assert(_PandaOwner[_tokenId]==_to);

        emit Transfer(_from, _to,  _tokenId);
    }

    /// @notice Change or reaffirm the approved address for an NFT
    /// @dev The zero address indicates there is no approved address.
    ///  Throws unless `msg.sender` is the current NFT owner, or an authorized
    ///  operator of the current owner.
    /// @param _to The new approved NFT controller
    /// @param _tokenId The NFT to approve
    function approve(address _to, uint256 _tokenId) external{
        require( msg.sender != address(0));
        require(_PandaOwner[_tokenId] == msg.sender || _operatorApproval[ _PandaOwner[_tokenId] ][msg.sender] == true);

        _approve(_to,_tokenId);

        emit Approval(msg.sender, _to,_tokenId);
    }

    function _approve(address _to, uint256 _tokenId) internal{
        _PandaIndexToApproved[_tokenId] = _to;
    }

    /// @notice Get the approved address for a single NFT
    /// @dev Throws if `_tokenId` is not a valid NFT.
    /// @param _tokenId The NFT to find the approved address for
    /// @return The approved address for this NFT, or the zero address if there is none
    function getApproved(uint256 _tokenId) external view returns (address){
        require(totalSupply()>0);
        require(_tokenId>=0 && _tokenId < totalSupply());
        
        return _getApproved(_tokenId);
    }

    function _getApproved(uint256 _tokenId) internal view returns (address){
        return _PandaIndexToApproved[_tokenId];
    }

    /// @notice Query if an address is an authorized operator for another address
    /// @param _owner The address that owns the NFTs
    /// @param _operator The address that acts on behalf of the owner
    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
    function isApprovedForAll(address _owner, address _operator) external view returns (bool){
        return _operatorApproval[_owner][_operator];
    }

    /// @notice Enable or disable approval for a third party ("operator") to manage
    ///  all of `msg.sender`'s assets
    /// @dev Emits the ApprovalForAll event. The contract MUST allow
    ///  multiple operators per owner.
    /// @param _operator Address to add to the set of authorized operators
    /// @param _approved True if the operator is approved, false to revoke approval
    function setApprovalForAll(address _operator, bool _approved) external{
        require( msg.sender != address(0));
        require(_operatorApproval[msg.sender][_operator] != _approved);

        _operatorApproval[msg.sender][_operator] = _approved;

        emit ApprovalForAll(msg.sender, _operator, _approved);
    }    

    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    ///  THEY MAY BE PERMANENTLY LOST
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    function transferFrom(address _from, address _to, uint256 _tokenId) external{
        require(_to != address(0));
        require(_PandaOwner[_tokenId] == msg.sender ||
                 _PandaIndexToApproved[_tokenId] == msg.sender ||
                 _operatorApproval[_PandaOwner[_tokenId]][msg.sender]
                 );
        require(_from == _PandaOwner[_tokenId]);        
        require(_tokenId>=0 && _tokenId < totalSupply());

        _transfer(_from, _to, _tokenId);
    }
    
    /// @notice Transfers the ownership of an NFT from one address to another address
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT. When transfer is complete, this function
    ///  checks if `_to` is a smart contract (code size > 0). If so, it calls
    ///  `onERC721Received` on `_to` and throws if the return value is not
    ///  `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    /// @param data Additional data with no specified format, sent in call to `_to`
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory data) public{
        require(_isApprovedOrOwner(msg.sender,_from,_to, _tokenId),"safeTransferFrom: Error, not approved");

        _safeTransfer(_from, _to, _tokenId, data);
    }

    /// @notice Transfers the ownership of an NFT from one address to another address
    /// @dev This works identically to the other function with an extra data parameter,
    ///  except this function just sets data to "".
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external{
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal{
        _transfer(_from, _to, _tokenId);
        require(_checkERC721Suppport(_from,_to,_tokenId, _data));
    }

    function _checkERC721Suppport(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns (bool){
        if(!_isContract(_to)){
            return true;
        }

        bytes4 returnData= IRC721Receiver(_to).onERC721Received(msg.sender,_from,_tokenId,_data);
    
       return  returnData == MAGIC_ERC721_RECEIVER;
    }

    function _isContract(address _to) view internal returns (bool){
        uint32 size;
        assembly{
            size := extcodesize(_to)
        }

        return (size>0);
    }

    function _isApprovedOrOwner(address _spender,  address _from, address _to,uint256 _tokenId) view internal returns(bool){
        require(_to != address(0),"_isApprovedOrOwner: Address 0 is not a valid address"); //_to address is not the zero address
        require(_from == _PandaOwner[_tokenId],"_isApprovedOrOwner: Not the owner of the Token"); //_from address is the token owner       
        require(_tokenId>0 && _tokenId <= totalSupply(),"_isApprovedOrOwner: TokenId is greater than totalSupply"); //token must exist

        //_spender is the owner or _spender is approved or the operator  
        return (_PandaOwner[_tokenId] == _spender ||
                 _PandaIndexToApproved[_tokenId] == _spender ||
                 _operatorApproval[_PandaOwner[_tokenId]][_spender]
                 );
    }

     /**
    @dev checks if interfaceId supports IERC721 or IERC165
    */
    function supportsInterface(bytes4 interfaceId) external pure returns (bool)
    {
        return (interfaceId == _INTERFACE_ID_ERC721 || interfaceId == _INTERFACE_ID_ERC165);
    }

}