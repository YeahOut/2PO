// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Connector.sol';

contract Meoww is ERC721Connector {

  // 배열 -> 민팅작업으로 생긴 크립토버즈가 저장됨
  string[] public meowwz;

  mapping(string => bool) _meowwzExists;

  // ERC721 -> tokenId 민트
  // Meoww -> 사진 민트
  function mint(address to, string memory _meoww) public {

    require(!_meowwzExists[_meoww], 'Error - meoww already exists');
    // this is deprecated - uint _id = meowwz.push(_meoww);
    meowwz.push(_meoww);
    uint _id = meowwz.length - 1;

    // .push no longer returns the length but a ref to the added element
    _mint(to, _id);

    _meowwzExists[_meoww] = true;
  }

  // initialize this contract to inherit
  // name and symbol from ERC721Metadata so that
  // the name is Meoww and the symbol is MEW

  constructor() ERC721Connector("Meoww", "MEW") {
  }

}