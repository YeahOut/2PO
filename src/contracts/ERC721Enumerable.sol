// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721.sol';
import './interfaces/IERC721Enumerable.sol';

contract ERC721Enumerable is ERC721, IERC721Enumerable {

  uint256[] private _allTokens;

  // mapping from tokenId to position in the allTokens array
  mapping(uint256 => uint256) private _allTokensIndex;

  // mapping of owner to list of all owner token ids
  mapping(address => uint256[]) private _ownedTokens;

  // mapping from token ID index of the owner token ids
  mapping(uint256 => uint256) private _ownedTokensIndex;

    constructor() {
      _registerInterface(bytes4(keccak256('totalSupply(bytes4)')^
      keccak256('tokenByIndex(bytes4)')));
  }
  
  function _mint(address to, uint256 tokenId) internal override(ERC721) {
    super._mint(to, tokenId);
    _addTokenAllTokenEnumeration(tokenId);
    _addTokenToOwnerEnumeration(to, tokenId);
  } // 민트된 토큰은 이뉴머레이션에 추가

  function _addTokenAllTokenEnumeration(uint256 tokenId) private {
    _allTokensIndex[tokenId] = _allTokens.length;
    _allTokens.push(tokenId);
  } // 토큰을 전체목록에 추가

  function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {
    _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
    _ownedTokens[to].push(tokenId);
  } // 토큰을 오너목록에 추가

  function tokenByIndex(uint256 index) public view override returns (uint256) {
    require(index < totalSupply(), "ERC721Enumerable: global index out of bounds");
    return _allTokens[index];
  } // 인덱스에 해당하는 토큰 반환(토큰 검색)

  function tokenOfOwnerByIndex(address owner, uint256 index) public view override returns (uint256) {
    require(index < balanceOf(owner), "ERC721Enumerable: owner index out of bounds");
    return _ownedTokens[owner][index];
  } // 오너의 토큰목록에서 인덱스에 해당하는 토큰 반환(토큰 검색)

  function totalSupply() public view override returns (uint256) {
    return _allTokens.length;
  } // 토탈서플라이 길이 반환
}