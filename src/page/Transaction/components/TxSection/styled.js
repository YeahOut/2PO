import styled from "styled-components";
import searchIconAll from "../../../../assets/icon/search-icon-all.png";
import block from "../../../../assets/icon/block.png";
import blockError from "../../../../assets/icon/block-error.png";

export const Root = styled.div``;

// 그래프 및 거래 정보 (상단)
export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TxExplorer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 181px;
  flex-shrink: 0;
  background: transparent;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 거래 내역 탐색기
export const Title = styled.h2`
  font-size: 54px;
  color: #333333;
  margin-bottom: 10px;
  font-family: "Noto Sans KR", "Inter";
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 690px;
  position: relative;
`;

export const SearchBar = styled.input.attrs({
  placeholder: " 거래 주소 / 지갑 주소 / 거래 해시 / NFT 주소  ",
})`
  margin-top: 21px;
  width: 690px;
  height: 42px;
  flex-shrink: 0;
  fill: #fff;
  stroke-width: 3px;
  stroke: #facdb3;
  border-radius: 20px;
  border: 3px solid #facdb3;
  text-align: center;

  //TODO:  검색창 입력시 좌측에서 시작하도록
  ::placeholder {
    color: palevioletred;
    opacity: 0.5; /* Placeholder 투명도 설정 */
    text-align: left;
  }
`;

// SearchIcon 컴포넌트 추가
export const SearchIcon = styled.div`
  width: 59px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 20px;
  background-image: url(${searchIconAll});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 0px;
  top: 66%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const DonationInfoContainer = styled.div`
  margin-top: 47px;
  display: flex;
  width: 601px;
  height: 83px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f6f5f4;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`;

// 기부 정보
export const DonationInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

export const InfoLabel = styled.h3`
  font-size: 16px;
  color: #333333;
  font-weight= bold;
  margin-top: 30px;
`;

export const InfoValue = styled.p`
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  margin-top: 0px;
`;

// 그래프
export const GraphContainer = styled.div`
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f6f5f4;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`;

export const GraphTitle = styled.h3`
  text-align: left;
  font-size: 20px;
  color: #333333;
  padding-left: 10px;
  padding-top: 5px;
  align-self: flex-start;
`;

// 필터 버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 26px;
`;

export const TransactionButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${(props) =>
    props.active ? "#FF7425" : "rgba(220, 220, 220, 0.2)"};
  color: ${(props) => (props.active ? "#FFFFFF" : "#000000")};
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #ff7425;
    color: #ffffff;
    font-weight: bold;
  }
`;

// 실시간 거래내역 (하단)
export const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Latest Transactions 컨테이너
export const LatestTransactionsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`;

// Latest Transactions 타이틀
export const LatestTransactionsTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

//TODO:
//타이틀 색깔 입히기
export const TitleColor = styled.div``;

// Block Icon
export const BlockIcon = styled.div`
  background-image: url(${block});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

// Transactions 테이블
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f6f6f6;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  background: #f6f6f6;
`;

export const TableCell = styled.td`
  display: flex;
  align-items: center;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
export const AddressLabel = styled.span`
  color: #999999;
  margin-right: 5px;
`;

export const Address = styled(Link)`
  color: #3498db;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
export const TXButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 14px;
  background: #facdb3;
  color: #fff;
  border: none;
  border-radius: 30px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }
`;

export const NFTButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 14px;
  background: #6ee7b7;
  color: #fff;
  border: none;
  border-radius: 30px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2980b9;
  }
`;

// Latest Blocks 컨테이너 오류
export const LatestBlocksContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`;

// Latest Blocks 타이틀
export const LatestBlocksTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

// Blocks 테이블
export const BlocksTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const BlockRow = styled.tr`
  &:nth-child(even) {
    background: #f6f6f6;
  }
`;

export const BlockHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  background: #f6f6f6;
`;

export const BlockCell = styled.td`
  display: flex;
  align-items: center;

  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
// FROM 주소, TO주소 가로 세로 Container
export const BlockCellTx = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

// FROM TO 포함하는 블록
export const TxInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BlockLink = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
// Block-Error Icon
export const BlockErrorIcon = styled.div`
  background-image: url(${blockError});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

// 더보기
export const ViewMoreTxt = styled.p`
  font-size: 14px;
  color: gray;
  text-align: right;
  cursor: pointer;
`;
