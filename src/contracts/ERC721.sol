// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './interfaces/IERC721.sol';
import './ERC165.sol';


  /*

  a. nft to point to an address
  b. keep track of the token ids
  c. keep track of the owner of the token ids
  -> NFT가 누구의 소유인지 알 수 있음
  d. keep track of how many tokens an owner address has
  e. create an event that emits a transfer log 
  - contract address, where it is being minted to, the id

  */

contract ERC721 is ERC165, IERC721 {

  // event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

  // mapping in solidity creates a hash table of key pair values

  // Mapping from token id to the owner
  // 토큰 ID를 소유자에게 매핑하고자 하는 경우(소유자의 주소에 몇개의 토큰이 있는지 확인하는 경우)
  mapping(uint256 => address) private _tokenOwner;

  // Mapping from owner to number of owned token
  mapping(address => uint256) private _OwnedTokensCount;

    constructor() {
      _registerInterface(bytes4(keccak256('balanceOf(bytes4)')^
      keccak256('ownerOf(bytes4)')));
  }

  /// @notice Count all NFTs assigned to an owner
  /// @dev NFTs assigned to the zero address are considered invalid, and this
  ///  function throws for queries about the zero address.
  /// @param _owner An address for whom to query the balance
  /// @return The number of NFTs owned by `_owner`, possibly zero
  // 토큰의 소유자가 가지고 있는 토큰의 개수를 반환하는 함수
  function balanceOf(address _owner) public override view returns(uint256) {
    require(_owner != address(0), "ERC721: balance query for the zero address");
    return _OwnedTokensCount[_owner];
  }

  /// @notice Find the owner of an NFT
  /// @dev NFTs assigned to zero address are considered invalid, and queries
  ///  about them do throw.
  /// @param _tokenId The identifier for an NFT
  /// @return The address of the owner of the NFT
  // 토큰의 소유자를 반환하는 함수
  function ownerOf(uint256 _tokenId) external override view returns (address) {
    address owner = _tokenOwner[_tokenId];
    require(owner != address(0), "ERC721: owner query for nonexistent token");
    return owner;
  }

  function _exists(uint256 tokenId) internal view returns (bool) {
    // setting the address of nft owner to check the mapping
    // of the address from tokenOwner at the tokenId
    address owner = _tokenOwner[tokenId];
    // return truthiness the address is not the zero
    return owner != address(0); 
  }

  function _mint(address to, uint256 tokenId) internal virtual {
    require(to != address(0), "ERC721: minting to the zero address"); // 주소가 0이 아니라는걸 증명
    require(!_exists(tokenId), "ERC721: token already minted"); // 토큰이 존재하지 않는다는걸 증명
    _tokenOwner[tokenId] = to; // 해당 토큰아이디를 to에게 매핑
    _OwnedTokensCount[to] += 1; // to의 토큰개수 세기

    emit Transfer(address(0), to, tokenId);
  }
}

// enumerable -> 한 집합 내 모든 항목이 완전히 순서가 매겨진 것